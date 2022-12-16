import React from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id, author } = useParams();
  return (
    <div>
      Book Page
      <br />
      Book Id: {id}
      <br />
      Author: {author}
    </div>
  );
};

export default BookDetails;
