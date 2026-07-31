'use client';
import SearchBar from "@/components/SearchBar";
import DataTableList from '@/components/DataTableList';

export default function Menu09Page() {
  const rows = [
    { id: 'r1', no: 1, data01: '8809591316526', data02: '신라면 블랙', data03: '1,511', data04: '321,480', data05: '3,125,600', data06: '999,999',data07: '123,123,123',data08: '2023-06-02',  },
  ];

  return (
    <div className="contents-group">
      <div className="flex items-start gap-4">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar />
          <div className="min-h-100 -mx-6 border-y border-zinc-100 bg-black/1">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#4A5B6D]">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">바코드</th>
                  <th className="p-2 text-left font-normal">상품명</th>
                  <th className="p-2 text-right font-normal">취급점</th>
                  <th className="p-2 text-right font-normal">평균 매입가</th>
                  <th className="p-2 text-right font-normal">평균 판매가</th>
                  <th className="p-2 text-right font-normal">평균 판매량</th>
                  <th className="p-2 text-right font-normal">평균 판매액</th>
                  <th className="p-2 pr-6 text-right font-normal">등록일</th>
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