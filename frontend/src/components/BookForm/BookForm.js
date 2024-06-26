import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/slices/BookSlice";
import bookData from "../../data/books.json"
import "./BookForm.css"
import createBooksWithId from "../../utils/createBooksWithId";
export default function BookForm() {
    
    const [title, setTitle] =useState('')
    const [author, setAuthor] = useState('')
    const  dispatch = useDispatch()
    const handleRandomClick =() =>{
        const randomIndex = Math.floor(Math.random() * bookData.length)
        const randomBook = bookData[randomIndex]
        const randomBookWithId = createBooksWithId(randomBook)
        dispatch(addBook(randomBookWithId))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(author&& title){
            const book = createBooksWithId({title,author})
            dispatch(addBook(book))
            setAuthor('')
            setTitle('')
        }
    }
  return (
    <div className="app-block book-form">
      <h2>ADD a New Book</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlForm = "title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div>
                <label htmlForm = "author">Autor:</label>
                <input type="text" id="auhtor" value={author} onChange={(e)=>setAuthor(e.target.value)}></input>
            </div>
            <button type="submit">Add Book</button>
            <button type="button" onClick={handleRandomClick}>Random Book</button>
        </form>
    </div>
  );
}
