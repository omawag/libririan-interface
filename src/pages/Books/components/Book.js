import '../style/Book.css';

const Book= () => {
    return ( <
        div className = "bookcard" >
        <
        div className = "card-top" >
        <
        img src = 'https://picsum.photos/200'
        alt = 'Book-card'/>
        <
        /div> <
        div className = "card-info" >
        <
        h4 className = "title" > Book < /h4> <
        p className = "info" > Author:Omar < /p> <
        button > Edit < /button>
        <
        button > Delete < /button> 
       
        < /
        div > <
        /div>
    );
}

export default Book;