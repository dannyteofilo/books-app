import { useState } from "react";

export const useForm = (initialState: any, validate: any, onSubmit: any) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues: any) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors(validate(values));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e,values)
    e.preventDefault();
    const formErrors = validate(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onSubmit(values);
    }
  };

  const handleBlur = () => {
    const formErrors = validate(values);
    setErrors(formErrors);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};
