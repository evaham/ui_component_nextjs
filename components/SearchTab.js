export default function SearchTab() {
  return (
    <div className="flex items-center justify-between">
      {/* 탭 버튼 */}
      <div className="flex">
        <button className="px-3 py-1 bg-zinc-300 font-medium rounded-tl transition-colors cursor-pointer">전체</button>
        <button className="px-3 py-1 bg-zinc-300 font-medium transition-colors cursor-pointer">A. 유지</button>
        <button className="px-3 py-1 bg-zinc-300 font-medium transition-colors cursor-pointer">B. 점검필요</button>
        <button className="px-3 py-1 bg-zinc-300 font-medium transition-colors cursor-pointer">C. 강점확인</button>
        <button className="px-3 py-1 bg-zinc-300 font-medium rounded-tr transition-colors cursor-pointer">D. 교체검토</button>
      </div>
      {/* 탭 버튼클릭 시 설명표시 */}
      <div>
        <span className="text-sm text-zinc-500">A구간 : 전국 평균 유지 품목</span>
        <span className="text-sm text-zinc-500">B구간 : 즉시 점검 필요 품목</span>
        <span className="text-sm text-zinc-500">C구간 : 우리매장 강점 품목</span>
        <span className="text-sm text-zinc-500">D구간 : 전국 평균 대비 저조 품목</span>
      </div>
    </div>
  )
}