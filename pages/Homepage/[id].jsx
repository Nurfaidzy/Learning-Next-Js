import { useRouter } from "next/router";

export default function cariIdi() {
  const router = useRouter();
  const { id } = router.query;
  return <div> data yang diambil {id}</div>;
}
