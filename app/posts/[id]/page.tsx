import Link from "next/link"
import LikeButton from "@/app/component/LikeButton"
const posts = [
  { id: 1, title: "Next.js ilə ilk addım", content: "Bu mənim ilk postdur!" },
  { id: 2, title: "Tailwind CSS haqqında", content: "Tailwind çox rahatdır." },
  { id: 3, title: "React vs Next.js", content: "Next.js daha güclüdür." },
]

export default async function PostPage({params}:{params: Promise<{id: string}>}){
    const {id} = await params
    const post = posts.find((p)=>p.id===Number(id))

    if(!post){
        return <p>Post tapilmadi</p>
    }



    return(
    <main className="max-w-2xl mx-auto mt-10 px-4">
        <Link href="/" className="text-blue-500 hover:underline">
        ← Geri qayit
        </Link>
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.content}</p>
      <LikeButton/>
    </main>
    )
}