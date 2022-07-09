import React, { useRef } from 'react';
// zarejestruj sie

const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const submitHandler = e => {
		e.preventDefault();

        
	};

	return (
		<div>
            <div className="p-2 text-center bg-slate-200 rounded-sm mb-5 shadow-md ">Sign Up</div>
			<form className='flex flex-col gap-1 text-white bg-slate-800 p-5 rounded'>
				<label htmlFor='email' className='text-xl font-bold'>
					Email
				</label>
				<input
					type='email'
					ref={emailRef}
					className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500'
				/>
				<label className='mt-3 text-xl font-bold' htmlFor='password'>
					Password
				</label>
				<input
					type='password'
					ref={passwordRef}
					className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500'
				/>
				<button
					onClick={submitHandler}
					className='mt-3 bg-slate-900 rounded-sm py-2 text-slate-200'>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
