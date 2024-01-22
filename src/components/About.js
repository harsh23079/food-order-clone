// import Contact from "./Contact";
// import { faqs } from "../utils/mockData";
// import { useState } from "react";

// const About = () => {
//   const [clicked, setClicked] = useState(0);

//   const handleToggle = (index) => {
//     if (clicked === index) {
//       return setClicked(0);
//     }
//     setClicked(index);
//   };
//   return (
//     <>
//       <h1>About </h1>
//       <div className="">
//         {faqs?.map((faq, index) => (
//           <Contact
//             key={index}
//             onToggle={() => handleToggle(index)}
//             faq={faq}
//             active={clicked === index}
//           />
//         ))}
//       </div>
//     </>
//   );
// };
// export default About;

/*
                           About parent  clicked=0
Contact child hai props ontaggle CB index wo check ke  clicked = index  
contact ke andar button
*/

import React from 'react'

function About() {
  return (
    <div>About</div>
  )
}

export default About