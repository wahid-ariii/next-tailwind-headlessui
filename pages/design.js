import { useContext } from 'react';
import Head from 'next/head';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';

export default function Design() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>Design Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout className='relative'>
        <div className='pointer-events-none absolute inset-x-0 top-0 flex justify-center'>
          <div className='grid h-screen w-full max-w-7xl grid-cols-3 gap-3.5 px-4'>
            <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
            <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
            <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
          </div>
        </div>

        <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-8'>
          <div className='relative mx-auto mb-24 mt-16 w-full max-w-xl grid-cols-3 gap-3.5 lg:grid lg:max-w-7xl lg:px-4'>
            <div className='relative col-span-1 col-start-2'>
              <div className='hidden md:block'>
                <div className='absolute -inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent' />
                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
                  }}
                  className='absolute -inset-x-16 -top-[15px] h-px'
                />

                <div className='absolute -inset-x-16 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
                  }}
                  className='absolute -inset-x-16 -bottom-[15px] h-px'
                />

                <div className='absolute -inset-y-16 left-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent' />
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
                  }}
                  className='absolute -inset-y-16 -left-[15px] w-px'
                />

                <div className='absolute -inset-y-16 right-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent' />
                <div
                  style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, rgb(255 255 255 / 0.25) 24px, rgb(255 255 255 / 0.25) calc(100% - 24px), transparent)`,
                  }}
                  className='absolute -inset-y-16 -right-[15px] w-px'
                />
              </div>
              <div className='relative max-w-xl rounded bg-pink-800 p-10 dark:bg-pink-800/20'>
                <div className='space-y-4' data-test='404-page'>
                  <p className='flex items-center space-x-2'>
                    <span className='text-lg font-semibold text-pink-500'>404 · Page not found</span>
                  </p>
                  <p className='font-medium'>
                    <span className='text-neutral-300 dark:text-white/40'>
                      The page youre trying to load doesnt exist. If you have a question feel free to{' '}
                      <a className='text-white underline decoration-white/40 hover:decoration-white' href='/support'>
                        contact us
                      </a>
                      .
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              '--dark-purple': '4 6 22',
              '--light-purple': '120 119 198',
              '--light': '255 255 255',
              '--bg-color': 'linear-gradient(rgb(var(--dark-purple)), rgb(var(--dark-purple)))',
              '--bg-color-light': 'linear-gradient(rgb(var(--light)), rgb(var(--light)))',
              '--border-color': `linear-gradient(145deg,
                  rgb(var(--light-purple)) 0%,
                  rgb(var(--light-purple) / 0.3) 33.33%,
                  rgb(var(--light-purple) / 0.14) 66.67%,
                  rgb(var(--light-purple) / 0.1) 100%)
                `,
            }}
            className='z-10 flex aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
            [background:padding-box_var(--bg-color-light),border-box_var(--border-color)] 
            dark:[background:padding-box_var(--bg-color),border-box_var(--border-color)]'
          >
            <p className='text-xl font-medium dark:text-white'>Hello, gradient</p>
          </div>

          <div className='relative z-[5] max-w-md py-16'>
            <div className='glow-area -mt-16 transition-all'></div>
            <div className='mx-auto mt-16 h-[300px] w-64 rounded bg-white dark:bg-neutral-800'></div>
          </div>

          <div className='mx-auto px-8 py-10'>
            <div className='py-10'>
              <h1 className='mb-2 text-3xl font-semibold dark:text-white'>Changelog</h1>
              <p className='text-lg dark:text-neutral-200'>New updates and product improvements</p>
            </div>
            <div>
              <div className='grid border-l pb-10 dark:border-l-neutral-700 lg:grid-cols-12 lg:gap-8'>
                <div className='col-span-12 mb-8 self-start lg:sticky lg:top-0 lg:col-span-4 lg:-mt-16 lg:pt-16 '>
                  <div className='flex w-full items-baseline gap-6'>
                    <div className='-ml-2.5 flex h-5 w-5 items-center justify-center rounded border bg-neutral-100 drop-shadow-sm dark:border-neutral-700 dark:bg-neutral-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='dark:text-neutral-300'
                      >
                        <circle cx='12' cy='12' r='4'></circle>
                        <line x1='1.05' y1='12' x2='7' y2='12'></line>
                        <line x1='17.01' y1='12' x2='22.96' y2='12'></line>
                      </svg>
                    </div>
                    <div className='flex w-full flex-col gap-1'>
                      <h3 className='text-2xl font-medium dark:text-white'>January 2023</h3>
                      <p className='dark:text-neutral-200'>Feb 8, 2023</p>
                    </div>
                  </div>
                </div>
                <div className='col-span-8 ml-8 lg:ml-0'>
                  <article className='prose max-w-none prose-h2:dark:text-neutral-200 prose-p:dark:text-neutral-200 prose-a:dark:text-neutral-200'>
                    <p>
                      The first month of the year was very productive here at Supabase. Here is a highlight of what we
                      shipped during January:
                    </p>
                    <h2>Storing OpenAI embeddings in Postgres with pgvector</h2>
                    <p>
                      pgvector is a popular PostgreSQL extension for storing embeddings and performing vector similarity
                      search. It was one of the most requested extensions by the AI/ML community and is now available
                      thanks to&nbsp;<a href='https://github.com/gregnr'>gregnr</a>.
                    </p>
                    <p>
                      <a href='#'>Read the announcement</a>
                    </p>
                    <h2>Meet Supabase Clippy: ChatGPT for Docs</h2>
                    <p>
                      Greg wasted no time and took&nbsp;pgvector&nbsp;for a spin, he combined it with OpenAI to build
                      Supabase Clippy, a next-generation doc search. The first implementation is a 1-week MVP and fully
                      open source, so you can build on top of it.
                    </p>
                    <ul>
                      <li>
                        <a href='#'>Read the blog post</a>
                      </li>
                      <li>
                        <a href='#'>Watch the video tutorial</a>
                      </li>
                    </ul>
                    <h2>Client library reference: Python and C#</h2>
                    <p>
                      We have released extensive reference docs for C# and Python, detailing every object and method.
                      What are you going to build?
                    </p>
                    <ul>
                      <li>
                        <a href='#/'>C# Client Library</a>
                      </li>
                      <li>
                        <a href='#'>Python Client Library</a>
                      </li>
                    </ul>
                  </article>
                </div>
              </div>
              <div className='grid border-l pb-10 dark:border-l-neutral-700 lg:grid-cols-12 lg:gap-8'>
                <div className='col-span-12 mb-8 self-start lg:sticky lg:top-0 lg:col-span-4 lg:-mt-16 lg:pt-16 '>
                  <div className='flex w-full items-baseline gap-6'>
                    <div className='-ml-2.5 flex h-5 w-5 items-center justify-center rounded border bg-neutral-100 drop-shadow-sm dark:border-neutral-700 dark:bg-neutral-800'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='14'
                        height='14'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='dark:text-neutral-300'
                      >
                        <circle cx='12' cy='12' r='4'></circle>
                        <line x1='1.05' y1='12' x2='7' y2='12'></line>
                        <line x1='17.01' y1='12' x2='22.96' y2='12'></line>
                      </svg>
                    </div>
                    <div className='flex w-full flex-col gap-1'>
                      <h3 className='text-2xl font-medium dark:text-white'>November 2022</h3>
                      <p className='dark:text-neutral-200'>Dec 8, 2022</p>
                    </div>
                  </div>
                </div>
                <div className='col-span-8 ml-8 lg:ml-0'>
                  <article className='prose max-w-none prose-h2:dark:text-neutral-200 prose-p:dark:text-neutral-200 prose-a:dark:text-neutral-200'>
                    <p>
                      Launch Week 6 is just around the corner! Were saving most of Novembers updated as a surprise for
                      Launch Week, but we still had time to ship some goodies this month.
                    </p>
                    <h2>Launch Week 6 tickets</h2>
                    <p>
                      Next week, we go all out for LW6. Its 5 days of shipping, including major features requested by
                      the community. You dont want to miss a thing, so make sure to claim your free ticket (and you
                      might win some very special SupaSwag).
                    </p>
                    <p>
                      <a href='#'>Get your ticket</a>
                    </p>
                    <h2>Remix Auth Helpers</h2>
                    <p>
                      Its here! The much-awaited Remix Auth Helpers make server-side auth even easier and with a better
                      experience. Up to date with supabase-js V2 and can be used with Typescript.
                    </p>
                    <p>
                      <a href='#'>Read the docs</a>
                    </p>
                    <h2>Automatic WebP detection for Image Transformation</h2>
                    <p>
                      WebP is a modern image format that provides superior lossless and lossy compression for images on
                      the web. We are enabling format conversion by default for anyone who has Image Transformations.
                      You can opt out by including format: origin in the transformation parameters.
                    </p>
                    <p>
                      <a href='#'>Read the docs</a>
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className='steps-container'>
            <h3 className='mt-1 pt-2 text-lg font-medium'>Install</h3>
            <p>
              Elit anim deserunt nulla Lorem excepteur ipsum non in ut. Occaecat aliqua in dolor excepteur cupidatat
              veniam minim esse. Adipisicing est elit cillum velit esse ex dolor sint magna mollit adipisicing Lorem.
              Esse Lorem magna nisi commodo incididunt elit exercitation id minim do quis laborum aliqua. Non magna
              dolor et tempor Lorem eiusmod esse qui consequat Lorem velit id. Ex aliqua dolor elit est laborum eiusmod
              consectetur non Lorem ex sit laborum sunt aliqua.
            </p>
            <h3 className='mt-1 pt-2 text-lg font-medium'>Install</h3>
            <p>
              Elit anim deserunt nulla Lorem excepteur ipsum non in ut. Occaecat aliqua in dolor excepteur cupidatat
              veniam minim esse. Adipisicing est elit cillum velit esse ex dolor sint magna mollit adipisicing Lorem.
              Esse Lorem magna nisi commodo incididunt elit exercitation id minim do quis laborum aliqua. Non magna
              dolor et tempor Lorem eiusmod esse qui consequat Lorem velit id. Ex aliqua dolor elit est laborum eiusmod
              consectetur non Lorem ex sit laborum sunt aliqua.
            </p>
            <h3 className='mt-1 pt-2 text-lg font-medium'>Install</h3>
            <p>
              Elit anim deserunt nulla Lorem excepteur ipsum non in ut. Occaecat aliqua in dolor excepteur cupidatat
              veniam minim esse. Adipisicing est elit cillum velit esse ex dolor sint magna mollit adipisicing Lorem.
              Esse Lorem magna nisi commodo incididunt elit exercitation id minim do quis laborum aliqua. Non magna
              dolor et tempor Lorem eiusmod esse qui consequat Lorem velit id. Ex aliqua dolor elit est laborum eiusmod
              consectetur non Lorem ex sit laborum sunt aliqua.
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <p className='text-sm text-neutral-500'>17:00 29 Apr</p>
            <div className='relative top-3.5 h-10 w-1 border-l border-dashed border-neutral-300 dark:border-l-neutral-600'>
              <span className='absolute -left-1.5 h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75'></span>
              <div className='absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-teal-500'></div>
            </div>
            <p className='font-semibold text-neutral-900 dark:text-white'>Manifes</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-sm text-neutral-500'>17:00 29 Apr</p>
            <div className='relative top-3.5 h-10 w-1 border-l border-dashed border-neutral-300 dark:border-l-neutral-600'>
              <div className='absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-700'></div>
            </div>
            <p className='font-semibold text-neutral-900 dark:text-white'>Manifes</p>
          </div>

          <div className='mt-16 flex items-center gap-3'>
            <p className='text-sm text-neutral-500'>17:00 29 Apr</p>
            <div
              style={{
                width: `1px`,
                height: `40px`,
                backgroundImage: `linear-gradient(to bottom,var(--red-500) 55%,rgba(255,255,255,0) 55%)`,
                backgroundPosition: `left center`,
                backgroundSize: `1px 12px`,
                backgroundRepeat: `repeat-y`,
              }}
            ></div>
            <p className='font-semibold text-neutral-900 dark:text-white'>Manifes</p>
          </div>
          <div className='flex items-center gap-3'>
            <p className='text-sm text-neutral-500'>17:00 29 Apr</p>
            <div
              style={{
                width: `1px`,
                height: `40px`,
                backgroundImage: `linear-gradient(to bottom,#E4EBF5 55%,rgba(255,255,255,0) 55%)`,
                backgroundPosition: `left center`,
                backgroundSize: `1px 12px`,
                backgroundRepeat: `repeat-y`,
              }}
            ></div>
            <p className='font-semibold text-neutral-900 dark:text-white'>Manifes</p>
          </div>

          <div className='relative mt-16'>
            <div className='pointer-events-none absolute inset-0 flex justify-center'>
              <div className='grid w-full max-w-7xl grid-cols-3 gap-4'>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-0 flex justify-center'>
              <div className='grid w-full max-w-7xl grid-cols-1 gap-4'>
                <div className='border-b border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-t border-neutral-200/80 dark:border-white/5'></div>
              </div>
            </div>
            <div className='relative z-10 grid grid-cols-3 gap-8 p-2'>
              <div className='h-60 bg-red-500'></div>
              <div className='h-60 bg-green-500'></div>
              <div className='h-60 bg-blue-500'></div>
              <div className='h-60 bg-orange-500'></div>
              <div className='h-60 bg-teal-500'></div>
              <div className='h-60 bg-violet-500'></div>
              <div className='h-60 bg-red-500'></div>
              <div className='h-60 bg-green-500'></div>
              <div className='h-60 bg-blue-500'></div>
            </div>
          </div>

          <div className='relative mt-16'>
            <div className='pointer-events-none absolute inset-0 flex justify-center'>
              <div className='grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-x border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-x border-neutral-200/80 dark:border-white/5 lg:hidden'></div>
              </div>
            </div>
            <div className='pointer-events-none absolute inset-0 flex justify-center'>
              <div className='grid w-full max-w-7xl grid-cols-1 gap-4'>
                <div className='border-y border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5'></div>
                <div className='hidden border-y border-neutral-200/80 dark:border-white/5 sm:block lg:hidden'></div>
                <div className='hidden border-y border-neutral-200/80 dark:border-white/5 sm:block lg:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
                <div className='border-y border-neutral-200/80 dark:border-white/5 sm:hidden'></div>
              </div>
            </div>
            <div className='relative z-10 grid grid-cols-1 gap-8 p-2 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='h-60 bg-red-500'></div>
              <div className='h-60 bg-green-500'></div>
              <div className='h-60 bg-blue-500'></div>
              <div className='h-60 bg-orange-500'></div>
              <div className='h-60 bg-teal-500'></div>
              <div className='h-60 bg-violet-500'></div>
              <div className='h-60 bg-red-500'></div>
              <div className='h-60 bg-green-500'></div>
              <div className='h-60 bg-blue-500'></div>
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
