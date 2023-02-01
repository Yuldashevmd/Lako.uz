// carousel start
const delay = 4000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
  restart();
});

// carousel end
// number start
document.getElementById("phone").addEventListener("input", function (e) {
  var x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2]
    ? x[1]
    : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
});
// number end
// form start
const userName = document.querySelector("#name");
const userPhone = document.querySelector("#phone");
const userComment = document.querySelector("#comment");
const formSubmit = document.querySelector("#submit");
const message = document.querySelector("#message");
const toast = document.querySelector(".toast");
let newUser = {};

// get-values-from-inputs
formSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (userName.value === "" || userPhone.value === "") {
    toast.style.display = "flex";
    toast.classList.add("toast-warning");
    toast.textContent =
      "Ism yoki telefon raqam notog'ri kirildi, iltimos qayta urinib ko'ring...";
    setTimeout(() => {
      toast.style.display = "none";
      toast.classList.remove("toast-warning");
    }, 2000);
  } else {
    formSubmit.setAttribute("disabled", true);
    toast.classList.add("toast-success");
    toast.style.display = "flex";
    toast.textContent =
      "Ma'lumotlar yuborildi! tez orada siz bilan bog'lanamiz";
    setTimeout(() => {
      toast.style.display = "none";
      toast.classList.remove("toast-success");
    }, 2000);
    newUser = {
      name: userName.value,
      phone: userPhone.value,
      comment: userComment.value ?? "",
    };
    fetch("lako/calluser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((res) => console.log(res, "res"))
      .catch((err) => console.log(err, "err"));
    message.style.color = "green";
    message.textContent = "Запрос отправлено...";

    setTimeout(() => {
      userName.value = "";
      userPhone.value = "";
      userComment.value = "";
      message.textContent = "";
    }, 1500);
    setTimeout(() => {
      formSubmit.disabled = false;
    }, 2500);
    console.log(newUser);
  }
});
// form end

// hamburger-menu start
let hamburgBtn = document.querySelector(".hamburger_menu");
let closeHamburgBtn = document.querySelector(".close_hamburger");
let miniMenu = document.querySelector(".minimized_nav_text");

hamburgBtn.addEventListener("click", () => {
  console.log("clicked open btn");
  miniMenu.style.display = "block";
});
closeHamburgBtn.addEventListener("click", () => {
  console.log("clicked close btn");
  miniMenu.style.display = "none";
});
// hamburger-menu end
