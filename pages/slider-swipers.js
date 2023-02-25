import { useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { useContext } from "react";
import { GlobalContext } from "@utils/GlobalContext";
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import Head from 'next/head';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';
import SwiperCore, { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay";
import 'swiper/css/scrollbar';
import clsx from 'clsx';

export default function SliderSwipers() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  // store API swiper instance
  const [apiSwiper, setApiSwiper] = useState(undefined)
  const [apiSwiperActiveIndex, setApiSwiperActiveIndex] = useState(0)
  function handleApiSwiperNavChange(e) {
    setApiSwiperActiveIndex(e)
    apiSwiper.slideTo(e)
  }

  const [apiSwiperVertical, setApiSwiperVertical] = useState(undefined)
  const [apiSwiperActiveIndexVertical, setApiSwiperActiveIndexVertical] = useState(0)
  function handleApiSwiperNavChangeVertical(e) {
    setApiSwiperActiveIndexVertical(e)
    apiSwiperVertical.slideTo(e)
  }

  const [imageSwiper, setImageSwiper] = useState(undefined)
  const [detailSwiper, setDetailSwiper] = useState(undefined)
  const [apiSwiperActiveIndexDouble, setApiSwiperActiveIndexDouble] = useState(0)
  function handleApiSwiperNavChangeDouble(e) {
    setApiSwiperActiveIndexDouble(e)
    imageSwiper.slideTo(e)
    detailSwiper.slideTo(e)
  }

  const [imageSwipers, setImageSwipers] = useState(undefined)
  const [detailSwipers, setDetailSwipers] = useState(undefined)
  const [apiSwiperActiveIndexDoubles, setApiSwiperActiveIndexDoubles] = useState(0)
  function handleApiSwiperNavChangeDoubles(e) {
    setApiSwiperActiveIndexDoubles(e)
    imageSwipers.slideTo(e)
    detailSwipers.slideTo(e)
  }

  const options = [
    { title: "First" },
    { title: "Second" },
  ]

  return (
    <>
      <Head>
        <title>Swiper.js Page</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Layout>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Horizontal
          </h1>

          <div className="flex space-x-2 mt-8">
            {options.map((item, i) => {
              const active = i == apiSwiperActiveIndex
              return (
                <button key={i}
                  className={clsx(
                    'rounded-md border px-4 text-sm py-1 transition-all font-medium',
                    'dark:text-white dark:border-neutral-700',
                    active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  )}
                  onClick={() => handleApiSwiperNavChange(i)}
                >
                  {item.title}
                </button>
              )
            })}
          </div>
          <div className="mt-4 max-w-md dark:text-white text-sm">
            <Swiper
              onSwiper={setApiSwiper}
              initialSlide={apiSwiperActiveIndex}
              spaceBetween={0}
              slidesPerView={1}
              speed={300}
              allowTouchMove={false}
            >
              <SwiperSlide>
                Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
              </SwiperSlide>
              <SwiperSlide>
                Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit sit anim amet labore incididunt veniam veniam.
              </SwiperSlide>
            </Swiper>
          </div>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Vertical
          </h1>
          <div className="flex mt-6 gap-4">
            <div className="flex flex-col space-y-2">
              {options.map((item, i) => {
                const active = i == apiSwiperActiveIndexVertical
                return (
                  <button key={i}
                    className={clsx(
                      'rounded-md border px-4 text-sm py-1 transition-all font-medium',
                      'dark:text-white dark:border-neutral-700',
                      active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    )}
                    onClick={() => handleApiSwiperNavChangeVertical(i)}
                  >
                    {item.title}
                  </button>
                )
              })}
            </div>
            <div className="max-w-md dark:text-white text-sm">
              <Swiper
                onSwiper={setApiSwiperVertical}
                autoHeight={true}
                initialSlide={apiSwiperActiveIndexVertical}
                spaceBetween={0}
                slidesPerView={1}
                speed={300}
                direction='vertical'
                allowTouchMove={false}
              >
                <SwiperSlide>
                  <div>
                    Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit sit anim amet labore incididunt veniam veniam.
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white">
            Horizontal Horizontal
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex space-x-2 mt-8">
                {options.map((item, i) => {
                  const active = i == apiSwiperActiveIndexDouble
                  return (
                    <button key={i}
                      className={clsx(
                        'rounded-md border px-4 text-sm py-1 transition-all font-medium',
                        'dark:text-white dark:border-neutral-700',
                        active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      )}
                      onClick={() => handleApiSwiperNavChangeDouble(i)}
                    >
                      {item.title}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 dark:text-white text-sm">
                <Swiper
                  onSwiper={setImageSwiper}
                  initialSlide={apiSwiperActiveIndexDouble}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <div className="bg-red-500 rounded w-full h-64 flex items-center justify-center text-white">
                      <p className="text-3xl font-bold">First</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-emerald-500 rounded w-full h-64 flex items-center justify-center text-white">
                      <p className="text-3xl font-bold">Second</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div>
              <div className="mt-8 dark:text-white text-sm">
                <Swiper
                  onSwiper={setDetailSwiper}
                  initialSlide={apiSwiperActiveIndexDouble}
                  autoHeight={true}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <p className="text-2xl font-bold mb-2">First</p>
                    Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className="text-2xl font-bold mb-2">Second</p>
                    Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit sit anim amet labore incididunt veniam veniam.
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="dark:text-white mt-6 text-sm">
                <p className="text-xl font-semibold mb-2">Footer</p>
                Deserunt cupidatat voluptate labore fugiat ex. Ea Lorem duis magna nulla occaecat reprehenderit cupidatat culpa cupidatat duis irure ea culpa. Ad in dolore exercitation commodo ullamco ea.
              </div>
            </div>
          </div>

          <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 mb-2 text-gray-900 dark:text-white">
            Horizontal Vertical
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="flex space-x-2 mt-8">
                {options.map((item, i) => {
                  const active = i == apiSwiperActiveIndexDoubles
                  return (
                    <button key={i}
                      className={clsx(
                        'rounded-md border px-4 text-sm py-1 transition-all font-medium',
                        'dark:text-white dark:border-neutral-700',
                        active ? 'bg-blue-500 text-white' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      )}
                      onClick={() => handleApiSwiperNavChangeDoubles(i)}
                    >
                      {item.title}
                    </button>
                  )
                })}
              </div>

              <div className="mt-4 dark:text-white text-sm">
                <Swiper
                  onSwiper={setImageSwipers}
                  initialSlide={apiSwiperActiveIndexDoubles}
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <div className="bg-red-500 rounded w-full h-64 flex items-center justify-center text-white">
                      <p className="text-3xl font-bold">First</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="bg-emerald-500 rounded w-full h-64 flex items-center justify-center text-white">
                      <p className="text-3xl font-bold">Second</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div>
              <div className="mt-8 dark:text-white text-sm">
                <Swiper
                  onSwiper={setDetailSwipers}
                  initialSlide={apiSwiperActiveIndexDoubles}
                  autoHeight={true}
                  direction='vertical'
                  spaceBetween={0}
                  slidesPerView={1}
                  speed={300}
                  allowTouchMove={false}
                >
                  <SwiperSlide>
                    <p className="text-2xl font-bold mb-2">First</p>
                    Minim non esse deserunt id veniam veniam ad dolor est voluptate dolor. Nostrud officia aute deserunt ex labore velit non veniam laboris laborum. Consequat proident laborum labore ad veniam laboris minim ullamco exercitation laborum ipsum sunt veniam cupidatat. Ex Lorem voluptate eu adipisicing elit aute ullamco eu nulla incididunt consequat eiusmod eu ex. Aute sit non deserunt Lorem elit nulla laborum incididunt reprehenderit mollit Lorem id aute minim. Veniam non aliquip laborum sunt mollit exercitation laborum anim duis non Lorem esse. Nisi labore labore laboris nulla elit dolor exercitation elit pariatur. Laboris aliqua aliquip aliquip aliquip ad id in. Anim mollit duis veniam pariatur Lorem dolor ut velit sunt occaecat sit nisi esse. Et laboris deserunt tempor minim consequat tempor consequat minim eiusmod velit cupidatat elit proident dolore. Dolore eu ut exercitation tempor.
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className="text-2xl font-bold mb-2">Second</p>
                    Officia velit mollit fugiat deserunt proident esse ex id do voluptate et laborum. Nostrud laboris proident incididunt mollit. Deserunt quis est fugiat laborum. Est ipsum culpa dolor consequat ullamco amet ad incididunt labore laborum esse. Nisi dolor magna exercitation ea. Duis proident commodo est nisi enim ad labore dolor officia. Duis dolore ad excepteur magna ad incididunt do culpa aliqua et aute incididunt velit non. Nostrud minim officia excepteur do sit pariatur cillum irure fugiat qui voluptate. Reprehenderit cupidatat eu et eiusmod officia incididunt. Est sunt velit ad sit dolor. Magna commodo ut velit eu. Amet dolore labore mollit nostrud ad ipsum minim irure. Cupidatat esse minim quis voluptate commodo reprehenderit sit anim amet labore incididunt veniam veniam.
                  </SwiperSlide>
                </Swiper>
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