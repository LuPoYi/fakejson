import type { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

export default async function handler(req: NextRequest) {
  const url = new URL(req.url)

  const name = url.searchParams.get("name")
  const description = url.searchParams.get("description")
  const image = url.searchParams.get("image")

  return new Response(
    JSON.stringify({
      name,
      description,
      image,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  )
}

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from "next"

// type Data = {
//   name: string
// }

// export default function handler(
//   { query }: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   console.log("queryquery", query)
//   res.status(200).json(JSON.parse(query))
// }
// // export default async function handler({ query }: NextApiRequest) {
// //   return new Response(JSON.stringify(query), {
// //     status: 200,
// //     headers: {
// //       "content-type": "application/json",
// //     },
// //   })
// // }
