"use client";
import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderProps) {
  // 2. Wrap NextUIProvider at the root of your app
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}
