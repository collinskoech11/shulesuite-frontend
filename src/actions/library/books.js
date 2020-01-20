import axios from "axios";

import { GET_BOOKS, DELETE_BOOK } from "./types";

// GET LEADS action method
export const getBooks = () => dispatch => {
  axios
    .get("api/library/")
    .then(res => {
      dispatch({
        type: GET_BOOKS, // in the types file
        payload: res.data // response data from the server (books)
      });
    })
    .catch(err => console.log(err));
};

// DELETE BOOKS
export const deleteBook = id => dispach => {
  axios
    .delete(`api/library/${id}/`)
    .then(res => {
      dispach({
        type: DELETE_BOOK,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// // DELETE BOOK action method // (id)
// export const deleteLead = id => dispatch => {
//   axios
//     .delete(`/api/books/${id}/`)
//     .then(res => {
//       dispatch(createMessage({ deleteLead: "Lead Deleted" }));
//       dispatch({
//         type: DELETE_LEAD,
//         payload: id
//       });
//     })
//     .catch(err => console.log(err));
// };

// // ADD BOOK
// export const addLead = lead => dispatch => {
//   axios
//     .post("/api/books/", lead)
//     .then(res => {
//       dispatch(createMessage({ addLead: "Lead Added" }));
//       dispatch({
//         type: ADD_LEAD,
//         payload: res.data
//       });
//     })
//     .catch(err =>
//       dispatch(returnErrors(err.response.data, err.response.status))
//     );
// };
