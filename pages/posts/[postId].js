import MainLayout from '../../layout/main-layout';
import Author from '../../components/_child/author';
import Image from 'next/image';
import Related from '../../components/_child/related';
import getPost from '../../lib/helper';

function Page({ id, title, subtitle, description, category, img, published, author }){
    return (
        <MainLayout>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                {author ? <Author /> : <></>}
                </div>
                <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">{title || "Title"}</h1>
                    <p className='text-gray-500 text-xl text-center'>{subtitle || "Subtitle"}</p>
                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600} alt={title || "Image"} />
                    </div>
                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        <p>
                           {description || "Description"}
                        </p>
                    </div>
                </div>

                <Related />
            </section>
        </MainLayout>
    );
}

export default Page;

export async function getStaticProps({params}){
    const posts = await getPost(params.postId);

    return {
        props: posts
    };
};

export async function getStaticPaths(){
    const posts = await getPost();

    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        };
    });

    return {
        paths,
        fallback: false
    };
};