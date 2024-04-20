import Accordion from "./components/Accordion/Accordion";

function App() {
  const accordionItems = [
    { title: "Section 1", text: "This is my text for Section 1" },
    { title: "Section 2", text: "This is my text for Section 2" },
    { title: "Section 3", text: "This is my text for Section 3" },
  ];

  return (
    <>
      {accordionItems.map((item, index) => (
        <Accordion key={`${item.text} + ${index}`} title={item.title} text={item.text} />
      ))}
    </>
  );
}

export default App;


// Я взяв за приклад структуру HTML & Css за посиланням https://www.w3schools.com/howto/howto_js_accordion.asp


