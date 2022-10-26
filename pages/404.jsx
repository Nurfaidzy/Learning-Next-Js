import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      console.log("pindah kau");
      router.push("/");
    }, 2000);
  }, []);
  return <div>kozong bro</div>;
}
