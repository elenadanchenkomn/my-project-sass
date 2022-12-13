export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }
    //Article generation
    generateArticle(){
        let template = '';
        let article = document.createElement('article');
        article.className = 'stretegy blok-shadowed';
        article.setAttribute('data-id' , this.id);

        this.urlToImage &&
       (template += `<img class="stretegy__img" src=${this.urlToImage} alt="strategy" `) 

       if(this.title ||  this.tags) {
        template += `<div class="stratedies__content">`
        this.title &&
        (template += `<h3 class="strategies__name">${this.title}</h3>`) 
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
}