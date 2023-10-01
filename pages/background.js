import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import Image from 'next/image';

export default function Background() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>Background</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout className="relative bg-neutral-">

        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">

          <div className="my-16 relative">
            <Image className="absolute z-0 top-1/2" src="/ilustration/particle-left.svg" width={150} height={150} alt="illustration" />
            <Image className="absolute z-0 right-0 top-1/2" src="/ilustration/particle-right.svg" width={150} height={150} alt="illustration" />
            <div className="absolute z-0 rounded-full blur-[90px] opacity-20 animate-pop w-[300px] h-[300px] bg-orange-500 translate-y-[50px] left-0"></div>
            <div className="absolute z-0 rounded-full blur-[90px] opacity-20 animate-pop lg:w-[500px] lg:h-[500px] bg-emerald-500 top-0 lg:translate-x-80"></div>
            <div className="absolute z-0 right-0 rounded-full opacity-20 animate-blob blur-[90px] w-[350px] h-[350px] bg-red-600 -translate-x-[100px]"></div>
            <div className="w-full relative justify-center flex z-10">
              <Image src="/ilustration/maintenance.svg" width={400} height={400} alt="illustration" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-16">
            <div className="relative">
              <Image className="absolute z-0 top-1/2" src="/ilustration/particle-left.svg" width={150} height={150} alt="illustration" />
              <div className="absolute z-0 rounded-full blur-[90px] opacity-20 animate-pop w-[300px] h-[300px] bg-orange-600 translate-y-[150px]"></div>
              <div className="absolute z-0 right-0 rounded-full opacity-20 animate-blob blur-[120px] w-[350px] h-[350px] bg-emerald-600 -translate-x-[100px]"></div>
              <div className="w-full relative justify-center flex z-10">
                <Image src="/ilustration/how-we-work.svg" width={400} height={400} alt="illustration" />
              </div>
            </div>
            <div className="dark:text-white flex flex-col justify-center z-10 relative">
              <div className="absolute z-0 rounded-full blur-[120px] opacity-20 animate-pop w-[400px] h-[400px] bg-sky-500 right-0 top-0"></div>
              <p className="font-bold text-3xl mb-8">Everything is well planned, well designed and developed wholeheartedly Nostrud nostrud nostrud aliqua irure minim irure</p>
              <p className="text-lg">Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped. Incididunt minim proident laborum dolor consequat. Labore excepteur ullamco duis labore incididunt cupidatat. </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-16">
            <div className="text-white flex flex-col justify-center z-10 relative">
              <div className="absolute z-0 rounded-full blur-[120px] opacity-20 animate-pop w-[400px] h-[400px] bg-yellow-600 top-0"></div>
              <p className="font-bold text-3xl mb-8">Everything is well planned, well designed and developed wholeheartedly Nostrud nostrud nostrud aliqua irure minim irure</p>
              <p className="text-lg">Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped. Incididunt minim proident laborum dolor consequat. Labore excepteur ullamco duis labore incididunt cupidatat. </p>
            </div>
            <div className="relative">
              <Image className="absolute z-0 right-0 top-1/2" src="/ilustration/particle-right.svg" width={150} height={150} alt="illustration" />
              <div className="absolute z-0 rounded-full blur-[90px] opacity-20 animate-pop w-[300px] h-[300px] bg-pink-500 translate-x-[250px] translate-y-[150px]"></div>
              <div className="absolute z-0 rounded-full opacity-20 animate-blob blur-[120px] w-[350px] h-[350px] bg-purple-700"></div>
              <div className="w-full relative justify-center flex z-20">
                <Image src="/ilustration/development.svg" width={400} height={400} alt="illustration" />
              </div>
            </div>
          </div>

          <div className="!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10">
            {darkMode ?
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
                <SunIcon />
              </button>
              :
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Change Theme" className="w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full">
                <MoonIcon />
              </button>
            }
          </div>

          <BackToTop />

        </main>
      </Layout>
    </>
  )
}