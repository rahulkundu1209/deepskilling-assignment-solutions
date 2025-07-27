import React, { useState } from "react";
import Post from "./Post";

class Posts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null
    };
  }
  loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }
  componentDidMount(){
    this.loadPosts();
  }
  render(){
    const { posts, loading, error } = this.state;

    if (loading) {
      return <div>Loading posts...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Posts</h2>
        {posts.map(post => (
          <div style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '5px' }}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <small>User ID: {post.userId}</small>
          </div>
        ))}
      </div>
    )
  }
  componentDidCatch(error, info){
    console.error('Error caught by componentDidCatch:', error, info);
    this.setState({ error: error.message });
  }
}

export default Posts;