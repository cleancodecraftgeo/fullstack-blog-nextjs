import Link from "next/link"
import LikeButton from "@/app/components/LikeButton"
import DeleteButton from "@/app/components/DeleteButton"

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const post = await res.json()

  if (!post) {
    return <p>Post not found</p>
  }

  return (
    <main className="max-w-2xl mx-auto mt-10 px-4">
      <Link href="/" className="text-blue-500 hover:underline">
        ← Get Back
      </Link>
      <h1 className="text-3xl font-bold text-gray-800 mt-4">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.content}</p>
      <div className="flex gap-4 mt-4">
        <LikeButton />
        <DeleteButton id={Number(id)} />
      </div>
    </main>
  )
}