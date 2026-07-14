import Image from "next/image";
import DashboardCard4 from "@/components/DashboardCard4";
import RollingBanner from "@/components/RollingBanner";
import LineGraph from "@/components/LineGraph";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex flex-col gap-4">
        {/* 매출속보 */}
        <DashboardCard4 type="sales" />

        {/* 어제 매출현황 */}
        <DashboardCard4 type="yesterday" />

        <div className="flex gap-4">
          {/* 그래프영역 */}
          <div className="flex-2 flex flex-col gap-4">
            <LineGraph />
            <LineGraph />
          </div>
          {/* 롤링 배너영역 */}
          <RollingBanner />
        </div>
      </main>
    </div>
  );
}
