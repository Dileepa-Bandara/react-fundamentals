import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [search, setSearchFilter] = useSearchParams();
  const searchActiveUsers = search.get("filter") === "active";

  return (
    <div>
      <h1>Users Page</h1>
      <Outlet></Outlet>
      <h3 style={{ color: "grey" }}>Search Params</h3>
      <button
        onClick={() => {
          setSearchFilter({ filter: "active" });
        }}
      >
        Active Users (Set Filter)
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setSearchFilter({});
        }}
      >
        Remove Filter/Reset Filter
      </button>
      {searchActiveUsers ? <h4>Active Users</h4> : <h4>All Users</h4>}
    </div>
  );
}

export default Users;
