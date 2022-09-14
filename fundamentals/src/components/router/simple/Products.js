import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <ol>
        <li>
          <Link to="all">All Products</Link>
        </li>
        <li>
          <Link to="new">New Products</Link>
        </li>
      </ol>

      <input type="search" placeholder="Search Items" />
      <Outlet></Outlet>
    </div>
  );
}

export default Products;
