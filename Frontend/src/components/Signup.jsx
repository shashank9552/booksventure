;import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
//import { axios } from 'axios'

function Signup() {
  const{
    register,
    handleSubmit,
    formState: { errors},  
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password,
    
    }
  // await axios.post("http://localhost:4002/user/signup", userInfo)
  //  .then((response) => {
  //   console.log(response.data)
  //   if(response.data){
  //     alert('Singup successfully')
  //   }
  //  }).catch((error) =>{
  //   console.log(error.message)
  //     alert("Error: " + error.message)
  //  })
  };
  return (
   <>
   <div className="flex h-screen items-center justify-center">
    <div className="w-[600px]">
      <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}
           <Link 
            to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
            </Link>
   
            <h3 className="font-bold text-lg">Signup!</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input 
                type="text" 
                className="w-80 px-3 py-1 border rounded-md outline-none" 
                placeholder="Enter your fullname" 
                {...register("fullname",{ required: true})}
              />
              <br />
              {errors.fullname && (
                <span className='text-sm text-red-500'>
                  This field is required
              </span> 
              )}
            </div>
            <div className="mt-4 space-y-2">
    <span>Email</span>
    <br />
    <input 
    type="email" 
    className="w-80 px-3 py-1 border rounded-md outline-none" 
    placeholder="Enter your email" 
    {...register("email", { required: true })}
    />
    <br />
              {errors.email && (
                <span className='text-sm text-red-500'>
                  This field is required
              </span> 
              )}
   </div>
   <div className="mt-4 space-y-2">
    <span>Password</span>
    <br />
    <input 
    type="text" 
    className="w-80 px-3 py-1 border rounded-md outline-none" 
    placeholder="Enter your Password" 
    {...register("Password", { required: true })}
    />
    <br />
    {errors.Password && (
    <span className='text-sm text-red-500'>
      This field is required
      </span>
      )}

   </div>
   <div className="flex justify-around mt-4 ">
    <button className=" bg-red-400 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200">
        Signup</button>
    <p className="text-md">
        Have Account?{" "} 
        <button className="underline text-blue-500 cursor-pointer "
    onClick={() =>
      document.getElementById("my_modal_3").showModal()
    }
        >
            Login
            </button>{" "}
            <Login />
    </p>
   </div>
    </form>
  </div>
</div>
   </div>
   </>
  )
}

export default Signup
