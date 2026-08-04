import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./data_style.css";
import LayoutShell from "../components/LayoutShell";
import localFont from "next/font/local";

// const pretendard = localFont({
//   src: "../public/fonts/PretendardVariable.woff2",
//   variable: "--font-pretendard",
//   display: "swap",
//   weight:"45 920",
// });


const pretendardGov = localFont({
  src: "../public/fonts/PretendardGOVVariable.woff2",
  variable: "--font-pretendard-gov",
  display: "swap",
  weight:"45 920",
});



export const metadata = {
  title: "웹 UI 컴포넌트 가이드",
  description: "웹 UI 컴포넌트 가이드입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${pretendardGov.variable}`}>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
