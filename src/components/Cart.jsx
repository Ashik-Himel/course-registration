import PropTypes from 'prop-types';

const Cart = ({cartItem}) => {
  let totalHours = 0;
  let totalPrice = 0;
  let names = [];

  cartItem.forEach(item => {
    totalHours += item.credit;
    totalPrice += item.price;
    names.push(item.title);
  })

  return (
    <>
      <h3 className='text-[18px] text-primary font-medium mb-4'>Credit Hour Remaining {20 - totalHours} hr</h3>
      <hr />
      <h2 className='text-xl font-semibold mt-4 mb-2'>Course Name</h2>
      <div className='mb-4'>
        {
          names.map((name, index) => <span key={index} className='block text-[rgba(28,27,27,0.60)] mb-1'>{index+1}. {name}</span>)
        }
      </div>
      <hr />
      <span className='block font-medium text-[rgba(28,27,27,0.80)] my-4'>Total Credit Hour: {totalHours}</span>
      <hr />
      <span className='block font-semibold text-[rgba(28,27,27,0.80)] mt-4'>Total Price: {totalPrice} USD</span>
    </>
  );
};

Cart.propTypes = {
  cartItem: PropTypes.array
};

export default Cart;