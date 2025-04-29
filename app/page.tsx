import Head from 'next/head';

export default async function Home() {
  return (
    <>
      <Head>
        <title>Modern Home</title>
        <meta name="description" content="A modern styled home page" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Modern Home</h1>
          <p className="text-gray-600">This is a simple, modern styled homepage using Tailwind CSS.</p>
          <a href="/dashboard">
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
          </a>
        </div>
      </div>
    </>
  );
}

