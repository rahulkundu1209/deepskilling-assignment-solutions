import { useState } from 'react';
import './BlogDetails.css';

const BlogDetails = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userRole, setUserRole] = useState('guest'); // guest, user, admin

  const blogs = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      author: "John Doe",
      category: "Technology",
      content: "React Hooks revolutionized how we write React components...",
      publishDate: "2024-01-15",
      status: "published",
      views: 1250,
      likes: 89,
      isPrivate: false
    },
    {
      id: 2,
      title: "The Art of Cooking: Italian Cuisine",
      author: "Maria Rossi",
      category: "Food",
      content: "Discover the secrets of authentic Italian cooking...",
      publishDate: "2024-01-20",
      status: "draft",
      views: 0,
      likes: 0,
      isPrivate: true
    },
    {
      id: 3,
      title: "Exploring Machine Learning Basics",
      author: "Dr. Smith",
      category: "Technology",
      content: "Machine learning is transforming industries...",
      publishDate: "2024-01-25",
      status: "published",
      views: 2100,
      likes: 156,
      isPrivate: false
    },
    {
      id: 4,
      title: "Travel Guide: Hidden Gems of Europe",
      author: "Travel Enthusiast",
      category: "Travel",
      content: "Discover Europe's best-kept secrets...",
      publishDate: "2024-02-01",
      status: "published",
      views: 890,
      likes: 67,
      isPrivate: false
    }
  ];

  // Function-based conditional rendering
  const renderBlogStatus = (status) => {
    if (status === 'published') {
      return <span className="status-published">✅ Published</span>;
    } else if (status === 'draft') {
      return <span className="status-draft">📝 Draft</span>;
    } else if (status === 'archived') {
      return <span className="status-archived">📦 Archived</span>;
    } else {
      return <span className="status-unknown">❓ Unknown</span>;
    }
  };

  // Switch statement for conditional rendering
  const renderUserActions = (blog) => {
    switch (userRole) {
      case 'admin':
        return (
          <div className="admin-actions">
            <button className="btn-edit">Edit</button>
            <button className="btn-delete">Delete</button>
            <button className="btn-publish">Publish</button>
          </div>
        );
      case 'user':
        return (
          <div className="user-actions">
            <button className="btn-like">👍 Like ({blog.likes})</button>
            <button className="btn-share">🔗 Share</button>
          </div>
        );
      case 'guest':
        return (
          <div className="guest-actions">
            <button className="btn-signup">Sign Up to Like</button>
          </div>
        );
      default:
        return null;
    }
  };

  // Function with multiple conditions
  const getVisibilityIcon = (blog) => {
    if (blog.isPrivate && userRole !== 'admin') {
      return null; // Don't show private blogs to non-admins
    }
    
    if (blog.isPrivate) {
      return <span className="private-icon">🔒 Private</span>;
    } else {
      return <span className="public-icon">🌐 Public</span>;
    }
  };

  // Complex filtering logic
  const getFilteredBlogs = () => {
    let filtered = blogs;

    // Filter by user role and privacy
    if (userRole !== 'admin') {
      filtered = filtered.filter(blog => !blog.isPrivate);
    }

    // Filter by active tab
    if (activeTab !== 'all') {
      if (activeTab === 'published') {
        filtered = filtered.filter(blog => blog.status === 'published');
      } else if (activeTab === 'draft') {
        filtered = filtered.filter(blog => blog.status === 'draft');
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    return filtered;
  };

  const renderEmptyState = () => {
    if (searchTerm && getFilteredBlogs().length === 0) {
      return (
        <div className="empty-state">
          <h3>🔍 No blogs found</h3>
          <p>Try adjusting your search criteria</p>
        </div>
      );
    }
    
    if (activeTab === 'draft' && getFilteredBlogs().length === 0) {
      return (
        <div className="empty-state">
          <h3>📝 No drafts available</h3>
          <p>Start writing your first blog!</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="blog-details-container">
      <h2>📝 Blog Details Component</h2>
      <p className="subtitle">Demonstrating If-Else Functions & Switch Statement Conditional Rendering</p>
      
      {/* User Role Selector */}
      <div className="role-selector">
        <label>User Role: </label>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="tabs">
          <button 
            className={activeTab === 'all' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('all')}
          >
            All Blogs
          </button>
          <button 
            className={activeTab === 'published' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('published')}
          >
            Published
          </button>
          {/* Show draft tab only for admin */}
          {userRole === 'admin' && (
            <button 
              className={activeTab === 'draft' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('draft')}
            >
              Drafts
            </button>
          )}
        </div>

        <div className="search-filters">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
      </div>

      {/* Blog List */}
      <div className="blogs-container">
        {getFilteredBlogs().length > 0 ? (
          getFilteredBlogs().map(blog => (
            <div key={blog.id} className="blog-card">
              <div className="blog-header">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  {renderBlogStatus(blog.status)}
                  {getVisibilityIcon(blog)}
                </div>
              </div>
              
              <p><strong>Author:</strong> {blog.author}</p>
              <p><strong>Category:</strong> {blog.category}</p>
              <p><strong>Published:</strong> {blog.publishDate}</p>
              
              {/* Conditional content preview */}
              {blog.status === 'published' ? (
                <div className="content-preview">
                  <p>{blog.content}</p>
                  <div className="stats">
                    <span>👁 {blog.views} views</span>
                    <span>👍 {blog.likes} likes</span>
                  </div>
                </div>
              ) : (
                <div className="draft-notice">
                  <em>This blog is not yet published</em>
                </div>
              )}

              {/* User-specific actions */}
              {renderUserActions(blog)}
            </div>
          ))
        ) : (
          renderEmptyState()
        )}
      </div>
    </div>
  );
};

export default BlogDetails;
