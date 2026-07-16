"use client";
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DateTableList from '@/components/DateTableList';
import DashboardCard4 from "@/components/DashboardCard4";

export default function Menu11Page() {
  const rows = [
    {
      id: 'r1',
      no: 1,
      barcode: '8809591316526',
      name: '신라면 블랙',
      storesHandled: '1,511',
      otherBuy: '4,480',
      otherSell: '5,600',
      otherProfit: '20%',
      otherSales: '150',
      ourBuy: '5,152',
      ourSell: '6,440',
      ourProfit: '20%',
      ourSales: '109',
      inventoryQty: '15.0%',
      inventoryAmount: '27.3%'
    }
  ];

  const renderRow = (row, idx) => (
    <tr key={row.id ?? idx} className="hover:bg-zinc-50">
      <td className="px-1 py-2 text-center">{row.no}</td>
      <td className="px-1 py-2 text-left">{row.barcode}</td>
      <td className="px-1 py-2 text-left">{row.name}</td>
      <td className="px-1 py-2 text-right">{row.storesHandled}</td>
      <td className="px-1 py-2 text-right">{row.otherBuy}</td>
      <td className="px-1 py-2 text-right">{row.otherSell}</td>
      <td className="px-1 py-2 text-right">{row.otherProfit}</td>
      <td className="px-1 py-2 text-right">{row.otherSales}</td>
      <td className="px-1 py-2 text-right">{row.ourBuy}</td>
      <td className="px-1 py-2 text-right">{row.ourSell}</td>
      <td className="px-1 py-2 text-right">{row.ourProfit}</td>
      <td className="px-1 py-2 text-right">{row.ourSales}</td>
      <td className="px-1 py-2 text-right">{row.inventoryQty}</td>
      <td className="px-1 py-2 text-right">{row.inventoryAmount}</td>
    </tr>
  );

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex flex-col gap-6">
        <DashboardCard4 type="" />

        <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchTab tabs={[
            '전체',
            'A. 유지',
            'B. 점검필요',
            'C. 강점확인',
            'D. 교체검토'
          ]} />
          <SearchBar />

          <div className="min-h-150 -mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm overflow-hidden">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '60px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-blue-900/90">
                <tr>
                  <th rowSpan="2" className="p-2 py-0.5 text-center font-normal">No.</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">바코드</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">상품명</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-right font-normal">취급점</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal">타매장 평균</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal">우리 매장</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-right font-normal">재고수량</th>
                  <th rowSpan="2" className="p-2 pr-6 py-0.5 text-right font-normal">재고금액</th>
                </tr>
                <tr>
                  <th className="p-2 py-0.5 text-right font-normal">매입가</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매가</th>
                  <th className="p-2 py-0.5 text-right font-normal">이익율</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매량</th>
                  <th className="p-2 py-0.5 text-right font-normal">매입가</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매가</th>
                  <th className="p-2 py-0.5 text-right font-normal">이익율</th>
                  <th className="p-2 py-0.5 text-right font-normal">판매량</th>
                </tr>
              </thead>
              <DateTableList rows={rows} renderRow={renderRow} rowKey="id" />
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}