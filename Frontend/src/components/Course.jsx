import React from 'react';
import list from "../../src/list.json";
import Cards from './Cards';
import { Link} from "react-router-dom";


function Course() {
  console.log(list);
  return (<>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-red-400"> Here! :)</span>
      </h1>
      <p className="mt-12">
      Bookventure is the best online bookstore in India where you can purchase all categories of books at reasonable prices with a convenient and secure online ...
  </p>
  <Link to="/">
  <button className="mt-6 bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300">
              Back
            </button>
  </Link>
        
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
      {
        list.map((item) => (
          <Cards item={item} key={item.id} />
        ))
      }
    </div>
  </div>
    </>
  );
}

export default Course;
