import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      {/* <a href="/Homepage">pindah</a> */}
      <Link href="/Homepage">Pindah Homepage</Link>
      {/* catatan : tinggal paging params dan disesuaikan dengan kebutuhan but using Link */}
      <h1>learning next js</h1>
    </div>
  );
}
