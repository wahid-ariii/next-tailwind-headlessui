import Head from 'next/head';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

import LayoutForth from '@components/supabase/LayoutForth';
import SidebarNavAccordion from '@components/supabase/SidebarNavAccordion';
import SidebarNavLink from '@components/supabase/SidebarNavLink';

export default function Index() {
  return (
    <>
      <Head>
        <title>Supabase Subnavbar Accordion scroll</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutForth
        sidebarTitle='Forth'
        subNavbar={
          <>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='group flex w-full items-center justify-between space-x-1 rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800'>
                    <span className='whitespace-nowrap'>One - Five</span>
                    <ChevronDownIcon
                      className={`${
                        open
                          ? 'rotate-180 transform transition-transform duration-300'
                          : 'transition-transform duration-300'
                      } h-4 w-4`}
                    />
                  </Popover.Button>
                  <Popover.Panel className='absolute z-50 w-40 px-2'>
                    <div className='scrollbar-thinner flex flex-col space-y-1 border bg-white p-2 shadow scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:scrollbar-thumb-neutral-700'>
                      {['One', 'Two', 'Three', 'Four', 'Five'].map((i) => (
                        <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                          Forth {i}
                        </SidebarNavLink>
                      ))}
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button className='group flex w-full items-center justify-between space-x-1 rounded px-2.5 py-1.5 text-sm font-medium transition-all hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800'>
                    <span className='whitespace-nowrap'>Six - Ten</span>
                    <ChevronDownIcon
                      className={`${
                        open
                          ? 'rotate-180 transform transition-transform duration-300'
                          : 'transition-transform duration-300'
                      } h-4 w-4`}
                    />
                  </Popover.Button>
                  <Popover.Panel className='absolute z-50 w-40 px-2'>
                    <div className='scrollbar-thinner flex flex-col space-y-1 border bg-white p-2 shadow scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-200 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:scrollbar-thumb-neutral-700'>
                      {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((i) => (
                        <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                          Forth {i}
                        </SidebarNavLink>
                      ))}
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
          </>
        }
        sidebarAccordion={
          <>
            <SidebarNavAccordion name='One - Five'>
              {['One', 'Two', 'Three', 'Four', 'Five'].map((i) => (
                <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                  Forth {i}
                </SidebarNavLink>
              ))}
            </SidebarNavAccordion>
            <SidebarNavAccordion name='Six - Ten'>
              {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((i) => (
                <SidebarNavLink key={i} href={`/supabase/forth#${i}`}>
                  Forth {i}
                </SidebarNavLink>
              ))}
            </SidebarNavAccordion>
          </>
        }
        sidebar={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((i) => (
          <SidebarNavLink key={i} href={`/supabase/forth#${i}`} noWrap>
            Forth {i}
          </SidebarNavLink>
        ))}
      >
        <div
          id='One'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-slate-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Example Supabase Subnavbar Accordion scroll</h1>
        </div>
        <div
          id='Two'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-red-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Two</h1>
        </div>
        <div
          id='Three'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-orange-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Three</h1>
        </div>
        <div
          id='Four'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-yellow-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Four</h1>
        </div>
        <div
          id='Five'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-lime-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Five</h1>
        </div>
        <div
          id='Six'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-emerald-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Six</h1>
        </div>
        <div
          id='Seven'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-indigo-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Seven</h1>
        </div>
        <div
          id='Eight'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-violet-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Eight</h1>
        </div>
        <div
          id='Nine'
          className='mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-pink-500 lg:scroll-mt-16'
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Nine</h1>
        </div>
        <div id='Ten' className='flex h-96 scroll-mt-[108px] items-center justify-center bg-rose-500 lg:scroll-mt-16'>
          <h1 className='px-8 text-2xl font-medium text-white'>Ten</h1>
        </div>
      </LayoutForth>
    </>
  );
}
