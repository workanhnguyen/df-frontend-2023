import { ADD_BOOK, REMOVE_BOOK } from "../constants/constants";

const BookReducer = (currentState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [action.payload, ...currentState];
    case REMOVE_BOOK:
      return [...currentState.filter((book) => book.id !== action.payload)];
    default:
      return currentState;
  }
};

export default BookReducer;
