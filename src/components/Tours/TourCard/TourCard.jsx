import React from "react";
import "../../Tours/TourCard/TourCard.css";
import Heading from "../../Heading/Heading";

function TourCard(props) {
  return (
    <div className="tours__card">
      <div className="tours__signs">
        <div className="tours__signs-way">{props.wayToGet}</div>
        {props.members && (
          <div className="tours__signs-members">
            {props.membersQuantity}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
          </div>
        )}
      </div>
      <img src={props.img} alt={props.title} />
      <Heading class="tours__title heading__h2" level="h2" text={props.title} />
    </div>
  );
}

export default TourCard;
