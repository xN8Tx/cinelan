import { NextUIProvider } from "@nextui-org/react";
import { BigModalProvider, SidebarProvider, SmallModalProvider } from "@ct";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <SidebarProvider>
        <BigModalProvider>
          <SmallModalProvider>{children}</SmallModalProvider>
        </BigModalProvider>
      </SidebarProvider>
    </NextUIProvider>
  );
};
