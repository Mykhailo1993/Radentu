import { typeNews } from "../http/types";

export const SAVE_THE_NEWS = 'SAVE_THE_NEWS';

interface NewsStore {
  news: typeNews;
};

type ActionTypes = {
    type: typeof SAVE_THE_NEWS;
    news: typeNews;
  };
 
const initialState: NewsStore = {
  news: {
    id: 0,
    imageUri: '',
    title: '',
    time: '',
    content: '',
    views: '',
  }
};

export default (state: NewsStore = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SAVE_THE_NEWS:
      return {
        ...state,
        news: action.news,
      };
    default:
      return state;
  }
};
