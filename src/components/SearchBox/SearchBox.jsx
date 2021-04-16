import React from 'react';

const SearchBox = () => {
    const search= document.getElementById('search')
    window.addEventListener('DOMContentLoaded',() =>{
    search.addEventListener('input', (e)=>{
        const value = e.target.value
        
        const bookName = document.querySelectorAll('.book-name')
     
        bookName.forEach((name)=>{
            if(name.innerText.toLowerCase().includes(value.toLowerCase())){
                name.parentElement.style.display='block'
            }
            else{
                name.parent.style.display = 'none'
            }
        })
    })

    })

    return (
            <section className="filter">
                <form className="form-control">
                    <input type ="search" name="search" id="search"
                    placeholder="Search for book" />
                </form>
                <div>
                    <select name="select" id ="select" className="select">
                        <option value="Filter by title"> Title</option>
                         <option value="Filter by author"> Author</option>
                    </select>
                </div>
            </section>
        )
}
export default SearchBox;