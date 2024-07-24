import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { ContactForm } from "./components/contact-form";
import { Footer } from "./components/footer";
import { BackToTop } from "./components/back-to-top";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "AW Dev | Portfólio",
  description: "Arthur Willame Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header />
        {children}
        <BackToTop />
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
