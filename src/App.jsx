import { ListTweets } from "./components/ListTweets";
import { SideBar } from "./components/SideBar";
import { TweetsProvider } from "./Context/TweetProvider";

function App() {
  return (
    <TweetsProvider>
      <SideBar/>
      <ListTweets />
    </TweetsProvider>
  );
}

export default App;
