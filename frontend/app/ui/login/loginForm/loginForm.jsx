'use client';

import { authenticate } from '@/app/lib/actions'
import React from 'react'
import { useFormState } from "react-dom";
import Link from 'next/link'

const LoginForm = () => {
    // const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div>
        <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="w-full p-6  border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center ">MyPet</h1>
                <form action={authenticate} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered" name='username' />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered" name='password' />
                    </div>
                    <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
                    <div>
                        <button className="btn btn-block">Login</button>
                    </div>
                    
                </form>
                <div className="space-y-4">

                <span>don't have an account ?</span>
                <Link href="/register">
            <button className="btn btn-neutral">Register</button>
          </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm


// // LoginForm.js
// import { authenticate } from '@/app/lib/actions';
// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (formData.username.trim() && formData.password.trim()) { // Check if username and password are not empty
//         await authenticate(formData);
//       } else {
//         console.error("Form data is not complete:", formData);
//       }
//     } catch (error) {
//       console.error("Authentication error:", error);
//     }
//   };

//   return (
//     <div>
//       <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
//         <div className="w-full p-6  border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
//           <h1 className="text-3xl font-semibold text-center">MyPet</h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Email</span>
//               </label>
//               <input type="text" placeholder="Enter Username" className="w-full input input-bordered" name='username' value={formData.username} onChange={handleChange} />
//             </div>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input type="password" placeholder="Enter Password" className="w-full input input-bordered" name='password' value={formData.password} onChange={handleChange} />
//             </div>
//             <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
//             <div>
//               <button type="submit" className="btn btn-block">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
