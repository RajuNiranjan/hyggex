import React from "react";
import MultySelectInput from "../ui/multyselectinput";

const Faq = () => {
  return (
    <div className="mt-[154px] mb-20">
      <div>
        <h1 className="uppercase font-bold text-[48px] bg-gradient-to-b from-[#06286e] to-[#164ec0] inline-block text-transparent bg-clip-text">
          faq
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <MultySelectInput placeholder="Can education flashcards be used for all age groups?" />
        <MultySelectInput placeholder="How do education flashcards work?" />
        <MultySelectInput placeholder="Can education flashcards be used for test preparation?" />
      </div>
    </div>
  );
};

export default Faq;
