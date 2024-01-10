import Usagi from '../../assets/img/usagi.png';
import Xmas from '../../assets/img/xmas.png';

export default function MemberFooter() {
  return (
    <section className="py-12">
      <div className="flex place-items-center">
        <figure className="w-full ">
          <img src={Usagi} alt="" className="w-[200px] h-auto" />
        </figure>
        <figure className="w-full ">
          <img src={Xmas} alt="" className="w-[200px] h-auto" />
        </figure>
      </div>
    </section>
  );
}
