import { Modal } from "./Modal";

export class ArticleModal extends Modal {
  constructor (classes,{id, title, urlToImage, tags, content, date}){
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.content = content;
        this.date = date;
  }
     //Article Modal generator
     generateContent(){
        let template = '';
        let article = document.createElement('div');
        article.className = 'article-modal__content';

        this.urlToImage &&
       (template += `<img class="stretegy__img" src=${this.urlToImage} alt="strategy" `) 

       if(this.title ||  this.tags || this.content || this.date) {
        template += `<div class="stratedies__content">`
        this.date &&
        (template += `<p class="strategies__date">${this.date}</p>`) 
        this.title &&
        (template += `<h3 class="strategies__name">${this.title}</h3>`)
        this.content &&
        (template += `<p class="stratedies__content">${this.content}</p>`) 
        
        if(this.tags){
            template += `<div class="strategies__tags">`
              this.tags.map(tag => {
                template += ` <span class="tag tag_colored">${tag}</span>`
              })
            template += `</div>`
        }
        template += `</div>`
       }
       article.innerHTML = template;
       return article;
    }
    renderModal(){
        let content = this.generateContent();
        super.buildModal(content);
    }
}