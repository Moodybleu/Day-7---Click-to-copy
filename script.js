const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

const copyText = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(coupon.value)
  .then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => {
        btn.textContent = "Copy";
      }, 3000);
  });
//   Updated Function -- execCommand depracted
//   coupon.select();
//   coupon.setSelectionRange(0, 999999);
//   document.execCommand("Copy")  
};

btn,addEventListener("click", copyText);