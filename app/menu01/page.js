"use client";
import SearchBar from "@/components/SearchBar";
import SearchTab from "@/components/SearchTab";
import DateTableList from '@/components/DateTableList';

export default function Menu01Page() {
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


        <div className="flex flex-col gap-4 overflow-x-auto p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm">A. 유지</div>
              <div>
                <span className="text-3xl font-bold">87</span>개
              </div>
              <div className="text-sm">전국 평균 유지</div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm">B. 점검필요</div>
              <div>
                <span className="text-3xl font-bold">12</span>개
              </div>
              <div className="text-sm">우리매장만 판매 저조</div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm">C. 강점확인</div>
              <div>
                <span className="text-3xl font-bold">3</span>개
              </div>
              <div className="text-sm">우리매장 잘 팔림</div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm">D. 교체검토</div>
              <div>
                <span className="text-3xl font-bold">3</span>개
              </div>
              <div className="text-sm">전국 판매 저조</div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-sm">
                전월 전국매장 평균 대비 <br/>
                우리 매장 판매량 비교
              </div>
              <button>기준 자세히 보기</button>
              <div className="text-sm">2026.5.1 ~ 2026.5.31</div>
            </div>
          </div>
          <div>
            <SearchTab />
            <SearchBar />
          </div>
          <div className="overflow-y-auto h-150 border-y border-zinc-200">
            <table className="table-fixed w-full border-collapse bg-white text-sm overflow-hidden">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '60px' }} />
              </colgroup>
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th rowSpan="2" className="px-1 py-0.5 text-center font-semibold text-zinc-600 uppercase tracking-wider">No.</th>
                  <th rowSpan="2" className="px-1 py-0.5 text-left font-semibold text-zinc-600 uppercase tracking-wider">바코드</th>
                  <th rowSpan="2" className="px-1 py-0.5 text-left font-semibold text-zinc-600 uppercase tracking-wider">상품명</th>
                  <th rowSpan="2" className="px-1 py-0.5 text-right font-semibold text-zinc-600 uppercase tracking-wider">취급점</th>
                  <th colSpan="4" className="px-1 py-0.5 text-center font-semibold text-blue-800 bg-blue-50/50 uppercase tracking-wider underline-offset-4 decoration-2">타매장 평균</th>
                  <th colSpan="4" className="px-1 py-0.5 text-center font-semibold text-emerald-800 bg-emerald-50/50 uppercase tracking-wider">우리 매장</th>
                  <th rowSpan="2" className="px-1 py-0.5 text-right font-semibold text-zinc-600 uppercase tracking-wider">재고수량</th>
                  <th rowSpan="2" className="px-1 py-0.5 text-right font-semibold text-zinc-600 border-zinc-200 uppercase tracking-wider">재고금액</th>
                </tr>
                <tr>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">매입가</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">판매가</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">이익율</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">판매량</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">매입가</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">판매가</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">이익율</th>
                  <th className="px-1 py-0.5 text-right font-semibold text-zinc-600 bg-blue-50/30">판매량</th>
                </tr>
              </thead>
              <DateTableList rows={rows} renderRow={renderRow} rowKey="id" />
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}