import SlotMachine from '../../assets/img/slot-machine.png';
import ManekiCat from '../../assets/img/manekineko.png';

export default function SlotFooter() {
  return (
    <section className="py-12">
      <div className="flex place-items-center">
        <figure className="w-full ">
          <img src={SlotMachine} alt="" className="w-[200px] h-auto" />
        </figure>
        <figure className="w-full ">
          <img src={ManekiCat} alt="" className="w-[200px] h-auto" />
        </figure>
      </div>
    </section>
  );
}
