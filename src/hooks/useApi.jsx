import { useEffect, useReducer } from "react";
import { INITIAL_USE_API_STATE, apiReducer } from "../utils/useApiReducer";

const useApi = (url) => {
  const [state, dispatch] = useReducer(apiReducer, INITIAL_USE_API_STATE);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_START" });
      try {
        const responses = await Promise.all([
          fetch(`${url}&page=1`),
          fetch(`${url}&page=2`),
        ]);
        const datas = await Promise.all(
          responses.map((response) => response.json())
        );

        const items1 = datas[0].Search || [];
        const items2 = datas[1].Search || [];

        if (items1.length === 0 && items2.length === 0) {
          dispatch({ type: "FETCH_ERROR" });
        } else {
          const allItems = [...items1, ...items2];
          const shuffledItems = allItems.sort(() => Math.random() - 0.5);
          dispatch({ type: "FETCH_SUCCESS", payload: shuffledItems });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        dispatch({ type: "FETCH_ERROR" });
      }
    };
    fetchData();
  }, [url]);

  return state;
};

export default useApi;
