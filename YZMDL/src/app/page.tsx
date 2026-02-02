"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { CodeLoginForm } from "@/components/auth/code-login-form";

export default function LoginPage() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showAuthFailureHint, setShowAuthFailureHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAuthFailureHint(false);
    }, 3000); // The hint will be removed after 3 seconds, matching the animation duration.
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4 sm:p-6 lg:p-8">
      <Card className="w-full max-w-md rounded-2xl border-0 shadow-2xl sm:border">
        <CardHeader className="text-center">
          <div className="h-5">
            {showAuthFailureHint && (
              <p className="text-sm text-muted-foreground animate-fade-out-late">
                一键认证失败，请使用短信验证码验证
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-8">
            <CodeLoginForm agreedToTerms={agreedToTerms} />
          </div>
          <div className="mt-8 flex items-start space-x-3">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(Boolean(checked))}
              className="mt-0.5"
              aria-label="我已阅读并同意用户协议和隐私政策"
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms"
                className="text-sm text-muted-foreground"
              >
                我已阅读并同意
                <Link href="#" className="font-semibold text-primary underline-offset-4 hover:underline">
                  用户协议
                </Link>
                {' 与 '}
                <Link href="#" className="font-semibold text-primary underline-offset-4 hover:underline">
                  隐私政策
                </Link>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
