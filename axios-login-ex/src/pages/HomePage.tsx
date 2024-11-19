import { useEffect, useState } from "react";

const HomePage = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  return (
    <div>
      <h1>Willkommen {username ? username : "Gast"}!</h1>
    </div>
  );
};

export default HomePage;
