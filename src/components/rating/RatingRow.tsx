import React from 'react';

interface RatingRowProps {
  label: string;
  selectedRating: number | null;
  onRatingChange: (rating: number) => void;
}

const ratings = [1, 2, 3, 4, 5];

const RatingRow: React.FC<RatingRowProps> = ({ label, selectedRating, onRatingChange }) => {
  return (
    <div className="p-4 md:p-4 md:flex items-center justify-between border rounded-lg">
      <div className="text-main w-[10%] md:w-fit whitespace-nowrap font-medium">{label}</div>
      <div className="flex gap-4 overflow-x-auto mt-3 md:mt-0">
        {ratings.map((rating) => (
          <div
            key={rating}
            onClick={() => onRatingChange(rating)}
            className={`flex items-center justify-center p-4 shadow border rounded-full w-[20px] h-[20px] md:w-[40px] md:h-[40px] cursor-pointer ${
              selectedRating === rating ? 'bg-main text-white' : ''
            }`}
          >
            {rating}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingRow;