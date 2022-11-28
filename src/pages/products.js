import './products.css'
import Card from '../components/elements/card';
import menu from '../components/elements/menuList'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Products () {
    const countPrice = useSelector(state => state.basket.countPrice)
    const countItems = useSelector(state => state.basket.countItems)
    const navigation = useNavigate()

    const handleLink = (id) => {
        navigation(`product/${id}`)
    }

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
        <div className='container'>
            <div className='products'>
                <header className='products__header'>
                    <div className="header__title">
                        Наша продукция
                    </div>

                    <div className="header__basket">
                        <div>
                            <p className="header__basket_items">{countItems} {nameText(countItems)}</p>
                            <p className="header__basket_price"> на сумму {countPrice} ₽</p>
                        </div>
                        <div>
                            <Link to="/basket">
                                <button className="header__basket_btn">
                                    <img src="./images/products_basket_btn.svg" alt="" />
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/auth">
                                <button className="header__exit">
                                    Выйти
                                </button>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className='products__cards'>
                    {menu.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                idx={item.idx}
                                url={item.img}
                                title={item.name}
                                description={item.description}
                                price={item.price}
                                weight={item.weight}
                                handleLink={() => handleLink(item.id)}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}

export default Products