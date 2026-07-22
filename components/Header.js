"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pageTitles = {
  "/": "대시보드(홈)",
  "/menu01": "상품경쟁력분석",
  "/menu02": "가격탄력성",
  "/menu03": "특매효과 측정",
  "/menu04": "매입단가 포지션",
  "/menu05": "급상승 상품",
  "/menu06": "급상승 상품 집계",
  "/menu07": "우리매장",
  "/menu08": "가격비교 · 단품매출비교",
  "/menu09": "미취급상품",
  "/menu10": "일별 매출비교",
  "/menu11": "매출속보",
  "/menu12": "모바일 반응형 UI 테스트용",
};

export default function Header({ onToggle }) {
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? "알림판";
  return (
    <header className="w-full flex flex-col items-center bg-white shadow-sm">
      <div className="hidden md:flex items-center w-full h-14 px-4 bg-white border-b border-gray-300 ">
        <button
          onClick={onToggle}
          className="md:hidden mr-3 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="메뉴 토글"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
        <div className="text-lg font-semibold">{title}</div>
        <Link href="/login" className="ml-auto text-sm">로그아웃</Link>
      </div>
      
      {/* 모바일에서만 보이는 헤더 */}
      <div className="flex md:hidden items-center w-full h-14 px-4 bg-white border-b border-gray-300 ">
        <button
          onClick={onToggle}
          className="md:hidden -ml-2 mr-3 px-2 py-1 rounded hover:bg-gray-100"
          aria-label="메뉴 토글"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#333333"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
        <div className="text-lg font-semibold">{title}</div>
        <Link href="/login" className="ml-auto text-sm">로그아웃</Link>
      </div>
    </header>
  );
}
