import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";

function Section1(){
    const { data, isLoading, isError } = fetcher('api/trending');
    if(isLoading) return <Spinner />;
    if(isError) return <Error />;

    SwiperCore.use([Autoplay]);

    const bg = {
        background: "url('/images/banner.png') no-repeat right"
    };

    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000
                    }}
                    loop={true}
                >
                   {
                    data.map((value, index) => {
                        return <SwiperSlide key={index}><Slide data={value} key={index} /></SwiperSlide>
                    })
                   }
                </Swiper>
                
            </div>
        </section>
    );
}

function Slide({data}){
    const { id, title, subtitle, description, category, img, published, author } = data;

    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={`/posts/${id}`} rel="follow">
                    <Image src={img || "/"} width="600" height="600" alt={author || "Image"}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No category specifed"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600"> - {published || "No publish date specifed"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} rel="follow"><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "Description"}
                </p>
                {author ? <Author /> : <></>}
            </div>
        </div>
    );
}

export default Section1;