import Book from'./components/Book';
import Home from'../Home/Home';
import './style/Bookslist.css';
const Booklist = () => {
    return ( < 
        div className='homelist'>
        
        <Home/>


        
        
        
        <div className = "Booklist" >
 
      
 <Book/>         
 <Book/>   
 <Book/>  
 <Book/>  
 <Book/>  

        
        
        </div>
        </div>
    );
}

export default Booklist;