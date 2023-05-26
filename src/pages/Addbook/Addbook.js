import React , {useState}from "react";
import "../Addbook/Addbook.css"
import Home from'../Home/Home';


    const Addbook=(props)=>{
        const[bookname,setbookname]=useState('')
        const[ISBN,setISBN]=useState('')
        const handelSubmit=(e)=>{
            e.preventDefult();
            console.log(String);
        }

        return ( < 
          div className='homelist'>
          
          <Home/>
            <div className="ll">
                <div className="Add">
                <h1>Add book </h1>
                    <form onSubmit={handelSubmit}> 
                        <label for ="bookname"><h3><i>Book name</i></h3></label>
                        <input value={bookname} onChange={(e)=> setbookname(e.target.value)}type="bookname" placeholder="Book name"></input>
                        <label for ="Isbn"><h3><i>ISBN</i></h3></label>
                        <input value={ISBN} onChange={(e)=> setISBN(e.target.value)}type="ISBN" placeholder="ISBN"></input>
                        <button className="log" type="submit"><b>Enter</b></button>
                    
                </form>
            
                </div>  
            
            </div>
            </div>
            
        )
        

};
    export default Addbook;