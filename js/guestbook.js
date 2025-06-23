// Firebase CDN 방식으로 사용한다고 가정
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"></script>

// 1. FirebaseConfig 입력
const firebaseConfig = {
  apiKey: "AIzaSyB8GW-R0m5cR0pZ6EaS7AH0ukJqxl3IUWA",
  authDomain: "forourgood-wedding.firebaseapp.com",
  projectId: "forourgood-wedding",
  storageBucket: "forourgood-wedding.firebasestorage.app",
  messagingSenderId: "215278312194",
  appId: "1:215278312194:web:5cf97a0254d39b5115401b",
  databaseURL: "https://forourgood-wedding-default-rtdb.firebaseio.com/"
};

// 2. Firebase 초기화 (CDN용)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function formatDate(ts) {
  const d = new Date(ts);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const hh = String(d.getHours()).padStart(2, '0');
  const min = String(d.getMinutes()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd} ${hh}:${min}`;
}

function loadGuestbookMessages() {
  db.ref('guestbook').once('value').then(snapshot => {
    console.log('snapshot.val():', snapshot.val());
    const messages = [];
    snapshot.forEach(child => {
      console.log('child.key:', child.key, 'child.val():', child.val());
      messages.push(child.val());
    });
    console.log('최종 messages:', messages);
    messages.sort((a, b) => b.timestamp - a.timestamp);
    const container = document.getElementById("guestbook-messages");
    container.innerHTML = "";
    messages.forEach(entry => {
      const msgEl = document.createElement("div");
      msgEl.className = "guestbook-entry";
      msgEl.innerHTML = `
        <div class="message-header">
          <span class="message-name">${entry.name}</span>
          <span class="message-date">${formatDate(entry.timestamp)}</span>
        </div>
        <div class="message-content">${entry.message}</div>
      `;
      container.appendChild(msgEl);
    });
  });
}

function submitGuestbookMessage() {
  const name = document.getElementById("guest-name").value.trim();
  const message = document.getElementById("guest-message").value.trim();
  if (!name || !message) {
    alert("이름과 메시지를 모두 입력해주세요!");
    return;
  }
  db.ref('guestbook').push({
    name: name,
    message: message,
    timestamp: Date.now()
  })
    .then(() => {
      alert("방명록이 등록되었어요! 🎉");
      document.getElementById("guest-name").value = "";
      document.getElementById("guest-message").value = "";
      loadGuestbookMessages();
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadGuestbookMessages();
  document.getElementById("submit-guestbook").addEventListener("click", submitGuestbookMessage);
});
