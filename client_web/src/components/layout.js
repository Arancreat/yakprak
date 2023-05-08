import Head from "next/head";
import Header from "@/components/basic-layouts/header";
import Footer from "@/components/basic-layouts/footer";
import { Inter } from "next/font/google";
import styles from "./layout.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
    return (
        <div className={inter.className}>
            <Head>
                <title>YakPrak</title>
                <meta name="description" content="In development" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Header />
            <main>
                <div className="content">{children}</div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
