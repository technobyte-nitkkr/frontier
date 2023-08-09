import "./TestimonialCard.css";

const TestimonialCard = ({name, review, profileImg,branch,course}) => {
  return (
    <div className="testimonialCardContainer">
      <div className="testimonicalCardContent">
        <p>
          {" "}
          {review}{" "}
        </p>
      </div>
      <div className="testimonicalCardPerson">
        <div className="testimonialCardPersonAvatar">
          <img src={profileImg} />
        </div>
        <div className="testimonialCardPersonName">
          <div className="personName"> {name} </div>
          <div className="personBranch"> {branch} {course}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
