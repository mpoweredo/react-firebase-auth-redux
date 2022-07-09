import { useState, useEffect } from 'react';
import Nav from './components/layout/Nav';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase';
import { logoutUser, setUserData } from './store/slices/AuthSlice';

function App() {
	const [login, setLogin] = useState(true);
	const authentication = useSelector(state => state.auth.user);
	const dispatch = useDispatch();

	const changeFormHandler = () => {
		setLogin(state => !state);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			console.log(currentUser);
			dispatch(setUserData(currentUser));
		});
		return () => {
			unsubscribe();
		};
	}, [dispatch]);

	
	const fetchTodosHandler = () => {
		dispatch(logoutUser());
	};

	return (
		<div className='App bg-slate-700 w-full h-screen flex items-center justify-center flex-col'>
			<Nav />
			{!authentication && (
				<div className='flex flex-col'>
					{login ? <SignIn /> : <SignUp />}
					{login ? (
						<button
							onClick={changeFormHandler}
							className='text-center p-2 bg-purple-500 text-purple-50 rounded-sm shadow-md mt-5'>
							Change to register
						</button>
					) : (
						<button
							onClick={changeFormHandler}
							className='text-center p-2 bg-purple-500 text-purple-50 rounded-sm shadow-md mt-5'>
							Change to login
						</button>
					)}
				</div>
			)}
			{authentication && (
				<div className='flex flex-col text-center font-bold text-white '>
					<p className='text-3xl'>your email: {authentication.email}</p>

					<button
						className='text-center p-2 bg-green-500 text-purple-50 rounded-sm shadow-md mt-5'
						onClick={fetchTodosHandler}>
						Logout
					</button>
					<div className='flex flex-col'></div>
				</div>
			)}
		</div>
	);
}

export default App;
