import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "./components/router/simple/Home";
import About from "./components/router/simple/About";
import NotFound from "./components/router/simple/NotFound";
import Products from "./components/router/simple/Products";
import AllProducts from "./components/router/simple/AllProducts";
import NewProducts from "./components/router/simple/NewProducts";
import Users from "./components/router/Dynamic/Users";
import UsersDetails from "./components/router/Dynamic/UsersDetails";
import Admin from "./components/router/Dynamic/Admin";

function App() {
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "blue" : "black",
    };
  };

  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>React Routes Examples</h1>
      <h2>Simple Routes</h2>

      <ol>
        <li>
          <NavLink to="/" style={navLinkStyle}>
            Simple Route Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyle}>
            Simple Route About Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={navLinkStyle}>
            Products Page(Nested)
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="/users" style={navLinkStyle}>
            Users Page(Dynamic)
          </NavLink>
        </li>
      </ol>
      <p>Active = Blue </p>
      <h2>Navigate Progammatically</h2>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About Page Progammatically
      </button>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="products" element={<Products></Products>}>
          <Route index element={<AllProducts></AllProducts>}></Route>
          <Route path="all" element={<AllProducts></AllProducts>}></Route>
          <Route path="new" element={<NewProducts></NewProducts>}></Route>
        </Route>
        <Route path="users" element={<Users></Users>}>
          <Route path=":userId" element={<UsersDetails></UsersDetails>}></Route>
          <Route path="admin" element={<Admin></Admin>}></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
//NavLink used to style active link..There is no more differece than Link
export default App;
