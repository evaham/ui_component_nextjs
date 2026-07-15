import SearchBar from "@/components/SearchBar";
import DateTableList from '@/components/DateTableList';

export default function Menu04Page() {
  const rows = [
    {
      id: 'r1', no: 1, 바코드: '8809591316526', 상품명: '신라면 블랙', position: '1,511', avgPrice: '4,480', ourPrice: '5,600', comparison: '27.3% down'
    }
  ];

  return (
    <div className="flex flex-col flex-1 max-w-7xl justify-center">
      <main className="flex items-start gap-6">
        <div className="flex-1 flex flex-col gap-4 p-6 rounded-2xl bg-white">
          <SearchBar
            searchFilters={[
              { label: '지역', options: [{ value: '', label: '전체' }, { value: 'seoul', label: '서울' }, { value: 'busan', label: '부산' }] },
              { label: '규모', options: [{ value: '', label: '전체' }, { value: 'small', label: '200평 이하' }, { value: 'large', label: '200평 이상' }] },
              { label: '정렬', options: [{ value: 'position', label: '포지션순' }, { value: 'sales', label: '매출순' }] }
            ]}
            centerFilters={[]}
            placeholder="바코드, 상품명"
            buttonLabel="조회"
          />

          <div className="overflow-y-auto h-170 -mx-6 border-y border-zinc-100">
            <table className="table-fixed w-full border-collapse bg-white text-sm">
              <colgroup>
                <col style={{ width: '40px' }} />
                <col style={{ width: '120px' }} />
                <col style={{ width: '150px' }} />
              </colgroup>
              <thead className="sticky top-0 z-10 border-b border-zinc-200 text-white bg-[#26499d]">
                <tr>
                  <th className="p-2 text-center font-normal">No.</th>
                  <th className="p-2 text-left font-normal">바코드</th>
                  <th className="p-2 text-left font-normal">상품명</th>
                  <th className="p-2 text-right font-normal">품목포지션</th>
                  <th className="p-2 text-right font-normal">평균 판매가</th>
                  <th className="p-2 text-right font-normal">우리 판매가</th>
                  <th className="p-2 pr-6 text-right font-normal">판매가 비교</th>
                </tr>
              </thead>
              <DateTableList rows={rows} rowKey="id" />
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}
        <div className="flex flex-col gap-4 w-80 p-6 rounded-2xl bg-white">
          <div className="">농심바나나킥</div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="flex-1 flex flex-col gap-1 border border-zinc-200 rounded-xl p-4">
              <div className="text-sm">현 단가 유지</div>
              <div>
                <span className="text-3xl font-bold">2,500</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 border border-zinc-200 rounded-xl p-4">
              <div className="text-sm">추천</div>
              <div>
                <span className="text-3xl font-bold">2,500</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 border border-zinc-200 rounded-xl p-4">
              <div className="text-sm">비효율</div>
              <div>
                <span className="text-3xl font-bold">2,500</span>원
              </div>
              <div className="text-sm">
                <dl className="flex gap-1 justify-between">
                  <dt>이익율</dt>
                  <dd>28 %</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>예상 판매량</dt>
                  <dd>18 개</dd>
                </dl>
                <dl className="flex gap-1 justify-between">
                  <dt>월 실현이익</dt>
                  <dd>12,100 원</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}