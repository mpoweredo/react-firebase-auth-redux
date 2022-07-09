import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice.js';
import { todosApi } from './api/todosApi.js';
import { setupListeners } from '@reduxjs/toolkit/dist/query/index.js';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware({serializableCheck: false}).concat(todosApi.middleware);
	},
});

setupListeners(store.dispatch);
