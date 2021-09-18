import "./styles.css";
import React, { useState } from "react";
var emojiDictionary = {
  "😊": "smiling",
  "🤪": "zany face",
  "😳": "disbelief",
  "😴": "sleeping Face",
  "😔": "sad",
  "🥺": "pleading Face",
  "🤩": "Star-Struck",
  "😇": "Smiling Face with Halo",
  "🥰": "smiling face with hearts",
  "😆": "grinning squinting face"
};
var knownEmoji = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];
    if (meaning === undefined) {
      meaning = "fail to recognise this emoji";
    }
    setMeaning(meaning);
  }
  function emojiClick(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Hunt</h1>
      <input
        onChange={emojiHandler}
        placeholder="Search your emoji here ...."
      ></input>
      <h2>{meaning}</h2>
      <h3> Emoji We Know</h3>
      {knownEmoji.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.6rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
