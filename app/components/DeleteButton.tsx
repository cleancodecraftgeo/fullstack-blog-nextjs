"use client"

import { useRouter } from "next/navigation"

export default function DeleteButton({ id }: { id: number }) {
  const router = useRouter()

  async function handleDelete() {
    if (!confirm("Postu silmək istəyirsiniz?")) return

    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    })

    router.push("/")
  }

  return (
    <button
      onClick={handleDelete}
      className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-500 hover:bg-red-200 transition"
    >
      🗑️ Sil
    </button>
  )
}