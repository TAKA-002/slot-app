import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex items-center justify-center gap-x-8">
        <li>
          <Link to="/">トップ</Link>
        </li>
        <li>
          <Link to="/member">メンバー確認</Link>
        </li>
      </ul>
    </nav>
  );
}
