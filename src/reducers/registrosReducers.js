export const registroListReducers = (state = { registros: [] }, action) => {
  switch (action.type) {
    case "REGISTRO_LIST_REQUEST":
      return { loading: true, products: [] };

    case "REGISTRO_LIST_SUCCESS":
      return { loading: false, products: action.payload };

    case "REGISTRO_LIST_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
