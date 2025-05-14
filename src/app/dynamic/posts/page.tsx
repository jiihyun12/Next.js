import { Suspense } from "react";
import Posts from "./_component/Posts";

export default function Page() {
  
  return (
    <>
      게시글 목록
      <Suspense fallback={<p>로딩중...😎</p>}>
        <Posts />
      </Suspense>
    </>
  );
}
