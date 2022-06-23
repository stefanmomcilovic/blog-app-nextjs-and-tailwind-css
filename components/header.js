import { ImFacebook, ImYoutube, ImTwitter } from 'react-icons/im';
import Link from "next/link";

function Header(){
    return (
        <header className="bg-gray-50">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" className="input-text" placeholder="Search..."/>    
                </div>
                <div className="shrink w-80 sm:order-2">
                    <Link href="/" className="font-bold uppercase text-3xl">Design</Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href="https://facebook.com" target="_blank" rel="nofollow"><ImFacebook color="#888888" /></Link>
                        <Link href="https://youtube.com" target="_blank" rel="nofollow"><ImYoutube color="#888888" /></Link>
                        <Link href="https://twitter.com" target="_blank" rel="nofollow"><ImTwitter color="#888888" /></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;