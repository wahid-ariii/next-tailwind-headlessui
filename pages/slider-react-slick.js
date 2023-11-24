import { useContext } from 'react';
import Head from 'next/head';
import BackToTop from '@components/BackToTop';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import { ArrowLeftIcon, ArrowRightIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <div className='rounded-full -ml-1 w-6 h-6 flex justify-center items-center cursor-pointer bg-sky-500 hover:bg-sky-600 text-gray-200 hover:text-gray-100 transition-all'>
        <ArrowRightIcon className='w-4 h-4' />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block"}}
      onClick={onClick}
    >
      <div className='rounded-full ml-1 w-6 h-6 flex justify-center items-center cursor-pointer bg-sky-500 hover:bg-sky-600 text-gray-200 hover:text-gray-100 transition-all'>
        <ArrowLeftIcon className='w-4 h-4' />
      </div>
    </div>
  );
}

export default function SliderSlick() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  const simple = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const multiple = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  const responsive = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const center = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const autoplay = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    // autoplay to start sliding
    autoplaySpeed: 1000,
    cssEase: 'linear',
  };

  const arrow = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const customNav = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <title>React Slick Page</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 dark:text-white'>
            Simple Slider
          </h1>
          <Slider {...simple}>
            <div>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Multiple Slider
          </h1>
          <Slider {...multiple}>
            <div className='px-2'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Responsive Slider
          </h1>
          <Slider {...responsive}>
            <div className='px-2'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-2'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Center Slider
          </h1>
          <Slider {...center}>
            <div className='px-3'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Auto Play
          </h1>
          <Slider {...autoplay}>
            <div className='px-3'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Previous and Next methods
          </h1>
          <Slider {...arrow} className='slick-custom-nav'>
            <div className='px-3'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 mt-6 text-gray-900 dark:text-white'>
            Custom Nav Button
          </h1>
          <Slider {...customNav} className='react-slick-custom-nav'>
            <div className='px-3'>
              <div className='bg-purple-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 1</h1>
                  <h2 className='text-white text-lg'>Text 1</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-emerald-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 2</h1>
                  <h2 className='text-white text-lg'>Text 2</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-orange-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 3</h1>
                  <h2 className='text-white text-lg'>Text 3</h2>
                </div>
              </div>
            </div>
            <div className='px-3'>
              <div className='bg-red-500 h-60 text-center flex justify-center items-center rounded-lg'>
                <div>
                  <h1 className='text-white font-medium text-2xl'>Text 4</h1>
                  <h2 className='text-white text-lg'>Text 4</h2>
                </div>
              </div>
            </div>
          </Slider>

          <div className='!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full'
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
