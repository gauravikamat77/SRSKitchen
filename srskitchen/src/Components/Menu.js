import { useState } from "react";
import "./Menu.css";
import placeholder from "../images/placeholder.jpeg";
import menuBg from "../images/menupagebg.jpg";


const pages = [
  {
    left: {
      title: "Dry Starters",
      items: [
        { name: "Chicken Ghee Roast", price: "850/-kg", img: placeholder },
        { name: "Chicken Chilly Fry (Goan)", price: "850/-kg", img: placeholder },
        { name: "Chicken Cafreal", price: "850/-kg", img: placeholder },
        { name: "Pepper Chicken Fry", price: "850/-kg", img: placeholder },
        { name: "Chicken Chukka", price: "850/-kg", img: placeholder },
        { name: "Squid Chilly Fry (Goan)", price: "1000/-kg", img: placeholder },
      ],
    },
    right: {
      title: "Dry Starters",
      items: [
        { name: "Chicken Chanka", price: "850/-kg", img: placeholder },
        { name: "Charsic Chicken Karahi", price: "900/-kg", img: placeholder },
        { name: "Butterfly Chicken (Boneless)", price: "500/- 0.5kg | 900/-kg", img: placeholder },
        { name: "Threaded Chicken (Boneless)", price: "500/- 0.5kg | 900/-kg", img: placeholder },
        { name: "Honey Garlic Chicken (Boneless)", price: "900/-kg", img: placeholder },
        { name: "Chicken Rawa Fry (Boneless)", price: "850/-kg", img: placeholder },
        { name: "Chicken Dry Fry", price: "800/-kg", img: placeholder },
      ],
    },
  },

  {
    left: {
      title: "Gravy",
      items: [
        { name: "Chicken Xacuti", price: "850/-kg", img: placeholder },
        { name: "Malvani Chicken", price: "900/-kg", img: placeholder },
        { name: "Afgani Chicken", price: "850/-kg", img: placeholder },
        { name: "Chicken Angara", price: "850/-kg", img: placeholder },
        { name: "Chicken Sukka", price: "900/-kg", img: placeholder },
      ],
    },
    right: {
      title: "Rice",
      items: [
        { name: "Chicken Dum Biryani", price: "950/-kg", img: placeholder },
        { name: "Prawns Tawa Pulav", price: "1000/-kg", img: placeholder },
      ],
    },
  },
];


export default function Menu() {
  const [page, setPage] = useState(0);

  return (
    <div className="menu-wrapper">
      <div className="book">
        {/* LEFT PAGE */}
        <div className="page left" style={{ backgroundImage: `url(${menuBg})`}}>
          <div className="page-content">
          <h2>{pages[page].left.title}</h2>
          {pages[page].left.items.map((item, i) => (
            <div className="dish" key={i}>
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        </div>
        
        {/* RIGHT PAGE */}
        <div className="page right" style={{ backgroundImage: `url(${menuBg})`}}>
          <div className="page-content">
          <h2>{pages[page].right.title}</h2>
          {pages[page].right.items.map((item, i) => (
            <div className="dish" key={i}>
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="controls">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>◀</button>
        <button disabled={page === pages.length - 1} onClick={() => setPage(page + 1)}>▶</button>
      </div>
    </div>
  );
}
