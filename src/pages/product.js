import CardProduct from '../components/elements/cardProduct';
import menu from '../components/elements/menuList'
import { useParams } from 'react-router-dom'

function Product () {
    const params = useParams()
    let openCard = menu.find(item => item.id === +params.id);

    return (
        <CardProduct
            key={openCard.id}
            id={openCard.id}
            idx={openCard.idx}
            url={openCard.img}
            title={openCard.name}
            description={openCard.description}
            price={openCard.price}
            weight={openCard.weight}
        />
    );
}

export default Product