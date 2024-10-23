import localFont from "next/font/local";
import "./globals.css";
import Nav from './components/Nav'
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Jogaê",
  description: "Eventos esportivos amadores próximos a você",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >

        <Nav/>

        <div id='content-layout'>

          <div id='sidebar'>
            <Sidebar />
          </div>

          <main id='main-content'>
            {children}

            <Footer/>
          </main>

        </div>

      </body>
    </html>
  );
}
