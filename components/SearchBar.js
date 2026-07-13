'use client';

const defaultSearchFilters = [
  { label: '검색옵션', options: [{ value: 'A', label: '상위 100개' }] },
  { label: '지역', options: [{ value: '', label: '지역' }] },
  { label: '규모', options: [{ value: '', label: '규모' }] },
  { label: 'order by', options: [{ value: '', label: 'order by' }] },
];

const defaultCenterFilters = [
  { label: '대분류', options: [{ value: '', label: '대분류' }] },
  { label: '중분류', options: [{ value: '', label: '중분류' }] },
  { label: '소분류', options: [{ value: '', label: '소분류' }] },
  { label: '판매가 10% 이상 차이', options: [{ value: '', label: '판매가 10% 이상 차이' }] },
];

export default function SearchBar({
  searchFilters = defaultSearchFilters,
  centerFilters = defaultCenterFilters,
  placeholder = '바코드, 상품명',
  buttonLabel = '조회',
  searchGroupLabel1 = '검색그룹명1',
  searchGroupLabel2 = '검색그룹명2',
}) {
  const renderSelect = (filter, idx) => {
    if (!filter || !Array.isArray(filter.options) || filter.options.length === 0) {
      return null;
    }

    return (
      <select
        key={`${filter.label}-${idx}`}
        className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white"
      >
        {filter.options.map((option, optionIdx) => (
          <option key={`${filter.label}-${optionIdx}`} value={option.value ?? ''}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="flex flex-col gap-1 border border-zinc-200 bg-zinc-50 p-4 text-sm text-midium">

      {searchFilters.length > 0 && <div>
        <div className="flex flex-wrap gap-1 items-center">
          <div>{searchGroupLabel1}</div>
          {searchFilters.map(renderSelect)}
          <input
            type="text"
            placeholder={placeholder}
            className="min-w-30 px-2 py-1 border rounded border-zinc-300 bg-white"
          />
          <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            {buttonLabel}
          </button>
        </div>
      </div>}





      {centerFilters.length > 0 && (
        <div className="flex flex-wrap gap-1 items-center">
          <div>{searchGroupLabel2}</div>
          {centerFilters.map(renderSelect)}
        </div>
      )}
    </div>
  );
}
