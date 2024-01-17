import { Link } from 'react-router-dom';

import SlotImg from '../assets/img/slot.png';
import Logo from '../assets/img/webstaff.png';

export default function MainHeader() {
  return (
    <header className="bg-[#E82133] opacity-90 py-2 md:py-4">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="w-[100px] sm:w-[200px] h-auto font-bold text-xl text-white">
            <img src={SlotImg} alt="" />
          </Link>
          {/* <Link to="/" className="w-[100px] sm:w-[200px] h-auto font-bold text-xl text-white"> */}
          {/*   <img src={Logo} alt="" /> */}
          {/* </Link> */}
        </div>
      </div>
    </header>
  );
}
