export default function SlotBtn({ name, handleTrigger }) {
  return (
    <button
      className="shadow-lg px-6 sm:px-12 py-1 bg-red-400 text-lg text-white font-bold rounded-[8px] hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition shadow-md"
      onClick={handleTrigger}
    >
      {name}
    </button>
  );
}
