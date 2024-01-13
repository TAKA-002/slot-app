import MemberList from './MemberList';

export default function MemberListWrapper({ lists }) {
  return (
    <div
      className="relative z-[2] sm:w-[460px] py-2 mx-auto bg-[#fff] rounded-[16px]"
      style={{ border: '20px solid #e63945' }}
    >
      <div className="flex items-center justify-between w-full sm:w-[360px] mx-auto mt-4 px-4 sm:px-0">
        <h1 className="font-bold text-[16px] sm:text-[20px]">スロットメンバー</h1>
        <form className="" action="">
          <input
            class="px-4 py-2 text-base text-bold text-white bg-[#E82133] rounded-xl"
            type="submit"
            value="確定ボタン"
          />
        </form>
      </div>
      <MemberList lists={lists} />
    </div>
  );
}

