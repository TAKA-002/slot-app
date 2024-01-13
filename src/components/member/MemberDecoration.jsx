import Astronaut from '../../assets/img/astronaut.png';
import Dragon from '../../assets/img/dragon.png';
import Usagi from '../../assets/img/usagi.png';
import Xmas from '../../assets/img/xmas.png';
import Staff from '../../assets/img/staff.png';
import Palece from '../../assets/img/palece.png';

export default function MemberDecoration() {
  return (
    <div className="absolute bottom-0 w-full h-[1000px] z-[1]">
      <figure className="absolute z-2 inline-block bottom-0 right-0 w-[40%] h-auto c-astronaut">
        <img src={Dragon} alt="" className="w-full h-auto" />
      </figure>
      <figure className="absolute z-[10] inline-block bottom-[20%] right-[20%] w-[20%] h-auto c-astronaut">
        <img src={Astronaut} alt="" className="w-full h-auto" />
      </figure>
      <figure className="absolute z-[5] inline-block bottom-0 left-[45%] w-[20%] h-auto c-usagi">
        <img src={Usagi} alt="" className="w-full h-auto" />
      </figure>
      <figure className="absolute z-[4] inline-block bottom-0 left-[30%] w-[20%] h-auto c-xmas">
        <img src={Xmas} alt="" className="w-full h-auto" />
      </figure>
      <figure className="absolute z-[3] inline-block bottom-0 right-20 w-[20%] h-auto c-staff">
        <img src={Staff} alt="" className="w-full h-auto" />
      </figure>
      <figure className="absolute z-[1] inline-block bottom-[-10px] left-0 w-[50%] h-auto c-palece">
        <img src={Palece} alt="" className="w-full h-auto" />
      </figure>
    </div>
  );
}

