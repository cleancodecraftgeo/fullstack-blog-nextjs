import {prisma} from "@/lib/db"

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy:{createdAt:"desc"}})
  return Response.json(posts)
}


// Post 
export async function POST(request :Request){

  const body = await request.json()

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content:body.content,

    }
  })
  return Response.json(post,{status: 201})

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