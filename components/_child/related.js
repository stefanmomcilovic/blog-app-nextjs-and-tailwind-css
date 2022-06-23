import Link from "next/link";
import Image from "next/image";
import Author from "./author";
import fetcher from '../../lib/fetcher';
import Spinner from "./spinner";
import Error from "./error";

function Related(){
    const { data, isLoading, isError } = fetcher('api/posts');
    if(isLoading) return <Spinner />;
    if(isError) return <Error />;

    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>
            <div className="flex flex-col gap-10">
                <Post data={data[1]} />
                <Post data={data[2]} />
                <Post data={data[3]} />
                <Post data={data[4]} />
            </div>
        </section>
    );
}

function Post({ data }){
    const { id, title, subtitle, description, category, img, published, author } = data;

    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`} rel="follow">
                    <Image src={img || "/"} width="300" height="200" className="rounded" alt={title || "Title"}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No category specifed"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || "No published date specifed"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} rel="follow"><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{subtitle || "Subtitle"}</a></Link>
                </div>
               <Author />
            </div>
        </div>
    );
}

export default Related;