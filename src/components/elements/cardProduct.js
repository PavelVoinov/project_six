import './cardProduct.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addProductInBasket } from '../../store/reducers/basket';
import { useDispatch } from 'react-redux'
import { v4 as uuid4 } from 'uuid'

function CardProduct ({id, url, title, description, price, weight}) {
  const navigation = useNavigate()

  const dispatch = useDispatch()

  const addProduct = () => {
    const items = {
      id: id,
      idx: uuid4(),
      title: title,
      url: url,
      price: price
    }

    dispatch(addProductInBasket(items))
  }

    const countPrice = useSelector(state => state.basket.countPrice)
    const countItems = useSelector(state => state.basket.countItems)

    function nameText (countItems) {
        if (countItems === 1) {
            return 'товар'
        } else if (countItems > 1 && countItems < 5) {
            return 'товара'
        } else {
            return 'товаров'
        }
    }

  return (
    <div className='card-product'>
        <div className="card-container">
            <header className='card-product__header'>
                <button onClick={() => navigation(-1)} className='card-product__header_back'>
                    <img src="../../images/basket_back.svg" alt="" />
                </button>

                <div className="card-product__header_items">
                    <div>
                        <p className="card-product__basket_items">{countItems} {nameText(countItems)}</p>
                        <p className="card-product__basket_price"> на сумму {countPrice} ₽</p>
                    </div>

                    <div>
                        <Link to="/basket">
                            <button className="card-product__basket_btn">
                                <img src="../../images/products_basket_btn.svg" alt="" />
                            </button>
                        </Link>
                    </div>

                    <div>
                            <Link to="/auth">
                                <button className="card-product__exit">
                                    Выйти
                                </button>
                            </Link>
                        </div>
                </div>
            </header>

            <main className='card-product__main'>
                    <div className="">
                        <img className='card-product__img' src={url} alt="" />
                    </div>

                    <div className="">
                        <h2 className='card-product__title'>{title}</h2>
                        <p className='card-product__description'>{description} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error tempore aperiam illo incidunt corrupti eveniet excepturi earum, nulla esse ipsam voluptatum facere reiciendis quibusdam accusantium illum ea repellendus neque vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis excepturi dolores provident hic rem quam tenetur repellendus, saepe facilis consequuntur? Vitae culpa rem odit sequi? Esse, praesentium illum. Facere, quia!</p>
                        <span className='card-product__price'>{price} ₽ / </span>
                        <span className='card-product__weight'>{weight} г</span>
                        <button onClick={addProduct} className='card-product__button'>
                            В корзину
                        </button>
                    </div>
            </main>
        </div>
    </div>
  );
}

export default CardProduct