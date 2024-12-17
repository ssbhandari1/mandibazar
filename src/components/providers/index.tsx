import { NextUIProvider } from "@nextui-org/react";
import Header from "../common/header";
import Footer from "../common/footer";
import MobileNav from "../common/mobileNav";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="w-full h-[100vh] relative">
        <Header />
        {children}
        <Footer />
        <div className="block lg:hidden sticky bottom-0 z-50">
          <MobileNav />
        </div>
      </div>
    </NextUIProvider>
  );
}
