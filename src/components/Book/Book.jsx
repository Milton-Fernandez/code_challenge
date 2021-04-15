import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import StarRating from '../StarRating/StarRating'
import "./Book.css";
import BookItem from '../BookItem/BookItem'

const Book = () =>{
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = React.useState(false);
    const [comment, setComment] = useState('');
    const code = useSelector((store) => store.code);
    console.log(code);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nZwk50Bzk3GoGqGeejh1PfbxnmP5PdND`);
            setArticles(res.data.results.books);

            setLoading(false);
        };
        getArticles();

    }, []);

    console.log(articles);
    
    return(
        <>
       
        <div>
            <div class="container">
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
