import { useState } from 'react';
import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [activeComponent, setActiveComponent] = useState('books');
  const [showAll, setShowAll] = useState(false);

  // Conditional rendering with function
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return <BookDetails />;
    }
  };

  // Conditional rendering for show all components
  const renderAllComponents = () => {
    if (!showAll) return null;
    
    return (
      <div className="all-components">
        <BookDetails />
        <BlogDetails />
        <CourseDetails />
      </div>
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 BloggerApp - Conditional Rendering Showcase</h1>
        <p className="app-description">
          A comprehensive React application demonstrating various conditional rendering techniques
        </p>
      </header>

      <nav className="navigation">
        <div className="nav-buttons">
          <button 
            className={activeComponent === 'books' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveComponent('books')}
          >
            📚 Book Details
          </button>
          <button 
            className={activeComponent === 'blogs' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveComponent('blogs')}
          >
            📝 Blog Details
          </button>
          <button 
            className={activeComponent === 'courses' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => setActiveComponent('courses')}
          >
            🎓 Course Details
          </button>
        </div>
        
        <div className="view-toggle">
          <label className="toggle-label">
            <input
              type="checkbox"
              checked={showAll}
              onChange={(e) => setShowAll(e.target.checked)}
            />
            <span>Show All Components</span>
          </label>
        </div>
      </nav>

      <main className="main-content">
        {/* Conditional rendering techniques demonstration */}
        <div className="techniques-info">
          <h3>🎯 Conditional Rendering Techniques Demonstrated:</h3>
          <div className="techniques-grid">
            <div className="technique-card">
              <h4>📚 Book Details</h4>
              <ul>
                <li>✅ Ternary Operator (? :)</li>
                <li>✅ Logical AND (&&)</li>
                <li>✅ Nested Conditionals</li>
                <li>✅ State-based Rendering</li>
              </ul>
            </div>
            <div className="technique-card">
              <h4>📝 Blog Details</h4>
              <ul>
                <li>✅ If-Else Functions</li>
                <li>✅ Switch Statements</li>
                <li>✅ Role-based Rendering</li>
                <li>✅ Empty State Handling</li>
              </ul>
            </div>
            <div className="technique-card">
              <h4>🎓 Course Details</h4>
              <ul>
                <li>✅ Array.map() Rendering</li>
                <li>✅ Conditional Classes</li>
                <li>✅ Complex Filters</li>
                <li>✅ useMemo Optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main component rendering */}
        {showAll ? renderAllComponents() : renderActiveComponent()}

        {/* Conditional footer based on active component */}
        {!showAll && (
          <footer className="component-footer">
            {activeComponent === 'books' && (
              <p>📚 Explore our extensive book collection with advanced filtering and interactive details.</p>
            )}
            {activeComponent === 'blogs' && (
              <p>📝 Discover insightful blogs with role-based access and dynamic content management.</p>
            )}
            {activeComponent === 'courses' && (
              <p>🎓 Learn new skills with our comprehensive course catalog and progress tracking.</p>
            )}
          </footer>
        )}
      </main>
    </div>
  );
}

export default App;
