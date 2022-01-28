import data from "../data.json" assert { type: "json" };

export const commentsContainer = document.getElementById('comments-container');

// create comment blocks
export function mainComments(arr) {
  arr.forEach((element) => {
    const BlockWrapper = document.createElement('div')
    const blockForComment = document.createElement('div');
    const point = document.createElement('div');
    const commentBox = document.createElement('div');
    const plus = document.createElement('span');
    const minus = document.createElement('span');
    const score = document.createElement('span');
    const commentHead = document.createElement('div');
    const commentText = document.createElement('p');
    const imgNameDate = document.createElement('div');
    const replyDiv = document.createElement('div');
    const iconImg = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('span');
    const date = document.createElement('span');
    const svgIcon = document.createElement('img');
    const replyText = document.createElement('span');
    // set attributes and properties
    plus.innerText = '+';
    minus.innerText = '-';
    score.innerText = '0';
    commentText.innerText = element.content;
    name.innerText = element.user.username;
    date.innerText = element.createdAt;
    replyText.innerText = 'reply';
    setMultipleAttributes(avatar, {'src': element.user.image.png, 'alt': 'avatar'});
    setMultipleAttributes(svgIcon, {'src': './images/icon-reply.svg', 'alt': 'icon'});
    // append
    commentsContainer.append(BlockWrapper);
    BlockWrapper.append(blockForComment);
    blockForComment.append(point, commentBox);
    point.append(plus, score, minus);
    commentBox.append(commentHead, commentText);
    commentHead.append(imgNameDate, replyDiv);
    imgNameDate.append(iconImg, name, date);
    iconImg.append(avatar);
    replyDiv.append(svgIcon, replyText);
    // add classlists
    BlockWrapper.classList.add('comment-block-wrapper');
    blockForComment.classList.add('block-for-comment');
    point.classList.add('points');
    commentBox.classList.add('comment-box');
    plus.classList.add('point-operator', 'plus');
    minus.classList.add('point-operator', 'minus');
    commentHead.classList.add('comment-head');
    imgNameDate.classList.add('img-name-date');
    replyDiv.classList.add('reply');
    svgIcon.classList.add('replySvg');
    iconImg.classList.add('icon-img');
    name.classList.add('name');
    date.classList.add('date');
    // for current user comment
    const you = document.createElement('span');
    const userOptions = document.createElement('div');
    const deleteDiv = document.createElement('div');
    const deleteIcon = document.createElement('img');
    const deleteText = document.createElement('span');
    const editDiv = document.createElement('div');
    const editIcon = document.createElement('img');
    const editText = document.createElement('span');

    you.innerText = 'you';
    setMultipleAttributes(deleteIcon, {'src': './images/icon-delete.svg', 'alt': 'icon'});
    setMultipleAttributes(editIcon, {'src': './images/icon-edit.svg', 'alt': 'icon'});

    userOptions.append(deleteDiv, editDiv);
    deleteDiv.append(deleteIcon, deleteText);
    editDiv.append(editIcon, editText);

    you.classList.add('you');
  });
}

// new comment form
export function addComment(parent) {
  const addCommentForm = document.createElement('form');
  const iconImgNewComment = document.createElement('div');
  const avatarImgNewComment = document.createElement('img');
  const txtarea = document.createElement('textarea');
  const sendBtn = document.createElement('button');

  setMultipleAttributes(txtarea, {'name':'comment', 'placeholder':'Add a comment...', 'value': '', 'required':''});
  setMultipleAttributes(avatarImgNewComment, {'src': data.currentUser.image.png, 'alt': 'avatar'});
  sendBtn.innerText = 'reply';

  parent.append(addCommentForm);
  addCommentForm.append(iconImgNewComment, txtarea, sendBtn);
  iconImgNewComment.append(avatarImgNewComment);

  addCommentForm.classList.add('add-comment', 'block-for-comment');
  iconImgNewComment.classList.add('icon-img');
}


// set multiple attributes function
function setMultipleAttributes(elem, att) {
  for(let key in att) {
    elem.setAttribute(key, att[key]);
  }
}

// open reply textfield
export function replyFieldOpener(arr, fn) {
  arr.forEach((el) => {
    let replyParent = el.parentElement.parentElement.parentElement.parentElement;
    function openOnce() {
      fn(replyParent);
      console.log('click');
      el.removeEventListener("click", openOnce);
    }
    el.addEventListener("click", openOnce);
  });
}