import defaultImage from '../img/defaultImage.jpg';

class Question {
  constructor(name, description, comment, image, answer) {
    this.name = name;
    this.description = description;
    this.comment = comment;
    this.image = image || defaultImage;
    this.answer = answer;
  }
}

export default Question;