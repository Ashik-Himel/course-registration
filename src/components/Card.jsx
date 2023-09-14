import PropTypes from 'prop-types';
import { BsBook } from "react-icons/bs";
import { FiDollarSign } from "react-icons/fi";

const Card = ({card, handleClick}) => {
  const {img, title, description, price, credit} = card;

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg'>
      <img className='w-full rounded-lg' src={img} alt="Course Thumbnail" />
      <h2 className='text-xl font-semibold mt-4'>{title}</h2>
      <p className='text-[rgba(28,27,27,0.60)] mt-2'>{description}</p>
      <div className='flex justify-between items-center gap-2 mt-4 text-[18px] font-medium'>
        <div className='flex items-center gap-2'>
          <FiDollarSign />
          <span className='text-[rgba(28,27,27,0.60)]'>Price: {price}</span>
        </div>
        <div className='flex items-center gap-2'>
          <BsBook />
          <span className='text-[rgba(28,27,27,0.60)]'>Credit: {credit}hr</span>
        </div>
      </div>
      <a href="#/" onClick={() => handleClick(card)} className="btn btn-primary w-full mt-8">Select</a>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Card;