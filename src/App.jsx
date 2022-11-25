import { ListTweets } from "./components/ListTweets";
import { SideBar } from "./components/SideBar";
import { TweetsProvider } from "./Context/TweetProvider";

function App() {
  return (
    <TweetsProvider>
      <main className="bg-gray-900">
        <SideBar />

        <ListTweets />
      </main>
    </TweetsProvider>
  );
}

export default App;
