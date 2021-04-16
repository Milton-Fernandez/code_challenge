import axios from 'axios'
import React, {useState, useEffect,useRef} from 'react'
import {useSelector} from 'react-redux';
import "./Book.css";

import BookItem from '../BookItem/BookItem'
import { useDispatch } from 'react-redux';

const Book = () =>{

    const inputEl = useRef("");
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComment] = useState('');
    const code = useSelector((store) => store.code);
    const [searchTerm, setSearchTerm ] = useState("");
    const [searchResults,setSearchResult] = useState([]);




  //pulls data for New York Time Bestsellers using api key on page load
    useEffect(() => {
         dispatch({ type: 'FETCH_CODE'});
          
        
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`);
            setArticles(res.data.results.books);

            setLoading(false);
        };
        getArticles();
    
    }, []);

    //function use in search input
    const searchHandler = (searchTerm) =>{
        setSearchTerm(searchTerm);
        if(searchTerm !==""){
            const newBookList = articles.filter((article)=>{
              return Object.values(article).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchResult(newBookList);
        }
        else{
            setSearchResult(articles);
        }
        }

    

     // fuction used to get user input for searching data source
    const getSearchTerm = () =>{
   
        searchHandler(inputEl.current.value);
    }
    
    return(
        <>
       
        <div>
            <div class="container">
         
              <input ref={inputEl} size="40" type="text" value={searchTerm} onChange={getSearchTerm} placeholder="Search by title, author, description"></input>
 
                <div class="row">

                    
                { 
                searchTerm.length<1?
            
                articles.map((book)=>{
                    return(
                      <>
                            <BookItem term={searchTerm} book={book} 
                            searchKeyword={searchHandler}
                            />
                        </>
                        )})
                    
                        :

                          searchResults.map((book)=>{
                    return(
                      <>
                            <BookItem term={searchTerm} book={book} 
                            searchKeyword={searchHandler}
                            />
                        </>
                        )})             
                        
                        }
                </div>
            </div>
        </div>


        </>
    )
}


export default Book;
