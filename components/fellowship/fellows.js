class Fellow {
  constructor(element){
    this.element = element;
    this.data = element.dataset.tab;
    this.specificFellow = document.querySelector(`.fellow[data-tab="${this.data}"]`);
    this.fellowItem = new FellowItem(this.specificFellow);
    this.element.addEventListener('click', () => this.select());
  };
  select() {
    const shots= document.querySelectorAll('.shot');
    Array.from(shots).forEach(shot=> shot.classList.remove('shot-selected'));
    this.element.classList.add('shot-selected')
    this.fellowItem.select();
  }
}

class FellowItem {
  constructor(element){
    this.element = element;
  }
  select() {
    const fellows = document.querySelectorAll('.fellow');
    Array.from(fellows).forEach(fellow => fellow.classList.remove('fellow-selected'));
    this.element.classList.add('fellow-selected');
  }
}

let fellows = document.querySelectorAll(".shot").forEach(shot => new Fellow(shot));