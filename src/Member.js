import React from 'react';

import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import List from './components/member/List.jsx';
import Footer from './components/Footer.jsx';

export default function Member({ lists }) {
  return (
    <>
      <Header />
      <Nav />

      <div>
        <div className="flex items-center justify-between w-full sm:w-[360px] mx-auto mt-4 px-4 sm:px-0">
          <h1 className="text-lg">スロットメンバー</h1>
          <form className="" action="">
            <input
              class="px-4 py-2 text-base text-bold text-white bg-[#E82133] rounded-xl"
              type="submit"
              value="確定ボタン"
            />
          </form>
        </div>
        <List lists={lists} />
      </div>

      <Footer />
    </>
  );
}
