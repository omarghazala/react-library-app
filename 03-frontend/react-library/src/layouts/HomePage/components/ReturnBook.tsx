import React from "react";
import BookModel from "../../../models/BookModel";

const ReturnBook:React.FC<{book:BookModel}> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                {
                    props.book.img ? 
                    <img src={props.book.img}
                        height="300" width="233" alt="book">
                    </img>
                        :
                    <img src={require('./../../../Images/BooksImages/book-luv2code-1000.png')}
                        height="300" width="233" alt="book">
                    </img>
                }
                
                <h6>{props.book.title}</h6>
                <p>{props.book.author}</p>
                <a className="btn main-color text-white" href="#">Reserve</a>
            </div>
        </div>
    )
}

export default ReturnBook;