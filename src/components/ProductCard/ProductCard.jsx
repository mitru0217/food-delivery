import { useState, useEffect, useCallback  } from 'react';
import PropTypes from 'prop-types';
import { useBadgeCountStore } from '../../zustand/store';
import {
  CardContainer,
  Card,
  ImgBox,
  Image,
  Content,
  Title,
  Price,
  Description,
  ButtonAddToCart,
} from './ProductCard.styled';

const ProductCard = ({ product, selectedSupplier}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInShoppingCart, setIsInShoppingCart] = useState(false);
  const setBadgeCount = useBadgeCountStore(state => state.setBadgeCount);
  const [quantity, setQuantity] = useState(1); // состояние для количества продукта

  const handleQuantityChange = (event) => {
    // Убедитесь, что количество является положительным числом
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };

const checkIfInCart = useCallback(() => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const itemExists = cartItems.some(cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id);
  setIsInShoppingCart(itemExists); // обновляем состояние на основе проверки
}, [product.id]);

const handleAddToCart = useCallback(() => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const itemExists = cartItems.some(cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id);

  if (!itemExists) {
    // Добавляем новый товар в корзину с выбранным количеством
    cartItems.push({ productInfo: product, quantity: quantity }); // используем состояние quantity
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  // Пересчитываем общее количество товаров в корзине
  const totalItemsInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  // Обновляем глобальное состояние
  setBadgeCount(totalItemsInCart);

  checkIfInCart();
}, [checkIfInCart, product, quantity, setBadgeCount]); // добавляем quantity в список зависимостей

const handleRemoveFromCart = useCallback(() => {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const updatedItems = cartItems.filter(cartItem => !(cartItem.productInfo && cartItem.productInfo.id === product.id));
  localStorage.setItem('cartItems', JSON.stringify(updatedItems));

  // Пересчитываем общее количество товаров в корзине после удаления, используя обновленный список
  const totalItemsInCart = updatedItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  // Обновляем глобальное состояние
  setBadgeCount(totalItemsInCart);

  checkIfInCart();
}, [checkIfInCart, product, setBadgeCount]);


useEffect(() => {
  checkIfInCart();
  // Подписываемся на событие 'storage', чтобы реагировать на изменения в localStorage
  window.addEventListener('storage', checkIfInCart);
  // Снимаем подписку при размонтировании компонента
  return () => window.removeEventListener('storage', checkIfInCart);
}, [checkIfInCart]);

  return (
    <CardContainer>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
      >
        <ImgBox isHovered={isHovered}>
          <Image src={product.img} alt={product.title} />
        </ImgBox>
        <Content isHovered={isHovered}>
        <span>{selectedSupplier.name}</span>
          <Title isHovered={isHovered}>{product.title}</Title>
          <Price>Price:{product.price}</Price> 
           <Description>{product.description}</Description>
  {/* Инпут для выбора количества */}
  <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        min="1"
        style={{ marginBottom: '10px', width: '60px' }}
      />

          {isInShoppingCart ? (
          <ButtonAddToCart onClick={handleRemoveFromCart}>
            Delete from cart
          </ButtonAddToCart>
        ) : (
          <ButtonAddToCart onClick={handleAddToCart}>
            Add to cart
          </ButtonAddToCart>
        )}
        </Content>
      </Card>
    </CardContainer>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  isInShoppingCart: PropTypes.bool.isRequired,
  selectedSupplier: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  
};
export default ProductCard;




// const ProductCard = ({ item, onClick, isInShoppingCart }) => {
//   const isLoading = false;
//   if (isLoading) {
//     return (
//       <Card style={{ width: '300px', height: '350px' }}>
//         <Skeleton active />
//       </Card>
//     );
//   }
//   const setBadgeCount = useBadgeCountStore(state => state.setBadgeCount);

//   const handleAddToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const itemExists = cartItems.some(cartItem => cartItem.id === item.id);
//     if (itemExists) {
//       return;
//     }
//     cartItems.push(item);
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     setBadgeCount(cartItems.length);
//   };

//   const handleRemoveFromCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const updatedItems = cartItems.filter(cartItem => cartItem.id !== item.id);
//     localStorage.setItem('cartItems', JSON.stringify(updatedItems));
//   };

//   if (isLoading) {
//     return (
//       <Card style={{ width: '300px', height: '350px' }}>
//         <Skeleton active />
//       </Card>
//     );
//   }
//   return (
//     <Card
//       hoverable
//       key={item.id}
//       title={item.name}
//       onClick={onClick}
//       style={{ width: '300px', height: '350px' }}
//     >
//       <Space direction="vertical" align="end">
//         <img
//           src={item.image}
//           alt={item.name}
//           style={{ width: '100%', height: '165px' }}
//         />
//         <Typography>Price:{item.price}$</Typography>
//         {isInShoppingCart ? (
//           <Button onClick={handleRemoveFromCart}>
//             Delete from ShoppingCart
//             <DeleteOutlined />
//           </Button>
//         ) : (
//           <Button onClick={handleAddToCart}>
//             Add to cart
//             <PlusOutlined />
//           </Button>
//         )}
//       </Space>
//     </Card>
//   );
// };



// // С помощью useCallback функция checkIfInCart будет сохранять свою идентичность, пока не изменится product.id, что предотвратит ненужные вызовы эффекта и повторные рендеры. Поскольку функция теперь обернута в useCallback, она может быть безопасно включена в список зависимостей useEffect.
//   useEffect(() => {
   
//     // Вызов функции при монтировании компонента
//     checkIfInCart();

//     // Подписываемся на событие 'storage', чтобы реагировать на изменения в localStorage
//     window.addEventListener('storage', checkIfInCart);

//     // Снимаем подписку при размонтировании компонента
//     return () => window.removeEventListener('storage', checkIfInCart);
//   }, [checkIfInCart]); // зависимость от product.id гарантирует, что эффект перезапустится, если ID продукта изменится





  
  // const handleAddToCart = () => {
  //   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   const existingItem = cartItems.find(cartItem => cartItem.productInfo.id === product.id);
  
  //   if (existingItem) {
  //     existingItem.quantity += quantity;
  //   } else {
  //     cartItems.push({ productInfo: product, quantity: quantity });
  //   }
  
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  //   // Пересчитываем общее количество товаров в корзине
  //   const totalItemsInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  
  //   // Обновляем глобальное состояние
  //   setBadgeCount(totalItemsInCart);
  
  //   checkIfInCart(); // Проверка наличия в корзине
  // };




  // const handleRemoveFromCart = () => {
  //   let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  //   cartItems = cartItems.filter(cartItem => cartItem.productInfo.id !== product.id);
  
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
  //   // Пересчитываем общее количество товаров в корзине после удаления
  //   const totalItemsInCart = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  
  //   // Обновляем глобальное состояние
  //   setBadgeCount(totalItemsInCart);
  
  //   checkIfInCart(); // Проверка наличия в корзине
  // };
 