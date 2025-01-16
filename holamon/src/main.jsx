import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BookList from "./BookList";

/*Ejercicio 1*/
function Hola() {
  return <h2>Hola mundo!!</h2>;
}

/*Ejercicio 2*/

/*const books = [
  {
    author: "Ursula K. Le Guin",
    title: "Els desposseïts",
    img: "https://www.raigverdeditorial.cat/wp-content/uploads/2018/02/els-desposeits.jpg",
    id: 1,
  },
  {
    author: "Octavia Butler",
    title: "La parábola del sembrador",
    img: "https://capitanswing.com/wp-content/uploads/Octavia-Butler-La-parabola-del-sembrador.jpg",
    id: 2,
  },
  {
    author: "Nnedi Okorafor",
    title: "Binti: Fuego Sagrado",
    img: "https://shop.crononauta.es/cdn/shop/products/BINTI_SACRED_FIRE_1.png",
    id: 3,
  },
];*/

/*function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book img={img} title={title} author={author} />;
      })}
    </section>
  );
}*/

/*const Book = (props) => {
  console.log(props);
  const { img, title, author, id } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};*/

/*Ejercicio 3*/

const mensajes = [
  { texto: "hola mundo" },
  { texto: "mensaje 1" },
  { texto: "mensaje 2" },
];

const Mensaje = (props) => {
  const { mensaje } = props;
  return <h2>{mensaje}</h2>;
};

const MensajeList = () => {
  return (
    <section>
      {mensajes.map((item) => {
        return <Mensaje mensaje={item.texto} />;
      })}
    </section>
  );
};

/*Ejercicio 4*/

/*function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, id } = props;
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button type="button" onClick={displayTitle}>
        Nombre
      </button>
      <h4>{author}</h4>
    </article>
  );
};*/

/*Ejercicio 5*/

/*function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} indice={index} />;
      })}
    </section>
  );
}*/

/*const Book = (props) => {
  const { img, title, author, indice } = props;
  const displayTitle = () => {
    console.log(title);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p className="number">Indice: {indice}</p>
      <button type="button" onClick={displayTitle}>
        Nombre
      </button>
      <h4>{author}</h4>
    </article>
  );
};*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookList />
  </StrictMode>
);
