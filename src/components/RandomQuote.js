import React, { Fragment, useState, useEffect } from "react";

const quotesUrl = "https://type.fit/api/quotes";

export const RandomQuote = () => {
  let [quote, setQuote] = useState([]);
  let [loading, setLoading] = useState(false);

  const getRandomQuotes = async () => {
    setLoading(true);
    await fetch(quotesUrl)
      .then((res) => res.json())
      .then((quotes) => {
        setQuote(quotes[Math.round(Math.random() * quotes.length)]);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  useEffect(() => {
    getRandomQuotes();
  }, []);

  return (
    <Fragment>
      <div className="card">
        <div className="card-body">
          {!loading ? (
            <Fragment>
              <h5 className="card-title text-body">
                &ldquo;{quote.author}&rdquo;
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">{quote.text}</h6>
            </Fragment>
          ) : (
            <Fragment>
              <div className="text-body lead">
                <i className="fas fa-spin fa-spinner"></i> &nbsp; Loading...
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};
