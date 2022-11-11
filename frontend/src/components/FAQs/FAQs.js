import "./FAQs.css";
import { useState } from "react";
const FAQs = () => {
    const [selected, setSelected] = useState(null)
    //------------
    const toggle = (i) =>{
        console.log("i",i)
        if(selected === i){
            return setSelected(null)
        }
        setSelected(i)
    }
  return (
    <div className="FAQs-wrapper">
      <div className="FAQs-map-title-answer">
        {data.map((item,i)=>(
            <div className="item">
                <div className="title" onClick={()=>toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "answershow" : "answer"}>{item.answer}</div>
            </div>
        ))}
      </div>
    </div>
  );
};
const data = [
  {
    question: "Question 1",
    answer: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    question: "Question 2",
    answer: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    question: "Question 3",
    answer: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    question: "Question 4",
    answer: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
  {
    question: "Question 5",
    answer: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
  },
];
export default FAQs;
