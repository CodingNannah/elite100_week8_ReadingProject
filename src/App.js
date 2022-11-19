// import './App.css';
import Error from './components/Error';
import Button from './components/Button';
import CategoryBar from './components/CategoryBar';
import NavBar from './components/NavBar';
import Book from './components/Book';
import BookBrowser from './components/BookBrowser';
import AdminMenu from './components/AdminMenu';

function App() {
  return (
    <div>
      <NavBar>
        
        <CategoryBar></CategoryBar> 
        <BookBrowser/>
        <Error>Oops! What was that?</Error>
        <Book/>
        <Button onClick={()=>console.log("clicked")}>Add Me!</Button>
        <Button onClick={()=>console.log("clicked")}>Remove Me</Button>
        <AdminMenu sx={{ display: 'absolute', bottom: "0px"}} />
        
      </NavBar>
    </div>
  );
}

export default App;
