"use client";

import { useState, useEffect, type FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Smartphone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入有效的手机号码"),
  code: z.string().length(6, "验证码必须为6位数字"),
});

type CodeLoginFormProps = {
  agreedToTerms: boolean;
};

export const CodeLoginForm: FC<CodeLoginFormProps> = ({ agreedToTerms }) => {
  const [countdown, setCountdown] = useState(0);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      code: "",
    },
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleGetCode = () => {
    form.trigger("phone").then((isValid) => {
      if (isValid) {
        setCountdown(60);
        // In a real app, you would call an API to send the code here.
        console.log(`Sending code to ${form.getValues("phone")}`);
      }
    });
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would verify the code with your backend.
    console.log(values);
    toast({
      title: "登录成功",
      description: "欢迎回来！",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <FormControl>
                  <Input placeholder="请输入手机号码" {...field} className="pl-10" />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-start space-x-2">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <FormControl>
                      <Input placeholder="请输入验证码" {...field} className="pl-10" />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="button"
              onClick={handleGetCode}
              disabled={countdown > 0}
              variant="outline"
              className="w-[120px] shrink-0"
            >
              {countdown > 0 ? `${countdown}秒后重发` : "获取验证码"}
            </Button>
        </div>
        <Button type="submit" className="w-full text-lg font-semibold py-6" disabled={!agreedToTerms}>
          登录
        </Button>
      </form>
    </Form>
  );
};
