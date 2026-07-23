'use client';
import { useState } from 'react';
import DashboardCard4 from '@/components/DashboardCard4';
import LineGraph from '@/components/LineGraph';
import RollingBanner from '@/components/RollingBanner';

export default function Menu07Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <div className="flex flex-col gap-4">
        {/* 매출속보 */}
        <DashboardCard4 type="today" />

        <div className="flex gap-4">
          {/* 그래프영역 */}
          <div className="flex-1 flex flex-col gap-4">
            <LineGraph />
            <LineGraph />
          </div>
        </div>
      </div>
    </div>

  )
}
