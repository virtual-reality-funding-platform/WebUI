class TabLink {
    constructor(tabElement){
       this.tabElement = tabElement
       this.tabData = this.tabElement.dataset.tab
      if(this.tabData === 'all'){
         this.cards = document.querySelectorAll('.news-story')
      } else {
         this.cards = document.querySelectorAll(`.news-story[data-tab='${this.tabData}']`)
      }

      this.cards = Array.from(this.cards).map(card => {
         return new TabCard(card)
       });
  
       this.tabElement.addEventListener('click', () => {
         this.selectTab()
        });
    }
  
    selectTab(){

       const tabs = document.querySelectorAll('.tab');
      
       tabs.forEach(tab => {
         tab.classList.remove('active-tab')
       })
  
       const cards = document.querySelectorAll('.news-story')
  
       cards.forEach(card => {
         card.style.display = 'none'
       })
      
       this.tabElement.classList.add('active-tab')
    
       this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
       this.cardElement = cardElement
    }
    selectCard(){
       this.cardElement.style.display = 'flex'
    }
  
  }
  
  let tabs = document.querySelectorAll('.tab').forEach(tab => {
    return new TabLink(tab)
  })