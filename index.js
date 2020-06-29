let list = document.querySelector(".list");
let input = document.querySelector("input");
let img = document.querySelector(".img");

let url =
  "https://api.unsplash.com/photos/random/?client_id=12f3e03998534cb395d67570692b1ea866712ca052c0188109c880ba535565b1";

axios(url)
  .then((data) => createUI(data))
  .then(() => alert("ui created"))
  .catch((err) => console.error(err));

function createUI(imageInfo) {
  img.src = imageInfo.urls.small;
  // console.log(imageInfo.urls);
}

function axios(url) {
  return fetch(url).then((res) => {
    return res.json();
  });
}

// main("react");

// function handleKeyUp(e) {
//   if (e.keyCode === 13) {
//     console.log("called");

//     main(e.target.value);
//   }
// }
// function main(tag) {
//   list.innerHTML = "";
//   let xhrReddit = new XMLHttpRequest();

//   xhrReddit.open(
//     "GET",
//     `https://www.reddit.com/r/${tag}.json`
//   );
//   xhrReddit.onload = function () {
//     createUI(JSON.parse(xhrReddit.response));
//   };
//   xhrReddit.send();

//   function createUI(posts) {
//     console.log(posts);

//     posts.data.children.forEach((post) => {
//       let li = document.createElement("li");
//       let h2 = document.createElement("h2");
//       h2.innerText = post.data.title;
//       let p = document.createElement("p");
//       p.innerHTML = post.data.selftext;
//       li.append(h2, p);
//       list.append(li);
//     });
//   }
// }

// input.addEventListener("keyup", handleKeyUp);

function fetchMe(url) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = function () {
      res(JSON.parse(xhr.response));
    };
    xhr.onerror = function () {
      rej("Something went wrong!❌");
    };
    xhr.send();
  });
}
