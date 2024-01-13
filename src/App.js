import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Member from './Member';

const MEMBERS_LIST = './data/members.json';
// const MEMBERS_LIST = 'http://57.180.184.219/slot-app/data/members.json';

function App() {
  const [lists, setLists] = useState([]); // スロットの要素

  // 初期表示では、1番目の要素以外を非表示にする
  useEffect(() => {
    // public/data/members.jsonからデータを取得
    fetch(MEMBERS_LIST)
      .then((response) => response.json())
      .then((data) => {
        setLists(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home lists={lists} />}></Route>
        <Route path="/member" element={<Member lists={lists} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
