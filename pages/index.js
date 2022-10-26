import Image from "next/image";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div>
      <dir>
        <Header />
      </dir>
      <Image src="/phonejpg.jpeg" width={200} height={200} />
      <h1>learning next js</h1>
    </div>
  );
}
