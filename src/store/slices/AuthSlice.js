import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const initialState = {
	user: null,
	todos: [],
};

export const loginUser = createAsyncThunk('user/loginUser', async userData => {
	const response = await signInWithEmailAndPassword(
		auth,
		userData.email,
		userData.password
	);

	return response.user;
});

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
    signOut(auth)
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.user = action.payload;
		},
		logout: state => {
			state.user = null;
		},
		setTodos: (state, action) => {
			state.todos = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(loginUser.fulfilled, (state, action) => {
				state.user = action.payload;
			})
			.addCase(logoutUser.fulfilled, (state, action) => {
				state.todos = 'dus';
			});
	},
});

export const { setUserData } = authSlice.actions;

export default authSlice.reducer;
