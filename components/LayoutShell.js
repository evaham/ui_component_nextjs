"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function LayoutShell({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full flex">
      <Sidebar open={open} />
      <div className="flex flex-col flex-1">
        <Header onToggle={() => setOpen((v) => !v)} />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
