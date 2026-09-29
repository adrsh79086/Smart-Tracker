import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addUser } from "../Services/UserService";
import { useNavigate } from "react-router-dom";

const Userform = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Product name is required"),

      price: Yup.number()
        .typeError("Price must be a number")
        .required("Price is required")
        .positive("Price must be greater than 0"),
    }),

    onSubmit: async (values) => {
      try {
        const newProduct = {
          name: values.name,
          price: Number(values.price),
        };

        const data = await addUser(newProduct);

        console.log("Product added:", data);

        navigate("/");
      } catch (error) {
        console.log("Error adding product:", error);
      }
    },
  });

  return (
    <form className="user-form" onSubmit={formik.handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Product name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.name && formik.errors.name && (
        <p>{formik.errors.name}</p>
      )}

      <br />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.price && formik.errors.price && (
        <p>{formik.errors.price}</p>
      )}

      <br />

      <button type="submit">
        Add Product
      </button>

    </form>
  );
};

export default Userform;