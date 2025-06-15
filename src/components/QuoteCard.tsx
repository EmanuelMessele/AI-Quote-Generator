import "./QuoteCard.css";
import { useState } from "react";

const QuoteCard = () => {
  const [question, setQuestion] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = () => {
    // Here you can handle the form submission, e.g., send the question to an API
    console.log(question); // we want this to send to the API at some point
  };

  return (
    <>
      <h1>Quote Generator</h1>
      <div id="container">
        <input
          type="text"
          className="form-control"
          value={question}
          onChange={handleInputChange}
        ></input>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
