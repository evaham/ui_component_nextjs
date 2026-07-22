"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutShell({ children }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 로그인 경로일 경우 Header/Sidebar를 렌더하지 않고 children만 반환
  if (pathname && pathname.startsWith("/login")) {
    return <div className="min-h-full">{children}</div>;
  }

  return (
    <div className="min-h-full flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="flex flex-col flex-1">
        <Header onToggle={() => setOpen((v) => !v)} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
