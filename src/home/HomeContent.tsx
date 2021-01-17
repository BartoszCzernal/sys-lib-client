import React, { useEffect, useState } from "react";
import BookService from "../services/BookService";
import "./HomeStyles.css";

const HomeContent = () => {
  const [books, setBooks] = useState<any>([]);

  useEffect(() => {
    retrieveBooks();
  }, []);

  const retrieveBooks = () => {
    BookService.getAll()
      .then((response) => {
        console.log(response);
        setBooks(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ISBN</th>
          <th>Title</th>
          <th>Date of release</th>
          <th>Authors</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>1</td>
          <td>Harry Potter</td>
          <td>19.01.2017</td>
          <td>J.K.Rowling</td>
        </tr>
        <tr>
          <td>2</td>
          <td>King of the rings</td>
          <td>21.05.1998</td>
          <td>Tolkien</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Sapiens</td>
          <td>02.02.2020</td>
          <td>Yuval</td>
        </tr> */}
        {books &&
          books.map((book: any, index: number) => (
            <tr>
              <th>{book.id}</th>
              <th>{book.isbn}</th>
              <th>{book.title}</th>
              <th>{book.date_of_release}</th>
              <th>{book.description}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default HomeContent;
