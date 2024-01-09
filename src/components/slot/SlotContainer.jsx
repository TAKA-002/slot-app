import SlotList from './SlotList.jsx';
import SlotBtn from './SlotBtn.jsx';
import SlotFooter from './SlotFooter.jsx';

export default function SlotContainer({ lists, handleTriggerStart, handleTriggerStop, visibleIndex }) {
  return (
    <div
      className="grid place-items-center px-2 py-8 sm:py-20 bg-slot-pattern"
      style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
        backgroundSize: '60%',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="inline-block py-1 sm:py-2 px-8 sm:px-16 border-4 border-[#816414] rounded-[76px] gradient-bg shadow-md">
        <SlotList lists={lists} visibleIndex={visibleIndex} />
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <SlotBtn name="スタート" handleTrigger={handleTriggerStart} />
        <SlotBtn name="ストップ" handleTrigger={handleTriggerStop} />
      </div>
      <p
        className="mt-4 sm:mt-24 py-2 px-4 sm:px-12 border-2 sm:border-4 border-[#A89B84] rounded-[8px] shadow-md text-[14px] sm:text-xl text-[#4D3D30] font-bold"
        style={{ backgroundColor: 'rgba(255,254,214,0.6)' }}
      >
        使い方
        <br />
        ・スタートボタンを押すと回り始めます。
        <br />
        ・ストップボタンを押すと、1秒後から4秒後の間に止まります。
        <br />
        （時間はランダムです。）
      </p>

      <SlotFooter />
    </div>
  );
}
