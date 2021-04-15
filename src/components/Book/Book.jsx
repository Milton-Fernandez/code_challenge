import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import "./Book.css";
import SearchBox from '../SearchBox/SearchBox'
import BookItem from '../BookItem/BookItem'
import { useDispatch } from 'react-redux';

const Book = () =>{


    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComment] = useState('');
    const code = useSelector((store) => store.code);
    

    useEffect(() => {
         dispatch({ type: 'FETCH_CODE'});
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nZwk50Bzk3GoGqGeejh1PfbxnmP5PdND`);
            //const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${code[0].api}`);
            setArticles(res.data.results.books);

            setLoading(false);
        };
        getArticles();
    
    }, []);

     
    
    return(
        <>
       
        <div>
            <div class="container">
              <form>
              <SearchBox placeholder="Enter Title" handleChange={(e) => console.log(e.target.value)}/>
              <button>Search</button>
              </form>
                <div class="row">
                {articles.map((book)=>{
                    return(
                      <>
                            <BookItem book={book} />
                        </>
                        )})}
                </div>
            </div>
        </div>


        </>
    )
}


export default Book;
