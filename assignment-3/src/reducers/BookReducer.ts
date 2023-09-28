import { ADD_BOOK, REMOVE_BOOK } from '../constants/constants'
import { Book } from '../models/Book'

// Define an action type
type BookAction =
  | { type: typeof ADD_BOOK; payload: Book }
  | { type: typeof REMOVE_BOOK; payload: number }

const BookReducer = (currentState: Book[], action: BookAction): Book[] => {
  switch (action.type) {
    case ADD_BOOK:
      return [<Book>action.payload, ...currentState]
    case REMOVE_BOOK:
      return currentState.filter((book) => book.id !== action.payload)
    default:
      return currentState
  }
}

export default BookReducer
