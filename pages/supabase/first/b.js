import { useContext } from 'react';
import Head from 'next/head';
import Layout from '@components/supabase/Layout';
import SidebarNavAccordion from '@components/supabase/SidebarNavAccordion';
import SidebarNavLink from '@components/supabase/SidebarNavLink';
import { GlobalContext } from '@utils/GlobalContext';

export default function Index() {
  const { showSidebarMenu } = useContext(GlobalContext);
  return (
    <>
      <Head>
        <title>First B Collapse Sub Sidebar - Supabase Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout
        sidebarTitle='First B'
        sidebar={
          <>
            <SidebarNavAccordion name='B - One - Five'>
              {['One', 'Two', 'Three', 'Four', 'Five'].map((i) => (
                <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
                  First B {i}
                </SidebarNavLink>
              ))}
            </SidebarNavAccordion>
            <SidebarNavAccordion name='B - Six - Ten'>
              {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((i) => (
                <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
                  First B {i}
                </SidebarNavLink>
              ))}
            </SidebarNavAccordion>
            {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map((i) => (
              <SidebarNavLink key={i} href={`/supabase/first/b#${i}`}>
                First B {i}
              </SidebarNavLink>
            ))}
          </>
        }
      >
        <div
          id='One'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-slate-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Example Supabase First B Collapse Sub Sidebar</h1>
        </div>
        <div
          id='Two'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-red-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Two</h1>
        </div>
        <div
          id='Three'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-orange-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Three</h1>
        </div>
        <div
          id='Four'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-yellow-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Four</h1>
        </div>
        <div
          id='Five'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-lime-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Five</h1>
        </div>
        <div
          id='Six'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-emerald-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Six</h1>
        </div>
        <div
          id='Seven'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-indigo-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Seven</h1>
        </div>
        <div
          id='Eight'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-violet-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Eight</h1>
        </div>
        <div
          id='Nine'
          className={`mb-4 flex h-96 scroll-mt-[108px] items-center justify-center bg-pink-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Nine</h1>
        </div>
        <div
          id='Ten'
          className={`flex h-96 scroll-mt-[108px] items-center justify-center bg-rose-500 ${
            showSidebarMenu ? 'lg:scroll-mt-16' : ''
          }`}
        >
          <h1 className='px-8 text-2xl font-medium text-white'>Ten</h1>
        </div>
      </Layout>
    </>
  );
}
