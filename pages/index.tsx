import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generater fake json by URL parameter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <pre>
          /json?symbol=Bob%20Fake%20NFT%20-%20minted&description=This%20image%20shows%20the%20true%20nature%20of%20NFT.&image=https://fakeimg.pl/500x500/?text=Minted
        </pre>
      </main>
    </>
  )
}
