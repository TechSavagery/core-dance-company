import type { ReactNode } from "react";
import HeaderFour from "@/src/components/theme/header/HeaderFour";
import Footer from "@/src/components/theme/Footer";
import { getSettings } from "@/src/sanity/lib/content";

type Props = {
  children: ReactNode;
};

export default async function SiteChrome({ children }: Props) {
  const settings = await getSettings();

  return (
    <div>
      <HeaderFour settings={settings} />
      {children}
      <Footer settings={settings} />
    </div>
  );
}
