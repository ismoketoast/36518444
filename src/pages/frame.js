/**
 * Input:
 * - Title of video
 * - Date it was created
 * - Duration
 * - Thumbnail picture
 * 
 * Notes:
 * Red text
 * Whole row changes color on hover
 * Opens up a modal when clicked
 * Static on the rows sometimes (make your own static gif)
 */

 export const VideoFrame = (props) => {
   return (
      <div className="vf-container">
        <div className="vf-info">
          <p className="vf-title">{props.title}</p>
          <p className="vf-date">{props.date}</p>
          <p className="vf-duration">{props.duration}</p>
        </div>
        <img src={props.imgsrc} alt={props.imgsrc} width="225" height="112.5"></img>
        <div style={{width: props.margin + "em"}}></div>
      </div>
   );
 }