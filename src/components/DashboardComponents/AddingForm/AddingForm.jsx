import { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button } from '@mui/material';
import CustomTextField from '../../TextField/TextField';
import { useCategoryStore } from '../../../zustand/categoryStore';

const AddingForm = () => {
  const {
    handleSubmit: handleSubmitCategory,
    control: controlCategory,
    reset,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });
  const { handleSubmit: handleSubmitImage } = useForm();
  const inputRef = useRef(null);
  const addCategory = useCategoryStore(state => state.addCategory);
  const addCategoryImage = useCategoryStore(state => state.addCategoryImage);
  const [categoryImage, setCategoryImage] = useState(null);
  const categoryId = useCategoryStore(state => state.category); // Получаем ID из стора
  const setCategoryId = useCategoryStore(state => state.setCategory); // Функция для обновления ID в сторе

  const onSubmitCategory = async data => {
    try {
      const response = await addCategory(data.categoryName);
      setCategoryId(response); // Сохраняем ID созданной категории
      reset();
      clearErrors();
    } catch (error) {
      console.error(error); // Обработка ошибок
    }
  };
  const handleImageUpload = event => {
    const imageFile = event.target.files[0];
    setCategoryImage(imageFile);
  };

  const onSubmitImage = async data => {
    try {
      const formData = new FormData();
      formData.append('categoryImg', categoryImage);

      if (categoryId && categoryImage) {
        await addCategoryImage(categoryId, formData);
        setCategoryImage(null); // Очистить превью после успешной отправки
        handleSubmitImage(); // Сбросить форму изображения после успешной отправки
        inputRef.current.value = ''; // Явно сбрасываем значение input после отправки
      } else {
        console.error('No image data available');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      display="flex"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        width: '30rem',
      }}
    >
      <form onSubmit={handleSubmitCategory(onSubmitCategory)}>
        <Controller
          name="categoryName"
          control={controlCategory}
          defaultValue=""
          rules={{
            required: 'This field is required',
            pattern: {
              value: /^[A-Za-z\s]*$/,
              message: 'Only letters and spaces are allowed',
            },
          }}
          render={({ field }) => (
            <CustomTextField
              {...field}
              label="Category Name"
              type="text"
              error={!!errors.categoryName}
              helperText={errors.categoryName && errors.categoryName.message}
              InputLabelProps={{
                style: {
                  color: '#ffffff', // изменить цвет метки
                },
              }}
              InputProps={{
                style: {
                  fontSize: '2rem',
                  color: '#ffffff',
                },
              }}
            />
          )}
        />
        {isValid && (
          <Button
            type="submit"
            style={{ color: '#4fc3f7', fontSize: '1.5rem' }}
          >
            Create Category
          </Button>
        )}
      </form>

      <form
        action={`/category/${categoryId}/image`}
        method="patch"
        encType="multipart/form-data"
        onSubmit={handleSubmitImage(onSubmitImage)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1.25rem',
        }}
      >
        <input
          ref={inputRef}
          name="categoryImg"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleImageUpload}
          style={{ color: '#ffffff' }}
        />

        {categoryImage && (
          <img
            src={URL.createObjectURL(categoryImage)}
            alt="Category preview"
            width="200"
            height="300"
          />
        )}
        {categoryImage ? (
          <Button
            type="submit"
            style={{ color: '#4fc3f7', fontSize: '1.5rem' }}
          >
            Add Image
          </Button>
        ) : (
          <p
            style={{
              color: '#ffffff',
              fontSize: '1.25rem',
            }}
          >
            Please select an image
          </p>
        )}
      </form>
    </Box>
  );
};

export default AddingForm;
