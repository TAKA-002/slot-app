import PostTable from "./PostTable";
export default function PostIndex() {
  return (
    <section>
      <div className="container px-5 mx-auto">
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <PostTable />
        </div>
      </div>
    </section>
  );
}
