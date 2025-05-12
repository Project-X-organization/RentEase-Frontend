import { useState } from "react";
import FadeInSection from "./FadeInSection";

const QuestionAndAnsweerBoxes = ({type, delay, question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <FadeInSection type={type} delay={delay} className="w-full bg-[#F9FCFF] border border-gray-400 border-b-2 border-r-2 lg:mb-4 mb-2">
            <div className="lg:pl-4 pl-2 lg:pr-16 pr-8 lg:pt-8 pt-4 lg:pb-10 pb-6 flex">
                <label className="flex-grow font-bold lg:text-lg">{question}</label>
                <button
                    className="font-bold lg:text-4xl text-2xl ml-2 lg:mt-[-10px]" 
                    onClick={() => setShowAnswer(obj => !obj)}>
                        {showAnswer ? "-" : "+" }
                </button>
            </div>
            {showAnswer && 
                <FadeInSection type="slideDown" className="lg:pl-4 pl-2 lg:pt-8 pt-4 lg:pb-10 pb-6 border border-t-4">
                    <label className="lg:text-base">{answer}</label>
                </FadeInSection>
            }
        </FadeInSection>
    );
};

export default QuestionAndAnsweerBoxes;