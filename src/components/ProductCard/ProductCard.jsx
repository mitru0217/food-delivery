import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useStore } from '../../zustand/store';
import {
  Card,
  ImgBox,
  Image,
  Content,
  Title,
  Price,
  Description,
  Quantity,
  ButtonAddToCart,
  Wrapper,
} from './ProductCard.styled';
import SizeButton from '../Buttons/SizeButton/SizeButton';

const ProductCard = ({ product, selectedSupplier }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInShoppingCart, setIsInShoppingCart] = useState(false);
  const setBadgeCount = useStore(state => state.setBadgeCount);
  const setProducts = useStore(state => state.setProducts);
  const setSelectedSuppliers = useStore(state => state.setSelectedSuppliers);
  const setQuantity = useStore(state => state.setQuantity);
  const quantity = useStore(state => state.quantity);
  const setSelectedSizePrice = useStore(state => state.setSelectedSizePrice);
  const [selectedSizeInfo, setSelectedSizeInfo] = useState(null);
  // Проверяем, есть ли у продукта разные размеры
  const hasVariableSizes = product.sizes && product.sizes.length > 0;
  // Функция для отслеживания выбранного размера и его цены
  const handleSizeToggle = sizeInfo => {
    setSelectedSizeInfo(sizeInfo);
    setSelectedSizePrice(sizeInfo.price);
  };

  const handleQuantityChange = event => {
    // Убедитесь, что количество является положительным числом
    const newQuantity = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(isNaN(newQuantity) ? 1 : newQuantity);
  };

  const checkIfInCart = useCallback(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemExists = cartItems.some(
      cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id
    );
    setIsInShoppingCart(itemExists); // обновляем состояние на основе проверки
  }, [product.id]);

  const handleAddToCart = useCallback(() => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    // const itemExists = cartItems.some(cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id);
    const itemIndex = cartItems.findIndex(
      cartItem => cartItem.productInfo && cartItem.productInfo.id === product.id
    );
    if (itemIndex === -1) {
      // Добавляем новый товар в корзину с выбранным количеством
      cartItems.push({
        productInfo: product,
        quantity: quantity,
        suppliers: selectedSupplier,
      });
    } else {
      // Если продукт уже есть в корзине, обновляем количество для данного поставщика
      const updatedItem = { ...cartItems[itemIndex] };
      updatedItem.quantity += quantity;
      cartItems[itemIndex] = updatedItem;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Пересчитываем общее количество товаров в корзине
    const totalItemsInCart = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    // Обновляем глобальное состояние
    setBadgeCount(totalItemsInCart);
    setProducts(product);
    setSelectedSuppliers(selectedSupplier);
    setQuantity(quantity);

    checkIfInCart();
  }, [
    checkIfInCart,
    product,
    quantity,
    setBadgeCount,
    selectedSupplier,
    setProducts,
    setSelectedSuppliers,
    setQuantity,
  ]); // добавляем quantity в список зависимостей

  const handleRemoveFromCart = useCallback(() => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = cartItems.filter(
      cartItem =>
        !(cartItem.productInfo && cartItem.productInfo.id === product.id)
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));

    // Пересчитываем общее количество товаров в корзине после удаления, используя обновленный список
    const totalItemsInCart = updatedItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    // Обновляем глобальное состояние
    setBadgeCount(totalItemsInCart);
    setProducts(product);
    setSelectedSuppliers(selectedSupplier);
    setQuantity(quantity);

    checkIfInCart();
  }, [
    checkIfInCart,
    product,
    setBadgeCount,
    selectedSupplier,
    quantity,
    setProducts,
    setSelectedSuppliers,
    setQuantity,
  ]);

  useEffect(() => {
    checkIfInCart();
    // Подписываемся на событие 'storage', чтобы реагировать на изменения в localStorage
    window.addEventListener('storage', checkIfInCart);
    // Снимаем подписку при размонтировании компонента
    return () => window.removeEventListener('storage', checkIfInCart);
  }, [checkIfInCart]);

  return (
    <>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        isHovered={isHovered}
      >
        <ImgBox isHovered={isHovered}>
          <Image src={product.img} alt={product.title} />
        </ImgBox>
        <Content isHovered={isHovered}>
          <Title isHovered={isHovered}>{selectedSupplier.name}</Title>
          <Title isHovered={isHovered}>{product.title}</Title>
          <Description>{product.description}</Description>
          {hasVariableSizes ? (
            // Если у продукта есть разные размеры, отображаем их
            <div>
              {product.sizes.map(sizeInfo => (
                <div key={sizeInfo.size}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      gap: '1rem',
                      marginTop: '1rem',
                    }}
                  >
                    <span>Choose Size: </span>
                    <SizeButton
                      sizeInfo={sizeInfo}
                      isSelected={sizeInfo === selectedSizeInfo}
                      onClick={() => handleSizeToggle(sizeInfo)}
                    />
                  </div>
                </div>
              ))}
              <div>
                {selectedSizeInfo && (
                  <Price>Price: {selectedSizeInfo.price} $</Price>
                )}
              </div>
            </div>
          ) : (
            <Price>Price:{product.price} $</Price>
          )}
          <Wrapper>
            <Quantity
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
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
          </Wrapper>
        </Content>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        size: PropTypes.number,
        price: PropTypes.number.isRequired,
      })
    ),
    description: PropTypes.string.isRequired,
  }).isRequired,
  selectedSupplier: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductCard;