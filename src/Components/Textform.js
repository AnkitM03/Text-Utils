import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  //const [count, setCount] = useState(0);

  const handleUpperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handletitleCase = () => {
    let newtext = text
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1) : word
      );
    setText(newtext.join(" "));
    props.showAlert("Converted to Title Case", "success");
  };

  const handleExtraSpace = () => {
    let newtext = text.split(" ");
    setText(newtext.filter((e) => e).join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };

  const handleCopy = () => {
    var texts = document.getElementById("mybox");
    texts.select();
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleClear = () => {
    setText("");
    //setCount(0);
    props.showAlert("Text cleared", "success");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
    //setCount(event.target.value.split(" ").length);
  };

  return (
    <>
      <div className="container my-3">
        <h2>{props.title}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Write Text here..."
            value={text}
            onChange={handleonChange}
            id="mybox"
            rows="6"
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(141 171 158)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpperCase}
          disabled={text.length === 0}
        >
          toUpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowerCase}
          disabled={text.length === 0}
        >
          toLowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handletitleCase}
          disabled={text.length === 0}
        >
          toTiltleCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpace}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-danger mx-2 my-1"
          onClick={handleClear}
          disabled={text.length === 0}
        >
          Clear
        </button>
      </div>
      <div className="container my-5">
        <h2>Preview</h2>
        <p>
          {text.split(/\s+/).filter((e) => e.length !== 0).length} Words and{" "}
          {text.length} Characters
        </p>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
