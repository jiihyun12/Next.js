export default function Page() {

  // 5분
  return (
    <div className="flex flex-col h-dvh">
      <header className="w-dvw h-20 bg-yellow-200">헤더</header>
      <main className="w-dvw flex-1 bg-green-300">메인</main>
      <footer  className="w-dvw h-20 bg-yellow-200">푸터</footer>
    </div>
  );
}