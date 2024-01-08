export default async function getAllPostsComments(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    if (!result.ok) {
        throw new Error("There was an error fetching posts")
    }
    return result.json();
}