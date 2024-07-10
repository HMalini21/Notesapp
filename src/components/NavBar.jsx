import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      {/* <h2>ReactCRUD</h2> */}
      <li>
        <strong>ReactCRUD</strong>
      </li>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Login">LOGIN/SIGN UP</Link>
        </li>
        <li>
          <Link to="/Account">ACCOUNT</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
