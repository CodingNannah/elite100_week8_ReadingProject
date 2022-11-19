// import './App.css';
import Error from './components/Error';
import Button from './components/Button';
import BooksBar from './components/BooksBar';
import AdminMenu from './components/AdminMenu';

function App() {
  return (
    <div>
      <BooksBar></BooksBar>  
      <Error>Oops! What was that?</Error>
      {/* <Error style={{backgroundColor: "cyan"}} className="this-one">This ONE Error with a background color.</Error> */}
      <Button onClick={()=>console.log("clicked")}>Add Me!</Button>
      <Button onClick={()=>console.log("clicked")}>Remove Me</Button>
      <AdminMenu/>
      
    </div>
  );
}

export default App;
