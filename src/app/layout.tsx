import type { Metadata } from "next";
import "./styles/globals.css";



export const metadata: Metadata = {
  title: "Alive",
  description: "재미있게 공부하는 Next 15!",
  icons : {
    icon : "/assets/images/logo/favicon.ico" // root path는 public임
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
