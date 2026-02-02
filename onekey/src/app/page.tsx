
'use client';

import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, ShieldCheck, Loader2 } from 'lucide-react';

const IconWrapper = ({ children }: { children: ReactNode }) => (
  <div className="relative w-12 h-12 mx-auto mb-6 text-primary">{children}</div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAuth = () => {
    if (!isAgreed) return;
    setIsLoading(true);
    setIsAuthenticated(false);

    setTimeout(() => {
      setIsLoading(false);
      setIsAuthenticated(true);
    }, 2500);
  };

  const renderIcon = () => {
    if (isLoading) {
      return (
        <IconWrapper>
          <div className="absolute inset-0 border-4 border-dashed rounded-full border-primary animate-spin"></div>
          <div className="flex items-center justify-center w-full h-full">
            <Shield className="w-8 h-8" />
          </div>
        </IconWrapper>
      );
    }
    if (isAuthenticated) {
      return (
        <IconWrapper>
          <div className="flex items-center justify-center w-full h-full">
            <ShieldCheck className="w-10 h-10 text-chart-2" />
          </div>
        </IconWrapper>
      );
    }
    return (
        <IconWrapper>
            <div className="flex items-center justify-center w-full h-full">
                <Shield className="w-8 h-8" />
            </div>
        </IconWrapper>
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-background font-body">
      <div className="w-full max-w-sm mx-auto text-center">
        {renderIcon()}

        <div className="h-40 flex justify-center items-center">
          {isAuthenticated ? (
            <p className="text-lg text-muted-foreground">
              您已成功完成认证
            </p>
          ) : isLoading ? (
            <p className="text-lg text-muted-foreground animate-pulse">
              认证中...
            </p>
          ) : null}
        </div>
        
        <div className="space-y-8">
          <Button 
            onClick={handleAuth} 
            disabled={!isAgreed || isLoading || isAuthenticated}
            className="px-16 py-6 text-lg"
            size="lg"
          >
            {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
            {isAuthenticated ? '认证成功' : '一键认证'}
          </Button>
          
          <div className="flex items-center justify-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={isAgreed}
              onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
              disabled={isLoading || isAuthenticated}
              aria-labelledby="terms-label"
            />
            <label
              id="terms-label"
              htmlFor="terms"
              className="text-sm leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              我已阅读并同意
              <a href="#" className="mx-1 font-medium underline transition-colors text-primary hover:text-primary/80">
                服务条款
              </a>
              和
              <a href="#" className="ml-1 font-medium underline transition-colors text-primary hover:text-primary/80">
                隐私政策
              </a>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}
