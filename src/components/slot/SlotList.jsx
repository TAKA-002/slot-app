export default function List({ lists, visibleIndex }) {
  return (
    <ul className="w-96 h-[76px] relative z-[1] border-4 border-[#CF9D19] rounded-md px-8 py-4 overflow-scroll hidden-scrollbar bg-white ">
      {lists.map((item, index) => (
        <li className="text-3xl font-sans js-slot-item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
