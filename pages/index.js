import Hero from "@/components/Hero";
import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Typelabs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <hr className="w-full border-2 border-Leal" />

      <section className=" bg-fixed bg-center bg-cover bg-[url('/background.png')]">
        <Hero />
      </section>
      <Footer />
    </>
  );
}
