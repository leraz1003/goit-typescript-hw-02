import axios from "axios";
import { UnsplashResponse } from "../../types/types";

export const fetchArticles = async (
  page = 1,
  query: string
): Promise<UnsplashResponse> => {
  const KEY = "LkGZI5kzDY09kFSiL6xg5lwr1JXkH4AmtqnHecYORxI";
  const { data } = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/photos`,
    {
      params: {
        client_id: KEY,
        query: query,
        page: page,
        per_page: 20,
      },
    }
  );

  return data;
};
