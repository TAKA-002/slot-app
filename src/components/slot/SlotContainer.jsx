import SlotList from "./SlotList.jsx";
import SlotBtn from "./SlotBtn.jsx";

export default function SlotContainer({
  lists,
  handleTriggerStart,
  handleTriggerStop,
}) {
  return (
    <div className="grid place-items-center">
      <div className="inline-block py-2 px-16 border-4 border-[#816414] rounded-[76px] gradient-bg">
        <SlotList lists={lists} />
      </div>
      <SlotBtn name="スタート" handleTrigger={handleTriggerStart} />
      <SlotBtn name="ストップ" handleTrigger={handleTriggerStop} />
    </div>
  );
}
