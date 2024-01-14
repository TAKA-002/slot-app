import React from 'react';
import Koban from '../../assets/img/koban.png';

export default function List({ lists }) {
  return (
    <ul className="flex flex-col gap-y-4 w-full sm:w-[360px] px-4 py-8 mx-auto">
      {lists.map((obj, index) => {
        return (
          <li
            className="flex items-center text-bold text-base text-[#6C4525]"
            style={{ borderBottom: '2px dotted #baac8f' }}
            key={index}
          >
            <span className="inline-block w-[16px] h-auto">
              <img src={Koban} alt="" />
            </span>
            <span className="flex-auto ml-4 text-[20px] font-bold">{obj.name}</span>
            <button className="text-[20px] font-bold">削除</button>
          </li>
        );
      })}
    </ul>
  );
}
