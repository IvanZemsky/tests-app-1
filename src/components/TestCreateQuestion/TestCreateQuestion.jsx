import React from 'react'
import { saveImage } from '../../utils/dragdrop';

function TestCreateQuestion(props) {
  return (
    <div className="create-block">
        <label>Название вопроса</label>
        <input
          type="text"
          id="questionNameInput"
          maxLength={100}
          onChange={(event) => props.setQuestionName(event.target.value)}
        />

        <label>Описание</label>
        <input
          type="text"
          id="questionDescInput"
          maxLength={1000}
          onChange={(event) => props.setQuestionDesc(event.target.value)}
        />

        <label>Картинка</label>
        <div className='drag-and-drop'>
          <div className='preview'>
            Картинка успешно загружена
          </div>
          <input
            className='load-file'
            type="file"
            id="questionFileInput"
            accept="image/png, image/webp, image/jpeg"
            onChange={(event) => saveImage(event, props.setQuestionImage)}
          />
        </div>

        <button type='button' onClick={props.addQuestion}>Добавить вопрос</button>
    </div>
  )
}

export default TestCreateQuestion