import { useRouter } from "next/router"
import { useSearchParams } from "next/navigation"

export default function Json() {
  return null
}

export const getServerSideProps = async ({
  res,
  query,
}: {
  res: any
  query: any
}) => {
  res.setHeader("Content-Type", "application/json")
  res.write(JSON.stringify(query))
  res.end()

  return {
    props: {},
  }
}

// http://localhost:3000/json?symbol=Bob%20Fake%20NFT%20-%20minted&description=This%20image%20shows%20the%20true%20nature%20of%20NFT.&image=https://fakeimg.pl/500x500/?text=Minted
