import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState("");
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const consultarTweets = async () => {
      const url = `http://localhost:8000/${user || `?limit=${limit}`}`;
      const { data } = await axios(url);
      setTweets(data);
    };
    consultarTweets();
  }, [user, limit]);

  const handleBusqueda = (e) => {
    setUser(e.target.value);
  };
  const handleLimit = (e) => {
    setLimit(e.target.value);
  };

  return (
    <TweetsContext.Provider
      value={{
        tweets,
        handleBusqueda,
        user,
        limit,
        handleLimit,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsProvider };

export default TweetsContext;
