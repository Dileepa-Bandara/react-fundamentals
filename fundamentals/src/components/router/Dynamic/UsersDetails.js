import React from "react";
import { useParams } from "react-router-dom";

function UsersDetails() {
  const userId = useParams().userId;
  return (
    <div>
      <h3 style={{ color: "tomato" }}>{userId} User Details Page</h3>
    </div>
  );
}

export default UsersDetails;
