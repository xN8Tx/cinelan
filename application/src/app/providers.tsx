import { NextUIProvider } from "@nextui-org/react";
import { BigModalProvider, SidebarProvider, SmallModalProvider } from "@ct";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <BigModalProvider>
        <SmallModalProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </SmallModalProvider>
      </BigModalProvider>
    </NextUIProvider>
  );
};
