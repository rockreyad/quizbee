import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);

  return (
    <div className="border-b-2 border-b-gray-500 bg-gray-700 rounded shadow shadow-gray-800  p-2 hover:bg-gray-500">
      <div className="">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="px-3 bg-gray-600 rounded p-1 mr-2 mt-1 hover:bg-orange-400 font-light text-sm hover:uppercase hover:font-semibold"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
