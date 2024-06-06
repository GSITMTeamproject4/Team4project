// Community 컴포넌트
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import '../css/Community.scss';
import { PostContext } from '../components/PostContext';
import TopButton from './TopButton';

const Community = () => {
  const { posts, setPosts } = useContext(PostContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [showContentIndex, setShowContentIndex] = useState(-1);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const navigate = useNavigate();

  const toggleContent = (index) => {
    setShowContentIndex(index === showContentIndex ? -1 : index);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    const post = posts[index];
    setEditTitle(post.title);
    setEditContent(post.content);
    navigate(`/community/write?index=${index}`);
  };

  const handleUpdate = (updatedIndex, updatedPost) => {
    const updatedPosts = [...posts];
    updatedPosts[updatedIndex] = updatedPost;
    setPosts(updatedPosts);
    setEditingIndex(-1);
    setEditTitle('');
    setEditContent('');
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <div className="comm-top">
        <nav className="navbar">
          <div>
            <p className="commTitle">제보 게시판</p>
          </div>
        </nav>
        <div className="buttonContainer">
          <Link to="/community/write">
            <button className="textButton">글 작성하기</button>
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="textList">
            {currentPosts.map((post, index) => (
              <div key={index} className="communityList">
                <div className="postHeader">
                  <span className="postNumber">
                    번호: {posts.length - indexOfFirstPost - index}
                  </span>
                  <h3>{post.title}</h3>
                  <span className="postDate">{post.date}</span>
                </div>
                {editingIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    ></textarea>
                    <button
                      onClick={() =>
                        handleUpdate(index, {
                          title: editTitle,
                          content: editContent,
                          date: new Date().toLocaleString(),
                        })
                      }
                    >
                      저장
                    </button>
                  </div>
                ) : (
                  <div>
                    {showContentIndex === index ? <p>{post.content}</p> : null}
                    <button onClick={() => toggleContent(index)}>
                      {showContentIndex === index ? '내용 숨기기' : '내용 보기'}
                    </button>
                    <div className="buttons">
                      <button onClick={() => handleEdit(index)}>수정</button>
                      <button onClick={() => handleDelete(index)}>삭제</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="nullList">게시글이 없습니다.</p>
        )}
        {posts.length > 0 && <div className="box"></div>}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={posts.length}
          itemsPerPage={postsPerPage}
          pagesPerGroup={5}
        />
      </div>
      <TopButton />
    </div>
  );
};

export default Community;
