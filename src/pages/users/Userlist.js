import User from'./components/user';
import Home from'../Home/Home';
import './style/userlist.css';
const Userlist = () => {
    return ( < 
        div className='homelist'>
        
        <Home/>


        
        
        
        <div className = "userlist" >
 
      
            
        <User/>

        <User/>
        <User/>
        <User/>

        <User/>
        <User/>
       
        
        </div>
        </div>
    );
}

export default Userlist;