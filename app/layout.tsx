import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics - Substitua G-XXXXXXXXXX pelo seu ID */}
        <GoogleAnalytics gaId="G-STFM7K17LC" />
        {children}
      </body>
    </html>
  );
}
