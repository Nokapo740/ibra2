// src/Table.js
import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
          <th>Заголовок 3</th>
          {/* Добавьте дополнительные заголовки по необходимости */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            {/* Добавьте дополнительные столбцы данных по необходимости */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
