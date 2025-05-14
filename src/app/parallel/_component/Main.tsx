"use client"

import Image from "next/image";
import styles from "@/app/parallel/_component/main.module.css"
import sLogo from "public/assets/images/logo/sLogo.png"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Main() {

  const router = useRouter();
  const locationLogin = () => {
    router.push("/parallel/login")
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={sLogo} alt="logo" width={500} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link className={styles.button} href="/parallel/join">계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <button onClick={locationLogin} className={styles.button}>로그인</button>
      </div>
    </div>
  );
}