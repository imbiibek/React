import { getItem, setItem } from "@/local/local";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "Blog",
  initialState: {
    // getItem() returns null when localStorage is empty (e.g. first run,
    // incognito, or after clearing storage) — fall back to [] so posts
    // is always an array.
    posts: getItem() || [],
  },
  reducers: {
    addBlog: (state, action) => {
      state.posts.push({ id: nanoid(), ...action.payload });
      setItem(state.posts);
    },
    deleteBlog: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
      setItem(state.posts);
    },
    updateBlog: (state, action) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = { ...state.posts[index], ...action.payload };
        setItem(state.posts); // was missing — edits weren't persisting to localStorage
      }
    },
  },
});

export const { addBlog, deleteBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;