import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import Book from '../Book/Book';
function UserPage() {
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Below is a list of the New York Time's Bestsellers. You are able to rate and comment each book. To view your reviews of each book, press 
        on the review tab on the right corner of the nav bar.
      </p>

      <Book />
    </div>
  );
}


export default UserPage;
