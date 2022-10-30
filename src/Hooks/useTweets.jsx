import { useContext } from 'react';
import TweetsContext from '../Context/TweetProvider';


const useTweets = () => {
    return useContext(TweetsContext)
}

export default useTweets