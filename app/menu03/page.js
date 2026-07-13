import SearchBar from "@/components/SearchBar";
import DateTableList from '@/components/DateTableList';

export default function Menu03Page() {
  const rows = [
    {
      id: 'r1',
      no: 1,
      바코드: '8809591316526',
      상품명: '신라면 블랙',
      품목포지션: '1,511',
      평균판매가: '4,480',
      우리판매가: '5,600',
      판매가비교: '27.3% down'
    }
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
          <SearchBar
            searchFilters={[
              { label: '상위 100개', options: [{ value: 'top100', label: '상위 100개' }] },
              { label: '지역', options: [{ value: '', label: '전체' }, { value: 'seoul', label: '서울' }, { value: 'daegu', label: '대구' }] },
              { label: '상품군', options: [{ value: '', label: '전체' }, { value: 'ramen', label: '라면' }, { value: 'snack', label: '과자' }] }
            ]}
            centerFilters={[
              { label: '대분류', options: [{ value: '', label: '대분류' }] },
              { label: '중분류', options: [{ value: '', label: '중분류' }] },
              { label: '소분류', options: [{ value: '', label: '소분류' }] }
            ]}
            placeholder="바코드, 상품명"
            buttonLabel="조회"
          />
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
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">품목포지션</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">우리 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">판매가 비교</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}