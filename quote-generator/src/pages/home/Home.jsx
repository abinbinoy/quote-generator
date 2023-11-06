import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { quotes, tagsList } from "../../service/service";
import style from "./home.module.scss";
import { useDispatch } from "react-redux";
import { add } from "../../features/bookmarkSlice";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
const Home = () => {
  const [quote, setQuot] = useState({});
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const dispatch = useDispatch();

  const getRandomQuote = async (tag) => {
    await quotes(tag)
      .then((res) => {
        setQuot(res);
      })
      .catch((err) => {
        throw err;
      });
  };

  const getTagList = async () => {
    await tagsList()
      .then((res) => {
        setTags(res?.data);
      })
      .catch((err) => {
        throw err;
      });
  };

  const setTagValue = (e) => {
    setTag(e?.target?.value);
  };

  useEffect(() => {
    getRandomQuote(tag);
    getTagList();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className={style["body"]}>
        <div className={style["box-body"]}>
          <div className={style["box"]}>
            <h2>{quote?.content}</h2>
            <div className={style["bookmark"]}>
              <span>{quote?.author}</span>
              <BookmarkAddIcon
                onClick={() => dispatch(add(quote?._id))}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
        <div className={style["form"]}>
          <form action="/action_page.php">
            <select
              name="cars"
              id="cars"
              value={tag}
              className={style["dropdown"]}
              onChange={setTagValue}
            >
              <option disabled value={""}>
                Select
              </option>
              {tags.map((tag) => {
                return (
                  <option key={tag?._id} value={tag?.slug}>
                    {tag?.name}{" "}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div className={style["button"]}>
          <button
            className={style["button-name"]}
            onClick={() => {
              getRandomQuote(tag);
            }}
          >
            Next Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
