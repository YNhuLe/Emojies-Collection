import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Footing from "./Footer";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emo) => (
          <Entry
            key={emo.id}
            emoji={emo.emoji}
            name={emo.name}
            meaning={emo.meaning}
          />
        ))}
      </dl>
      <Footing />
    </div>
  );
}

export default App;
