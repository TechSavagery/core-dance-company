import type { ReactNode } from "react";
import HeaderFour from "@/src/components/theme/header/HeaderFour";
import Footer from "@/src/components/theme/Footer";

type Props = {
  children: ReactNode;
};

export default function SiteChrome({ children }: Props) {
  return (
    <div>
      <HeaderFour />
      {children}
      <Footer />
    </div>
  );
}
