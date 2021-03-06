import React, { FC } from "react";
import { AnswerObject } from "../pages";
type Props = {
  key: any;
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  quesntionNo: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  key,
  question,
  answer,
  callback,
  userAnswer,
  quesntionNo,
  totalQuestions,
}) => {
  return (
    <div
      key={key}
      className="relative flex flex-col m-5 bg-black bg-opacity-50 z-30 p-10 shadow-lg"
    >
      <p className="mb-1 tracking-widest">
        Question {quesntionNo}/{totalQuestions}
      </p>
      <p
        className="tracking-widest"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="mt-4 grid grid-flow-row-dense md:grid-cols-2 gap-4">
        {answer.map((answer, index) => (
          <div
            key={index}
            className="hover:bg-white hover:bg-opacity-50 text-base  rounded-lg px-2 cursor-pointer hover:font-bold"
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span
                className="tracking-widest"
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
