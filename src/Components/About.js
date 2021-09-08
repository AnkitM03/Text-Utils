import React from "react";

function About(props) {
  let style = {
    backgroundColor: props.mode === "light" ? "white" : "gray",
    color: props.mode === "light" ? "black" : "white",
  };
  let style2 = {
    backgroundColor: props.mode === "light" ? "#F5EFEF" : "#BDC7C9",
    color: props.mode === "light" ? "black" : "black",
  };

  return (
    <>
      <div className="container my-3 about">
        <h2>Welcome to Text Utils</h2>
        <p>
          A very handy online text tool where you can change between lower case
          and upper case letters, where you can capitalize, uncapitalize,
          convert to mix case and transform your text.
        </p>
        <br />

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                style={style2}
              >
                Upper Case
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                The upper case transformer will take any text that you have and
                will generate all the letters into upper case ones. It will
                essentially make all lower case letters into CAPITALS (as well
                as keep upper case letters as upper case letters). To do this,
                you simply have to select the text that you need changing and
                pasting into the box above and then select the UPPER CASE tab.
                THIS IS AN EXAMPLE OF UPPER CASE.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo" style={style2}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={style2}
              >
                Lower Case
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                If you are wondering how to uncapitalize text, this is exactly
                what the lower case text converter will allow you to do - it
                transforms all the letters in your text into lowercase letters.
                Simply copy the text that you need generating into lower case
                and paste the text into the box above and select the ‘lower
                case’ tab. this is an example of lower case.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree" style={style2}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={style2}
              >
                Title Case
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                The title case converter is perfect for those who are a bit
                unsure on how to title an upcoming essay. It essentially ensures
                the correct letters are capitalized within the context of a
                title. Words such as “an” will be left all in lower case and
                words that are important will be converted such as “Title”. This
                Is an Example of Title Case.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree" style={style2}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                style={style2}
              >
                Remove Extra Space
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                Remove extra space get rid of extra whitespace and remove tab
                spaces from text with this tool which make your sentence
                beautiful and readable.
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5 f">
          <footer>
            <p id="footer">© 2021 Skull</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default About;
