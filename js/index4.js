var Form = document.getElementById("login");
Form.addEventListener("resubmit", e => {
  e.preventDefault();
  fetch(Form.action,{
    method: "POST",
    body: new FormData(document.getElementById("login")),
  }).then(
    Response => Response.json()
  ).then(html) => {window.alert("d.html", "_blank");
  }
})