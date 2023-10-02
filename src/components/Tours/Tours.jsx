import { v4 as uuidv4 } from "uuid";
import React from "react";
import TourCard from "./TourCard/TourCard";
import "../Tours/Tours.css";
import tourImg1 from "../../assets/tourImg1.png";
import tourImg2 from "../../assets/tourImg2.png";
import tourImg3 from "../../assets/tourImg3.png";
import tourImg4 from "../../assets/tourImg4.png";

const tours = [
  {
    id: uuidv4(),
    img: tourImg1,
    wayToGet: "На автобусе",
    members: true,
    membersQuantity: "10",
    title: "Тбилиси, апрель — 83.000",
  },
  {
    id: uuidv4(),
    img: tourImg2,
    wayToGet: "На самолёте",
    members: false,
    title: "Стамбул, март — 110.000",
  },
  {
    id: uuidv4(),
    img: tourImg3,
    wayToGet: "На самолёте",
    members: true,
    membersQuantity: "15",
    title: "Дубай, июнь — 220.000",
  },
  {
    id: uuidv4(),
    img: tourImg4,
    wayToGet: "Самолёт + Паром",
    members: true,
    membersQuantity: "11",
    title: "Пхукет, сентябрь — 135.000",
  },
];

function Tours() {
  return (
    <div className="tours__list">
      {tours.map((tour) => {
        return (
          <TourCard
            key={tour.id}
            img={tour.img}
            wayToGet={tour.wayToGet}
            members={tour.members}
            membersQuantity={tour.membersQuantity}
            title={tour.title}
          />
        );
      })}
    </div>
  );
}

export default Tours;
