import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      {/* Head from nextjs allows us to add metadata to each component individually */}
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a ex
          sapien. Vestibulum sit amet viverra arcu. Aenean sed turpis vel erat
          fringilla gravida ut id lectus. Aliquam finibus non ex id euismod.
          Aliquam gravida leo nec auctor lacinia. Integer ut malesuada tortor.
          Nam tempus augue sed malesuada ultricies.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a ex
          sapien. Vestibulum sit amet viverra arcu. Aenean sed turpis vel erat
          fringilla gravida ut id lectus. Aliquam finibus non ex id euismod.
          Aliquam gravida leo nec auctor lacinia. Integer ut malesuada tortor.
          Nam tempus augue sed malesuada ultricies.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
