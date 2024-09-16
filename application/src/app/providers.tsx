import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { BigModalProvider, SidebarProvider, SmallModalProvider } from "@ct";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <SidebarProvider>
        <BigModalProvider>
          <SmallModalProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
              {children}
            </NextThemesProvider>
          </SmallModalProvider>
        </BigModalProvider>
      </SidebarProvider>
    </NextUIProvider>
  );
};
