import React, { useCallback, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import style from "./bookmark.module.scss";
import { useSelector } from "react-redux";
import { getQuoteById } from "../../service/service";
import { ThreeCircles } from "react-loader-spinner";
const BookMark = () => {
  const [bookmarkedQuoteList, setBookmarkedQuoteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const bookmarks = useSelector((state) => state.bookmark.value);
  console.log(bookmarks);

  const getAllQuotes = useCallback(async () => {
    let tempQuote = [];
    for (const bookmark of bookmarks) {
      tempQuote.push(await getQuoteById(bookmark));
    }
    setBookmarkedQuoteList(tempQuote);
    setIsLoading(false); // Set loading state to false when data is loaded
  }, [bookmarks]);

  useEffect(() => {
    getAllQuotes();
  }, [getAllQuotes]);

  return (
    <>
      {isLoading ? (
        <div className={style["center-loader"]}>
       
          <ThreeCircles
            height="100"
            width="100"
            color="#312287"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <>
          <div>
            <Header />
          </div>
          <div className={style["body"]}>
            {bookmarkedQuoteList?.map((quote) => {
              return (
                <div className={style["box-body"]} key={quote?._id}>
                  <div className={style["box"]}>
                    <h2>{quote?.content}</h2>
                    <span>{quote?.author}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default BookMark;
