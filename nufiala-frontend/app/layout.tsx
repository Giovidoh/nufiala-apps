import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <head>
                <title>Nufiala - Plateforme d'apprentissage personnalisé</title>
                <meta
                    name="description"
                    content="Nufiala connecte les étudiants aux meilleurs enseignants pour un apprentissage personnalisé et efficace."
                />
            </head>
            <body>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
