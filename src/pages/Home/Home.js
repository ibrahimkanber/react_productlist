import Card from "../../components/Card/Card";
import "./Home.css";
import data from "../../data.json";
import { useState, useEffect } from "react";

function Home() {
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(searchedValue);

    const fiteredProducts = data.filter((product) => {
      const title = product.title.toUpperCase();
      const text = searchedValue.toUpperCase();

      return title.includes(text);
    });
    setFilteredData(fiteredProducts);
  };

  const handleChange = (e) => {
    setSearchedValue(e.target.value);
  };

  useEffect(() => {
    const fiteredProducts = data.filter((product) => {
      const title = product.title.toUpperCase();
      const text = searchedValue.toUpperCase();

      return title.includes(text);
    });
    setFilteredData(fiteredProducts);

    console.log("at kafasi")


  }, [searchedValue]);

  return (
    <div style={{ backgroundColor: "red" }}>
      <div className="search">
        <form className="form" onSubmit={handleSubmit}>
          {/* <input type="text" onChange={handleChange}/> */}
          <input
            type="text"
            onChange={handleChange}
            placeholder="useEffect example"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="productList">
        {filteredData.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
