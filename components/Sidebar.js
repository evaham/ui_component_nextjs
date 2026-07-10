"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "대시보드(홈)" },
  { href: "/menu01", label: "상품경쟁력분석" },
  { href: "/menu02", label: "가격탄력성" },
  { href: "/menu03", label: "특매효과 측정" },
  { href: "/menu04", label: "매입단가 포지션" },
  { href: "/menu05", label: "급상승 상품" },
  { href: "/menu06", label: "급상승 상품 집계" },
  { href: "/menu07", label: "우리매장" },
  { href: "/menu08", label: "가격비교,단품매출비교" },
  { href: "/menu09", label: "미취급상품" },
  { href: "/menu10", label: "일별 매출비교" },
  { href: "/menu11", label: "매출속보" },
];

function getNavClass(isActive) {
  return isActive
    ? "block px-2 py-1 rounded bg-blue-100 text-blue-900 font-semibold"
    : "block px-2 py-1 rounded hover:bg-gray-100 text-zinc-700";
}

export default function Sidebar({ open }) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block sticky top-0 w-64 p-4 bg-white border-r border-zinc-200 overflow-y-auto">
        <div className="text-lg font-semibold mb-4">투게더 데이터</div>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={getNavClass(isActive)}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 모바일 사이드바 */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white p-4 border-r border-zinc-200 transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="space-y-2">
          {navItems.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={getNavClass(isActive)}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 모바일 오버레이 백드롭 */}
      {open && (
        <div className="fixed inset-0 z-30 bg-black/30 md:hidden" />
      )}
    </>
  );
}
