import React, { useState } from 'react';

import MainHeader from './components/MainHeader.jsx';
import Nav from './components/Nav.jsx';
import MemberContainer from './components/member/MemberContainer.jsx';
import MainFooter from './components/MainFooter.jsx';

export default function Member({ lists }) {
  const [formData, setFormData] = useState({});

  return (
    <>
      <MainHeader />
      <Nav />

      <MemberContainer lists={lists} formData={formData} setFormData={setFormData} />
      <MainFooter />
    </>
  );
}
