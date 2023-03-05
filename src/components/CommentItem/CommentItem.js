import './CommentItem.scss'

function formDate(timestamp){

    let d = new Date(timestamp);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
  
    
    if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
  
    return month + "/" + day + "/" + year;
    };

const CommentItem = ({comment, name, timestamp}) => {
// console.log(comment);
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__profile">
          <p className="comment__image"></p>
        </div>
        <div className="comment__container--entry">
          <div className="comment__entryheader">
            <p className="comment__name">{name}</p>
            <p className="comment__timecode">{formDate(timestamp)}</p>
          </div>
          <p className="comment__text">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;