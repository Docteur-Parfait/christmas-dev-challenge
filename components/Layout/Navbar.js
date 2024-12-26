import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
            setIsAtTop(currentScrollPos < 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isHomePage = router.pathname === '/';
    const shouldBeTransparent = false;

    return (
        <section className={`box-border w-full py-4 md:py-6 leading-10 text-center transition-all duration-300 z-50  ${visible ? 'translate-y-0' : '-translate-y-full'} bg-white shadow`}>
            <div className="w-full px-4 mx-auto leading-10 text-center md:px-4 lg:px-6 max-w-7xl">
                <div className="box-border flex flex-wrap items-center justify-between">
                    {/* Logo à gauche */}
                    <div className="relative z-10 flex items-center w-auto">
                        <a href="/" className="box-border inline-block font-sans text-2xl font-bold text-left no-underline bg-transparent cursor-pointer focus:no-underline">
                            <img src={shouldBeTransparent ? "/assets/logo_white.png" : "/assets/logo.png"} alt="logo" className="w-16 md:w-16" />
                        </a>
                    </div>



                    {/* Menu au centre */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto order-last md:order-none`}>
                        <div className="flex flex-col md:flex-row md:items-center mt-4 md:mt-0 space-y-4 md:space-y-0">
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">

                            </div>
                        </div>
                    </div>

                    {/* Bouton connexion à droite */}
                    <div className=" md:block">
                        <a href="https://github.com/Docteur-Parfait/christmas-dev-challenge" target="_blank"
                            className={`box-border inline-flex items-center justify-center h-10 px-4 text-base text-center no-underline align-middle bg-transparent border rounded cursor-pointer select-none hover:bg-gray-50 hover:text-blue focus:shadow-xs focus:no-underline ${shouldBeTransparent ? "text-white border-white" : "text-black border-gray-300"}`}>
                            Find on Github
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
