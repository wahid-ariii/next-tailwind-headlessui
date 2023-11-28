import { useContext } from 'react';
import Head from 'next/head';
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function Slider() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>Slider Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8'>
          <h1 className='title-font mb-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
            Default Slider
          </h1>
          <div className='flex space-x-8 overflow-x-auto pb-4'>
            <div className='flex h-60 w-2/3 shrink-0 items-center justify-center rounded-lg bg-purple-500 text-center'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 1</h1>
                <h2 className='text-lg text-white'>Text 1</h2>
              </div>
            </div>
            <div className='flex h-60 w-2/3 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-center'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 2</h1>
                <h2 className='text-lg text-white'>Text 2</h2>
              </div>
            </div>
            <div className='flex h-60 w-2/3 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-center'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 3</h1>
                <h2 className='text-lg text-white'>Text 3</h2>
              </div>
            </div>
            <div className='flex h-60 w-2/3 shrink-0 items-center justify-center rounded-lg bg-red-500 text-center'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 4</h1>
                <h2 className='text-lg text-white'>Text 4</h2>
              </div>
            </div>
          </div>

          <h1 className='title-font my-2 text-2xl font-medium text-gray-900 dark:text-white sm:text-3xl'>
            Default Slider Custom Bottom Scrollbar
          </h1>
          <div className='flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-200 dark:scrollbar-thumb-neutral-800'>
            <div className='flex h-60 w-60 shrink-0 items-center justify-center rounded-lg bg-purple-500 text-center sm:w-[350px] md:w-[400px] lg:w-[470px]'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 1</h1>
                <h2 className='text-lg text-white'>Text 1</h2>
              </div>
            </div>
            <div className='flex h-60 w-60 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-center sm:w-[350px] md:w-[400px] lg:w-[470px]'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 2</h1>
                <h2 className='text-lg text-white'>Text 2</h2>
              </div>
            </div>
            <div className='flex h-60 w-60 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-center sm:w-[350px] md:w-[400px] lg:w-[470px]'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 3</h1>
                <h2 className='text-lg text-white'>Text 3</h2>
              </div>
            </div>
            <div className='flex h-60 w-60 shrink-0 items-center justify-center rounded-lg bg-red-500 text-center sm:w-[350px] md:w-[400px] lg:w-[470px]'>
              <div>
                <h1 className='text-2xl font-medium text-white'>Text 4</h1>
                <h2 className='text-lg text-white'>Text 4</h2>
              </div>
            </div>
          </div>

          <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-neutral-800 dark:bg-opacity-40 md:right-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-neutral-800 p-1 text-white transition-all duration-300 ease-in hover:bg-neutral-700'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='h-8 w-8 rounded-full bg-gray-100 p-1 transition-all duration-300 ease-in hover:bg-gray-200'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <BackToTop />
        </main>
      </Layout>
    </>
  );
}
