import React, { useState } from "react";

const add = () => {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const PostData = async (e) => {
    e.preventDefault();
    let newBooks = {
      title: e.target.title.value,
      URL: e.target.URL.value,
      category: e.target.category.value,
      description: e.target.description.value,
    };

    const res = await fetch("http://localhost:3000/api/bookmark", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooks),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data){
           const saveData =  localStorage.setItem("data",data)
           console.log(saveData);
        }
      });
  };

  return (
    <section className="w-full mx-auto relative">
      <div className="px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className=" w-5/12 mx-auto bg-white flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0">
          <h2 className="text-lg mb-1">Add Bookmark</h2>

         <form onSubmit={PostData} >

         <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm ">
              title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="description"
              className="leading-7 text-sm text-gray-600"
            >
              description
            </label>
            <input
              type="description"
              id="description"
              name="description"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="category" className="leading-7 text-sm text-gray-600">
              category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="URL" className="leading-7 text-sm text-gray-600">
              URL
            </label>
            <input
              type="text"
              id="URL"
              name="URL"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button type="Submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
         </form>
        </div>
      </div>
    </section>
  );
};

export default add;
