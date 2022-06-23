import Header from "../components/header";
import Footer from '../components/footer';
import Head from 'next/head';
export default function MainLayout(props){
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}