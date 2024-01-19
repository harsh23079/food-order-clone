import Contact, { NewUpdatedComponet } from "./Contact";
const NewUpdate = NewUpdatedComponet(Contact);
const About = () => {
  console.log("start");
  return (
    <>
      {console.log("return")}
      <h1>About</h1>
      <NewUpdate name={"harsh"} gender={"male"} />
      <Contact name={"harsh"} gender={"male"} />
    </>
  );
};
export default About;
