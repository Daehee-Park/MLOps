import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="hero-container">
        <div className='flex flex-col justify-start items-start space-y-12'>
        <h1 className='text-gray-800'>Welcome to Auto-ML</h1>
        <h3 className='text-gray-600'>Automate your Machine Learning Workflow</h3>
        <Link href='/home'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white
        font-bold py-4 px-6 rounded text-md' duration-400 ease-in-out>
          Get Started
        </button>
        </Link>
        </div>
        <Image
          src="/hero.jpg"
          alt="MLOps"
          width={600}
          height={300}
        />
      </div>
    </main>
  )
}
