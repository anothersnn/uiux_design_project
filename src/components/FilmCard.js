import Link from "next/link";
import { useState } from "react";

const getRatingColorStyles = (rating) => {
  let colorClass;
  if (rating >= 7.5) {
    colorClass = 'text-green-500';
  } else if (rating >= 5) {
    colorClass = 'text-yellow-400';
  } else {
    colorClass = 'text-red-600';
  }

  return {
    ratingColorClass: colorClass
  };
};

const FilmCard = ({ film }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ratingColorClass } = getRatingColorStyles(film.rating);

  return (
    <Link href={`/film/${film.id}`}>
      <div
        className="bg-white shadow-sm rounded-md cursor cursor-pointer max-w-full min-h-200 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="rounded-t-md w-full h-auto"
          src={film.medium_cover_image}
          alt={film.title}
        />
        <div
          className={`px-6 py-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-bold text-white text-l mb-1">
            {film.title}
          </div>
          <p
            className={`text-white text-sm mb-1 ${ratingColorClass}`}
          >
            Rating: {film.rating}
          </p>
          <p className="text-white text-sm mb-1">Year: {film.year}</p>
        </div>
      </div>
    </Link>
  );
};

export default FilmCard;
