import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase'
import { onSnapshot } from "firebase/firestore";

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fakeBaseQuery(),
    endpoints: builder => ({
        fetchTodos: builder.query({
            async queryFn() {
                try {
                    onSnapshot(collection(db, 'users'), (snapshot) => {
                    })
                } catch (error) {
                    return {error: error.message}
                }
            }
        })
    })
})

// export const { useFetchTodosQuery } = todosApi
export const { useFetchTodosQuery } = todosApi