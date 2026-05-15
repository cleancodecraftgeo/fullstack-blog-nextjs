import Link from "next/link"



export default async  function Home(){
  const res = await fetch('http://localhost:3000/api/posts')
  const posts = await res.json()
  return(
    <main className="max-w-2xl mx-auto mt-10 px-4 flex flex-col items-center md:gap-y-2">
      <h1 className="text-3xl font-bold text-gray-800">My First Blog</h1>
            <p className="text-gray-500 mt-2">Welcome!</p>
            
            <Link
          href="/posts/create"
          className="bg-blue-500 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          + Yeni Post
        </Link>

        <div className="flex flex-col gap-4">
          {posts.map((post: {id:number,title:string,content:string})=>(
            <Link href={`/posts/${post.id}`} key={post.id} className="border rounded-lg p-4 shadow-sm">
              <h2 className="texxt-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 mt-1">{post.content}</p>
            </Link>
          ))}

        </div>
    </main>
  )
}

