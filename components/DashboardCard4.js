'use client';

export default function DashboardCard4({ type }) {
  return (
    <div className="p-6 rounded-2xl bg-white transition-all">

      {type === "sales" ? (
        <div className="flex items-center -mt-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">매출속보 / 랭킹</span>
          </div>
          <button className="ml-4 text-sm text-zinc-600 font-medium cursor-pointer tracking-tight">
            더보기
          </button>
        </div>
      ) : type === "today" ? (
        <div className="flex items-center -mt-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">오늘 우리매장 매출은? (매출액/객수/객단가)</span>
          </div>
          <button className="ml-4 text-sm text-zinc-600 font-medium cursor-pointer tracking-tight">
            더보기
          </button>
        </div>
      ) : type === "yesterday" ? (
        <div className="flex items-center -mt-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">어제 (7/30) 매출</span>
          </div>
          <button className="ml-4 text-sm text-zinc-600 font-medium cursor-pointer tracking-tight">
            더보기
          </button>
        </div>
      ) : null}
      
      {type === "sales" ? (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="flex items-center text-sm font-bold mb-2 tracking-tight">
            우리 매출액
          </div>
          <div className="flex items-baseline gap-1 mb-1 font-bold text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm text-blue-700 font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="relative flex flex-col gap-1 p-4 border border-zinc-100 rounded-2xl">
          <div className="flex gap-1 text-sm font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span>매장 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="mt-2 text-sm font-medium tracking-tight">전국 200평 이하</div>
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-bold tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="relative flex flex-col gap-1 p-4 border border-zinc-100 rounded-2xl">
          <div className="flex gap-1 text-sm font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span>우리매장 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="mt-2 text-sm font-medium tracking-tight">인천 200평 이하</div>
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-bold tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국평균 */}
        <div className="relative flex flex-col gap-1 p-4 bg-zinc-50 rounded-2xl">
          <div className="flex gap-1 text-sm font-bold bg-zinc-200 px-3 py-1 rounded-full self-start">
            <span>우리매장 순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
          <div className="mt-2 text-sm font-medium tracking-tight">전국 평균</div>
          <div className="flex items-baseline gap-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>

      ) : type === "today" ? (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="relative flex flex-col px-4 py-3 bg-[#26499d] rounded-2xl">
          <div className="text-sm font-bold text-zinc-100 mb-2">우리 매출액</div>
          <div className="flex items-baseline gap-1 font-bold text-white">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
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
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="text-sm font-bold mb-2 tracking-tight">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
          <div className="absolute top-3 right-3 flex gap-1 text-sm font-medium tracking-tight">
            <span>순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="text-sm font-bold mb-2 tracking-tight">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
          <div className="absolute top-3 right-3 flex gap-1 text-sm font-medium tracking-tight">
            <span>순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>

        </div>
        {/* 전국평균 */}
        <div className="relative flex flex-col px-4 py-3 bg-zinc-50 rounded-2xl">
          <div className="text-sm font-bold mb-2 tracking-tight">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm font-bold bg-zinc-200 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
          <div className="absolute top-3 right-3 flex gap-1 text-sm font-medium tracking-tight">
            <span>순위</span>
            <span className="text-blue-600 font-bold">158</span>
            <span className="text-black/20">/</span>
            <span>1200</span>
          </div>
        </div>
      </div>



      ) : type === "yesterday" ? (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="relative flex flex-col gap-1 p-4 border border-zinc-100 rounded-2xl">
          <div className="flex items-center text-sm font-bold tracking-tight">
            우리 매출액
          </div>
          <div className="absolute top-4 right-4 flex gap-1 text-sm font-medium tracking-tight">
            <span>이전일</span>
            <span className="font-bold text-red-500">- 5.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold text-blue-700">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 text-sm">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>

        </div>

        {/* 전국 200평 이하 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="flex items-center text-sm font-medium mb-2 tracking-tight">
            전국 200평 이하
          </div>
          <div className="absolute top-4 right-4 flex gap-1 text-sm font-medium tracking-tight">
            <span>이전일</span>
            <span className="font-bold text-blue-500">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>

        </div>

        {/* 인천 200평 이하 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="flex items-center text-sm font-medium mb-2 tracking-tight">
            인천 200평 이하
          </div>
          <div className="absolute top-4 right-4 flex gap-1 text-sm font-medium tracking-tight">
            <span>이전일</span>
            <span className="font-bold text-blue-500">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>


          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-1 mt-2 text-sm font-bold bg-zinc-100/50 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
        {/* 전국평균 */}
        <div className="relative flex flex-col px-4 py-3 bg-zinc-50 rounded-2xl">
          <div className="flex items-center text-sm font-medium mb-2 tracking-tight">
            전국 평균
          </div>
          <div className="absolute top-4 right-4 flex gap-1 text-sm font-medium tracking-tight">
            <span>이전일</span>
            <span className="font-bold text-blue-500">+ 8.3</span>
            <span className="font-bold">%</span>
          </div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold bg-zinc-200 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-bold">829</span>
            <span className="mx-1 text-black/20">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-bold">829</span>
          </div>
        </div>
      </div>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* 우리매장 */}
        <div className="relative flex flex-col px-4 py-3 bg-[#26499d] rounded-2xl">
          <div className="text-sm font-bold text-zinc-100 mb-2">우리 매출액</div>
          <div className="flex items-baseline gap-1 font-bold text-white">
            <div className="text-3xl tracking-tight">23,450,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-2 mt-2 px-3 py-1 text-sm font-bold text-white bg-black/30 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-semibold">829</span>
            <span className="mx-1 text-white/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-semibold">829</span>
          </div>
        </div>

        {/* 전국 200평 이하 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="text-sm font-bold mb-2">전국 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-semibold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-semibold">829</span>
          </div>
        </div>

        {/* 인천 200평 이하 */}
        <div className="relative flex flex-col p-4 border border-zinc-100 rounded-2xl">
          <div className="text-sm font-bold mb-2">인천 200평 이하</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">18,400,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-semibold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-semibold">829</span>
          </div>
        </div>
        {/* 전국평균 */}
        <div className="relative flex flex-col px-4 py-3 bg-zinc-50 rounded-2xl text-zinc-600">
          <div className="text-sm font-bold mb-2">전국평균</div>
          <div className="flex items-baseline gap-1 mb-1 font-bold">
            <div className="text-3xl tracking-tight">1,234,000,000</div>
            <span className="text-sm font-medium">원</span>
          </div>
          <div className="flex gap-2 mt-2 text-sm font-bold text-[#26499d] bg-[#26499d]/10 px-3 py-1 rounded-full self-start">
            <span className="font-medium">객수</span>
            <span className="font-semibold">829</span>
            <span className="mx-1 text-[#26499d]/50">/</span>
            <span className="font-medium">객단가</span>
            <span className="font-semibold">829</span>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
