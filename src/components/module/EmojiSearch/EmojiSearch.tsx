import { CContainer, CNavItem } from "@coreui/react-pro";
import { Icon } from "@iconify/react";
// import { log } from "console";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/components.css";
// import SearchComponent from "../../shared/SearchComponent/SearchComponent";
import SearchRenderUser from "../../shared/SearchRenderUser/SearchRenderUser";

const EmojiSearch = () => {
  const stringIcon: string[] = [
    "1st-place-medal",
    "2nd-place-medal",
    "3rd-place-medal",
    "angry-face-with-horns",
    "anxious-face-with-sweat",
    "armchair",
    "apple",
    "alien",
    "accordion",
    "airplane",
    "aquarius",
    "badger",
  ];
  const [arrEmoji, setArrEmoji] = useState<string[]>(stringIcon);
  const [emojiSearch, SetEmojiSearch] = useState<string>("");

  const findIcon = () => {
    const icon = [...arrEmoji].filter(
      (ele) =>
        ele
          .toLocaleLowerCase()
          .search(emojiSearch.trim().toLocaleLowerCase()) !== -1
    );
    setArrEmoji(emojiSearch !== "" ? icon : stringIcon);
  };


  useEffect(() => {
    findIcon();    
  }, [emojiSearch]);

  return (
    <>
      <CContainer>
        <div className="d-flex align-items-center justify-content-center">
          <Icon
            icon={`openmoji:backhand-index-pointing-right-dark-skin-tone`}
            style={{ fontSize: "50px", color: "black", marginRight: "10px" }}
          />
          <h3>Emoji Search</h3>
          <Icon
            icon={`openmoji:backhand-index-pointing-left-dark-skin-tone`}
            style={{ fontSize: "50px", color: "black", marginRight: "10px" }}
          />
        </div>
        <SearchRenderUser setSearch={SetEmojiSearch} />

        <div>
          {arrEmoji.map((ele) => (
            <CNavItem className="navbar-items-emojiSearch">
              <Link to={""} className="Link-style-emojisearch p-2">
                <Icon
                  icon={`openmoji:${ele}`}
                  style={{
                    fontSize: "50px",
                    color: "black",
                    marginRight: "10px",
                  }}
                />
                <div className="EmojiSearch-text">{ele}</div>
              </Link>
            </CNavItem>
          ))}
        </div>
      </CContainer>
    </>
  );
};

export default EmojiSearch;
