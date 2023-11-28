import { Fragment, useContext, useState } from 'react';
import Head from 'next/head';
import ActiveLink from '@components/ActiveLink';
import ExSidebarMenu from '@components/exdashboard/ExSidebarMenu';
import Layout from '@components/Layout';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronRightIcon, MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';

export default function Index() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <>
      <Head>
        <title>First C - Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <div className='fixed bottom-20 right-3 z-10 mx-4 rounded bg-gray-100 bg-opacity-20 !py-2 px-2 backdrop-blur backdrop-filter dark:bg-opacity-40 md:right-10'>
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

        <nav className='sticky top-0 z-10 mx-auto flex max-w-screen-2xl border px-2 dark:border-neutral-700'>
          <div className='my-2 flex w-full gap-2 border px-2 font-medium dark:border-neutral-700 dark:text-white'>
            <button onClick={() => setOpenMobileMenu(true)} className='block lg:hidden'>
              <span className='sr-only'>Open panel</span>
              <MenuIcon className='block h-5 w-5' aria-hidden='true' />
            </button>
            navbar
          </div>
        </nav>

        <div className='mx-auto mt-2 h-full max-w-screen-2xl border px-2 dark:border-neutral-700'>
          <div className='h-full py-2 lg:flex'>
            <Transition.Root show={openMobileMenu} as={Fragment}>
              <Dialog as='aside' className='fixed inset-0 z-20 overflow-hidden lg:hidden' onClose={setOpenMobileMenu}>
                <div className='absolute inset-0 overflow-hidden'>
                  {/* Backdrop */}
                  <Transition.Child
                    as={Fragment}
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                  </Transition.Child>
                  {/* End Backdrop */}

                  {/* Mobile Menu Panel  */}
                  <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16'>
                    <Transition.Child
                      as={Fragment}
                      enter='transform transition ease-in-out duration-500 sm:duration-700'
                      enterFrom='-translate-x-full'
                      enterTo='translate-x-0'
                      leave='transform transition ease-in-out duration-500 sm:duration-700'
                      leaveFrom='translate-x-0'
                      leaveTo='-translate-x-full'
                    >
                      <div className='pointer-events-auto relative w-screen max-w-md'>
                        {/* Close Panel Button  */}
                        <div className='absolute right-0 top-0 mr-6 flex pt-6'>
                          <button
                            type='button'
                            className='rounded p-1 text-gray-500 ring-2 ring-gray-500 hover:text-gray-800 hover:ring-gray-800'
                            onClick={() => setOpenMobileMenu(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                        </div>
                        {/* End Close Panel Button  */}
                        <div className='overflow-y-hide flex h-full flex-col bg-white py-6 shadow-xl'>
                          <div className='px-6'>
                            <Dialog.Title className='text-lg font-medium text-gray-900'> Menu </Dialog.Title>
                          </div>
                          <div className='relative mt-6 flex-1 px-4 sm:px-6'>
                            {/* Navbar Link */}
                            <div className='absolute inset-0 px-4'>
                              <div className='h-full' aria-hidden='true'>
                                <ActiveLink activeClassName='bg-gray-100' href='/dashboard'>
                                  <span className='border-b-1 block rounded px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                    Dashboard
                                  </span>
                                </ActiveLink>
                                <hr className='mx-2 my-1' />
                                <ActiveLink activeClassName='bg-gray-100' href='/second'>
                                  <span className='border-b-1 block rounded px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                    Second
                                  </span>
                                </ActiveLink>
                                <hr className='mx-2 my-1' />
                                <Menu>
                                  {({ open }) => (
                                    <>
                                      <Menu.Button className='border-b-1 w-full rounded px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                        <div className='flex items-center justify-between'>
                                          <span>More</span>
                                          <ChevronRightIcon
                                            className={`${
                                              open
                                                ? 'rotate-90 transform transition-transform duration-200'
                                                : 'transition-transform duration-200'
                                            } h-5 w-5`}
                                          />
                                        </div>
                                      </Menu.Button>
                                      <Menu.Items className='space-y-1 px-3'>
                                        <Menu.Item>
                                          <ActiveLink activeClassName='bg-gray-100' href='/third'>
                                            <span className='block rounded px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                              Third
                                            </span>
                                          </ActiveLink>
                                        </Menu.Item>
                                        <hr className='mx-3 my-1' />
                                        <Menu.Item>
                                          <ActiveLink activeClassName='bg-gray-100' href='/fourth'>
                                            <span className='block rounded px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                              Fourth
                                            </span>
                                          </ActiveLink>
                                        </Menu.Item>
                                      </Menu.Items>
                                    </>
                                  )}
                                </Menu>
                                <hr className='mx-2 my-1' />
                                <ActiveLink activeClassName='bg-gray-100' href='/nav-bar'>
                                  <span className='border-b-1 block rounded px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-100'>
                                    Navbar
                                  </span>
                                </ActiveLink>
                              </div>
                            </div>
                            {/* End Navbar Link */}
                          </div>
                        </div>
                      </div>
                    </Transition.Child>
                  </div>
                  {/* End Mobile Menu Panel  */}
                </div>
              </Dialog>
            </Transition.Root>

            <ExSidebarMenu />

            <main className='w-full border px-2 dark:border-neutral-700 lg:ml-60'>
              <div className='h-96 bg-blue-500'></div>
              <div className='h-96 bg-red-500'></div>
              <div className='h-96 bg-teal-500'></div>
            </main>
          </div>
        </div>
      </Layout>
    </>
  );
}
