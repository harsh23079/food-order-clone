import { useState } from "react";

const Contact = (props) => {
  return (
    <div>
      <h1>Contact us</h1>
      <h3>{props.name}</h3>
      <h3>{props.gender}</h3>
    </div>
  );
};
export const NewUpdatedComponet = (Contact) => {
  return (props) => {
    console.log(props);
    const [count, setCount] = useState(0);
    return (
      <>
        <div>
          <label>This is new Updated Component</label>
        </div>
        <button onClick={(count) => setCount(count + 1)}></button>
        <Contact {...props} />
      </>
    );
  };
};

export default Contact;
