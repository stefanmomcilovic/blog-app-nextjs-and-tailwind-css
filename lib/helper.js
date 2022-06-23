
const baseURL = 'http://localhost:3000';

export default async function getPosts(id){
    const res = await fetch(baseURL+'/api/posts');
    const posts = await res.json();

    if(id){
       return posts.find(value => value.id == id);
    }

    return posts;
}