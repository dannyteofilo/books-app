import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./shared/Login";
import Register from "./shared/Register";
import BooksList from "./views/BooksList.js";
import NotFound from "./shared/404/index.js";

import { AuthProvider } from "./context/authContext.js";

const AppRouter = () => {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BooksList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default AppRouter;
