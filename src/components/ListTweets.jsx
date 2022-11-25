import React from "react";
import useTweets from "../Hooks/useTweets";

export const ListTweets = () => {
  const { tweets } = useTweets();

  return (
    <>
      <div className="md:w-2/3 lg:w-2/4 mx-auto ">
        <h1 className="text-xl text-white">Ultimos Tweets</h1>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {tweets.map((tw) => (
            <div className="tw_contenedor" key={tw.id}>
              <a
                href="#"
                className="block max-w-sm p-6 bg-gray-800 border-gray-700 rounded-lg shadow-md hover:bg-gray-700   dark:hover:bg-gray-700"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight  text-white">
                  {tw.user}
                </h5>
                <p className="font-normal  text-gray-400">{tw.tweet}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
