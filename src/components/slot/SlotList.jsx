export default function SlotList({ lists, visibleIndex }) {
  return (
    <ul className="w-96 h-[76px] relative z-[1] border-4 border-[#CF9D19] rounded-md px-8 py-4 overflow-x-scroll hidden-scrollbar bg-white ">
      {lists.map((item, index) => {
        if (index === visibleIndex) {
          return (
            <li className="text-3xl font-sans whitespace-nowrap" key={index}>
              {item}
            </li>
          );
        } else {
          return (
            <li
              className="text-3xl font-sans whitespace-nowrap"
              style={{ display: "none" }}
              key={index}
            >
              {item}
            </li>
          );
        }
      })}
    </ul>
  );
}