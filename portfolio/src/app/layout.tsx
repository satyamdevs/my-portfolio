import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Satyam Portfolio',
  description: 'Portfolio of Satyam',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
