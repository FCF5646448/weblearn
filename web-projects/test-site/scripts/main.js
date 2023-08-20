let myHeading = document.querySelector("h1");
myHeading.textContent = "hello world!";

/*
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});
*/

let myImage = document.querySelector("img");
myImage.onclick = function () {
    let myScr = myImage.getAttribute("src");
    if (myScr === "images/firefox-icon.jpeg") {
        myImage.setAttribute("src", "images/swift-icon.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.jpeg");
    }
};

function setUserName() {
    let myName = prompt("请输入你的名字：");
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla 酷比了。" + myName;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷比了。" + storedName;
}

let myButton = document.querySelector("button");
myButton.onclick = function () {
    setUserName();
};