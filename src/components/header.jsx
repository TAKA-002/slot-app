import SlotImg from '../assets/img/slot.png';
import Logo from '../assets/img/webstaff.png';

export default function Header() {
  return (
    <nav className="bg-[#E82133] opacity-90 py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="w-full flex justify-between items-center">
          <a href="/" className="w-[100px] sm:w-[200px] h-auto font-bold text-xl text-white">
            <img src={SlotImg} alt="" />
          </a>
          <a href="/" className="w-[100px] sm:w-[200px] h-auto font-bold text-xl text-white">
            <img src={Logo} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
}
