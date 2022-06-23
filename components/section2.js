import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from '../lib/fetcher';
import Spinner from "./_child/spinner";
import Error from "./_child/error";

function Section2(){
    const { data, isLoading, isError } = fetcher('api/posts');
    if(isLoading) return <Spinner />;
    if(isError) return <Error />;

    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                { 
                    data.map((value, index) => {
                        return <Post data={value} key={index}/>
                    })
                }
            </div>
        </section>
    );
}

function Post({ data }){
    const { id, title, subtitle, category, img, published, author } = data;
    return (
        <div className="item">
            <div className="images">
                <Link href={`/posts/${id}`} rel="follow">
                    <Image src={img || "/"} width="500" height="350" className="rounded" alt={author} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No category specified"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || "No published date"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`} rel="follow"><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No title specified"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                   {subtitle || "No subtitle specified"}
                </p>
               {author ? <Author /> : <></>}
            </div>
        </div>
    );
}

export default Section2;