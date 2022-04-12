import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div align="center" className="mt-5 mb-3">
      <button className="btn btn-primary me-1" style={{background:'#186494'}} onClick={() => onButtonClick("prev")}>
        PREV
      </button>
      <button className="btn btn-primary ms-1" style={{background:'#186494'}} onClick={() => onButtonClick("next")}>
        NEXT
      </button>
    </div>
  );
};

export default Pagination;