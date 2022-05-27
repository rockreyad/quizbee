import React from "react";

const Result = ({ score, playAgain }) => {
  return (
    <div className="bg-green-100 bg-opacity-20 flex flex-col justify-center items-center space-y-2 p-4 rounded-lg">
      <p className="text-white text-xl font-light">
        You Scored {score} / 5 correct answers!
      </p>
      <button
        type="button"
        className="bg-orange-400 font-semibold text-white py-1 px-2 rounded hover:bg-orange-500 hover:shadow-md hover:shadow-orange-400 hover:uppercase"
        onClick={playAgain}
      >
        Play Again!
      </button>
    </div>
  );
};

export default Result;
