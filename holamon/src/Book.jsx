const Book = (props) => {
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
};

export default Book;
