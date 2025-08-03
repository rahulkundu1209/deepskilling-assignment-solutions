import { useState, useMemo } from 'react';
import './CourseDetails.css';

const CourseDetails = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      instructor: "Sarah Johnson",
      level: "beginner",
      duration: "8 weeks",
      price: 99.99,
      rating: 4.8,
      students: 15420,
      description: "Learn the basics of React including components, state, and props.",
      prerequisites: [],
      isNew: true,
      discount: 20,
      category: "Programming"
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      instructor: "Mike Chen",
      level: "advanced",
      duration: "12 weeks",
      price: 149.99,
      rating: 4.9,
      students: 8950,
      description: "Master advanced JavaScript concepts and ES6+ features.",
      prerequisites: ["Basic JavaScript", "HTML/CSS"],
      isNew: false,
      discount: 0,
      category: "Programming"
    },
    {
      id: 3,
      name: "UI/UX Design Principles",
      instructor: "Emily Davis",
      level: "intermediate",
      duration: "6 weeks",
      price: 79.99,
      rating: 4.6,
      students: 12300,
      description: "Learn design thinking and create beautiful user interfaces.",
      prerequisites: ["Basic Design Knowledge"],
      isNew: false,
      discount: 15,
      category: "Design"
    },
    {
      id: 4,
      name: "Node.js Backend Development",
      instructor: "Alex Rodriguez",
      level: "intermediate",
      duration: "10 weeks",
      price: 129.99,
      rating: 4.7,
      students: 9850,
      description: "Build scalable backend applications with Node.js and Express.",
      prerequisites: ["JavaScript", "Basic Programming"],
      isNew: true,
      discount: 25,
      category: "Programming"
    },
    {
      id: 5,
      name: "Digital Marketing Mastery",
      instructor: "Jessica Williams",
      level: "beginner",
      duration: "4 weeks",
      price: 59.99,
      rating: 4.4,
      students: 20150,
      description: "Complete guide to digital marketing strategies and tools.",
      prerequisites: [],
      isNew: false,
      discount: 0,
      category: "Marketing"
    }
  ];

  // Complex filtering and sorting logic
  const filteredAndSortedCourses = useMemo(() => {
    let filtered = courses;

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Filter by completion status
    if (showCompletedOnly) {
      filtered = filtered.filter(course => enrollmentStatus[course.id]?.completed);
    }

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedLevel, showCompletedOnly, sortBy, enrollmentStatus]);

  const handleEnrollment = (courseId) => {
    setEnrollmentStatus(prev => ({
      ...prev,
      [courseId]: {
        enrolled: true,
        completed: false,
        progress: 0
      }
    }));
  };

  const handleProgress = (courseId, progress) => {
    setEnrollmentStatus(prev => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        progress,
        completed: progress === 100
      }
    }));
  };

  // Function to render level badge with different colors
  const renderLevelBadge = (level) => {
    const levelConfig = {
      beginner: { color: 'green', icon: '🌱', text: 'Beginner' },
      intermediate: { color: 'orange', icon: '🚀', text: 'Intermediate' },
      advanced: { color: 'red', icon: '⚡', text: 'Advanced' }
    };

    const config = levelConfig[level] || { color: 'gray', icon: '❓', text: 'Unknown' };

    return (
      <span className={`level-badge level-${config.color}`}>
        {config.icon} {config.text}
      </span>
    );
  };

  // Function to render price with discount
  const renderPrice = (course) => {
    if (course.discount > 0) {
      const discountedPrice = course.price * (1 - course.discount / 100);
      return (
        <div className="price-container">
          <span className="original-price">${course.price}</span>
          <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
          <span className="discount-badge">{course.discount}% OFF</span>
        </div>
      );
    }
    return <span className="regular-price">${course.price}</span>;
  };

  // Function to render enrollment status
  const renderEnrollmentStatus = (course) => {
    const status = enrollmentStatus[course.id];

    if (!status || !status.enrolled) {
      return (
        <button 
          className="btn-enroll"
          onClick={() => handleEnrollment(course.id)}
        >
          Enroll Now
        </button>
      );
    }

    if (status.completed) {
      return (
        <div className="completion-status">
          <span className="completed-badge">✅ Completed</span>
          <button className="btn-certificate">Get Certificate</button>
        </div>
      );
    }

    return (
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${status.progress}%` }}
          ></div>
        </div>
        <span className="progress-text">{status.progress}% Complete</span>
        <div className="progress-actions">
          <button onClick={() => handleProgress(course.id, Math.min(100, status.progress + 25))}>
            Continue Learning
          </button>
        </div>
      </div>
    );
  };

  // Function to render prerequisites
  const renderPrerequisites = (prerequisites) => {
    if (!prerequisites || prerequisites.length === 0) {
      return <span className="no-prerequisites">No prerequisites required</span>;
    }

    return (
      <div className="prerequisites">
        <strong>Prerequisites:</strong>
        <ul>
          {prerequisites.map((prereq, index) => (
            <li key={index}>{prereq}</li>
          ))}
        </ul>
      </div>
    );
  };

  // Function to render rating stars
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="rating-container">
        {'⭐'.repeat(fullStars)}
        {hasHalfStar && '⭐'}
        {'☆'.repeat(emptyStars)}
        <span className="rating-number">({rating})</span>
      </div>
    );
  };

  return (
    <div className="course-details-container">
      <h2>🎓 Course Details Component</h2>
      <p className="subtitle">Demonstrating Array Rendering, Conditional Classes & Complex Conditions</p>
      
      {/* Filters and Controls */}
      <div className="controls-panel">
        <div className="filter-group">
          <label>Level:</label>
          <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="students">Students</option>
          </select>
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={showCompletedOnly}
              onChange={(e) => setShowCompletedOnly(e.target.checked)}
            />
            Show Completed Only
          </label>
        </div>

        <div className="view-toggle">
          <button 
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            📊 Grid
          </button>
          <button 
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            📋 List
          </button>
        </div>
      </div>

      {/* Courses Display */}
      <div className={`courses-container ${viewMode}`}>
        {filteredAndSortedCourses.length > 0 ? (
          filteredAndSortedCourses.map(course => (
            <div 
              key={course.id} 
              className={`course-card ${course.isNew ? 'new-course' : ''} ${
                enrollmentStatus[course.id]?.completed ? 'completed-course' : ''
              }`}
            >
              {/* New badge conditional rendering */}
              {course.isNew && <div className="new-badge">🆕 NEW</div>}
              
              <div className="course-header">
                <h3>{course.name}</h3>
                {renderLevelBadge(course.level)}
              </div>

              <div className="course-meta">
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Duration:</strong> {course.duration}</p>
                <p><strong>Category:</strong> {course.category}</p>
                <p><strong>Students:</strong> {course.students.toLocaleString()}</p>
              </div>

              <div className="course-description">
                <p>{course.description}</p>
              </div>

              {/* Conditional prerequisites rendering */}
              {renderPrerequisites(course.prerequisites)}

              <div className="course-stats">
                {renderRating(course.rating)}
                <div className="price-section">
                  {renderPrice(course)}
                </div>
              </div>

              {/* Dynamic enrollment status */}
              <div className="enrollment-section">
                {renderEnrollmentStatus(course)}
              </div>

              {/* Conditional rendering based on enrollment */}
              {enrollmentStatus[course.id]?.enrolled && (
                <div className="enrolled-features">
                  <h4>Course Features:</h4>
                  <ul>
                    <li>✅ Lifetime Access</li>
                    <li>✅ Certificate of Completion</li>
                    <li>✅ 24/7 Support</li>
                    <li>✅ Mobile Learning</li>
                  </ul>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="empty-state">
            <h3>📚 No courses found</h3>
            <p>
              {showCompletedOnly 
                ? "You haven't completed any courses yet. Start learning!"
                : "Try adjusting your filters to see more courses."
              }
            </p>
          </div>
        )}
      </div>

      {/* Summary Statistics */}
      {filteredAndSortedCourses.length > 0 && (
        <div className="summary-stats">
          <h4>📊 Summary:</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{filteredAndSortedCourses.length}</span>
              <span className="stat-label">Courses Available</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(enrollmentStatus).filter(s => s?.enrolled).length}
              </span>
              <span className="stat-label">Enrolled</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {Object.values(enrollmentStatus).filter(s => s?.completed).length}
              </span>
              <span className="stat-label">Completed</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
