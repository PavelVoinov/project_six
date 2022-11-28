import CardBasket from '../components/elements/cardBasket'
import './basket.css'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'

function Basket () {
    const basket = useSelector(state => state.basket.basket)
    const countPrice = useSelector(state => state.basket.countPrice)
    const navigation = useNavigate()

    const handleLink = (id) => {
        navigation(`product/${id}`)
    }

    return (
        <div>
            <div>
                <header className='basket__header'>
                    <Link to="/">
                        <div>
                            <button className='basket__header_back'>
                                <img src="./images/basket_back.svg" alt="" />
                            </button>
                        </div>
                    </Link>

                        <div>Корзина с выбранными товарами</div>

                    <Link to="/auth">
                        <div>
                            <button className="basket__exit">Выйти</button>
                        </div>
                    </Link>
                </header>

                <div className='basket'>
                    <main className='basket__main'>
                        {basket.map((item) => {
                            return (
                                <CardBasket
                                    key={item.idx}
                                    id={item.id}
                                    idx={item.idx}
                                    url={item.url}
                                    title={item.title}
                                    price={item.price}
                                    handleLink={() => handleLink(item.id)}
                                />
                            )
                        })}
                    </main>
                </div>
            </div>

            <div className='basket__footer'>
                <div className='basket'>
                    <div className='footer__elements'>
                        <div className="footer__elements_left">
                            <span>Заказ на сумму: </span>
                            <span className='footer__price'>{countPrice} ₽</span>
                        </div>
                        <div className="">
                            <button tton className='footer__button'>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Basket