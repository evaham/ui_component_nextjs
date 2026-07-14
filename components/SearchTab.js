import { useState } from 'react';

const defaultTabs = [
  '전체',
  'A. 상태유지',
  'B. 점검필요',
  'C. 강점확인',
  'D. 교체검토'
];

export default function SearchTab({ tabs }) {
  const tabLabels = Array.isArray(tabs) && tabs.length > 0 ? tabs : defaultTabs;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex items-center">
      <div className="flex px-2 py-1 gap-1 bg-zinc-50 rounded-lg">
        {tabLabels.map((label, idx) => {
          const isActive = idx === activeIndex;
          const isFirst = idx === 0;
          const isLast = idx === tabLabels.length - 1;
          const baseClass = 'px-3 py-1.5 border rounded-lg font-medium text-sm hover:bg-white hover:text-zinc-900 hover:shadow-xs cursor-pointer';
          const activeClass = isActive
            ? 'bg-white text-zinc-900 border border-blue-600'
            : 'border-transparent text-zinc-500';
          return (
            <button
              key={`${label}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`${baseClass} ${activeClass}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}