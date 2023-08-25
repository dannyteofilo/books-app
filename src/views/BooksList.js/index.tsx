import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/Card";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/images/logo.svg";
import "./styles.css";

const BooksList = () => {
  const { logout, isLoggedIn } = useAuth();
  const [books, setBooks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("react");
  const [searchInput, setSearchInput] = useState<string>("");

  const { data, error, loading } = useAxios<any>(
    "get",
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`,
    { manual: true }
  );

  useEffect(() => {
    if (data) {
      setBooks(data.items);
    }
    if (error) {
      console.error("Error fetching books:", error);
    }
  }, [data, error]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container-list">
      <nav>
        <div>
          <img className="logo" src={logo} alt="books" />
        </div>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </nav>
      <h1>BooksList page</h1>
      <form onSubmit={handleSearchSubmit}>
        <div className="search">
          <label htmlFor="search">Search: </label>
          <input
            className="input-form"
            type="text"
            id="search"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <button className="btn-search" type="submit">
            Search
          </button>
        </div>
      </form>
      {loading ? <p>Loading...</p> : null}
      <div className="list">
        {books?.map((book: any) => (
          <Card key={book.id} {...book}></Card>
        ))}
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default BooksList;
