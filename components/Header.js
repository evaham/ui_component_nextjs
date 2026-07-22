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
};

export default function Header({ onToggle }) {
    const pathname = usePathname();
    const title = pageTitles[pathname] ?? "알림판";
  return (
    <header className="w-full h-14 bg-white border-b border-gray-300 flex items-center px-4 shadow-sm">
      <button
        onClick={onToggle}
        className="md:hidden mr-3 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="메뉴 토글"
      >
        메뉴
      </button>
      <div className="text-lg font-semibold">{title}</div>
      <Link href="/login" className="ml-auto text-sm">로그아웃</Link>
    </header>
  );
}
