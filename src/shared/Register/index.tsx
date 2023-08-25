import { useForm } from "../../hooks/useForms";
import { FormErrors, FormValues } from "../../interfaces/forms";
import {
  initialValues,
  requiredFields,
  fieldInfo,
} from "../../constants/formRegisterConfig";

import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import imgRegister from "../../assets/images/login.svg";
import "./styles.css";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};

    for (const field of requiredFields) {
      if (!values[field]) {
        errors[field] = `${field} is required`;
      }
    }

    return errors;
  };

  const handleSubmit = (values: any) => {
    console.log("Form submitted with values:", values);
    login();
    navigate("/");
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit: handleFormSubmit,
    handleBlur,
  } = useForm(initialValues, validate, handleSubmit);

  return (
    <div className="container">
      <div className="register">
        <div className="image">
          <img src={imgRegister} alt="" className="img-register" />
        </div>
        <div className="form">
          <h1>Register</h1>
          <form onSubmit={handleFormSubmit}>
            {requiredFields.map((field) => (
              <div key={field}>                
                <input
                  id={field}
                  className="input-form"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values[field]}
                  name={field}
                  type={fieldInfo[field].type}
                  placeholder={fieldInfo[field].placeholder}
                />
                {errors[field] && <p>{errors[field]}</p>}
              </div>
            ))}
            <button className="btn" type="submit">Register</button>
          </form>
          <span className="link">
          Do you already have an account? Login{" "}
            <Link className="here" to="/login">
              Here
            </Link>
          </span>
        </div>
      </div>
      <div className="circle"></div>
    </div>
  );
};

export default Register;
