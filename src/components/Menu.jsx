import { useEffect, useState } from "react";
import '../styles/Menu.css'

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/b488f947-5045-4a02-9a01-3d92636185b3")
      .then((res) => res.json())
      .then((data) => {
        console.log("MENU DATA:", data);
        setItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="menu" id="menu">
      <h1>Menu</h1>

      {items.length === 0 && <p>Loading...</p>}

      <div className="menu-grid">
        {items.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item["Image URL"]} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="desc">{item.description}</p>
            <p className="price">₦{item.Price}</p>
            <a href={`https://wa.me/2348101071898?text=${encodeURIComponent(item.Name)}`} target="_blank" rel="noopener noreferrer" className="order-btn">
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>

    </div>  
  );
}

export default Menu;


