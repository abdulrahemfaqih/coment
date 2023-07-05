const form = document.querySelector("form");
addEventListener("submit", (event) => {
  const textValue = document.querySelector("textarea").value;
  if (textValue == "") {
    event.preventDefault();
    alert("berikan komentar sebelum submit yaww");
  }
});
