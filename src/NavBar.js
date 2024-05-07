import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="border border-gray-900">
      <ul className="flex justify-between p-2">
        <li>
          <Link to="/"><i class="fa-solid fa-house"> Company Name</i></Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">About</a>
        </li>
        <li>
          <select id="productCategory" name="productCategory">
            <option>Products</option>
            <option>Product1</option>
            <option>Product2</option>
            <option>Product3</option>
            <option>Product4</option>
          </select>
        </li>
        <li>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded">Login</a>
        </li>
        <li>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white p-1 rounded">Signup</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
