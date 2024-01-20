import SlotImg from '../assets/img/slot.png';
export default function MainFooter() {
  return (
    <section className="bg-[#0a0017]">
      <div className="flex items-center justify-center py-4 px-8 gap-x-3">
        <p className="text-[#fff] font-bold">v1.0.1</p>
        <figure className="w-[100px]">
          <img src={SlotImg} alt="" />
        </figure>
      </div>
    </section>
  );
}
