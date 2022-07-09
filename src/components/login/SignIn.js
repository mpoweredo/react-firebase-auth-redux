import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser } from '../../store/slices/AuthSlice';

// zaloguj sie

const SignIn = () => {
	const emailRef = useRef();
	const dispatch = useDispatch()
	const passwordRef = useRef();

	const submitHandler = e => {
		e.preventDefault();

        dispatch(loginUser({
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}))
	};

	return (
		<div>
            <div className="p-2 text-center bg-slate-200 rounded-sm mb-5 shadow-md ">Sign In</div>
			<form className='flex flex-col gap-1 text-white bg-slate-800 p-5 rounded'>
				<label htmlFor='email' className='text-xl font-bold'>
					Email
				</label>
				<input
					type='email'
					id='email'
					ref={emailRef}
					className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500'
				/>
				<label className='mt-3 text-xl font-bold' htmlFor='password'>
					Password
				</label>
				<input
					id='password'
					type='password'
					ref={passwordRef}
					className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-slate-500'
				/>
				<button
					onClick={submitHandler}
					className='mt-3 bg-slate-900 rounded-sm py-2 text-slate-200'>
					Sign In
				</button>
			</form>
		</div>
	);
};

export default SignIn;
