import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AutomateAI - Funcionários Digitais para Sua Empresa | Mossoró-RN",
  description: "Transforme processos manuais em eficiência digital. Criamos funcionários digitais que trabalham 24h pela sua empresa. Automação acessível e personalizada - Mossoró/RN.",
  keywords: ["automação", "funcionários digitais", "eficiência digital", "whatsapp", "leads", "mossoró", "rn", "consultoria", "n8n", "workflow", "agendamentos", "automação clínicas"],
  authors: [{ name: "AutomateAI Tech Solutions" }],
  creator: "AutomateAI Tech Solutions",
  publisher: "AutomateAI Tech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "AutomateAI - Funcionários Digitais 24h para Sua Empresa",
    description: "Parceiro estratégico em automação. Colocamos sua empresa no piloto automático para você focar no crescimento.",
    url: "https://seu-site.com.br",
    siteName: "AutomateAI",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/novo dash.png",
        width: 1920,
        height: 1080,
        alt: "Dashboard AutomateAI - Agendamentos",
      },
      {
        url: "/wpp dashboard.png",
        width: 1920,
        height: 1080,
        alt: "Dashboard AutomateAI - WhatsApp e Leads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateAI - Funcionários Digitais 24h",
    description: "Automação inteligente para sua empresa. Dashboards em tempo real, WhatsApp, agendamentos e mais.",
    images: ["/novo dash.png"],
  },
  alternates: {
    canonical: "https://seu-site.com.br",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <GoogleAnalytics gaId="G-BEJS454P74" />
        {children}
      </body>
    </html>
  );
}
