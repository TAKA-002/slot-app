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
        <h1>メンバー一覧</h1>
        <List lists={lists} />
      </div>

      <Footer />
    </>
  );
}
