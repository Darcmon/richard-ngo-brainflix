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
console.log(comment);
  return (
    <div class="comment">
      <div class="comment__container">
        <div class="comment__profile">
          <p class="comment__image"></p>
        </div>
        <div class="comment__container--entry">
          <div class="comment__entryheader">
            <p class="comment__name">{name}</p>
            <p class="comment__timecode">{formDate(timestamp)}</p>
          </div>
          <p class="comment__text">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;