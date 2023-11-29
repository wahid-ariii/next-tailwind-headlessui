import Head from 'next/head';

import LayoutDashboardThird from '@components/dashboarddd/LayoutDashboardThird';

export default function Index() {
  return (
    <>
      <Head>
        <title>Dashboarddd</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutDashboardThird>
        <div className='flex h-96 items-center justify-center bg-orange-500'>
          <h1 className='px-8 text-2xl font-medium text-white'>Example Dashboard Layout Collapse Sidebar</h1>
        </div>
        <div className='h-96 bg-purple-500'></div>
        <div className='h-96 bg-pink-500'></div>
      </LayoutDashboardThird>
    </>
  );
}
