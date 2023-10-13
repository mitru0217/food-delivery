import PropTypes from 'prop-types';
import { Card, Image, Title } from './SupplierCard.styled';

const SupplierCard = ({ logo, name, onClick } ) => {
    return (
        <Card  onClick={onClick}>
            <Image src={logo} alt={name} />
            <Title>{name}</Title>
        </Card>
    );
};

SupplierCard.propTypes = {
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
   
};

export default SupplierCard;
