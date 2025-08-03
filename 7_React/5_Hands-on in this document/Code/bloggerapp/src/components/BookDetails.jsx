import { useState } from 'react';
import './BookDetails.css';

const BookDetails = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic Literature",
      price: 12.99,
      description: "A timeless tale of love, wealth, and the American Dream in the Jazz Age.",
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      price: 14.50,
      description: "A powerful story of racial injustice and childhood innocence.",
      inStock: false,
      rating: 4.8
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian Fiction",
      price: 13.25,
      description: "A chilling vision of a totalitarian future.",
      inStock: true,
      rating: 4.7
    }
  ];

  const handleBookSelect = (book) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedBook(book);
      setShowDetails(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedBook(null);
  };

  return (
    <div className="book-details-container">
      <h2>📚 Book Details Component</h2>
      <p className="subtitle">Demonstrating Ternary Operator & Logical AND Conditional Rendering</p>
      
      <div className="books-grid">
        {books.map(book => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Price:</strong> ${book.price}</p>
            
            {/* Conditional Rendering with Logical AND (&&) */}
            {book.inStock && <span className="in-stock">✅ In Stock</span>}
            {!book.inStock && <span className="out-of-stock">❌ Out of Stock</span>}
            
            {/* Ternary Operator for Button State */}
            <button 
              onClick={() => handleBookSelect(book)}
              className={book.inStock ? 'btn-primary' : 'btn-disabled'}
              disabled={!book.inStock}
            >
              {book.inStock ? 'View Details' : 'Currently Unavailable'}
            </button>
            
            {/* Rating Display with Conditional Styling */}
            <div className="rating">
              Rating: {book.rating >= 4.5 ? '⭐⭐⭐⭐⭐' : book.rating >= 4.0 ? '⭐⭐⭐⭐' : '⭐⭐⭐'}
            </div>
          </div>
        ))}
      </div>

      {/* Loading State with Ternary Operator */}
      {isLoading ? (
        <div className="loading-overlay">
          <div className="loader">📖 Loading book details...</div>
        </div>
      ) : null}

      {/* Book Details Modal with Logical AND */}
      {showDetails && selectedBook && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={handleCloseDetails}>✖</button>
            <h3>{selectedBook.title}</h3>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Description:</strong> {selectedBook.description}</p>
            <p><strong>Price:</strong> ${selectedBook.price}</p>
            
            {/* Nested Conditional Rendering */}
            {selectedBook.rating && (
              <div className="detailed-rating">
                <strong>Rating:</strong> {selectedBook.rating}/5.0
                {selectedBook.rating >= 4.5 ? ' (Excellent!)' : 
                 selectedBook.rating >= 4.0 ? ' (Very Good)' : ' (Good)'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
