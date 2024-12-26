import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import { basePath } from '@/services/utils';
import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect, useState } from 'react';

// Configuration de NProgress
NProgress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
    trickleSpeed: 200,
    minimum: 0.3,
    barColor: '#ff6f61' // Couleur blue pour la barre de progression
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const poppins = Poppins({ subsets: ['latin'], weight: '300' });

function App({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();
    const [showButton, setShowButton] = useState(false);

    const routesWithoutNavbarAndFooter = ['/login', '/register', '/dashboard'];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const shouldHideNavbarAndFooter = routesWithoutNavbarAndFooter.includes(router.pathname);

    return (
        <>
            <DefaultSeo
                title={`Christmas Challenge`}
                description={`Create a christmas website`}
                openGraph={{
                    type: 'website',
                    locale: 'fr_FR',
                    url: { basePath },
                    siteName: 'Christmas Challenge',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
                <link rel="icon" href="/assets/logo.png" />
                <style>{`
                    #nprogress .bar {
                        background: #ff6f61 !important;
                        height: 5px !important;
                    }
                `}</style>
            </Head>
            <div className={poppins.className}>
                {!shouldHideNavbarAndFooter && <Navbar />}
                <main className='bg-white text-black'>
                    <Component {...pageProps} />
                </main>
                {!shouldHideNavbarAndFooter && <Footer />}
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-8 h-12 w-12 right-8 bg-blue hover:bg-opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300"
                    >
                        <i className="fas fa-chevron-up"></i>
                    </button>
                )}
            </div>
        </>
    );
}

export default App;