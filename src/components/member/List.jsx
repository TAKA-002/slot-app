import React from 'react';

export default function List({ lists }) {
  return (
    <ul className="flex flex-col gap-y-4 w-full sm:w-[360px] px-16 sm:px-0 py-4 mx-auto">
      {lists.map((obj, index) => {
        return (
          <li
            className="flex items-center text-bold text-base text-[#6C4525]"
            style={{ borderBottom: '2px dotted #baac8f' }}
            key={obj.id}
          >
            <span>{++index}.</span>
            <span className="flex-auto ml-4">{obj.name}</span>
            <button>削除</button>
          </li>
        );
      })}
    </ul>
  );
}
