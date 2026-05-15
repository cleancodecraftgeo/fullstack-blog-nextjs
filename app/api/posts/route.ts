const posts = [
  { id: 1, title: "Next.js ilə ilk addım", content: "Bu mənim ilk postdur!" },
  { id: 2, title: "Tailwind CSS haqqında", content: "Tailwind çox rahatdır." },
  { id: 3, title: "React vs Next.js", content: "Next.js daha güclüdür." },
  { id: 4, title: "React vs Vue.js", content: "Nuxt.js daha güclüdür." },
]

export async function GET() {
  return Response.json(posts)
}