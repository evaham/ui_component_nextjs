import Image from "next/image";
import DashboardCard4 from "@/components/DashboardCard4";
import RollingBanner from "@/components/RollingBanner";
import LineGraph from "@/components/LineGraph";

export default function Home() {
  return (
    <div className="contents-group">
      <div className="dashboard-cards-container
      ">
        {/* 매출속보 */}
        <DashboardCard4 type="sales" className="dashboard-card" />
        <DashboardCard4 type="yesterday" className="dashboard-card" />
        <LineGraph className="line-graph" />
        <LineGraph className="line-graph" />
        <RollingBanner className="rolling-banner" />
      </div>
    </div>
  );
}
