import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import LoginType from "../types/loginType";
import { appRouter } from "../router/appRouter";
import { Button, Box } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const CheckLoginButton = (amghezi: LoginType) => {
    localStorage.setItem("username", amghezi.username);
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(CheckLoginButton)}>
        <h2>Login</h2>
        <h4>{errors.username?.message}</h4>
        <label htmlFor="username">Username:</label>
        <input
          {...register("username", {
            required: { value: true, message: "Hey username is required" },
          })}
          type="text"
          name="username"
          id="username"
        />
        <br />

        <h4>{errors.password?.message}</h4>
        <label htmlFor="password">Password:</label>
        <input
          {...register("password", {
            required: { value: true, message: "Hey password is required" },
          })}
          type="text"
          name="password"
          id="password"
        />
        <br />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
