import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/components/Login";
import App from "./App";
import Books from "./pages/Books/Bookslist";
import Userslist from "./pages/users/Userlist";
import Addbook from "./pages/Addbook/Addbook"
import Userrequest from "./pages/Userrequest/Userrequest";
import Borrowrequest from "./pages/Borrowrequest/Borrowrequest";







// 


export const router = createBrowserRouter([{
        path: "/",
        element: < App / > ,
        children: [



           {
                path: "/",
                element: < div > < Login/></div>,
               
            },
            {
                path: "/Bookslist",
                element: < div > < Books/> </div>,
               
               
                
            },
            {
                
               
                path: "/Userslist",
                element: < div > <Userslist /></div>,
                
            },

            {
                
               
                path: "/Addbook",
                element: < div > <Addbook /></div>,
                
            },

            {
                
               
                path: "/Userrequest",
                element: < div > <Userrequest/></div>,
                
            },
             {
                
               
                path: "/Borrowrequest",
                element: < div > <Borrowrequest/></div>,
                
            },



        ],


    },


]);