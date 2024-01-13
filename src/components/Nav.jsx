import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="py-2">
      <ul className="flex items-center justify-center gap-x-8">
        <li className="bg-[#fff] rounded-3xl border-4 border-[#EA404E] shadow-[4px_5px_15px_-10px_rgba(119,119,119,1)]">
          <Link
            to="/"
            className="flex items-center gap-x-2 text-[#333] font-bold before:content=[''] before:inline-block before:w-8 before:h-8 before:bg-ashiato before:bg-contain before:bg-no-repeat before:bg-center"
            style={{ padding: '2px 16px' }}
          >
            トップ
          </Link>
        </li>
        <li className="bg-[#fff] rounded-3xl border-4 border-[#EA404E] shadow-[4px_5px_15px_-10px_rgba(119,119,119,1)]">
          <Link
            to="/member"
            className="flex items-center gap-x-2 text-[#333] font-bold before:content=[''] before:inline-block before:w-8 before:h-8 before:bg-ashiato before:bg-contain before:bg-no-repeat before:bg-center"
            style={{ padding: '2px 16px' }}
          >
            メンバー確認
          </Link>
        </li>
      </ul>
    </nav>
  );
}
