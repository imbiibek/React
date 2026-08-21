import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name:"Blog",
    initialState:[],
    reducers:{
        addBlog:(state,action)=>{
            console.log(action.payload);
            state.push(action.payload)
        }
    }
})

console.log(blogSlice);
export const {addBlog} = blogSlice.actions
export default blogSlice.reducer
