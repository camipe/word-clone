import React from "react";

function GuessInput({guess, setGuess}) {

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length === 5) {
      setGuess('')
      console.log(`Guess: ${guess}`)
    }
  };

  function handleChange(event) {
    setGuess(event.target.value);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} minLength="1" maxLength={5} onChange={handleChange}/>
    </form>
  );
}

export default GuessInput;
