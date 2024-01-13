import React from 'react';

import MainHeader from './components/MainHeader.jsx';
import Nav from './components/Nav.jsx';
import MemberContainer from './components/member/MemberContainer.jsx';
import MainFooter from './components/MainFooter.jsx';

export default function Member({ lists }) {
  return (
    <>
      <MainHeader />
      <Nav />

      <MemberContainer lists={lists} />
      <MainFooter />
    </>
  );
}
