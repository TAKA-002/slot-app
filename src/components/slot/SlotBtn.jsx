export default function SlotBtn({ name, handleTrigger }) {
  return (
    <button
      className="left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-[#CF9D19] rounded-[76px] py-2 px-16 text-3xl font-sans text-white"
      onClick={handleTrigger}
    >
      {name}
    </button>
  );
}
