import { Article } from "./js/Article";
import { ArticleModal } from "./js/ArticleModal";
import { Modal } from "./js/Modal";
//object for strategy
const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/assets/strategy/1.jpg' ,
        tags: ['Art', 'Design'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    } ,
    {
        id: 2,
        title: 'Motivation Is The First Step To Success' ,
        urlToImage: './src/assets/strategy/3.jpg' ,
        tags: ['Culture'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life' ,
        urlToImage: './src/assets/strategy/2.jpg' ,
        tags: ['Culture' , 'Design' , 'Art'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    } ,
    {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back' ,
        urlToImage: './src/assets/strategy/5.jpg' ,
        tags: ['Culture' , 'Design' , 'Art'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    } ,
    {
        id: 5 ,
        title: 'Increasing Prosperity With Positive Thinking' ,
        urlToImage: './src/assets/strategy/4.jpg' ,
        tags: ['Design'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    },
    {
        id: 6 ,
        title: 'Motivation Is The First Step To Success' ,
        urlToImage: './src/assets/strategy/3.jpg' ,
        tags: ['cultures'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    },
    {
        id: 7 ,
        title: 'Success Steps For Your Personal Or Business Life' ,
        urlToImage: './src/assets/strategy/2.jpg' ,
        tags: ['Culture' , 'Design' , 'Art'] ,
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?' ,
        date: '14.11.2022',
    },
]
window.onload = function() {
    console.log('hallo');
     //render articles
     if(data){
        renderArticalsToDom();
     }
    //tags
    addTagsClickHandler();
    //modal class
    addToolsClickHandler();
    //burger menu
    showBurgermenu();
    closeBurgerMenu();

}
const  addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
      if (e.target.classList.contains('tag')) {
        let clickedTag = e.target;
        removeSelectedTags();
        selectClickedTag(clickedTag);
        if(clickedTag.innerText === 'All'){
          showAllStrategies();
        } else {
            filterStrategyBySelectedTag(clickedTag.innerText);
        }
      }
    })
};
const  removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies__tags .tag');
   tags.forEach( tag => {
    tag.classList.remove('tag_selected');
    tag.classList.add('tag_bordered');
   })
   
};
const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}
const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategies-wrapper .stretegy');
    strategies.forEach(stretegy => {
        stretegy.classList.remove('stretegy_hidden');
    })
}
const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategies-wrapper .stretegy');
    strategies.forEach(stretegy => {
        stretegy.classList.add('stretegy_hidden');
        stretegy.querySelectorAll('.tag').forEach(tag => {
            if(tag.innerText === selectedTag) {
                stretegy.classList.remove('stretegy_hidden');
            }
        })
    })
}
const renderArticalsToDom = () => {
    let stratagiesWrapper = getSrategiesWrapper();
    generateArticles(data).forEach(article => {
        stratagiesWrapper.append(article.generateArticle())
        }
    )
    addStrategyClickHandler();
}
const getSrategiesWrapper = () => {
    const strategiesConteiner = document.querySelector('.strategies-wrapper');
    strategiesConteiner.innerHTML = '';
    return strategiesConteiner;
}
const generateArticles = (data) => {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article))
       
    } )
    return articles;
}
const addToolsClickHandler = () => {
    document.querySelector('.tools__button .button').addEventListener('click',() => {
        generateToolsModal();
    })
    
}
const generateToolsModal = () => {
    renderModalWindow ('ggggggggggggg');
}
const renderModalWindow = (content) => {
 let modal = new Modal('tools-modal');
 modal.buildModal(content);
}
const addStrategyClickHandler = () => {
    document.querySelector('.strategies-wrapper').addEventListener('click', (e)=>{
        if (e.target.closest('.stretegy')){
            let clickedStrategyId = e.target.closest('.stretegy').getAttribute('data-id');
            let clickedStrategyDate = getClickedDate(clickedStrategyId);
            renderArticalModalWindow(clickedStrategyDate);
        }
    })
}
const getClickedDate = (id) => {
    return data.find(article => article.id == id);
} 
const renderArticalModalWindow = (article) => {
    let modal = new ArticleModal('article-modal', article);
    modal.renderModal();
}
//burger menu
const showBurgermenu = function () {
    document.querySelector('.humburger').addEventListener('click',()=>{
        addShowBurger();
    } )
}
const addShowBurger = () => {
    document.querySelector('.burger__menu').classList.add('show_window');
}

const closeBurgerMenu = () => {
    document.querySelector('.burger__menu').addEventListener('click', (e) => {
       if(e.target.closest('.burger__navigetion' || '.burger-logo')){
        return
       }else {
        removeBurgerMenu()
       }
    })
}
const removeBurgerMenu = () => {
    document.querySelector('.burger__menu').classList.remove('show_window');
}
