import { createContext, useEffect, useState } from "react";
import axios from "axios";

const TweetsContext = createContext();

const TweetsProvider = ({ children }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const consultarTweets = async () => {
      const url = "http://localhost:8000/";
      const { data } = await axios(url);
      setTweets(data);
    };
    consultarTweets();
  }, []);

  return (
    <TweetsContext.Provider
      value={{
        tweets,
      }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export { TweetsProvider };

export default TweetsContext;
