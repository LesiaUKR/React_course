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

//додаємо props
// props - це об'єкт
// можна деструктуризувати дані із об'єкта props

// function WhoAmI(props) {
//   return (
//     <div>
//       <h1>
//         My name is {props.name}, surname - {props.surname}
//       </h1>
//       <a href={props.link}>My profile</a>
//     </div>
//   );
// }
// можна деструктуризувати дані із об'єкта props
// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>
//         My name is {name}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// можна передати в props об'єкт

// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>
//         My name is {name.firstName}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// можна передати в props функцію

// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>
//         My name is {name()}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// перепишемо на класи аби навчитися управляти станом компонента
// state може бути як у класових так і функціональних компонентах
// напряму міняти state не можна
// setState це асинхронна операція, тому якщо потрібна точність і послідовність даних,
// то передаємо в setState колбек
// в команді setState можемо міняти тільки ті властивості, які нам потрібні

class WhoAmI extends Component {
  // щоб в екземпляр класу передати пропси використовуємо конструктор
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: "+++",
    };
  }
  nextYear = () => {
    console.log("btn NextYear click");
    this.setState((state) => ({ years: state.years + 1 }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      {/* WhoAmI name={{firstName:'John'}} surname="Smith" link="facebook.com" /> // можна передати  в props об'єкт*/}
      {/* <WhoAmI name={()=>{return 'John'}} surname="Smith" link="facebook.com" />// можна передати  в props функцію */}
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <Header />
      <Field />
      <Btn />
    </div>
  );
}

export { Header }; //іменований експорт
export default App;
