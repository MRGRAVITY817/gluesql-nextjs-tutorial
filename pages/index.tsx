import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>GlueSQL</title>
      </Head>
      <div className="p-24">
        <h1 className="text-2xl">Hello world!</h1>
      </div>
    </div>
  );
};

export default Home;
