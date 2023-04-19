import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = newsSlice.actions;

export const selectArticles = (state) => state.news.articles;

export default newsSlice.reducer;
