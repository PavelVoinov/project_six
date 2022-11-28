import '../elements/cardBasket.css'
import { removeProductBasket } from '../../store/reducers/basket';
import { useDispatch } from 'react-redux'

function CardBasket ({id, idx, url, title, price, handleLink}) {
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.stopPropagation()
    dispatch(removeProductBasket(idx))
  }

  return (
    <div className='card__basket' onClick={handleLink}>
      <div className='card__basket_left'>
        <img className='card__basket-img' src={url} alt="" />
        <h2 className='card__basket-title'>{title}</h2>
      </div>
      <div className='card__basket_right'>
        <span className='card__basket-price'>{price} ₽</span>
        <button onClick={handleDelete} className='card__basket-button'><img src="./images/basket_del.svg" alt="" /></button>
      </div>
    </div>
  );
}

export default CardBasket