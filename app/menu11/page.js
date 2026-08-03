"use client";
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DataTableList from '@/components/DataTableList';
import DashboardCard4 from "@/components/DashboardCard4";

export default function Menu11Page() {
  const rows = [
    { id: 'r1', no: 1, 지역: '서울', 규모: '100평 이하', 점포명: 'S마트', 매출액: '31,241,480', 객수: '5,600', 객단가: '32,124', 수집시각: '26-04-10', },

  ];

  return (
    <div className="contents-group">
      <div className="flex flex-col gap-4">
        <DashboardCard4 type="" />

        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar />
          <div className="table-container">
            <table className="table-data">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '60px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">지역</th>
                  <th className="p-2 text-left font-normal">규모</th>
                  <th className="p-2 text-left font-normal">매장명</th>
                  <th className="p-2 text-right font-normal">매출액</th>
                  <th className="p-2 text-right font-normal">객수</th>
                  <th className="p-2 text-right font-normal">객단가</th>
                  <th className="p-2 pr-6 text-center font-normal">수집시각</th>
                </tr>
              </thead>
              <DataTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}