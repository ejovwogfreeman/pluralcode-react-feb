import "./App.css";
// import Hello from "./components/Hello";
// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";
// import Component3 from "./components/Component3";
// import Events from "./components/Events";
// import Counter from "./components/Counter";
// import Students from "./components/Students";
// import { products } from "./data";
// import ProductList from "./components/ProductList";
// import Form from "./components/Form";
// import StyleImage from "./components/StyleImage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import NotFound from "./page/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // let myName = "GBgram";
  // let person = { name: "godbless", email: "gb@gmail.com" };
  // let students = ["billy", "ojo", "chi", "chio", "saleed"];

  // const students = [
  //   { name: "Alice Johnson", age: 21, course: "React" },
  //   { name: "Bob Smith", age: 22, course: "Node.js" },
  //   { name: "Charlie Brown", age: 23, course: "Python" },
  //   { name: "Diana Prince", age: 20, course: "JavaScript" },
  //   { name: "Ethan Hunt", age: 24, course: "DevOps" },
  // ];

  return (
    <Router>
      {/* <Hello /> */}
      {/* <Component1 name={myName} person={person} students={students} />
      <Component2 />
      <Component3 /> */}
      {/* <Events /> */}
      {/* <Counter /> */}
      {/* <Students students={students} /> */}
      {/* <ProductList products={products} /> */}
      {/* <Form /> */}
      {/* <StyleImage /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
