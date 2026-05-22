import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi, registerApi } from "../api/authApis";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authReducer";
import { loginUserAction } from "../state/authAction";

export let useAuth = () => {
  let dispatch = useDispatch();

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (formData) => {
    dispatch(loginUserAction(formData));

  };

  const onRegister = async (data) => {
    let res = registerApi(data);
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    onLogin,
    onRegister,
  };
};
