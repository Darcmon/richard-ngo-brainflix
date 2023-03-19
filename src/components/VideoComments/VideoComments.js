import "./VideoComments.scss";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg"
import CommentItem from "../CommentItem/CommentItem";

const VideoComments = ({currentVideo}) => {
  const commentList = currentVideo.comments;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    };
    
  return (
    <>
      <section className="video-comment video-margin">
        <span className="video-comment__total">
          {commentList.length} Comments
        </span>
        <div className="video-comment__container">
          <img className="video-comment__avatar" src={avatarIcon} alt="profile pic" />
          <div>
          <h3 className="video-comment__title">JOIN THE CONVERSATION</h3>
          <form className="video-comment__form">
            <input type="hidden" id="date" name="date" value="currentDate" />
            <textarea
              className="video-comment__input"
              id="message"
              type="text"
              name="message"
              placeholder="Add a new comment"
            ></textarea>
            <button className="video-comment__submit" type="submit" onClick={handleOnSubmit}>
              <img className="video-comment__icon" src={commentIcon} alt='comment icon'></img>
              COMMENT
            </button>
          </form>
          </div>
        </div>
        {commentList.map((commentData) => (
          <CommentItem 
          key={commentData.id}
          id={commentData.id}
          comment={commentData.comment}
          name={commentData.name}
          timestamp={commentData.timestamp}
          />
        ))}
      </section>
    </>
  );
};

export default VideoComments;
