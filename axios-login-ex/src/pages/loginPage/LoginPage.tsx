import { useNavigate } from "react-router-dom";
import { appRouter } from "../../router/appRouter";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginType from "../../types/loginType";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const checkLoginButton = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("username", username);

      navigate(appRouter.HOME_PAGE, {
        replace: true,
      });
    } else {
      alert("Please enter your username and password.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(checkLoginButton)}>
        <h2>Login</h2>
        <h4>{errors.username?.message}</h4>
        <label htmlFor="username">Username:</label>
        <input
          {...register("username", {
            required: {
              value: true,
              message: "hey, username is required!",
            },
          })}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
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
