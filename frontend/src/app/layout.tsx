import type { Metadata } from "next";
import { Albert_Sans, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900']
});

const robotoSerif = Roboto_Serif({ 
  subsets: ['latin'],
  variable: '--font-roboto-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Neosfera - Aceleradora de Projetos de IA",
  description: "Consultoria especializada em aceleração de projetos de Inteligência Artificial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${albertSans.variable} ${robotoSerif.variable}`}>
      <body className="font-sans bg-background text-primary antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
