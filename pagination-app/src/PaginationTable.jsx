import React, { useState } from "react";

const PaginationTable = () => {
  // Dummy data
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
  }));

  const ITEMS_PER_PAGE = 5;  // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);  // Track the current page

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE); // Calculate total pages

  // Slice the data to show items for the current page
  const getVisibleData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {getVisibleData().map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginationTable;
