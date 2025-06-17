import "./QuoteCard.css";
import { useState } from "react";

const QuoteCard = () => {
  const [quote, setQuote] = useState<string>("");

  /* const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // updates as user types in the text area
    setQuestion(event.target.value); // when user types, the event is passed into the function as a parameter , and event.target.value is the text of that input element being changed
  }; */

  const handleGenerate = async () => {
    try {
      const quote = await fetch("https://catfact.ninja/fact", {
        method: "GET", // just trying to get some thing working to see if its a code issue or a API, network issue
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!quote.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await quote.json();
      setQuote(data.content); // sets the quote state with the content from the API response
      console.log(data.content); // logs the quote to the console
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to fetch quote. Please try again later.");
    }
  };

  return (
    <>
      <h1>Quote Generator</h1>
      <div id="container">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
