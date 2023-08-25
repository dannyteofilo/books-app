import not_found from "../../assets/images/not_found.svg";
import "./styles.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <img src={not_found} alt="" style={{ width: 400, height: 400 }} />
      <h1>Page not found</h1>
    </div>
  );
};

export default NotFound;
