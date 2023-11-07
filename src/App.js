import "./App.css";
import { Component } from "react";
const Header = () => {
  return <h2>Hello world!</h2>;
};

// const Field = () => {
//   const holder = "Enter here";
//   const styledField = {
//     width: "300px",
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

// перепишемо на классах Field
// class Field extends React.Component {}
//щоб не вказувати кожного разу React.Component, деструктуризуємо і відразу витягнемо Component
// при імпорті, тобто import { Component } from "react";
// на відміну від компоненту створеного за допомогою фун-ції і класу в тому, що клас
// містить метод render() в середині якого міститься return

class Field extends Component {
  render() {
    const holder = "Enter here";
    const styledField = {
      width: "300px",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

const Btn = () => {
  // const res = () => {
  //   return "log in";
  // };

  // return <button>{res()}</button>;

  const text = "Log in";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header }; //іменований експорт
export default App;
