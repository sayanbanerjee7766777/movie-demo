import React, { useEffect, useState } from "react";
import { getMovieurl } from "../service/getService";
import Card from "../component/UI/Card";

const Movie = () => {
  const [data, setData] = useState();

  const movieDetails = async () => {
    try {
      const res = await getMovieurl();
      setData(res.data.Search);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    movieDetails();
  }, []);

  return (
    <>
      {data && data.length > 0 ? (
        <section className="container mx-auto">
          <ul className="grid grid-cols-4 gap-4">
            {data.map((cur) => (
              <Card key={cur.imdbID} movieData={cur} />
            ))}
          </ul>
        </section>
      ) : (
        "No movie Found"
      )}
    </>
  );
};

export default Movie;
