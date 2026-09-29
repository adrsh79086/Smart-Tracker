import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  getUserById,
  updateUser,
} from "../Services/UserService";

const EditUserForm = () => {
  const { id } = useParams();
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
      if (!id) return;

      try {
        const updatedProduct = {
          name: values.name,
          price: Number(values.price),
        };

        await updateUser(Number(id), updatedProduct);

        navigate("/");
      } catch (error) {
        console.log("Error updating product:", error);
      }
    },
  });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const product = await getUserById(Number(id));

        formik.setValues({
          name: product.name,
          price: String(product.price),
        });
      } catch (error) {
        console.log("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <form
      className="user-form"
      onSubmit={formik.handleSubmit}
    >
      <h2>Edit Product</h2>

      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.name && formik.errors.name && (
        <p>{formik.errors.name}</p>
      )}

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

      <button type="submit">
        Update Product
      </button>
    </form>
  );
};

export default EditUserForm;