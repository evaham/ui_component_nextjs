"use client";

import { usePathname } from "next/navigation";

const pageTitles = {
  "/": "대시보드(홈)",
  "/menu01": "상품경쟁력분석",
  "/menu02": "가격탄력성",
  "/menu03": "특매효과 측정",
  "/menu04": "매입단가 포지션",
  "/menu05": "급상승 상품",
  "/menu06": "뜨는 신상품",
  "/menu07": "특매효과 측정",
  "/menu08": "우리매장",
  "/menu09": "가격비교 · 단품매출비교",
  "/menu10": "미취급상품",
  "/menu11": "일별 매출비교",
  "/menu12": "매출속보",
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
      <div className="ml-auto text-sm">관리 · 공유</div>
    </header>
  );
}
