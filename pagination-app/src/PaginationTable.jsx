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

  // Function to navigate to a specific page
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Functions for Next and Previous buttons
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Slice the data to show items for the current page
  const getVisibleData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return dummyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Dynamically create page numbers with three middle buttons and dots
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pageNumbers;
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

      <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>

        {getPaginationNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === "number" && handleClick(number)}
            disabled={number === currentPage || number === "..."}
          >
            {number}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
