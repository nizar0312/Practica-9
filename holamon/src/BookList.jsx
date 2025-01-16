import Book from "./Book";
import { books } from "./llibres";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} indice={index} />;
      })}
    </section>
  );
}

export default BookList;
