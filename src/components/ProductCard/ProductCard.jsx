import PropTypes from 'prop-types';
import SecondaryButton from '../Buttons/SecondaryButton';
import { Card, Image, Title, Price, Description } from './ProductCard.styled';



const ProductCard = ({product}) => {
    return ( 
         <Card>
            <Image src={product.img} alt={product.title} />
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <Description>{product.description}</Description>
            <SecondaryButton>Add to cart</SecondaryButton>
        </Card>
     );
}
 
ProductCard.propTypes = {
    product: PropTypes.shape({
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};
export default ProductCard;