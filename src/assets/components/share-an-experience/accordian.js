// import React from "react";
// //import '@/assets/scss/components/share-an-experience/accordian.scss';
// //import Dropdown from "@assets/images/share-withus/accordian/downarrow.svg";

// export default class ShareExperienceAccordian extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questionsArray: [
//         {
//           question: "How do I signup?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage",
//         },
//         {
//           question: "How will I stream my experience online?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         },
//         {
//           question: "How will I earn money?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         },
//         {
//           question: "How will I create multiple experiences?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         },
//         {
//           question: "How will I earn money?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         },
//         {
//           question: "How will I create multiple experiences?",
//           answer:
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         },
//       ],
//     };
//   }
//   render() {
//     const { questionsArray } = this.state;
//     return (
//       <div className="project-qanda-wrapper">
//         <div className="custom-container">
//           <div className="project-qanda-wrapper--title">
//             <h2 className="medium-bold-font">FAQ</h2>
//             <p className="light-font">
//               Have a question? We’ve got you covered with FAQ’s
//             </p>
//           </div>
//           {questionsArray.map((questionObj, index) => {
//             return (
//               <div className="project-qanda-wrapper--accordian" key={index}>
//                 <input
//                   type="checkbox"
//                   name="project-qanda-accordian"
//                   id={`question${index + 1}`}
//                   className="hidden-input"
//                 ></input>
//                 <label
//                   htmlFor={`question${index + 1}`}
//                   className="d-flex align-items-center justify-content-between project-qanda-wrapper--accordian--header"
//                 >
//                   <div className="question">{questionObj.question}</div>
//                   <img src={Dropdown} />
//                 </label>
//                 <div className="project-qanda-wrapper--accordian--body">
//                   <p className="light-font">{questionObj.answer}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
