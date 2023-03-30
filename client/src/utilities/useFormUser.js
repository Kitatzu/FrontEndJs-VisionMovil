import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { RegisterUser } from "@/Redux/Thunks/registerUser";

export const useForm = (initialForm, validateForm) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [image, setImage] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImage = (el) => {
    setImage(el.target.files["0"]);
    setPreviewUrl(URL.createObjectURL(el.target.files[0]));
  };

  const handleChange = (el, type) => {
    if (type === "country" && type !== undefined) {
      form.country = e.target.attributes.value.value;
    }
    if (e.target.name === "verifypassword") {
      if (e.target.value !== form.registerPassword) {
        setErrors({ ...errors, verifyPassword: "The password not match" });
      }
    }

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (el) => {
    handleChange(el);
    setErrors({
      ...errors,
      ...validateForm(e.target.name, form[e.target.name]),
    });
  };

  const handleRegisterSubmit = (el) => {
    if (
      errors.userName === undefined &&
      errors.firstName === undefined &&
      errors.lastName === undefined &&
      errors.registerEmail === undefined &&
      errors.registerPassword === undefined &&
      errors.verifyPassword === undefined &&
      form.userName !== undefined &&
      form.firstName !== undefined &&
      form.lastName !== undefined &&
      form.registerEmail !== undefined &&
      form.registerPassword !== undefined &&
      form.verifyPassword !== undefined &&
      form.userName !== "" &&
      form.lastName !== "" &&
      form.firstName !== "" &&
      form.birthday !== "" &&
      form.registerEmail !== "" &&
      form.registerpassword !== "" &&
      form.verifypassword !== ""
    ) {
      const formSend = new FormData();
      formSend.append("userName", form.userName);
      formSend.append("firstName", form.firstName);
      formSend.append("lastName", form.lastName);
      formSend.append("birthday", form.birthday);
      formSend.append("email", form.registerEmail);
      formSend.append("password", form.registerpassword);
      formSend.append("country", form.country);

      if (image) {
        formSend.append("avatar", image);
      }
      async () => {
        dispatch(RegisterUser(formSend));
      };
    } else {
      Swal.fire({
        icon: "error",
        title: "Form",
        text: "Completar el formulario!",
      });
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleRegisterSubmit,
    handleImage,
    image,
    previewUrl,
  };
};
