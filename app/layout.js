import { Roboto, Inter } from 'next/font/google'
import "./globals.css";
import Header from "@/components/header";
import Chatbot from '@/components/chatbot';
import useServerDarkMode from '@/hooks/use-server-dark-mode';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: {
    template: '%s | Murilo Barros',
    default: 'Murilo Barros'
  },
}

export default function RootLayout({ children }) {
  const theme = useServerDarkMode();
  return (
    <html lang="en" className={theme}>
      <body className={`${roboto.className}`}>
        <Header />
        <main className="mt-12">
          {children}
        </main>

        <Chatbot />
      </body>
    </html>
  );
}
