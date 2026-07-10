import SearchBar from "@/components/SearchBar";

export default function Menu05Page() {
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
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">품목포지션</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">평균 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">우리 판매가</th>
                  <th className="px-1 py-2 text-right font-semibold text-zinc-600 uppercase tracking-wider bg-zinc-50">판매가 비교</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                <tr className="hidden">
                  <td colSpan="14" className="px-4 py-12 text-center text-zinc-400">데이터를 준비 중입니다.</td>
                </tr>
                <tr className="hover:bg-zinc-50">
                  <td className="px-1 py-2 text-center">1</td>
                  <td className="px-1 py-2 text-left">8809591316526</td>
                  <td className="px-1 py-2 text-left"><a href="#" className="text-blue-700 hover:underline">신라면 블랙</a></td>
                  <td className="px-1 py-2 text-right">1,511</td>
                  <td className="px-1 py-2 text-right">4,480</td>
                  <td className="px-1 py-2 text-right">5,600</td>
                  <td className="px-1 py-2 text-right">27.3%<span>down</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 그래프 정보 */}
        <div className="flex flex-col gap-4 w-80 p-6 border border-zinc-200 rounded-xl bg-white shadow-sm">
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