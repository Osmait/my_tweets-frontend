import React from "react";
import useTweets from "../Hooks/useTweets";

export const ListTweets = () => {
  const { tweets } = useTweets();

  return (
    <>
      <h1 className="contenedor">Ultimos Tweets</h1>
      <div className="contenedor">
        <div className="listado_contenedor">

        {tweets.map((tw) => (
          <div className="tw_contenedor" key={tw.id}>
            <h3 className="tw_titulo contenido_tw">{tw.user}</h3>
            <p className="tw-descripcion contenido_tw">{tw.tweet}</p>
            <p className="tw-fecha contenido_tw">{tw.time}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
};
