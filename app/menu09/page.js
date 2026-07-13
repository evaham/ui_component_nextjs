'use client';
import SearchBar from "@/components/SearchBar";
import DateTableList from '@/components/DateTableList';

export default function Menu09Page() {
  const rows = [
    { id: 'r1', no: 1, data01: '8809591316526', data02: '신라면 블랙', data03: '1,511', data04: '321,480', data05: '3,125,600', data06: '999,999',data07: '123,123,123',data08: '2023-06-02',  },
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
          <SearchBar />
          <div className="overflow-y-auto h-150 border-y border-zinc-200">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="bg-zinc-50 border-b border-zinc-200 sticky top-0 z-10">
                <tr>
                  <th className="px-1 py-2 text-center font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">No.</th>
                  <th className="px-1 py-2 text-left font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">바코드</th>
                  <th className="px-1 py-2 text-left font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">상품명</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">취급점</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 매입가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매량</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매액</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">등록일</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}

      </main>
    </div>
  )
}