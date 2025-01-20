"use client";

import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import Link from "next/link";

export default function SignInPage() {
  const [step, setStep] = useState<"signIn" | "linkSent">("signIn");
  const { signIn } = useAuthActions();
  const { toast } = useToast();

  const handleMagicLinkSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("redirectTo", "/dashboard");
    signIn("resend", formData)
      .then(() => setStep("linkSent"))
      .catch((error) => {
        console.error(error);
        toast({
          title: "Could not send sign-in link",
          description: "Please try again later.",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-[400px] shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            {step === "signIn" ? "Welcome back" : "Check your email"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === "signIn"
              ? "Sign in to your account or create a new one"
              : "We've sent a sign-in link to your email address"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === "signIn" ? (
            <>
              <Button
                className="w-full"
                variant="outline"
                onClick={() =>
                  void signIn("google", { redirectTo: "/dashboard" })
                }
              >
                <GoogleIcon className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with email
                  </span>
                </div>
              </div>
              <form onSubmit={handleMagicLinkSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <Button className="w-full" type="submit">
                  Send sign-in link
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                {`If you don't see the email, check your spam folder or try again.`}
              </p>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => setStep("signIn")}
              >
                Back to sign in
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link
              href="/terms-and-conditions"
              className="underline hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-primary">
              Privacy Policy
            </Link>
            .
          </div>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}
