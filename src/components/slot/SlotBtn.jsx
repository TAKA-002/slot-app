import Switch from '../../assets/img/slot-button.png';
export default function SlotBtn({ handleTriggerStart, handleTriggerStop, isSlotStart }) {
  const name = isSlotStart ? 'ストップ' : 'スタート';
  const handleTrigger = isSlotStart ? handleTriggerStop : handleTriggerStart;

  return (
    <button className="relative flex items-center justify-center w-[25%] active:translate-y-2" onClick={handleTrigger}>
      <img className="relative z-[1]" src={Switch} alt="" />
      <span className="absolute z-[2] text-[#fff] text-sm sm:text-2xl font-bold">{name}</span>
    </button>
  );
}
