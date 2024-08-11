import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import trexImage from "./assets/greatwhiteshark.jpg";
import { useState } from "react";
const App = () => { 
  const [count, setCount] = useState(0);
  let count2 = 0;
  const handleAdd = () => {
    let result = count + 1;
    setCount(result);
  };
  const handleMinus = () => {
    let result = count - 1;
    setCount(result);
  }
  const companyLogo = "Bram Shop";
  const NavList = ["Home", "About", "Contact"];
  const products = [
    {
      id: 1,
      name: "T. Rex (graphic novel)",
      imageUrl: 
      trexImage,
    },
  ];
  return (
    <>
      <Navbar logo={companyLogo} list={NavList}/>
      <Banner products={products}/>
      <h3>{count}</h3>
      <button onClick={handleAdd}>tambahkan</button>
      <button onClick={handleMinus}>kurangi</button>
    </>
  );
}
export default App;
