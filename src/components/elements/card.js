import { addProductInBasket } from '../../store/reducers/basket';
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'

function Card ({id, url, title, description, price, weight, handleLink}) {

  const dispatch = useDispatch()

  const addProduct = (e) => {
    e.stopPropagation()
    const items = {
      id: id,
      idx: uuid4(),
      title: title,
      url: url,
      price: price
    }

  dispatch(addProductInBasket(items))
  }

  return (
    <div className='card' onClick={handleLink}>
      <img className='card__img' src={url} alt="" />
      <h2 className='card__title'>{title}</h2>
      <p className='card__description'>{description}</p>
      <span className='card__price'>{price} ₽ / </span>
      <span className='card__weight'>{weight} г</span>
      <button onClick={addProduct} className='card__button'>
        <img src="./images/products_add_btn.svg" alt="" />
      </button>
    </div>
  );
}

export default Card