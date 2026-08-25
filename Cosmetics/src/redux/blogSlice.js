import { getItem, setItem } from "@/local/local";
import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name:"Blog",
    initialState:{
        posts:getItem()
    },
    reducers:{
        addBlog:(state,action)=>{
            console.log(action.payload);
            state.posts.push(action.payload)
            setItem(state.posts)
        }
    }
})

export const {addBlog} = blogSlice.actions
export default blogSlice.reducer
