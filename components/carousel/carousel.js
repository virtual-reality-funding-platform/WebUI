class Carousel {
  constructor(carousel){
    // Grabbing carousel elements
    this.carousel = carousel;
    this.leftBtn = document.querySelector(".leftbtn")
    this.rightBtn = document.querySelector(".rightbtn")
    this.imgs = document.querySelectorAll(".home-carousel img")
    // Setting the current index of carousel
    this.currentIndex = 0;
    // Matching the current image to the current index (1 - 1, 2 - 2, etc.)
    this.currentImg = this.imgs[this.currentIndex];
    // Displaying the current img (auto displays mountain, which is at index 0)
    this.currentImg.style.display = "flex";
    // Btn event listeners
    this.leftBtn.addEventListener("click", () => this.leftBtnClicked());
    this.rightBtn.addEventListener("click", () => this.rightBtnClicked());
  }
  leftBtnClicked(){
    // Grabbing imgs
    const imgs = document.querySelectorAll(".home-carousel img");
    // Carousel breaks without below --> when the current img is displayed, all other images need to be at display none
    imgs.forEach(image => image.style.display = "none");
    // Sets the negative counter for the left btn
    this.currentIndex -= 1;
    // Creates an infinite looping carousel
    if(this.currentIndex < 0) {
      this.currentIndex = 3;
    }
    // Displays the current image
    imgs[this.currentIndex].style.display = "flex";
  }
  rightBtnClicked(){
    const imgs = document.querySelectorAll(".home-carousel img");
    imgs.forEach(image => image.style.display = "none");
    // Sets the positive counter for the right btn
    this.currentIndex += 1;
    if(this.currentIndex > 3){
      this.currentIndex = 0;
    }
    imgs[this.currentIndex].style.display = "flex";
  }
}
// Creating new Carousel class
let carousel = document.querySelectorAll(".home-carousel").forEach(carousel => new Carousel(carousel));