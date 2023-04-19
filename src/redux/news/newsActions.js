import axios from "axios";

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS_REQUEST,
  };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFailure = (error) => {
  return {
    type: FETCH_NEWS_FAILURE,
    payload: error,
  };
};

export const fetchNews = () => {
  return async (dispatch) => {
    dispatch(fetchNewsRequest());
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=4f149de8d35945bb91dddfd36d5f6002"
      );
      const news = response.data.articles;
      dispatch(fetchNewsSuccess(news));
    } catch (error) {
      const errorMsg = error.message;
      dispatch(fetchNewsFailure(errorMsg));
    }
  };
};
