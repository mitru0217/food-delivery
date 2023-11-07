import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types';

export const DesktopAndTablet = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768})
  return isDesktop ? children : null
}

DesktopAndTablet.propTypes = {
    children: PropTypes.node.isRequired,
  };


export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

Mobile.propTypes = {
    children: PropTypes.node.isRequired,
  };

