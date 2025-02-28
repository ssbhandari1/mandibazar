import { HeroUIProvider } from "@heroui/react";
import Header from "../common/header";
import Footer from "../common/footer";
import MobileNav from "../common/mobileNav";
import AuthGuard from "../hoc";
import Providers from "@/redux/providers/providers";

export function RootProvider({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <Providers>
        <AuthGuard>
          <div className="w-full h-[100vh] relative">
            <Header />
            {children}
            <Footer />
            <div className="block lg:hidden sticky bottom-0 z-50">
              <MobileNav />
            </div>
          </div>
        </AuthGuard>
      </Providers>
    </HeroUIProvider>
  );
}
