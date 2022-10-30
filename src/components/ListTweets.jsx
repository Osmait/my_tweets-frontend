import React from 'react'
import useTweets from '../Hooks/useTweets'

export const ListTweets = () => {

const { tweets } = useTweets()


  return (
    <div>
    <h1>Ultimos Tweets</h1>
    {
        tweets.map(tw => (
            <div key={tw.id}>
                <h3>{tw.user}</h3>   
                <p >{tw.tweet}</p>
                <p>{tw.time}</p>
            </div>

            
        ))
    }

    </div>
  )
}
