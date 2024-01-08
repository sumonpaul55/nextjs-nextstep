export default async function getAllPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
        next: {
            revalidate: 10,
        }
    })
    if (!result.ok) {
        throw new Error("There was an error fetching posts")
    }
    return result.json();
}

export async function getEachPost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!result.ok) {
        throw new Error("There was an error fetching posts")
    }
    return result.json();
}