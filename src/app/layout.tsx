import type { Metadata } from "next";
import "./styles/globals.css";
import { dahyun, pretendard } from "./styles/fonts";

export const metadata: Metadata = {
  title: "낮잠자는 고양이",
  description: "재밌게 공부하는 Next 15!",
  icons : {
    icon : "/assets/images/logo/favicon.ico"
  }
};

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dahyun.variable} ${pretendard.variable}`}>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
