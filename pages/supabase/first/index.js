import Head from "next/head";
import Layout from "@components/supabase/Layout";
import SidebarNavLink from "@components/supabase/SidebarNavLink";
import SidebarNavAccordion from "@components/supabase/SidebarNavAccordion";

export default function Index() {
  return (
    <>
      <Head>
        <title>First - Supabase Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout sidebarTitle="First" sidebar={
        <>
          <SidebarNavAccordion name="One - Five">
            {['One', 'Two', 'Three', 'Four', 'Five'].map(i =>
              <SidebarNavLink key={i} href={`/supabase/first#${i}`}>
                First {i}
              </SidebarNavLink>
            )}
          </SidebarNavAccordion>
          <SidebarNavAccordion name="Six - Ten">
            {['Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
              <SidebarNavLink key={i} href={`/supabase/first#${i}`}>
                First {i}
              </SidebarNavLink>
            )}
          </SidebarNavAccordion>
          {['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'].map(i =>
            <SidebarNavLink key={i} href={`/supabase/first#${i}`}>
              First {i}
            </SidebarNavLink>
          )}
        </>
      }>
        <div id="One" className="bg-slate-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Example Supabase Layout</h1>
        </div>
        <div id="Two" className="bg-red-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Two</h1>
        </div>
        <div id="Three" className="bg-orange-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Three</h1>
        </div>
        <div id="Four" className="bg-yellow-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Four</h1>
        </div>
        <div id="Five" className="bg-lime-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Five</h1>
        </div>
        <div id="Six" className="bg-emerald-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Six</h1>
        </div>
        <div id="Seven" className="bg-indigo-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Seven</h1>
        </div>
        <div id="Eight" className="bg-violet-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Eight</h1>
        </div>
        <div id="Nine" className="bg-pink-500 h-96 mb-4 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Nine</h1>
        </div>
        <div id="Ten" className="bg-rose-500 h-96 flex items-center justify-center scroll-mt-14">
          <h1 className="text-white font-medium text-2xl px-8">Ten</h1>
        </div>
      </Layout>
    </>
  )
}