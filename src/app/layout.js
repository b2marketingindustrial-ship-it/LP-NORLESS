import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UtmWrapper from "./components/UtmWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Norless · Válvulas pneumáticas Parker",
  description:
    "Soluções em válvulas pneumáticas Parker na Norless. Desempenho e confiabilidade para automação industrial.",
};

export default function RootLayout({ children }) {
  return (
    <html
    
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UtmWrapper>{children}</UtmWrapper>
      </body>
    </html>
  );
}
