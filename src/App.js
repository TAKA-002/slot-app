import React, { useState, useEffect } from "react";
import Form from "./components/form.jsx";
import Header from "./components/header.jsx";
import PostIndex from "./components/post/postIndex.jsx";
import SlotContainer from "./components/slot/SlotContainer.jsx";

const STOP_MAX_ADDITIONAL_TIME = 3000; // スロットを止めるときの最大追加時間（3000は4秒）
const FOR_MILLISECOND_CONVERSION = 1000; // 1秒は1000ミリ秒

function App() {
  const items = ["パトカード", "リニア周遊カード", "絶好調カード"];

  const [lists, setLists] = useState(items); // スロットの要素
  const [visibleIndex, setVisibleIndex] = useState(0); // 表示する要素のインデックス
  const [isSlotStart, setSlotStart] = useState(false); // スロットが回っているかどうか
  const [intervalID, setIntervalID] = useState(null); // setIntervalのID
  const [stopAdditionalTime, setStopAdditionalTime] = useState(0); // スロットを止めるときの追加時間

  // 初期表示では、1番目の要素以外を非表示にする
  useEffect(() => {
    const hiddenListElems = document.querySelectorAll(
      ".js-slot-item:not(:first-child)"
    );

    hiddenListElems.forEach((el) => {
      el.style.display = "none";
    });
  }, []);

  // visibleIndexが変更されたら、表示を切り替える
  useEffect(() => {
    const allListElems = document.querySelectorAll(".js-slot-item");
    allListElems.forEach((el) => {
      el.style.display = "none";
    });
    allListElems[visibleIndex].style.display = "block";
  }, [visibleIndex]);

  // ==============================
  // スロットを回す処理
  // ==============================
  const handleTriggerStart = () => {
    // スロットが回っている場合は何もしない
    if (isSlotStart) return;

    // スロットを止める追加時間を1000ミリ秒から4000ミリ秒の間で決める。
    const additionalTime =
      Math.floor(Math.random() * STOP_MAX_ADDITIONAL_TIME) +
      FOR_MILLISECOND_CONVERSION;
    setStopAdditionalTime(additionalTime);

    // スロットを回す
    const id = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % lists.length);
    }, stopAdditionalTime);
    setIntervalID(id);
    setSlotStart(true);
  };

  // ==============================
  // スロットを止める処理
  // ==============================
  const handleTriggerStop = () => {
    // スロットが回っていない場合は何もしない
    if (!isSlotStart) return;

    setTimeout(() => {
      // スロットを止める
      clearInterval(intervalID);
      setIntervalID(null);
      setSlotStart(false);
      setStopAdditionalTime(0);
    }, stopAdditionalTime);
  };

  return (
    <div className="App">
      <Header />
      <SlotContainer
        lists={lists}
        handleTriggerStart={handleTriggerStart}
        handleTriggerStop={handleTriggerStop}
      />

      <Form />
      <PostIndex />
    </div>
  );
}

export default App;
