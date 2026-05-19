import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { axiosInstance } from "../config/axiosInstance";
import { loginApi, registerApi } from "../api/authApis";

export let useAuth = () => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (formData) => {
    // let { data } = useQuery({
    //   queryKey: ["auth"],
    //   queryFn: () => loginApi(formData),
    // });
    // console.log(data);
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
