'use client';

export default function SearchBar() {
  return (
    <div className="flex flex-col gap-1 border border-zinc-200 bg-zinc-50 p-4 text-sm text-midium">
      <div className="flex gap-1 items-center">
        <div>검색옵션</div>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="A">상위 100개</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">지역</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">규모</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">order by</option>
        </select>
        <input type="text" placeholder="바코드, 상품명" className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white" />
        <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">조회</button>
      </div>
      <div className="flex gap-1 items-center">
        <div>센터분류</div>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">대분류</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">중분류</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">소분류</option>
        </select>
        <select className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white">
          <option value="">판매가 10% 이상 차이</option>
        </select>
      </div>
    </div>
  );
}