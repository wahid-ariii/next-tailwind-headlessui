import Head from "next/head";
import LayoutDashboardIcon from "@components/dashboardicon/LayoutDashboardIcon";

export default function Index() {
  return (
    <>
      <Head>
        <title>Third - Dashboard Icon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutDashboardIcon>
        <div className="bg-orange-500 h-96 flex items-center justify-center">
          <h1 className="text-white font-medium text-2xl px-8">Third Dashboard Icon</h1>
        </div>
        <div className="bg-purple-500 h-96">
        </div>
        <div className="bg-pink-500 h-96">
        </div>
      </LayoutDashboardIcon>
    </>
  )
}