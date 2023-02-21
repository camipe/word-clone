import React from "react";

function GuessInput({ guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    setGuess("");
    console.log(`Guess: ${guess}`);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        minLength="5"
        maxLength="5"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          const newGuess = event.target.value;
          setGuess(newGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
