import { addQuotes } from "./quotesSlice";

export const fetchInitialQuotes = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await fetch("https://api.quotable.io/quotes?page=1");
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to fetch data from server");
      }
      return data.results;
    };

    try {
      const fetchedData = await getData();
      dispatch(addQuotes(fetchedData));
    } catch (error) {
      console.log(error);
    }
  };
};
