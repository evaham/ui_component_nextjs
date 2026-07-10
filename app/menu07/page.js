'use client';
import { useState } from 'react';
import DashboardCard4 from '@/components/DashboardCard4';
import LineGraph from '@/components/LineGraph';
import RollingBanner from '@/components/RollingBanner';

export default function Menu07Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 max-w-260 justify-center">
      <main className="flex flex-col gap-6">
        {/* 매출속보 */}
        <DashboardCard4 type="sales" />

        <div className="flex gap-4">
          {/* 그래프영역 */}
          <div className="flex-2 flex flex-col gap-4">
            <LineGraph />
            <LineGraph />
          </div>
        </div>
      </main>
    </div>

  )
}
