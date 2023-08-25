import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import Card from "../../components/Card";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const BooksList = () => {
  const { logout, isLoggedIn } = useAuth();
  const [books, setBooks] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("dragones");
  const [searchInput, setSearchInput] = useState<string>("");

  const { data, error, loading } = useAxios<any>(
    "get",
    `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`,
    { manual: true }
  );

  useEffect(() => {
    console.log("BooksList mounted");
    if (data) {
      console.log("Fetched books:", data);
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

  console.log("is logging: ", isLoggedIn);

  if (!isLoggedIn) {
    // Si el usuario no está autenticado, redirigir al inicio de sesión
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </>
        </ul>
      </nav>
      <h1>BooksList page</h1>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <label htmlFor="search">Search: </label>
          <input
            type="text"
            id="search"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </div>
      </form>
      {loading ? <p>Loading...</p> : null}
      {books?.map((book: any) => (
        <Card key={book.id} {...book}></Card>
      ))}
    </div>
  );
};

export default BooksList;
