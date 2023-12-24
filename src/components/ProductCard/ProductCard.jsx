// import { useState, useCallback, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useStore } from '../../zustand/store';
// import {
//   Wrapper,
//   CardContainer,
//   Top,
//   Image,
//   Bottom,
//   Title,
//   Info,
//   Left,
//   LeftDetails,
//   AddButton,
//   AddIcon,
//   Right,
//   RightDone,
//   DoneIcon,
//   RightDetails,
//   Details,
//   RightRemove,
//   RemoveIcon,
//   Inside,
//   InfoIcon,
//   Contents,
// } from './ProductCard.styled';

// const ProductCard = ({ product, selectedSupplier }) => {
//   const [isClicked, setIsClicked] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const [isHoveredForRemove, setIsHoveredForRemove] = useState(false);
//   const [isInShoppingCart, setIsInShoppingCart] = useState(false);
// const [quantity, setQuantity] = useState(1);
//   const setBadgeCount = useStore(state => state.setBadgeCount);
//   const setOrderedProducts = useStore(state => state.setOrderedProducts);
//   const setSelectedSuppliers = useStore(state => state.setSelectedSuppliers);

//   const checkIfInCart = useCallback(() => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

//     // Проверяем, есть ли продукт в корзине
//     const itemExists = cartItems.some(
//       cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id
//     );

// setBadgeCount(itemExists ? cartItems.length : 0);
//     setIsInShoppingCart(itemExists); // обновляем состояние на основе проверки
//   }, [product.id, setBadgeCount]);

//   const handleAddToCart = useCallback(() => {
//     setIsClicked(true);
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     let badgecount = JSON.parse(localStorage.getItem('badgeCount')) || 0;

//     const itemIndex = cartItems.findIndex(
//       cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id
//     );
//     if (itemIndex === -1) {
//       // Добавляем новый товар в корзину с выбранным количеством
//       cartItems.push({
//         productInfo: product,
//         quantity: quantity,
//         suppliers: selectedSupplier,
//       });

//       setBadgeCount(badgecount + 1);

//     } else {
//       // Если продукт уже есть в корзине, обновляем количество для данного поставщика
//       const updatedItem = { ...cartItems[itemIndex] };
//       updatedItem.quantity += quantity;
//       cartItems[itemIndex] = updatedItem;
//     }
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     localStorage.setItem('badgeCount', JSON.stringify(cartItems.length));
//     // Пересчитываем общее количество товаров в корзине
//     const totalItemsInCart = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );

//  // Обновляем глобальное состояние
//     setBadgeCount(totalItemsInCart);
//     setOrderedProducts(cartItems);
//     setSelectedSuppliers(selectedSupplier);

//     checkIfInCart();
//   }, [
//     checkIfInCart,
//     product,
//     quantity,
//     setBadgeCount,
//     selectedSupplier,
//     setSelectedSuppliers,
//     setOrderedProducts,
//   ]); // добавляем quantity в список зависимостей

//   const handleRemoveFromCart = useCallback(() => {
//     setIsClicked(false);
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const updatedItems = cartItems.filter(
//       cartItem =>
//         !(cartItem.productInfo && cartItem.productInfo.id === product.id)
//     );
//     localStorage.setItem('cartItems', JSON.stringify(updatedItems));

//     localStorage.setItem('badgeCount', cartItems.length - 1);
//     // Обновляем глобальное состояние
//     setBadgeCount(cartItems.length - 1);
//     setOrderedProducts(updatedItems);
//     setSelectedSuppliers(selectedSupplier);
//     setQuantity(quantity);

//     checkIfInCart();
//   }, [
//     checkIfInCart,
//     product,
//     setBadgeCount,
//     selectedSupplier,
//     quantity,
//     setOrderedProducts,
//     setSelectedSuppliers,
//     setQuantity,
//   ]);
//   useEffect(() => {
//     const savedBadgeCount = localStorage.getItem('badgeCount');
//     if (savedBadgeCount !== null) {
//       useStore.setState({ badgeCount: parseInt(savedBadgeCount, 10) });
//     }
//   }, [setBadgeCount]);

//   useEffect(() => {
//     checkIfInCart();
//     // Подписываемся на событие 'storage', чтобы реагировать на изменения в localStorage
//     window.addEventListener('storage', checkIfInCart);
//         // Устанавливаем начальное состояние isClicked в зависимости от наличия продукта в корзине
//         setIsClicked(isInShoppingCart);
//     // Снимаем подписку при размонтировании компонента
//     return () => window.removeEventListener('storage', checkIfInCart);
//   }, [checkIfInCart, isInShoppingCart]);

//   return (
//     <Wrapper>
//       <CardContainer>
//         <Top>
//           <Image src={product.img} alt={product.title} />
//         </Top>
//         <Bottom isClicked={isClicked}>
//           <Left>
//             <LeftDetails>
//               <Title>{selectedSupplier.name}</Title>
//               <Info>{product.title}</Info>
//               <Info>{product.price}$</Info>
//             </LeftDetails>
//             <AddButton
//               type="submit"
//               onClick={handleAddToCart }
//               isClicked={isClicked}
//             >
//               <AddIcon />
//             </AddButton>
//           </Left>
//           <Right
//             onMouseEnter={() => setIsHoveredForRemove(true)}
//             onMouseLeave={() => setIsHoveredForRemove(false)}
//             isHoveredForRemove={isHoveredForRemove}
//           >
//             <RightDone
//               isHoveredForRemove={isHoveredForRemove}
//               isClicked={isClicked}
//             >
//               <DoneIcon />
//             </RightDone>

//             <RightDetails>
//               <Info>{product.title}</Info>
//               <Details>Added to your cart</Details>
//             </RightDetails>
//             <RightRemove
//               isHoveredForRemove={isHoveredForRemove}
//               onClick={handleRemoveFromCart}
//             >
//               <RemoveIcon />
//             </RightRemove>
//           </Right>
//         </Bottom>
//       </CardContainer>
//       <Inside
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         isHovered={isHovered}
//       >
//         <InfoIcon isHovered={isHovered} />
//         <Contents isHovered={isHovered}>{product.description}</Contents>
//       </Inside>
//     </Wrapper>
//   );
// };

// ProductCard .propTypes = {
//   product: PropTypes.object,
//   selectedSupplier: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export default ProductCard ;

import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../zustand/userStore';
import {
  Wrapper,
  CardContainer,
  Top,
  Image,
  Bottom,
  Title,
  Info,
  Left,
  LeftDetails,
  AddButton,
  AddIcon,
  Right,
  RightDone,
  DoneIcon,
  RightDetails,
  Details,
  RightRemove,
  RemoveIcon,
  Inside,
  InfoIcon,
  Contents,
} from './ProductCard.styled';

const LOCAL_STORAGE_KEY_CART = 'cartItems';
const LOCAL_STORAGE_KEY_BADGE_COUNT = 'badgeCount';

const ProductCard = ({ product, selectedSupplier }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredForRemove, setIsHoveredForRemove] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const setBadgeCount = useStore(state => state.setBadgeCount);
  const setOrderedProducts = useStore(state => state.setOrderedProducts);
  const setSelectedSuppliers = useStore(state => state.setSelectedSuppliers);

  useEffect(() => {
    const savedBadgeCount = localStorage.getItem(LOCAL_STORAGE_KEY_BADGE_COUNT);

    let badgeCountAsNumber = 0;
    if (savedBadgeCount !== null) {
      badgeCountAsNumber = parseInt(savedBadgeCount, 10);
      if (isNaN(badgeCountAsNumber)) {
        badgeCountAsNumber = 0; // If parsing failed, default to 0
      }
    }

    useStore.setState({ [LOCAL_STORAGE_KEY_BADGE_COUNT]: badgeCountAsNumber });
    setBadgeCount(badgeCountAsNumber);
  }, [setBadgeCount]);

  const handleAddToCart = useCallback(() => {
    setIsClicked(true);
    let cartItems =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CART)) || [];

    const itemIndex = cartItems.findIndex(
      cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id
    );

    if (itemIndex === -1) {
      cartItems.push({
        productInfo: product,
        quantity: quantity,
        suppliers: selectedSupplier,
      });
    } else {
      const updatedItem = { ...cartItems[itemIndex] };
      updatedItem.quantity += quantity;
      cartItems[itemIndex] = updatedItem;
    }

    localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(cartItems));
    localStorage.setItem(
      LOCAL_STORAGE_KEY_BADGE_COUNT,
      JSON.stringify(cartItems.length)
    );

    const totalItemsInCart = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setBadgeCount(totalItemsInCart);
    setOrderedProducts(cartItems);
    setSelectedSuppliers(selectedSupplier);
  }, [
    product,
    quantity,
    setBadgeCount,
    selectedSupplier,
    setSelectedSuppliers,
    setOrderedProducts,
  ]);

  const handleRemoveFromCart = useCallback(() => {
    setIsClicked(false);
    let cartItems =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CART)) || [];
    const updatedItems = cartItems.filter(
      cartItem =>
        !(cartItem.productInfo && cartItem.productInfo.id === product.id)
    );

    localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(updatedItems));
    localStorage.setItem(LOCAL_STORAGE_KEY_BADGE_COUNT, cartItems.length - 1);
    setBadgeCount(updatedItems.length);
    setOrderedProducts(updatedItems);
    setSelectedSuppliers(selectedSupplier);
  }, [
    product,
    setBadgeCount,
    selectedSupplier,
    setOrderedProducts,
    setSelectedSuppliers,
  ]);

  return (
    <Wrapper>
      <CardContainer>
        <Top>
          <Image src={product.img} alt={product.title} />
        </Top>
        <Bottom isClicked={isClicked}>
          <Left>
            <LeftDetails>
              <Title>{selectedSupplier.name}</Title>
              <Info>{product.title}</Info>
              <Info>{product.price}$</Info>
            </LeftDetails>
            <AddButton
              type="submit"
              onClick={handleAddToCart}
              isClicked={isClicked}
            >
              <AddIcon />
            </AddButton>
          </Left>
          <Right
            onMouseEnter={() => setIsHoveredForRemove(true)}
            onMouseLeave={() => setIsHoveredForRemove(false)}
            isHoveredForRemove={isHoveredForRemove}
          >
            <RightDone
              isHoveredForRemove={isHoveredForRemove}
              isClicked={isClicked}
            >
              <DoneIcon />
            </RightDone>
            <RightDetails>
              <Info>{product.title}</Info>
              <Details>Added to your cart</Details>
            </RightDetails>
            <RightRemove
              isHoveredForRemove={isHoveredForRemove}
              onClick={handleRemoveFromCart}
            >
              <RemoveIcon />
            </RightRemove>
          </Right>
        </Bottom>
      </CardContainer>
      <Inside
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
      >
        <InfoIcon isHovered={isHovered} />
        <Contents isHovered={isHovered}>{product.description}</Contents>
      </Inside>
    </Wrapper>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
  selectedSupplier: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
