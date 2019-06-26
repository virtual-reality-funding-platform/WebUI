class Icon {
  constructor(element){
    this.element = element;
    this.data = element.dataset.tab;
    this.iconGraphic = element.querySelector("i");
    this.specificItem = document.querySelector(`.home-main-item[data-tab="${this.data}"]`);
    this.mainItem = new MainItem(this.specificItem);
    this.element.addEventListener('click', () => this.select());
  };
  select() {
    const icons = document.querySelectorAll('.icon');
    const iconGraphics = document.querySelectorAll('.icon i');
    Array.from(icons).forEach(icon => icon.classList.remove('icon-selected'));
    Array.from(iconGraphics).forEach(graphic => graphic.classList.remove('minus-border'));
    this.element.classList.add('icon-selected');
    this.iconGraphic.classList.add('minus-border');
    this.mainItem.select();
  }
}

class MainItem {
  constructor(content){
    this.content = content;
  }
  select() {
    const items = document.querySelectorAll('.home-main-item');
    Array.from(items).forEach(item => item.classList.remove('home-main-item-selected'));
    this.content.classList.add('home-main-item-selected');
  }
}

let icons = document.querySelectorAll(".icon").forEach(icon => new Icon(icon));