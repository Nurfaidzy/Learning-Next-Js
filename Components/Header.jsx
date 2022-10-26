import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/Homepage">Pindah Homepage</Link>
      <br />
      <Link href="/">Back</Link>
    </div>
  );
}
