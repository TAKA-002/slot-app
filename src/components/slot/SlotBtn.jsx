export default function SlotBtn({ name, handleTrigger }) {
  return (
    <button
      className="bg-white text-[#69292c] font-bold py-1 px-16 border-4 border-[#ff92a9] rounded-[8px]"
      onClick={handleTrigger}
    >
      {name}
    </button>
  );
}
