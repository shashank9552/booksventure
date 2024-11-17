import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login!</h3>
   <div className="mt-4 space-y-2">
    <span>Email</span>
    <br />
    <input type="email" className="w-80 px-3 py-1 border rounded-md outline-none" 
    placeholder="Enter your email" required
    {...register("email", { required: true })}
    />
    {errors.email && <span>This field is required</span>}
   </div>
   <div className="mt-4 space-y-2">
    <span>Password</span>
    <br />
    <input type="text" className="w-80 px-3 py-1 border rounded-md outline-none" 
    placeholder="Enter your Password" required
    {...register("Password", { required: true })}/>
    {errors.Password && <span>This field is required</span>}
   </div>
   <div className="flex justify-around mt-4 ">
    <button className=" bg-red-400 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200">Login</button>
    <p>
        Not Registerd?{" "} 
        <Link to="/signup" className=" underline text-blue-500 cursor-pointer">
            Signup
            </Link>{" "}
    </p>
   </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
