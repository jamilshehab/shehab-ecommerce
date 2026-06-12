import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import CategoryNavbar from "./components/CategorySidebar";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import CartDrawer from "./components/common/CartDrawer";
import FloatingSocial from "./components/common/FloatingSocial";
import WhatsAppSubscribePopup from "./components/common/PopUp";

export const metadata: Metadata = {
  title: "Giftora",
  description: "Explore Our Gift Marketplace",
  icons: {
    icon: "/logo/favicon.png",
  },
};
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const category = await client.fetch(CATEGORY_QUERY);
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans min-h-full flex flex-col">
        <Header />
        <CategoryNavbar categories={category} />
        <WhatsAppSubscribePopup />
        {children}
        <CartDrawer />
        <Toaster position="top-right" />
        <FloatingSocial />
        <Footer />
      </body>
    </html>
  );
}
