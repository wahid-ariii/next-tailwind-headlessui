import Link from 'next/link';
import Head from "next/head";
import { ArrowRightIcon, MoonIcon, PhotographIcon, PlayIcon, SunIcon } from "@heroicons/react/outline";
import { twMerge } from 'tailwind-merge';
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Section from "@components/Section";
import BackToTop from "@components/BackToTop";
import Layout from "@components/Layout";
import TocLink from "@components/TocLink";
import Image from "next/image";
import { GlobalContext } from '@utils/GlobalContext';
import { useContext } from 'react';

export default function Card() {
	const { darkMode, setDarkMode } = useContext(GlobalContext);

	return (
		<div>
			<Head>
				<title>Card Page</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<Layout>
				<main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16">

					<Section id="components" name="Card TOC">
						<div className="grid sm:grid-cols-2 md:grid-cols-3">
							<div>
								<TocLink href="#card-design" text="Card Design" />
							</div>
							<div>
								<TocLink href="#card-item" text="Card Item" />
							</div>
							<div>
								<TocLink href="#card-list" text="Card List" />
							</div>
						</div>
					</Section>

					<Section id="card-design" name="Card Design">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
							<div className="group relative shadow rounded-md bg-gray-100 dark:bg-neutral-800">
								<div className="relative w-full h-64 group-hover:opacity-90 transition-all duration-300">
									<Image
										className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-t-md"
										src="https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80"
										alt="hero"
										layout="fill"
									/>
								</div>
								<div className="m-4 flex justify-between">
									<div>
										<h3 className="dark:text-white text-base font-medium text-gray-700 group-hover:text-blue-500 transition-all duration-300">
											<a href="#">
												<span aria-hidden="true" className="absolute inset-0"></span>
												Nature
											</a>
										</h3>
									</div>
									<p className="text-sm font-medium text-gray-900 dark:text-white">$35</p>
								</div>
							</div>

							<div className="group relative bg-gray-100 dark:bg-neutral-800 rounded-md">
								<div className="rounded-md shadow group-hover:shadow-lg pb-2 transition-all duration-300">
									<div className="relative w-full h-64 group-hover:opacity-90 transition-all duration-300">
										<Image
											className="w-full h-full object-center object-cover lg:w-full lg:h-full rounded-t-md"
											src="https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80"
											alt="hero"
											layout="fill"
										/>
									</div>
									<div className="m-4 flex justify-between">
										<div>
											<h3 className="dark:text-white text-base font-medium text-gray-700 group-hover:text-blue-500 transition-all duration-300">
												<a href="#">
													<span aria-hidden="true" className="absolute inset-0"></span>
													Nature
												</a>
											</h3>
										</div>
										<p className="text-sm font-medium text-gray-900 dark:text-white">$35</p>
									</div>
								</div>
							</div>

							<div className="group cursor-pointer">
								<div className="flex flex-wrap w-full h-64 min-h-full bg-black items-center relative rounded-md">
									<Image
										className="w-full object-cover h-full object-center block opacity-40 absolute inset-0 rounded-md"
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										alt="hero"
										layout="fill"
									/>
									<div className="text-center relative z-10 w-full">
										<h3 className="dark:text-white text-2xl font-medium text-white group-hover:text-blue-500 transition-all duration-300">
											<a href="#">Nature</a>
										</h3>
										<p className="text-gray-100">mustache fixie paleo lumbersexual.</p>
									</div>
								</div>
							</div>

							<div className="group cursor-pointer">
								<div className="flex flex-wrap w-full h-64 min-h-full items-end relative">
									<Image
										className="w-full object-cover h-full object-center absolute inset-0 rounded-md"
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										alt="hero"
										layout="fill"
									/>
									<div className="z-10 bg-black bg-opacity-40 p-3 w-full rounded-b-md">
										<h3 className="dark:text-white text-2xl font-medium text-white group-hover:text-blue-500 transition-all duration-300">
											<a href="#">Nature</a>
										</h3>
										<p className="text-gray-100">mustache fixie paleo lumbersexual.</p>
									</div>
								</div>
							</div>

							<div className="group cursor-pointer">
								<div className="flex flex-wrap w-full h-64 min-h-full relative">
									<Image
										className="w-full object-cover h-full object-center absolute inset-0 rounded-md"
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										alt="hero"
										layout="fill"
									/>
									<div className="z-10 bg-black bg-opacity-50 h-full w-full p-3 rounded-md">
										<h3 className="dark:text-white text-2xl font-medium text-white group-hover:text-blue-500 transition-all duration-300">
											<a href="#">Nature</a>
										</h3>
										<p className="text-gray-100">mustache fixie paleo lumbersexual.</p>
									</div>
								</div>
							</div>

							<div className="group cursor-pointer">
								<div className="flex flex-wrap w-full h-64 min-h-full relative">
									<Image
										className="w-full object-cover h-full object-center absolute inset-0 rounded-md"
										src="https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80"
										alt="hero"
										layout="fill"
									/>
									<div className="z-10 bg-black bg-opacity-50 h-full w-full p-3 flex items-center rounded-md">
										<div>
											<h3 className="dark:text-white text-2xl font-medium text-white group-hover:text-blue-500 transition-all duration-300">
												<a href="#">Nature</a>
											</h3>
											<p className="text-gray-100">mustache fixie paleo lumbersexual.</p>
										</div>
									</div>
								</div>
							</div>

							<div className="group cursor-pointer">
								<div className="flex flex-wrap w-full h-64 min-h-full relative">
									<Image
										className="w-full object-cover h-full object-center absolute inset-0 rounded-md"
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										alt="hero"
										layout="fill"
									/>
									<div className="z-10 bg-black bg-opacity-50 h-full w-full p-3 flex items-end rounded-md">
										<div>
											<h3 className="dark:text-white text-2xl font-medium text-white group-hover:text-blue-500 transition-all duration-300">
												<a href="#">Nature</a>
											</h3>
											<p className="text-gray-100">mustache fixie paleo lumbersexual.</p>
										</div>
									</div>
								</div>
							</div>

							<a href="" className="relative block overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl group"
								style={{
									backgroundImage: "url(" + "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80" + ")",
								}}
							>
								<span
									className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full right-4 top-4"
								>
									4.5
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 ml-1.5 text-yellow-300"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
										/>
									</svg>
								</span>
								<div className="relative pt-44 px-4 text-white bg-black bg-opacity-40 h-full">
									<h5 className="text-2xl font-bold group-hover:text-blue-500 transition-all duration-300">Nature</h5>
									<p className="text-sm">Nature</p>
								</div>
							</a>

							<div className="group">
								<div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
									style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80" + ")" }}>
								</div>
								<div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg mx-auto dark:bg-gray-800">
									<h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nature</h3>
									<div className="flex items-center justify-between px-3 py-2 bg-gray-100 dark:bg-gray-700">
										<span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
										<button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
									</div>
								</div>
							</div>

							<div className="relative h-64 flex items-end justify-start w-full text-left bg-center bg-cover bg-gray-500"
								style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?w=640&q=80" + ")" }}>
								<div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900"></div>
								<div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
									<a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase text-gray-100 bgundefined">Politics</a>
									<div className="flex flex-col justify-start text-center text-gray-100">
										<span className="text-3xl font-semibold leading-none tracking-wide">04</span>
										<span className="leading-none uppercase">Aug</span>
									</div>
								</div>
								<h2 className="z-10 p-5">
									<a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline text-gray-100">Nature</a>
								</h2>
							</div>

							<div className="relative h-64 overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg">
								<Image
									className="w-full"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
									alt="hero"
									layout="fill"
								/>
								<a href="#!">
									<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-40">
										<div className="flex justify-start items-end h-full">
											<div className="text-white m-6">
												<h5 className="font-bold text-lg">Nature</h5>
												<p>
													<small>nature</small>
												</p>
											</div>
										</div>
									</div>
								</a>
							</div>

							<div className="relative rounded-lg overflow-hidden h-64">
								<Image
									className="w-full"
									alt="hero"
									layout="fill"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
								/>
								<div className="absolute w-full bottom-5 text-center">
									<div className="bg-white rounded-lg overflow-hidden mx-5 p-3">
										<h3 className="text-base font-semibold text-dark">Nature</h3>
										<p className="text-sm">Nature</p>
									</div>
								</div>
							</div>

							<a href="#!" className="relative h-64 rounded-md group overflow-hidden">
								<Image
									className="w-full object-center rounded-md transition-transform transform duration-500 group-hover:scale-125"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
									alt="hero"
									layout="fill"
								/>
								<div className="absolute inset-0 rounded-md bg-black bg-opacity-40">
									<div className="flex justify-center items-end h-full">
										<div className="text-white m-6">
											<h5 className="font-semibold text-lg text-center line-clamp-2">Hover Image Zoom Elit ex minim fugiat tempor ut id exercitation fugiat tempor ut id exercitation</h5>
										</div>
									</div>
								</div>
							</a>

							<a href="#!" className="relative h-64 rounded-md group overflow-hidden ease-in-out transition-transform duration-300 transform hover:-translate-y-2">
								<Image
									className="w-full object-center rounded-md"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
									alt="hero"
									layout="fill"
								/>
								<div className="absolute inset-0 rounded-md bg-black bg-opacity-40">
									<div className="flex justify-center items-end h-full">
										<div className="text-white m-6">
											<h5 className="font-semibold text-lg text-center line-clamp-2">Hover Image Translate</h5>
										</div>
									</div>
								</div>
							</a>

							<a href="#!" className="relative h-64 rounded-md group overflow-hidden ease-in-out transition-transform duration-300 transform hover:-translate-y-2">
								<Image
									className="w-full object-center rounded-md"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
									alt="hero"
									layout="fill"
								/>
								<div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-neutral-950">
									<div className="flex justify-center items-end h-full">
										<div className="text-white m-6">
											<h5 className="font-semibold text-lg text-center line-clamp-2">Image Gradient </h5>
										</div>
									</div>
								</div>
							</a>

							<a href="#!" className="relative h-64 rounded-md group overflow-hidden">
								<Image
									className="w-full object-center rounded-md brightness-90 group-hover:brightness-100 transition-all duration-300"
									src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
									alt="hero"
									layout="fill"
								/>
								<div className="absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-neutral-950">
									<div className="flex justify-center items-end h-full">
										<div className="text-white m-6">
											<h5 className="font-semibold text-lg text-center line-clamp-2">Hover Image Brightness</h5>
										</div>
									</div>
								</div>
							</a>

						</div>
					</Section>

					<Section id="card-item" name="Card Item">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

							<div className='relative h-64 rounded-md group overflow-hidden'>
								<Image
									className='w-full object-cover rounded-md brightness-90 group-hover:brightness-100 transition-all duration-300'
									src='https://img.youtube.com/vi/GfO-3Oir-qM/hqdefault.jpg'
									alt='hero'
									layout='fill'
									unoptimized
								/>
								<button
									onClick={() => {
										alert('clicked')
									}}
									className='group absolute inset-0 rounded-md cursor-pointer focus-visible:outline-none bg-gradient-to-b from-transparent via-transparent to-neutral-950'
								>
									<div className='flex justify-center items-center h-full'>
										<div className='bg-neutral-800/80 rounded-md p-3 text-white group-hover:bg-red-600 transition-all duration-300 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-sky-500'>
											<PlayIcon className='h-5 w-5' />
										</div>
									</div>
									<div className='absolute bottom-0 inset-x-0'>
										<p className='font-medium text-base text-center line-clamp-2 text-white px-4 pb-4'>Video Player onClick</p>
									</div>
								</button>
							</div>

							<div className='relative'>
								<div className='relative h-64 rounded-md group overflow-hidden'>
									<Image
										className='w-full object-cover rounded-md brightness-90 group-hover:brightness-100 transition-all duration-300'
										src='https://img.youtube.com/vi/GfO-3Oir-qM/hqdefault.jpg'
										alt='hero'
										layout='fill'
										unoptimized
									/>
									<button
										onClick={() => {
											alert('clicked')
										}}
										className='group absolute inset-0 rounded-md cursor-pointer focus-visible:outline-none bg-gradient-to-b from-transparent via-transparent to-neutral-950'
									>
										<div className='flex justify-center items-center h-full'>
											<div className='bg-neutral-800/80 rounded-md p-3 text-white group-hover:bg-red-600 transition-all duration-300 group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-sky-500'>
												<PlayIcon className='h-5 w-5' />
											</div>
										</div>
										<div className='absolute bottom-0 inset-x-0'>
											<p className='font-medium text-base text-center line-clamp-2 text-white px-4 pb-4'>Video Player onClick</p>
										</div>
									</button>
								</div>
								<button
									title={`Delete`}
									className={twMerge(
										'absolute -right-1.5 -top-1.5 rounded-full px-2 py-1 text-xs font-medium',
										'bg-red-500 text-white transition-all hover:bg-red-600',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1',
									)}
								>
									X
								</button>
							</div>

							<div className='relative'>
								<div className='grid'>
									<Link
										href='#'
										className='rounded-md group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
									>
										<div className='relative h-64 overflow-hidden'>
											<Image
												className='w-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-110'
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												alt='hero'
												layout='fill'
												unoptimized
											/>
										</div>
										<div className='absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-neutral-950'>
											<div className='flex justify-center items-end h-full'>
												<p className='font-medium text-base text-center line-clamp-2 text-white px-4 pb-4'>Title</p>
											</div>
										</div>
									</Link>
								</div>
							</div>

							<div className='relative'>
								<div className='grid'>
									<Link
										href='#'
										className='rounded-md group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
									>
										<div className='relative h-64 overflow-hidden'>
											<Image
												className='w-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500 transform group-hover:scale-110'
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												alt='hero'
												layout='fill'
												unoptimized
											/>
										</div>
										<div className='absolute inset-0 rounded-md bg-gradient-to-b from-transparent via-transparent to-neutral-950'>
											<div className='flex justify-center items-end h-full'>
												<p className='font-medium text-base text-center line-clamp-2 text-white px-4 pb-4'>Title</p>
											</div>
										</div>
									</Link>
								</div>
								<button
									title={`Delete`}
									className={twMerge(
										'absolute -right-1.5 -top-1.5 rounded-full px-2 py-1 text-xs font-medium',
										'bg-red-500 text-white transition-all hover:bg-red-600',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1',
									)}
								>
									X
								</button>
							</div>

							<Link
								href='#'
								className='group rounded p-2 text-center focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500'
							>
								<div className='relative mx-auto mb-2 h-44 w-44 overflow-hidden'>
									<Image
										alt={"lala"}
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										className={`transform rounded-full brightness-90 transition duration-500 ease-in-out will-change-auto group-hover:brightness-110`}
										fill
										unoptimized
									/>
								</div>
								<p className='transition-all duration-500 group-hover:text-emerald-500'>Name</p>
							</Link>

							<Link
								href='#'
								className='group rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500'
							>
								<div className='relative mb-2 h-52'>
									<Image alt={"lala"}
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80" fill unoptimized />
								</div>
								<p className='transition-all duration-500 group-hover:text-emerald-500'>Title</p>
							</Link>

							<div className={`h-20 flex items-center justify-between gap-2 rounded border p-2 dark:border-neutral-800`}>
								<Link
									href='#'
									className='group rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500'
								>
									<div className='flex items-center gap-2'>
										<div className='relative h-12 w-12 overflow-hidden rounded'>
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												className='transform rounded-t brightness-90 transition duration-500 ease-in-out will-change-auto group-hover:brightness-110'

												fill
												unoptimized
											/>
										</div>
										<div>
											<p className='mb-1 transition-all duration-500 group-hover:text-emerald-500'>Title</p>
											<p className='text-[13px]'>Name</p>
										</div>
									</div>
								</Link>
								<button
									title='Play Preview'
									className='rounded text-neutral-600 transition-all duration-300 hover:text-emerald-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500 dark:text-neutral-200 dark:hover:text-emerald-500'
								>
									<PlayIcon className='h-7 w-7 ' />
								</button>
							</div>

							<Link
								href='#'
								className={`group rounded border p-0 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-500 dark:border-neutral-800`}
							>
								<div className='relative h-52 overflow-hidden sm:h-44'>
									<Image
										alt={"lala"}
										src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
										className={`transform rounded-t brightness-90 transition duration-500 ease-in-out will-change-auto group-hover:brightness-11`}
										fill
										unoptimized
									/>
								</div>
								<div className='p-4'>
									<p className='mb-1 transition-all duration-500 group-hover:text-emerald-500'>Title</p>
									<p className='text-[13px]'>Artist</p>
								</div>
							</Link>

							<Link
								href='#'
								className={twMerge(
									'group mx-auto w-40 rounded border shadow dark:border-neutral-800 sm:w-[12rem]',
									'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'
								)}
							>
								<div className='relative h-56 w-full overflow-hidden sm:h-64'>
									{true ? (
										<Image
											alt={"lala"}
											src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
											className={`transform rounded-t brightness-90 transition duration-500 ease-in-out will-change-auto group-hover:brightness-110`}
											fill
										/>
									) : (
										<div className='flex h-full w-full items-center justify-center rounded-t bg-neutral-200 dark:bg-neutral-800'>
											<PhotographIcon className='h-16 w-16 text-neutral-500' />
										</div>
									)}
								</div>
								<div className='p-3.5'>
									<p className='mb-1 !text-[15px] transition-all duration-500 line-clamp-2 group-hover:text-sky-500'>
										Title
									</p>
									<span className='text-[13px] text-neutral-600 dark:text-neutral-400'>date</span>
								</div>
							</Link>

							<Link href='#' className='group rounded focus-visible:outline-none'>
								<div className='m-1 h-[320px] rounded border shadow dark:border-neutral-800 sm:h-[354px]'>
									<div className='relative h-56 w-full overflow-hidden sm:h-64'>
										{true ? (
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												className={twMerge(
													'rounded-t brightness-90 group-hover:brightness-110',
													'transform transition duration-500 ease-in-out will-change-auto'
												)}
												fill
											/>
										) : (
											<div className='flex h-full w-full items-center justify-center rounded-t bg-neutral-200 dark:bg-neutral-800'>
												<PhotographIcon className='h-16 w-16 text-neutral-500' />
											</div>
										)}
									</div>
									<div className='px-2.5 py-3'>
										<p
											className={twMerge(
												'rounded px-1 py-0.5 !text-[15px] transition-all duration-500 line-clamp-2',
												'group-hover:text-sky-500 group-focus-visible:ring-2 group-focus-visible:ring-sky-500'
											)}
										>
											Title
										</p>
										<span className='px-1 text-[13px] text-neutral-600 dark:text-neutral-400'>date</span>
									</div>
								</div>
							</Link>

							<Link href='#' className='group rounded focus-visible:outline-none'>
								<div className='m-1 h-[280px] rounded border shadow dark:border-neutral-800 sm:h-[295px]'>
									<div className='relative h-52 w-full overflow-hidden sm:h-56'>
										{true ? (
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												className={twMerge(
													'rounded-t brightness-90 group-hover:brightness-110',
													'transform transition duration-500 ease-in-out will-change-auto'
												)}
												fill
											/>
										) : (
											<div className='flex h-full w-full items-center justify-center rounded-t bg-neutral-200 dark:bg-neutral-800'>
												<PhotographIcon className='h-16 w-16 text-neutral-500' />
											</div>
										)}
									</div>
									<div className='px-2.5 py-3'>
										<p
											className={twMerge(
												'rounded px-1 py-0.5 !text-[15px] transition-all duration-500 line-clamp-2',
												'group-hover:text-sky-500 group-focus-visible:ring-2 group-focus-visible:ring-sky-500'
											)}
										>
											name
										</p>
									</div>
								</div>
							</Link>

						</div>
					</Section>

					<Section id="card-list" name="Card List">
						<div className='mt-2 flex flex-col gap-8 pb-4'>
							<Link
								href='#'
								className='group flex gap-4 rounded border shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-neutral-800'
							>
								<div className='w-[88px]'>
									<div className='relative h-32 w-[88px] overflow-hidden'>
										{true ? (
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												className={`transform rounded-l brightness-90 transition duration-500 ease-in-out will-change-auto group-hover:brightness-110`}
												fill
											/>
										) : (
											<div className='flex h-full w-full items-center justify-center rounded-l bg-neutral-200 dark:bg-neutral-800'>
												<PhotographIcon className='h-16 w-16 text-neutral-500' />
											</div>
										)}
									</div>
								</div>
								<div className='pt-3.5 pr-3'>
									<p className='mb-1 !text-[15px] transition-all duration-500 line-clamp-2 group-hover:text-sky-500'>
										name
									</p>
									<span className='text-[13px] text-neutral-600 dark:text-neutral-400'>date</span>
									<p className='mt-2 font-normal line-clamp-2'>description</p>
								</div>
							</Link>

							<div className='flex gap-3'>
								<Link
									href='#'
									className='rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:text-orange-500'
								>
									{true ? (
										<div className='relative h-20 w-14'>
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												fill
												className={twMerge(
													'rounded object-cover brightness-90 hover:brightness-100'
												)}
												unoptimized
											/>
										</div>
									) : (
										<div className='flex h-20 w-14 items-center justify-center rounded bg-neutral-200 dark:bg-neutral-800'>
											<PhotographIcon className='h-8 w-8 text-neutral-500' />
										</div>
									)}
								</Link>
								<div>
									<Link
										href='#'
										className={twMerge(
											'rounded text-[15px] font-medium text-neutral-700 transition-all duration-200 dark:text-neutral-100',
											'hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:text-orange-500'
										)}
									>
										title
									</Link>
									<p className='mt-1 text-sm text-neutral-600 dark:text-neutral-200'>
										date
									</p>
								</div>
							</div>

							<div className='relative'>
								<div className='flex gap-3'>
									<Link
										href='#'
										className='rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:text-orange-500'
									>
										{true ? (
											<div className='relative h-20 w-14'>
												<Image
													alt={"lala"}
													src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
													fill
													className={twMerge(
														'rounded object-cover brightness-90 hover:brightness-100'
													)}
													unoptimized
												/>
											</div>
										) : (
											<div className='flex h-20 w-14 items-center justify-center rounded bg-neutral-200 dark:bg-neutral-800'>
												<PhotographIcon className='h-8 w-8 text-neutral-500' />
											</div>
										)}
									</Link>
									<div>
										<Link
											href='#'
											className={twMerge(
												'rounded text-[15px] font-medium text-neutral-700 transition-all duration-200 dark:text-neutral-100',
												'hover:text-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:text-orange-500'
											)}
										>
											title
										</Link>
										<p className='mt-1 text-sm text-neutral-600 dark:text-neutral-200'>
											date
										</p>
									</div>
								</div>
								<button
									className={twMerge(
										'absolute -left-1 -top-1 rounded px-1.5 py-0.5 text-xs font-medium',
										'bg-red-500 text-white transition-all hover:bg-red-600',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400',
									)}
								>
									X
								</button>
							</div>

							<div className='flex items-center gap-3'>
								<Link
									href='#'
									className='rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-sky-500'
								>
									{true ? (
										<div className='relative h-16 w-16'>
											<Image
												alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
												fill
												className={twMerge(
													'rounded-full object-cover brightness-90 hover:brightness-100'
												)}
												unoptimized
											/>
										</div>
									) : (
										<div className='flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800'>
											<Image alt={"lala"}
												src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80" unoptimized className='h-8 w-8 text-neutral-500' />
										</div>
									)}
								</Link>
								<div>
									<Link
										href='#'
										className={twMerge(
											'rounded text-[15px] font-medium text-neutral-700 transition-all duration-200 dark:text-neutral-100',
											'hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-sky-500',
										)}
									>
										name
									</Link>
									{true ? (
										<a
											href='#'
											className={twMerge(
												'mt-1 flex w-16 items-center rounded text-sm font-medium transition-all duration-200',
												'text-sky-500 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
											)}
											target='_blank'
											rel='noreferrer'
										>
											Web
											<ArrowRightIcon className='ml-1 h-4 w-4' />
										</a>
									) : (
										<p>-</p>
									)}
								</div>
							</div>

							<div className='relative'>
								<div className='flex items-center gap-3'>
									<Link
										href='#'
										className='rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-sky-500'
									>
										{true ? (
											<div className='relative h-16 w-16'>
												<Image
													alt={"lala"}
													src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80"
													fill
													className={twMerge(
														'rounded-full object-cover brightness-90 hover:brightness-100'
													)}
													unoptimized
												/>
											</div>
										) : (
											<div className='flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800'>
												<Image alt={"lala"}
													src="https://images.unsplash.com/photo-1653043704077-5652028726f4?w=387&q=80" unoptimized className='h-8 w-8 text-neutral-500' />
											</div>
										)}
									</Link>
									<div>
										<Link
											href='#'
											className={twMerge(
												'rounded text-[15px] font-medium text-neutral-700 transition-all duration-200 dark:text-neutral-100',
												'hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:hover:text-sky-500',
											)}
										>
											name
										</Link>
										{true ? (
											<a
												href='#'
												className={twMerge(
													'mt-1 flex w-16 items-center rounded text-sm font-medium transition-all duration-200',
													'text-sky-500 hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500',
												)}
												target='_blank'
												rel='noreferrer'
											>
												Web
												<ArrowRightIcon className='ml-1 h-4 w-4' />
											</a>
										) : (
											<p>-</p>
										)}
									</div>
								</div>
								<button
									className={twMerge(
										'absolute -left-1 -top-1 rounded-full px-1.5 py-0.5 text-xs font-medium',
										'bg-red-500 text-white transition-all hover:bg-red-600',
										'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400',
									)}
								>
									X
								</button>
							</div>

						</div>
					</Section>

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

				<Footer />
			</Layout>
		</div >
	);
}
