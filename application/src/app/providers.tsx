import { NextUIProvider } from "@nextui-org/react";
import { BigModalProvider, SmallModalProvider } from "@ct";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <BigModalProvider>
        <SmallModalProvider>{children}</SmallModalProvider>
      </BigModalProvider>
    </NextUIProvider>
  );
};
