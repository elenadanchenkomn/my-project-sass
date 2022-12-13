 export class Modal{
constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overly = '';
}
buildModal(content) {
//overly
this.overly = this.createDomNode(this.overly, 'div', 'overly','overly_modal');
//overly
this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
//modal-content
this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');
//modalCloseBtn
this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">';
this.setContent(content);
this.appendModalElements();
//open Modal
this.openModal();
}
createDomNode(node, element, ...classes){
//overly
node = document.createElement(element);
node.classList.add(...classes);
return node
};
setContent(content){
   if(typeof content === 'string'){
     this.modalContent.innerHTML = content;
   }else {
    this.modalContent.innerHTML = '';
    this.modalContent.append(content);
   }
}
appendModalElements () {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overly.append(this.modal);
}
openModal(){
  document.body.append(this.overly);
}
}