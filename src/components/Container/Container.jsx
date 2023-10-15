import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';


const Container =({ children, onClick }) => {
    return (
        <StyledContainer onClick={onClick} >
            {children}
        </StyledContainer>
    );
}

Container.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};
export default Container;
