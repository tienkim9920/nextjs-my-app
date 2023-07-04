import Navbar from '@/component/Navbar'
import { Inter } from 'next/font/google'
import '../styles/global.css';
import Footer from '@/component/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nine Dev | Home Page',
  description: 'Day la trang web day hoc truc tuyen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
