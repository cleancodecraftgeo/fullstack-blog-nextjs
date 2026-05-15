"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreatePost() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    })

    router.push("/")
  }

  return (
    <main className="max-w-2xl flex flex-col items-center  mx-auto mt-10 px-4">
      <h1 className="text-3xl  font-bold text-gray-800 mb-6">New Post</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400 h-40"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition"
        >
          Publish
        </button>
      </form>
    </main>
  )
}