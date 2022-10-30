import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser ] = useState("")

  useEffect(() => {
    const consultarTweets = async () => {
      const url = `http://localhost:8000/${user}`;
      const { data } = await axios(url);
      setTweets(data);
    };
    consultarTweets();
  }, [user]);



  const handleBusqueda = e => {
    setUser(e.target.value)
  }

  return (
    <TweetsContext.Provider
      value={{
        tweets,
        handleBusqueda,
        user
       
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsProvider };

export default TweetsContext;
