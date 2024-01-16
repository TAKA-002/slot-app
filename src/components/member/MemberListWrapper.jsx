import MemberList from './MemberList';
// import axios from 'axios';

export default function MemberListWrapper({ lists, setLists }) {
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const apiUrl =
  //     process.env.NODE_ENV === 'development'
  //       ? 'http://localhost:8888/slot-app/api/index.php'
  //       : 'https://miu-seum.main.jp/slot-app/api/index.php';

  //   try {
  //     const response = await axios.post(apiUrl, lists);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (
    <div
      className="relative z-[2] sm:w-[460px] py-2 mx-auto bg-[#fff] rounded-[16px]"
      style={{ border: '20px solid #e63945' }}
    >
      <div className="flex items-center justify-between w-full sm:w-[360px] mx-auto mt-4 px-4 sm:px-0">
        <h1 className="font-bold text-[16px] sm:text-[20px]">スロットメンバー</h1>
        {/* <form onSubmit={handleSubmit}>
          <input
            className="px-4 py-2 text-base text-bold text-white bg-[#E82133] rounded-xl"
            type="submit"
            value="保存ボタン"
          />
        </form> */}
      </div>
      <MemberList lists={lists} setLists={setLists} />
    </div>
  );
}
