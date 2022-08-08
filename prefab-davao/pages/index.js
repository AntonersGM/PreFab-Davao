import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  

  return (
    



    <div>
      <div className='grid grid-cols-11 p-4 m-4 border-2'>
        <h1 className='col-span-3'>Prefab</h1>
        <div className='col-span-2'>
          <button className='px-16 hover:underline'>
            Shop
          </button>
        </div>
        <div className='col-span-2'>
          <button className='px-16 hover:underline'>
            About
          </button>
        </div>
        <div className='col-span-2'>
          <button className='px-16 hover:underline'>
            Stores
          </button>
        </div>
        <div className='col-span-2'>
          <button className='px-16 hover:underline'>
            FAQ
          </button>
        </div>
      </div>

    </div>
  )
}