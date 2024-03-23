import React from 'react'

const LoginPage = () => {
  return (
    <div>
     <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6  border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center ">MyPet</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email Address" className="w-full input input-bordered" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered" />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-block">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage