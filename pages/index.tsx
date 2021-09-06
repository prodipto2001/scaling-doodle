import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HuracanKiller</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={"./me.jpeg"} className={styles.image} />
        <ul>
          <li>Hi, I’m @prodipto2001</li>
          <li>👀 I’m interested in UI/UX Designing and IoT.🌱</li>
          <li>I’m currently learning UX Design</li>
          <li>📫 Reach me on prodiptoofficial2001@gmail.com</li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
