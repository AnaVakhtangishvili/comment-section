import data from "../data.json" assert { type: "json" };

import { mainComments, addComment, replyFieldOpener } from "./createElems.js";

let dataJSON, parseDataJson;
dataJSON = localStorage.getItem("data");
parseDataJson = JSON.parse(dataJSON);

if (!localStorage.getItem("data")) {
  localStorage.setItem("data", JSON.stringify(data));
  mainComments(data.comments);
}
if (localStorage.getItem("data")) {
  mainComments(parseDataJson.comments);
}


const replyComm = document.getElementsByClassName("reply");
const replyArr = Array.from(replyComm);

replyFieldOpener(replyArr, addComment);

// ========================================================
const newCommentImg = document.getElementById('new-comment-img');
newCommentImg.setAttribute('src', data.currentUser.image.png);
// =========================================================

const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', addNewComment);
// ===========================================================
const textareaTxt = document.getElementById('new-comment-text');

function ChangeTextareaValue(item) {
  item.addEventListener('change', () => {
    return item.value;
  });
}
// ChangeTextareaValue(textareaTxt);

function addNewComment () {
  let givenId = 5;
  givenId++;
  if (textareaTxt.value !== '') {
    parseDataJson.comments.push({
      "id": givenId,
      "content": textareaTxt.value,
      "createdAt": "1 month ago",
      "user": {
        "image": { 
          "png": parseDataJson.currentUser.image.png,
          "webp": parseDataJson.currentUser.image.webp,
        },
        "username": parseDataJson.currentUser.username,
      },
      "replies": []
    })
    ChangeTextareaValue(textareaTxt);
    updateLocalStorage();
    console.log(givenId);
  }
}

function updateLocalStorage() {
  localStorage.setItem("data", JSON.stringify(parseDataJson));
  return true;
}