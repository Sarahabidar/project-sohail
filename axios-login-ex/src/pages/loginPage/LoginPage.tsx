import { useNavigate } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import { useForm } from "react-hook-form";
import LoginType from "../../types/loginType";
import { TextField, Button, Box } from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const checkLoginButton = (sara: LoginType) => {
    /*with sara: LoginType the login button ist deactiviert until you write username and password */

    localStorage.setItem("username", sara.username);

    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: "auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <form onSubmit={handleSubmit(checkLoginButton)}>
        <h2>Login</h2>
        <h4>{errors.username?.message}</h4>
        <label htmlFor="username">Username:</label>
        <TextField
          {...register("username", {
            required: {
              value: true,
              message: "hey, username is required!",
            },
          })}
          label="Username"
          variant="outlined"
        />
        <br />
        {/* Password Field */}
        <h4>{errors.password?.message}</h4>
        <label htmlFor="password">Password:</label>
        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "hey, password is required!",
            },
          })}
          label="Password"
          type="password"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password?.message}
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

/*import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };
  return (
    <form>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button type="submit" onClick={handleLoginButton}>
        Login
      </button>
    </form>
  );
};

export default LoginPage;

/*import { useNavigate } from "react-router-dom";
import { appRouter } from "../router/appRouter";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate(appRouter.HOME_PAGE, {
      replace: true,
    });
  };
  return (
    <form>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <button type="submit" onClick={handleLoginButton}>
        Login
      </button>
    </form>
  );
};

export default LoginPage;*/
