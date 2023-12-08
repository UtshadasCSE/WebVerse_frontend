const QuoteText = document.querySelector(".qoute");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const threadBtn = document.querySelector(".thread");

function randomQoute() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading......";
  fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      QuoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}
soundBtn.addEventListener("click", () => {
  let uttrence = new SpeechSynthesisUtterance(`${QuoteText.innerText}`);
  speechSynthesis.speak(uttrence);
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(QuoteText.innerText);
  alert("copied");
});
threadBtn.addEventListener("click", () => {
  let twtUrl = `https://twitter.com/intent/tweet?url=${QuoteText.innerText}`;
  window.open(twtUrl, "_blank");
});

quoteBtn.addEventListener("click", randomQoute);
