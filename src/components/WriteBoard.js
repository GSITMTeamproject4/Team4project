// WriteBoard 컴포넌트
import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/WriteBoard.scss';
import { PostContext } from '../components/PostContext';

const WriteBoard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { posts, setPosts } = useContext(PostContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editIndex = queryParams.get('index');

  useEffect(() => {
    if (editIndex !== null) {
      const postToEdit = posts[editIndex];
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    }
  }, [editIndex, posts]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleString();
    const newPost = { title, content, date };

    if (editIndex !== null) {
      const updatedPosts = [...posts];
      updatedPosts[editIndex] = newPost;
      setPosts(updatedPosts);
    } else {
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    }

    setTitle('');
    setContent('');
    navigate('/community');
  };

  const handleTitleChange = (event) => {
    const inputTitle = event.target.value;
    if (inputTitle.length <= 40) {
      setTitle(inputTitle);
    }
  };

  const handleContentChange = (event) => {
    const inputContent = event.target.value;
    if (inputContent.length <= 100) {
      setContent(inputContent);
    }
  };

  return (
    <div className="writeBoard">
      <h1>글 작성 페이지</h1>
      <form onSubmit={handleSubmit}>
        <h4>제목</h4>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="제목을 입력하세요"
          required
        />
        <h4>글 작성 (최대 100자)</h4>
        <textarea
          value={content}
          onChange={handleContentChange}
          cols="50"
          rows="20"
          placeholder="내용을 입력하세요"
          required
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default WriteBoard;
