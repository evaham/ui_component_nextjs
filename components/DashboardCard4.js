'use client';

export default function DashboardCard4({ type }) {
  return (
    <div className="p-6 shadow-xs rounded-2xl bg-white transition-all">
      {/* 매출속보 / 랭킹 */}
      <div className="flex items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#26499d] rounded-full"></div>
          { type === "sales" ? (
            <span className="font-bold text-zinc-900 tracking-tight">매출속보 / 랭킹</span>
          ) : type === "today" ? (
            <span className="font-bold text-zinc-900 tracking-tight">오늘 우리매장 매출은? (매출액/객수/객단가)</span>
          ) : (
            <span className="font-bold text-zinc-900 tracking-tight">어제 (날짜) 매출</span>
          )}
        </div>
        <button className="ml-4 text-sm text-zinc-600 font-medium cursor-pointer tracking-tighter">
          더보기
        </button>
      </div>
      
      {type === "sales" ? (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="flex flex-col p-5 bg-[#26499d]/90 rounded-2xl">
          <div className="text-sm font-bold text-zinc-100 mb-2">우리매장</div>
          <div className="flex items-baseline gap-1">
            <div className="text-4xl font-semibold text-white tracking-tight">23,450,000</div>
            <span className="text-sm font-medium text-zinc-100">원</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="flex flex-col p-5 rounded-2xl border border-zinc-200">
          <div className="text-sm font-bold text-zinc-500 mb-2">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            순위 158/1200
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="flex flex-col p-5 bg-white rounded-2xl border border-zinc-200">
          <div className="text-sm font-semibold text-zinc-500 mb-2">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">18,400,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            순위 3/20
          </div>
        </div>

        {/* 전국평균 */}
        <div className="flex flex-col p-5 bg-zinc-50 rounded-xl border border-zinc-100">
          <div className="text-sm font-semibold text-zinc-500 mb-2">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-zinc-700 bg-zinc-200 px-3 py-1 rounded-full self-start">
            순위 158/1200
          </div>
        </div>
      </div>
      ) : type === "today" ? (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="flex flex-col p-5 bg-[#26499d]/90 rounded-2xl">
          <div className="text-sm font-bold text-zinc-100 mb-2">매출액</div>
          <div className="flex items-baseline gap-1">
            <div className="text-4xl font-semibold text-white tracking-tight">23,450,000</div>
            <span className="text-sm font-medium text-zinc-100">원</span>
          </div>
          <div className="flex gap-2 mt-2 px-3 py-1 text-sm font-bold text-white bg-black/30 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-white/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>

        </div>

        {/* 전국 200평 이하 */}
        <div className="flex flex-col p-5 rounded-2xl border border-zinc-200">
          <div className="text-sm font-bold text-zinc-500 mb-2">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="flex flex-col p-5 bg-white rounded-2xl border border-zinc-200">
          <div className="text-sm font-semibold text-zinc-500 mb-2">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">18,400,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국평균 */}
        <div className="flex flex-col p-5 bg-zinc-50 rounded-xl border border-zinc-100">
          <div className="text-sm font-semibold text-zinc-500 mb-2">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-zinc-700 bg-zinc-200 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-zinc-400">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>
      ) :(
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="flex flex-col p-5 bg-[#26499d]/90 rounded-2xl">
          <div className="text-sm font-bold text-zinc-100 mb-2">우리매장</div>
          <div className="flex items-baseline gap-1">
            <div className="text-4xl font-semibold text-white tracking-tight">23,450,000</div>
            <span className="text-sm font-medium text-zinc-100">원</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="flex flex-col p-5 rounded-2xl border border-zinc-200">
          <div className="text-sm font-bold text-zinc-500 mb-2">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            순위 158/1200
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="flex flex-col p-5 bg-white rounded-2xl border border-zinc-200">
          <div className="text-sm font-semibold text-zinc-500 mb-2">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">18,400,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            순위 3/20
          </div>
        </div>

        {/* 전국평균 */}
        <div className="flex flex-col p-5 bg-zinc-50 rounded-xl border border-zinc-100">
          <div className="text-sm font-semibold text-zinc-500 mb-2">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1">
            <div className="text-3xl font-semibold text-zinc-900 tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium text-zinc-500">원</span>
          </div>
          <div className="mt-2 text-sm font-bold text-zinc-700 bg-zinc-200 px-3 py-1 rounded-full self-start">
            순위 158/1200
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
