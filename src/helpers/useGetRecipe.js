import { useReducer, useEffect } from "react";

const URL = "https://themealdb.com/api/json/v1/1/";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { isLoading: true, recipe: {} };
    case ACTIONS.GET_DATA:
      return { isLoading: false, recipe: action.payload };
    case ACTIONS.ERROR:
      return {
        isLoading: false,
        error: action.payload.error,
        recipe: {},
      };
    default:
      return state;
  }
}

export default function useFetchRecipe(req) {
  const [state, dispatch] = useReducer(reducer, {
    recipe: {},
    isLoading: true,
  });

  useEffect(() => {
    const fetchNewRecipe = () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      fetch(URL + req)
        .then((res) => res.json())
        .then((data) => {
          dispatch({
            type: ACTIONS.GET_DATA,
            payload: data,
          });
        })
        .catch((error) => {
          dispatch({ type: ACTIONS.ERROR, payload: { error } });
        });
    };
    fetchNewRecipe();
  }, [req]);
  return state;
}
