import React, { useState } from "react";
import "./App.css";
import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import PostIndex from "./components/post/postIndex.jsx";
import SlotContainer from "./components/slot/container.jsx";

function App() {
  // const [names, setNames] = useState([]);
  const names = ["名前１", "名前２", "名前３"];

  return (
    <div className="App">
      <Header />
      <SlotContainer names={names} />
      <Form />
      <PostIndex />
    </div>
  );
}

export default App;
