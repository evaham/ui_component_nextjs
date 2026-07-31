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
    return <div className="login-wrapper">{children}</div>;
  }

  return (
    <div className="wrapper">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="container-wrapper">
        <Header onToggle={() => setOpen((v) => !v)} />
        <main className="main">{children}</main>
      </div>
    </div>
  );
}
