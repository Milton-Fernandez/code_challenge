import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'


const Book = () =>{
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

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
                        <div class="col-sm">

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={book.book_image} />
                                    <Card.Body>
                                        <Card.Title>{book.title}</Card.Title>
                                            <Card.Text>
                                            <p><strong>Author:</strong></p>
                                            {book.author}
                                            <p><strong>Description:</strong></p>
                                            {book.description}
                                            </Card.Text>
                                    </Card.Body>
                            </Card> 
                        </div>
                
                        )})}
                </div>
            </div>
        </div>
        </>
    )
}


export default Book;
