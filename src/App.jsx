import { useState } from "react";
import "./App.css";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import DataItems from "./Database/data";
import Card from "./Components/Card";
import { Context } from "./Context/Context";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Search Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = DataItems.filter((DataItem) => {
    return DataItem.title.toLowerCase().includes(query.toLowerCase());
  });

  //----------------- Radio filter --------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------- BUTTONS FILTER -------------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter((item) => {
        const { category, color, company, title, newPrice } = item;
        return (
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
        );
      });
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          review={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const Data = filteredData(DataItems, selectedCategory, query);
  return (
    <>
      <Context.Provider value={{handleChange}}>
        <Sidebar />
      </Context.Provider>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products Data={Data} />
    </>
  );
};

export default App;
