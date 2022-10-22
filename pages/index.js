import Image from "next/image";
import Link from "next/link";

export async function getStaticProps({ bookmark }) {
  const res = await fetch("http://localhost:3000/api/bookmark");
  const data = await res.json();
                                
  return {
    props: { bookmark: data },
  };
}
// console.log(data)

const Home = ({ bookmark }) => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="all-items">
        <div className="flex flex-row gap-10 justify-between items-center my-20 ">
          <h2 className="text-2xl font-bold">Bookmark Manager</h2>
          <Link href={`/add`}>
            <button className="text-xl font-bold rounded-md border-1 px-3 py-2 border-gray-300 bg-blue-300 text-white">
              Add Bookmark
            </button>
          </Link>
        </div>
        <div className="my-6 text-xl">
        <h2 className="my-4">Category : A </h2>
          <div
            key={bookmark?.id}
            className="all-category border-2 border-gray-100 h-28 flex flex-row justify-between items-center py-4 px-6  gap-5 shadow-md bg-slate-200 "
          >
            <div className="items">
              <h2>{bookmark?.title}</h2>
            </div>

            <div className="border-1 border-gray-500 px-4 py-2">
              <button className="border-2 border-gray-400 px-4 py-1">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* category details will display here */}

      <div className="details shadow-md bg-pink-200 my-36">
        <h2>Category Details Page </h2>
      </div>
    </div>
  );
};

export default Home;
