"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  phone: z.string().regex(/^1[3-9]\d{9}$/, {
    message: "请输入有效的11位手机号码",
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "请阅读并同意用户协议和隐私政策" }),
  }),
});

export function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "认证成功",
      description: `手机号码 ${values.phone} 已成功验证。`,
    });
    setIsLoading(false);
  }

  return (
    <div className="px-8 py-16 sm:px-10 sm:py-24">
      <div className="mb-12 text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">号码验证</h1>
        <p className="text-muted-foreground">使用手机号码一键登录或注册</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="请输入手机号码"
                    {...field}
                    className="h-12 text-base"
                    type="tel"
                    autoComplete="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full h-12 text-base font-semibold"
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "认证中..." : "一键认证"}
          </Button>

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 justify-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="terms"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-normal text-muted-foreground"
                  >
                    已阅读并同意
                    <Link
                      href="#"
                      className="underline transition-colors text-primary/90 hover:text-primary"
                    >
                      用户协议
                    </Link>
                    和
                    <Link
                      href="#"
                      className="underline transition-colors text-primary/90 hover:text-primary"
                    >
                      隐私政策
                    </Link>
                  </label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
}
