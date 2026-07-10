import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "../components/LayoutShell";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight:"45 920",
});


export const metadata = {
  title: "웹 UI 컴포넌트 가이드",
  description: "웹 UI 컴포넌트 가이드입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} h-full antialiased`}
    >
      <body className="min-h-full h-full flex flex-col bg-zinc-50">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
