import { setStatus } from './status.js';

const validateFileTypeByImg = (file) => {
  console.log(file)
  const availabledTypes = ['image/png', 'image/webp', 'image/jpeg'];
  return availabledTypes.includes(file.type);
}

const setPreview = (el, preview) => {
  if (!preview)
    el.style.visibility = 'hidden';

  el.innerHTML = preview;
}

const saveImage = (event, callback) => {
  const imageFiles = event.target.files;
  const previewEl = event.target.parentElement.querySelector('.preview');
  if (!imageFiles) {
    setStatus(event.target.parentElement, 'error');
    setPreview(previewEl, 'Вы не загрузили не одно изображение')
    callback('');
    return;
  }

  console.log(imageFiles)
  for (const file of imageFiles) {
    if (!validateFileTypeByImg(file)) {
      setStatus(event.target.parentElement, 'error');
      setPreview(previewEl, 'Неверный тип изображения');
      callback('');
      return;
    }

    const img = document.createElement('img');
    img.alt = 'Загруженная картинка';

    // save img as base64 string
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      img.src = reader.result;
      console.log(img);
      setStatus(event.target.parentElement, 'success');
      setPreview(previewEl, img.outerHTML);
      callback(reader.result);
    }

    reader.onerror = function (error) {
      console.log('Error: ', error);
      setStatus(event.target.parentElement, 'error');
      setPreview(previewEl, 'Не удалось конвертировать изображение');
      callback('');
    };
  }
}

export {
  validateFileTypeByImg,
  setPreview,
  saveImage
}