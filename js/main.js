document.addEventListener("DOMContentLoaded", function() {
    // --- Main Info ---
    const groomNameEl = document.getElementById("groom-name");
    if (groomNameEl) groomNameEl.textContent = weddingData.groom.name;

    const groomBirthEl = document.getElementById("groom-birth");
    if (groomBirthEl) groomBirthEl.textContent = weddingData.groom.birth;

    const brideNameEl = document.getElementById("bride-name");
    if (brideNameEl) brideNameEl.textContent = weddingData.bride.name;

    const brideBirthEl = document.getElementById("bride-birth");
    if (brideBirthEl) brideBirthEl.textContent = weddingData.bride.birth;

    // Wedding Hall Info
    const weddingHallNameEl = document.getElementById("wedding-hall-name");
    if (weddingHallNameEl) weddingHallNameEl.textContent = weddingData.weddingHall.name;

    const weddingHallTypeEl = document.getElementById("wedding-hall-type");
    if (weddingHallTypeEl) weddingHallTypeEl.textContent = weddingData.weddingHall.type;

    const weddingDateEl = document.getElementById("wedding-date");
    if (weddingDateEl) weddingDateEl.textContent = weddingData.weddingHall.date;

    const weddingTimeEl = document.getElementById("wedding-time");
    if (weddingTimeEl) weddingTimeEl.textContent = weddingData.weddingHall.time;

    const weddingLocationEl = document.getElementById("wedding-location");
    if (weddingLocationEl) weddingLocationEl.textContent = weddingData.weddingHall.location;

    const weddingHallEl = document.getElementById("wedding-hall");
    if (weddingHallEl) weddingHallEl.textContent = weddingData.weddingHall.hall;

    const remainingSeatsEl = document.getElementById("remaining-seats");
    if (remainingSeatsEl) remainingSeatsEl.textContent = weddingData.weddingHall.remainingSeats;

    const bookingStatusEl = document.getElementById("booking-status");
    if (bookingStatusEl) bookingStatusEl.textContent = weddingData.weddingHall.bookingStatus;

    // --- Contact Info ---
    const contactGroomEl = document.querySelector("#contact-groom .person-name");
    if (contactGroomEl) contactGroomEl.textContent = weddingData.groom.name;

    const contactBrideEl = document.querySelector("#contact-bride .person-name");
    if (contactBrideEl) contactBrideEl.textContent = weddingData.bride.name;

    // Contact links
    const groomCallEl = document.getElementById("groom-call");
    if (groomCallEl) groomCallEl.href = `tel:${weddingData.groom.phone}`;

    const groomMessageEl = document.getElementById("groom-message");
    if (groomMessageEl) groomMessageEl.href = `sms:${weddingData.groom.phone}`;

    const brideCallEl = document.getElementById("bride-call");
    if (brideCallEl) brideCallEl.href = `tel:${weddingData.bride.phone}`;

    const brideMessageEl = document.getElementById("bride-message");
    if (brideMessageEl) brideMessageEl.href = `sms:${weddingData.bride.phone}`;

    // Parents contact - 이름만 표시 (역할 제거)
    const groomFatherEl = document.querySelector("#contact-groom-father .person-name");
    if (groomFatherEl) groomFatherEl.textContent = weddingData.groom.father; // "아버지" 제거

    const groomMotherEl = document.querySelector("#contact-groom-mother .person-name");
    if (groomMotherEl) groomMotherEl.textContent = weddingData.groom.mother; // "어머니" 제거

    const brideFatherEl = document.querySelector("#contact-bride-father .person-name");
    if (brideFatherEl) brideFatherEl.textContent = weddingData.bride.father; // "아버지" 제거

    const brideMotherEl = document.querySelector("#contact-bride-mother .person-name");
    if (brideMotherEl) brideMotherEl.textContent = weddingData.bride.mother; // "어머니" 제거

    // Parents contact links
    const groomFatherCallEl = document.getElementById("groom-father-call");
    if (groomFatherCallEl) groomFatherCallEl.href = `tel:${weddingData.groom.father_phone}`;

    const groomFatherMessageEl = document.getElementById("groom-father-message");
    if (groomFatherMessageEl) groomFatherMessageEl.href = `sms:${weddingData.groom.father_phone}`;

    const groomMotherCallEl = document.getElementById("groom-mother-call");
    if (groomMotherCallEl) groomMotherCallEl.href = `tel:${weddingData.groom.mother_phone}`;

    const groomMotherMessageEl = document.getElementById("groom-mother-message");
    if (groomMotherMessageEl) groomMotherMessageEl.href = `sms:${weddingData.groom.mother_phone}`;

    const brideFatherCallEl = document.getElementById("bride-father-call");
    if (brideFatherCallEl) brideFatherCallEl.href = `tel:${weddingData.bride.father_phone}`;

    const brideFatherMessageEl = document.getElementById("bride-father-message");
    if (brideFatherMessageEl) brideFatherMessageEl.href = `sms:${weddingData.bride.father_phone}`;

    const brideMotherCallEl = document.getElementById("bride-mother-call");
    if (brideMotherCallEl) brideMotherCallEl.href = `tel:${weddingData.bride.mother_phone}`;

    const brideMotherMessageEl = document.getElementById("bride-mother-message");
    if (brideMotherMessageEl) brideMotherMessageEl.href = `sms:${weddingData.bride.mother_phone}`;

    // --- Location ---
    const locationNameEl = document.getElementById("location-name");
    if (locationNameEl) locationNameEl.textContent = weddingData.location.name;

    const locationAddress1El = document.getElementById("location-address1");
    if (locationAddress1El) locationAddress1El.textContent = weddingData.location.address1;

    const locationAddress2El = document.getElementById("location-address2");
    if (locationAddress2El) locationAddress2El.textContent = weddingData.location.address2;

    const locationCallEl = document.getElementById("location-call");
    if (locationCallEl) locationCallEl.href = `tel:${weddingData.location.phone}`;

    // --- Gift Banner ---
    const giftBanner = document.querySelector('.gift-banner');
    if (giftBanner && weddingData.giftBannerImage) {
        const bannerImg = document.createElement('img');
        bannerImg.src = weddingData.giftBannerImage;
        bannerImg.alt = 'Gift Banner';
        bannerImg.style.cursor = 'pointer';
        
        // 클릭 이벤트 - 전화번호 수정
        bannerImg.addEventListener('click', function() {
            window.location.href = 'tel:055-275-2754';
        });
        
        giftBanner.appendChild(bannerImg);
    }

    // --- Gallery ---
    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close-modal');

    // 01번부터 16번까지 이미지 경로 생성
    const imagePaths = [];
    for (let i = 1; i <= 16; i++) {
        const number = i.toString().padStart(2, '0');
        imagePaths.push(`gallery/${number}.jpg`);
    }

    if (galleryGrid) {
        galleryGrid.innerHTML = ''; 
        
        imagePaths.forEach((path, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = path;
            img.alt = `Gallery image ${index + 1}`;
            img.loading = 'lazy';

            galleryItem.appendChild(img);
            galleryGrid.appendChild(galleryItem);

            galleryItem.addEventListener('click', () => {
                if (modal && modalImg) {
                    modal.style.display = 'flex';
                    modalImg.src = path;
                }
            });
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- Accordion (축의금) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            const accordionIcon = this.querySelector('.accordion-icon img');
            
            // 현재 아코디언이 열려있는지 확인
            const isOpen = accordionItem.classList.contains('active');
            
            // 모든 아코디언 닫기
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const content = item.querySelector('.accordion-content');
                const icon = item.querySelector('.accordion-icon img');
                if (content) content.style.display = 'none';
                if (icon) icon.style.transform = 'rotate(0deg)';
            });
            
            // 클릭한 아코디언만 열기/닫기
            if (!isOpen) {
                accordionItem.classList.add('active');
                if (accordionContent) accordionContent.style.display = 'block';
                if (accordionIcon) accordionIcon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // --- Guestbook (방명록) ---
    const guestNameInput = document.getElementById('guest-name');
    const guestPasswordInput = document.getElementById('guest-password');
    const guestMessageInput = document.getElementById('guest-message');
    const submitGuestbookBtn = document.getElementById('submit-guestbook');
    const guestbookMessages = document.getElementById('guestbook-messages');

    // localStorage에서 방명록 데이터 불러오기
    function loadGuestbookFromStorage() {
        const stored = localStorage.getItem('weddingGuestbook');
        if (stored) {
            try {
                const parsedData = JSON.parse(stored);
                weddingData.guestbookMessages = parsedData;
            } catch (e) {
                console.error('방명록 데이터 로드 실패:', e);
            }
        }
    }

    // localStorage에 방명록 데이터 저장하기
    function saveGuestbookToStorage() {
        try {
            localStorage.setItem('weddingGuestbook', JSON.stringify(weddingData.guestbookMessages));
        } catch (e) {
            console.error('방명록 데이터 저장 실패:', e);
        }
    }

    // 방명록 메시지 표시
    function displayGuestbookMessages() {
        if (guestbookMessages && weddingData.guestbookMessages) {
            guestbookMessages.innerHTML = '';
            
            weddingData.guestbookMessages.forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'guestbook-message';
                messageDiv.innerHTML = `
                    <div class="message-header">
                        <span class="message-name">${message.name}</span>
                        <span class="message-date">${new Date(message.timestamp).toLocaleDateString()}</span>
                    </div>
                    <div class="message-content">${message.message}</div>
                `;
                guestbookMessages.appendChild(messageDiv);
            });
        }
    }

    // 방명록 메시지 추가
    if (submitGuestbookBtn) {
        submitGuestbookBtn.addEventListener('click', function() {
            const name = guestNameInput ? guestNameInput.value.trim() : '';
            const password = guestPasswordInput ? guestPasswordInput.value.trim() : '';
            const message = guestMessageInput ? guestMessageInput.value.trim() : '';

            if (!name || !password || !message) {
                alert('모든 필드를 입력해주세요.');
                return;
            }

            // 새 메시지 추가
            const newMessage = {
                name: name,
                message: message,
                timestamp: new Date().toISOString()
            };

            weddingData.guestbookMessages.unshift(newMessage); // 최신 메시지를 맨 위에

            // localStorage에 저장
            saveGuestbookToStorage();

            // 입력 필드 초기화
            if (guestNameInput) guestNameInput.value = '';
            if (guestPasswordInput) guestPasswordInput.value = '';
            if (guestMessageInput) guestMessageInput.value = '';

            // 방명록 다시 표시
            displayGuestbookMessages();

            alert('방명록이 등록되었습니다!');
        });
    }

    // 페이지 로드 시 localStorage에서 방명록 불러오기
    loadGuestbookFromStorage();
    
    // 초기 방명록 표시
    displayGuestbookMessages();
    
    // --- Navigation Links ---
    const navButtons = document.querySelectorAll('.nav-btn');
    if (navButtons.length >= 3) {
        // 직접 링크 설정
        navButtons[0].href = "https://tmap.life/bef13dca";
        navButtons[1].href = "https://kko.kakao.com/W4utP_D8FZ";
        navButtons[2].href = "https://naver.me/59vqCJ60";
        
        navButtons.forEach(btn => {
            btn.target = '_blank';
        });
    }
    
    // --- Naver Map with Geocoding ---
    const mapContainer = document.getElementById('map');
    if (mapContainer && window.naver && window.naver.maps) {
        
        // 지오코딩으로 주소를 좌표로 변환
        naver.maps.Service.geocode({
            query: weddingData.location.address1 // "경남 창원시 의창구 팔용동 164-3"
        }, function(status, response) {
            if (status === naver.maps.Service.Status.ERROR) {
                console.error('지오코딩 실패');
                return;
            }

            if (response.v2.meta.totalCount === 0) {
                console.error('검색 결과가 없습니다');
                return;
            }

            const item = response.v2.addresses[0];
            const point = new naver.maps.LatLng(item.y, item.x);

            // 지도 생성
            const mapOptions = {
                center: point,
                zoom: 16,
                mapTypeControl: false,
                scaleControl: false,
                logoControl: false,
                mapDataControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: naver.maps.ZoomControlStyle.SMALL,
                    position: naver.maps.Position.TOP_RIGHT
                }
            };

            const map = new naver.maps.Map(mapContainer, mapOptions);

            // 마커 추가
            const marker = new naver.maps.Marker({
                position: point,
                map: map,
                title: weddingData.location.name
            });

            // 정보창 추가
            const infoWindow = new naver.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:10px;">
                            <b>${weddingData.location.name}</b><br>
                            ${weddingData.location.address1}
                          </div>`
            });

            // 마커 클릭시 정보창 표시
            naver.maps.Event.addListener(marker, 'click', function() {
                if (infoWindow.getMap()) {
                    infoWindow.close();
        } else {
                    infoWindow.open(map, marker);
        }
    });
        });
    }
    
    // Footer
    const footerTextEl = document.getElementById("footer-text");
    if (footerTextEl) footerTextEl.innerHTML = weddingData.footer.madeBy;

    // Instagram 링크 설정
    const instagramLink = document.getElementById("instagram-link");
    if (instagramLink) {
        instagramLink.href = "https://www.instagram.com/sey_yeah.311/";
        instagramLink.target = "_blank";
    }
});
