import { useState } from "react";
import "./Menu.css";


const pages = [
  {
    left: {
      title: "Dry Starters",
      items: [
        { name: "Chicken Ghee Roast", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Chilly Fry (Goan)", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Cafreal", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Pepper Chicken Fry", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Chukka", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Squid Chilly Fry (Goan)", price: "1000/-kg", img: "/images/placeholder.jpg" },
      ],
    },
    right: {
      title: "Dry Starters",
      items: [
        { name: "Chicken Chanka", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Charsic Chicken Karahi", price: "900/-kg", img: "/images/placeholder.jpg" },
        { name: "Butterfly Chicken (Boneless)", price: "500/- 0.5kg | 900/-kg", img: "/images/placeholder.jpg" },
        { name: "Threaded Chicken (Boneless)", price: "500/- 0.5kg | 900/-kg", img: "/images/placeholder.jpg" },
        { name: "Honey Garlic Chicken (Boneless)", price: "900/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Rawa Fry (Boneless)", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Dry Fry", price: "800/-kg", img: "/images/placeholder.jpg" },
      ],
    },
  },

  {
    left: {
      title: "Gravy",
      items: [
        { name: "Chicken Xacuti", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Malvani Chicken", price: "900/-kg", img: "/images/placeholder.jpg" },
        { name: "Afgani Chicken", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Angara", price: "850/-kg", img: "/images/placeholder.jpg" },
        { name: "Chicken Sukka", price: "900/-kg", img: "/images/placeholder.jpg" },
      ],
    },
    right: {
      title: "Rice",
      items: [
        { name: "Chicken Dum Biryani", price: "950/-kg", img: "/images/placeholder.jpg" },
        { name: "Prawns Tawa Pulav", price: "1000/-kg", img: "/images/placeholder.jpg" },
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
        <div className="page left">
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

        {/* RIGHT PAGE */}
        <div className="page right">
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

      <div className="controls">
        <button disabled={page === 0} onClick={() => setPage(page - 1)}>◀</button>
        <button disabled={page === pages.length - 1} onClick={() => setPage(page + 1)}>▶</button>
      </div>
    </div>
  );
}
