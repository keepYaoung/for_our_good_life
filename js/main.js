document.addEventListener("DOMContentLoaded", function() {
    // Main Info Card
    document.getElementById("wedding-hall-name").textContent = weddingData.weddingHall.name;
    document.getElementById("wedding-hall-type").textContent = weddingData.weddingHall.type;
    document.getElementById("groom-name").textContent = weddingData.groom.name;
    document.getElementById("groom-birth").textContent = weddingData.groom.birth;
    document.getElementById("bride-name").textContent = weddingData.bride.name;
    document.getElementById("bride-birth").textContent = weddingData.bride.birth;
    document.getElementById("wedding-date").textContent = weddingData.weddingHall.date;
    document.getElementById("wedding-time").textContent = weddingData.weddingHall.time;
    document.getElementById("wedding-location").textContent = weddingData.weddingHall.location;
    document.getElementById("wedding-hall").textContent = weddingData.weddingHall.hall;
    document.getElementById("remaining-seats").textContent = weddingData.weddingHall.remainingSeats;
    document.getElementById("booking-status").textContent = weddingData.weddingHall.bookingStatus;

    // Contact Section
    document.querySelector("#contact-groom .person-name").textContent = weddingData.groom.name;
    document.getElementById("groom-call").href = `tel:${weddingData.groom.phone.replace(/-/g, '')}`;
    document.getElementById("groom-message").href = `sms:${weddingData.groom.phone.replace(/-/g, '')}`;

    document.querySelector("#contact-bride .person-name").textContent = weddingData.bride.name;
    document.getElementById("bride-call").href = `tel:${weddingData.bride.phone.replace(/-/g, '')}`;
    document.getElementById("bride-message").href = `sms:${weddingData.bride.phone.replace(/-/g, '')}`;

    document.querySelector("#contact-groom-father .person-name").textContent = weddingData.groom.father;
    document.getElementById("groom-father-call").href = `tel:${weddingData.groom.father_phone.replace(/-/g, '')}`;
    document.getElementById("groom-father-message").href = `sms:${weddingData.groom.father_phone.replace(/-/g, '')}`;

    document.querySelector("#contact-groom-mother .person-name").textContent = weddingData.groom.mother;
    document.getElementById("groom-mother-call").href = `tel:${weddingData.groom.mother_phone.replace(/-/g, '')}`;
    document.getElementById("groom-mother-message").href = `sms:${weddingData.groom.mother_phone.replace(/-/g, '')}`;

    document.querySelector("#contact-bride-father .person-name").textContent = weddingData.bride.father;
    document.getElementById("bride-father-call").href = `tel:${weddingData.bride.father_phone.replace(/-/g, '')}`;
    document.getElementById("bride-father-message").href = `sms:${weddingData.bride.father_phone.replace(/-/g, '')}`;

    document.querySelector("#contact-bride-mother .person-name").textContent = weddingData.bride.mother;
    document.getElementById("bride-mother-call").href = `tel:${weddingData.bride.mother_phone.replace(/-/g, '')}`;
    document.getElementById("bride-mother-message").href = `sms:${weddingData.bride.mother_phone.replace(/-/g, '')}`;
    
    // Gallery Section
    const gallerySection = document.querySelector(".gallery-section");
    weddingData.galleryImages.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.className = "gallery-image";
        gallerySection.appendChild(img);
    });

    // Location Section
    document.getElementById("location-name").textContent = weddingData.location.name;
    document.getElementById("location-address1").textContent = weddingData.location.address1;
    document.getElementById("location-address2").textContent = weddingData.location.address2;
    document.getElementById("location-call").href = `tel:${weddingData.location.phone.replace(/-/g, '')}`;
    
    const mapContainer = document.getElementById("map");
    const weddingAddress = weddingData.location.address1;

    naver.maps.Service.geocode({
        query: weddingAddress
    }, function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
            return alert('주소를 좌표로 변환하는데 실패했습니다.');
        }

        const result = response.v2;
        const items = result.addresses;

        if (items.length === 0) {
            console.log('주소에 해당하는 좌표를 찾지 못했습니다.');
            return;
        }

        const point = new naver.maps.Point(items[0].x, items[0].y);

        const map = new naver.maps.Map(mapContainer, {
            center: point,
            zoom: 17
        });

        new naver.maps.Marker({
            position: point,
            map: map
        });
    });

    const navButtons = document.querySelector(".navigation-buttons");
    navButtons.querySelector(".nav-btn:nth-child(1)").href = weddingData.location.tmapLink;
    navButtons.querySelector(".nav-btn:nth-child(2)").href = weddingData.location.kakaomapLink;
    navButtons.querySelector(".nav-btn:nth-child(3)").href = weddingData.location.navermapLink;

    // Gift Section
    const giftBanner = document.querySelector(".gift-banner");
    const giftImage = document.createElement("img");
    giftImage.src = weddingData.giftBannerImage;
    giftBanner.appendChild(giftImage);

    // Congratulatory Money Section
    const groomMoneyContent = document.querySelector('.accordion-item:nth-child(1) .accordion-content');
    const brideMoneyContent = document.querySelector('.accordion-item:nth-child(2) .accordion-content');
    groomMoneyContent.innerHTML = '';
    brideMoneyContent.innerHTML = '';

    weddingData.congratulatoryMoney.groom.forEach(person => {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'account-info';
        infoDiv.innerHTML = `
            <p class="account-holder">${person.name}</p>
            <p class="account-number">${person.bank} ${person.account}</p>
        `;
        groomMoneyContent.appendChild(infoDiv);
    });

    weddingData.congratulatoryMoney.bride.forEach(person => {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'account-info';
        infoDiv.innerHTML = `
            <p class="account-holder">${person.name}</p>
            <p class="account-number">${person.bank} ${person.account}</p>
        `;
        brideMoneyContent.appendChild(infoDiv);
    });

    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            item.querySelector('.accordion-icon').classList.toggle('open');
        });
    });

    // Guestbook Section
    const messagesContainer = document.querySelector(".guestbook-messages");

    function renderGuestbook() {
        messagesContainer.innerHTML = '';
        weddingData.guestbookMessages.slice().reverse().forEach(msg => {
            const messageHeaderDiv = document.createElement("div");
            messageHeaderDiv.className = 'message-header';
            
            const authorDiv = document.createElement("div");
            authorDiv.className = 'author';
            authorDiv.textContent = msg.name;

            const timestampSpan = document.createElement("span");
            timestampSpan.className = 'timestamp';
            timestampSpan.textContent = new Date(msg.timestamp).toLocaleString();

            messageHeaderDiv.appendChild(authorDiv);
            messageHeaderDiv.appendChild(timestampSpan);

            const messageDiv = document.createElement("div");
            messageDiv.className = 'message';
            messageDiv.textContent = msg.message;

            const containerDiv = document.createElement("div");
            containerDiv.className = 'guestbook-message';
            containerDiv.appendChild(messageHeaderDiv);
            containerDiv.appendChild(messageDiv);
            messagesContainer.appendChild(containerDiv);
        });
    }

    renderGuestbook();

    document.getElementById("submit-guestbook").addEventListener("click", function() {
        const nameInput = document.getElementById("guest-name");
        const passwordInput = document.getElementById("guest-password");
        const messageInput = document.getElementById("guest-message");

        const name = nameInput.value.trim();
        const password = passwordInput.value.trim();
        const message = messageInput.value.trim();

        if (name && password && message) {
            const newPost = {
                name,
                message,
                password,
                timestamp: new Date().toISOString()
            };
            weddingData.guestbookMessages.push(newPost);
            renderGuestbook();

            // Clear inputs
            nameInput.value = '';
            passwordInput.value = '';
            messageInput.value = '';
        } else {
            alert("이름, 비밀번호, 메시지를 모두 입력해주세요.");
        }
    });
    
    // Footer
    document.getElementById("footer-text").textContent = weddingData.footer.madeBy;
});
