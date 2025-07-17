import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
    title: "Metabolic Networks Features",
    description: "Metabolic Networks Features",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`flex flex-col antialiased *:scroll-smooth *:duration-300`}
        >
            <Header />
            <main className="w-full min-h-screen overflow-auto bg-yellow-50">
                {children}
            </main>
            <Footer />
        </body>
        </html>
    );
}
