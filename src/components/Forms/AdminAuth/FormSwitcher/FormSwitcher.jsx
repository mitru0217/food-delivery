import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FormSwitcher = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => {
    setIsLoginForm(prevState => !prevState);
  };

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        {isLoginForm ? (
          <motion.form
            key="loginForm"
            initial={{ opacity: 0, rotateY: 10 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -10 }}
          >
            {/* Ваша форма входа */}
            <h2>Форма входа</h2>
            {/* ... */}
            <button onClick={switchForm}>
              Переключить на форму регистрации
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="registerForm"
            initial={{ opacity: 0, rotateY: 10 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -10 }}
          >
            {/* Ваша форма регистрации */}
            <h2>Форма регистрации</h2>
            {/* ... */}
            <button onClick={switchForm}>Переключить на форму входа</button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FormSwitcher;
