"use client"

import { useRouter } from "next/navigation";
import styles from "./login.module.css"

export default function LoginModal() {

  const router = useRouter()
  const onClickToParallel = () => {
    router.back()
  }

  return (
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        로그인 모달
        <button onClick={onClickToParallel}>X</button>
      </div>
    </div>
  );
}