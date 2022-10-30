import { ListTweets } from "./components/ListTweets";
import { TweetsProvider } from "./Context/TweetProvider";

function App() {
  return (
    <TweetsProvider>
      <ListTweets />
    </TweetsProvider>
  );
}

export default App;
