import React, { useState, useEffect } from "react";
import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import PostIndex from "./components/post/postIndex.jsx";
import SlotContainer from "./components/slot/SlotContainer.jsx";

function App() {
  const items = ["パトカード", "リニア周遊カード", "絶好調カード"];
  const [lists, setLists] = useState(items);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [slotStart, setSlotStart] = useState(false);
  const [intervalID, setIntervalID] = useState(null);

  // 初期表示では、1番目の要素以外を非表示にする
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(
      ".js-slot-item:not(:first-child)"
    );

    hiddenElements.forEach((element) => {
      element.style.display = "none";
    });
  }, []);

  // visibleIndexが変更されたら、表示を切り替える
  useEffect(() => {
    const allElements = document.querySelectorAll(".js-slot-item");
    allElements.forEach((element) => {
      element.style.display = "none";
    });
    allElements[visibleIndex].style.display = "block";
  }, [visibleIndex]);

  const handleTriggerStart = () => {
    if (slotStart) return;
    const id = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % lists.length);
    }, 100);
    setIntervalID(id);
    setSlotStart(true);
  };

  const handleTriggerStop = () => {
    if (!slotStart) return;
    clearInterval(intervalID);
    setIntervalID(null);
    setSlotStart(false);
  };

  return (
    <div className="App">
      <Header />
      <SlotContainer
        lists={lists}
        visibleIndex={visibleIndex}
        handleTriggerStart={handleTriggerStart}
        handleTriggerStop={handleTriggerStop}
      />

      <Form />

      <PostIndex />
    </div>
  );
}

export default App;
