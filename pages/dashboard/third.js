import Head from 'next/head';
import ExLayoutDashboard from '@components/exdashboard/ExLayoutDashboard';

export default function Third() {
  return (
    <>
      <Head>
        <title>Third - Dashboard</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ExLayoutDashboard>
        <div className='flex h-96 items-center justify-center bg-orange-500'>
          <h1 className='px-8 text-2xl font-medium text-white'>Example Dashboard Layout using Component</h1>
        </div>
        <div className='h-96 bg-purple-500'></div>
        <div className='h-96 bg-pink-500'></div>
      </ExLayoutDashboard>
    </>
  );
}
