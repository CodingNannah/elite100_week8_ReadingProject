// import './App.css';
// import Error from './components/Error';
// import Button from './components/Button';
// import CategoryBar from './components/CategoryBar';
import NavBar from './components/NavBar';
// import Book from './components/Book';
// import BookBrowser from './components/BookBrowser';
// import AdminMenu from './components/AdminMenu';
// import LoginForm from './forms/LoginForm';
// import UserForm from './forms/UserForm';
// import CatForm from './forms/CatForm';
// import AdminBkForm from './forms/AdminBkForm';
// import BookMenu from './views/BookMenu';
import Login from './views/Login';


function App() {
  return (
    <div>
      <NavBar>
        <Login/>
        {/* <BookMenu/> */}
        
      </NavBar>
    </div>
  );
}

export default App;
