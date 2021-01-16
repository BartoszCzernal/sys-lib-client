import React from "react";
import "./HomeStyles.css";

const HomeContent = () => {
  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Date of release</th>
        <th>Authors</th>
      </tr>
      <tr>
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
      </tr>
    </table>
  );
};

export default HomeContent;
