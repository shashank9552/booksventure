import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
    <div className=" mt-4 my-3 p-3">
    <div className="card w-92 bg-base-100 w-96 shadow-xl  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1731530926~exp=1731534526~hmac=bd6249890f69279a61dd02f48b155efb10d6fc2b061288cbdf01288114029895&w=740"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline hover:bg-red-400 hover:text-white px-2 py-1 duration-200">BUY NOW</div>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Cards