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
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white shadow-xs transition-all">
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
          <div className="min-h-150 -mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="border-b border-zinc-200 text-white bg-blue-900/90">
                <tr>
                  <th rowSpan="2" className="p-2 py-0.5 text-center font-normal">No.</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">바코드</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-left font-normal">상품명</th>
                  <th rowSpan="2" className="p-2 py-0.5 text-right font-normal">취급점</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal bg-blue-100/15">특매 적용/미적용 일평균 판매량</th>
                  <th colSpan="4" className="p-2 py-0.5 text-center font-normal">우리 매장 판매량</th>
                </tr>
                <tr>
                  <th className="p-2 py-0.5 text-right font-normal bg-blue-100/15">특매 매장수</th>
                  <th className="p-2 py-0.5 text-right font-normal bg-blue-100/15">미적용 시</th>
                  <th className="p-2 py-0.5 text-right font-normal bg-blue-100/15">적용 시</th>
                  <th className="p-2 py-0.5 text-right font-normal bg-blue-100/15">증가(%)</th>
                  <th className="p-2 py-0.5 text-right font-normal">미적용 시</th>
                  <th className="p-2 py-0.5 text-right font-normal">예상</th>
                  <th className="p-2 py-0.5 text-right font-normal">적용 시</th>
                  <th className="p-2 pr-6 py-0.5 text-right font-normal">증가(%)</th>
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