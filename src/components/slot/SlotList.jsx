export default function SlotList({ lists, visibleIndex }) {
  return (
    <ul className="w-48 sm:w-96 h-[38px] sm:h-[76px] grid place-items-center relative z-[1] border-4 border-[#CF9D19] rounded-md overflow-x-scroll hidden-scrollbar bg-white">
      {lists.map((item, index) => {
        if (index === visibleIndex) {
          return (
            <li
              className="text-sm sm:text-3xl font-sans whitespace-nowrap"
              key={index}
            >
              {item}
            </li>
          );
        } else {
          return (
            <li
              className="text-sm sm:text-3xl font-sans whitespace-nowrap"
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
