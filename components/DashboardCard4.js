'use client';

export default function DashboardCard4({ type }) {
  return (
    <div className="p-4 border border-zinc-200 rounded-xl bg-white shadow-xs transition-all">
      {/* 매출속보 / 랭킹 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#26499d] rounded-full"></div>
          { type === "sales" ? (
            <span className="font-bold text-zinc-900 tracking-tight">매출속보 / 랭킹</span>
          ) : (
            <span className="font-bold text-zinc-900 tracking-tight">어제 (날짜) 매출</span>
          )}
        </div>
        { type === "sales" ? (
          <button className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-xs font-medium rounded-full transition-colors cursor-pointer">
            상세 더보기
          </button>
        ) : (
          <button className="px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-xs font-medium rounded-full transition-colors cursor-pointer">
            상세 더보기
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="flex flex-col p-5 bg-blue-50 rounded-xl">
          <div className="text-sm font-semibold text-zinc-500 mb-2 uppercase tracking-wider">우리매장</div>
          <div className="flex items-baseline gap-1">
            <div className="text-2xl font-black text-zinc-900">23,450,000</div>
            <span className="text-sm text-zinc-500">원</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="flex flex-col p-5 bg-white rounded-xl border border-zinc-200">
          <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-xl font-bold text-zinc-900">1,234,000,000</div>
            <span className="text-xs font-medium text-zinc-400">원</span>
          </div>
          <div className="text-xs font-bold text-[#26499d] bg-[#26499d]/5 px-2 py-1 rounded-md self-start">
            순위 158/1200
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="flex flex-col p-5 bg-white rounded-xl border border-zinc-200">
          <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-xl font-bold text-zinc-900">18,400,000</div>
            <span className="text-xs font-medium text-zinc-400">원</span>
          </div>
          <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md self-start">
            순위 3/20
          </div>
        </div>

        {/* 전국평균 */}
        <div className="flex flex-col p-5 bg-zinc-50 rounded-xl border border-zinc-100">
          <div className="text-xs font-semibold text-zinc-500 mb-2 uppercase tracking-wider">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-xl font-bold text-zinc-900">1,234,000,000</div>
            <span className="text-xs font-medium text-zinc-400">원</span>
          </div>
          <div className="text-xs font-medium text-zinc-400">
            순위 158/1200
          </div>
        </div>
      </div>
    </div>
  );
}
