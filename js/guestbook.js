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

let guestbookMessages = [];
let currentPage = 1;
const pageSize = 10;

function renderGuestbookPage() {
  const container = document.getElementById("guestbook-messages");
  container.innerHTML = "";

  console.log("전체 메시지 수:", guestbookMessages.length);
  console.log("guestbookMessages:", guestbookMessages);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const pageMessages = guestbookMessages.slice(start, end);

  console.log("이 페이지에 표시될 메시지:", pageMessages);

  pageMessages.forEach(entry => {
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

  // 페이지네이션 버튼
  if (guestbookMessages.length > pageSize) {
    const pagination = document.createElement("div");
    pagination.className = "guestbook-pagination";
    pagination.innerHTML = `
      <button id="prev-page" ${currentPage === 1 ? "disabled" : ""}>이전</button>
      <span style="margin:0 8px;">${currentPage} / ${Math.ceil(guestbookMessages.length / pageSize)}</span>
      <button id="next-page" ${end >= guestbookMessages.length ? "disabled" : ""}>다음</button>
    `;
    container.appendChild(pagination);

    document.getElementById("prev-page").onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        renderGuestbookPage();
      }
    };
    document.getElementById("next-page").onclick = () => {
      if (end < guestbookMessages.length) {
        currentPage++;
        renderGuestbookPage();
      }
    };
  }
}

function loadGuestbookMessages() {
  db.ref('guestbook').once('value').then(snapshot => {
    guestbookMessages = [];
    snapshot.forEach(child => guestbookMessages.push(child.val()));
    guestbookMessages.sort((a, b) => b.timestamp - a.timestamp);
    currentPage = 1;
    renderGuestbookPage();
  });
}

function submitGuestbookMessage() {
  const name = document.getElementById("guest-name").value.trim();
  const message = document.getElementById("guest-message").value.trim();
  if (!name || !message) {
    alert("이름과 메시지를 모두 입력해주세요!");
    return;
  }
  db.ref('guestbook').push({ name, message, timestamp: Date.now() })
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
