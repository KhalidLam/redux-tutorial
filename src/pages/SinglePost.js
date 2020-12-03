import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

// Bring fetchComments action
import { fetchComments } from "../actions/commentsActions";
import { fetchPost } from "../actions/postActions";
import { Comment } from "../components/Comment";
import { Post } from "../components/Post";

const SinglePost = ({ dispatch, loading, comments, hasErrors, post }) => {
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  const renderPost = () => {
    if (loading.post) return <p>Loading posts...</p>;
    if (hasErrors.post) return <p>Unable to display posts.</p>;
    return <Post post={post} />;
  };

  const renderComments = () => {
    if (loading.comments) return <p>Loading posts...</p>;
    if (hasErrors.comments) return <p>Unable to display posts.</p>;
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.loading, comments: state.comments.hasErrors },
  comments: state.comments.comments,
  post: state.post.post,
});

export default connect(mapStateToProps)(SinglePost);
