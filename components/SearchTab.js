import { useState } from 'react';

const defaultTabs = [
  '전체',
  'A. 유지',
  'B. 점검필요',
  'C. 강점확인',
  'D. 교체검토'
];

export default function SearchTab({ tabs }) {
  const tabLabels = Array.isArray(tabs) && tabs.length > 0 ? tabs : defaultTabs;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center justify-between mb-1">
      <div className="flex">
        {tabLabels.map((label, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          const isLast = idx === tabLabels.length - 1;
          const baseClass = 'w-30 px-3 py-2 border font-medium transition-colors cursor-pointer';
          const activeClass = isActive
            ? 'bg-white text-slate-900 border-slate-300'
            : 'bg-zinc-50 text-zinc-600 border-zinc-200 hover:bg-white hover:text-slate-900';
          const roundedClass = isFirst
            ? 'rounded-l-lg'
            : isLast
            ? 'rounded-r-lg'
            : '';
          return (
            <button
              key={`${label}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`${baseClass} ${activeClass} ${roundedClass}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}