import { prisma } from "@/lib/db"

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const post = await prisma.post.findUnique({
    where: { id: Number(id) }
  })

  return Response.json(post)
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  await prisma.post.delete({
    where: { id: Number(id) }
  })

  return Response.json({ message: "Post silindi" })
}