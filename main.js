document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    // --- Portfolio and Modal Logic ---

    // 1. Project Data
    // You can easily update your projects here.
    const projects = [
        {
            id: 1,
            name: "가락동 스마일 홀덤펍",
            description: "송파구 가락동에 위치한 스마일 홀덤펍 인테리어 프로젝트입니다. 활기찬 분위기에서 즐거움을 만끽할 수 있도록 디자인했습니다.",
            mainImage: "images/가락동 스마일 홀덤펍.jpg",
            completionPhotos: [
                "images/가락동 스마일 홀덤펍.jpg",
                "images/가락동 스마일 홀덤펍2.jpg",
                "images/가락동 스마일 홀덤펍3.jpg",
                "images/가락동 스마일 홀덤펍4.jpg",
                "images/가락동 스마일 홀덤펍5.jpg",
                "images/가락동 스마일 홀덤펍6.jpg",
                "images/가락동 스마일 홀덤펍7.jpg"
            ]
        },
        {
            id: 2,
            name: "인천 쉼 베이커리 카페",
            description: "인천에 위치한 쉼 베이커리 카페 인테리어 프로젝트입니다. 아늑하고 편안한 분위기를 연출했습니다.",
            mainImage: "images/0001.jpg",
            completionPhotos: [
                "images/0001.jpg",
                "images/0002.jpg",
                "images/0012.jpg",
                "images/0014.jpg",
                "images/0016.jpg",
                "images/0019.jpg",
                "images/0024.jpg",
                "images/0028.jpg",
                "images/0030.jpg"
            ]
        },
        {
            id: 3,
            name: "수원카페",
            description: "수원에 위치한 모던하고 세련된 분위기의 카페 인테리어 프로젝트입니다.",
            mainImage: "images/수원카페_1.jpg",
            completionPhotos: [
                "images/수원카페_1.jpg",
                "images/수원카페_10.jpg",
                "images/수원카페_11.jpg",
                "images/수원카페_2.jpg",
                "images/수원카페_3.jpg",
                "images/수원카페_4.jpg",
                "images/수원카페_5.jpg",
                "images/수원카페_6.jpg",
                "images/수원카페_7.jpg"
            ]
        },
        {
            id: 4,
            name: "대치성공스토리",
            description: "대치동 성공스토리 학원 인테리어 프로젝트입니다. 학습 효율을 높이는 공간을 구현했습니다.",
            mainImage: "images/대치성공스토리 (1).jpg",
            completionPhotos: [
                "images/대치성공스토리 (1).jpg",
                "images/대치성공스토리 (10).jpg",
                "images/대치성공스토리 (11).jpg",
                "images/대치성공스토리 (2).jpg",
                "images/대치성공스토리 (3).jpg",
                "images/대치성공스토리 (4).jpg",
                "images/대치성공스토리 (5).jpg",
                "images/대치성공스토리 (6).jpg",
                "images/대치성공스토리 (7).jpg"
            ]
        },
        {
            id: 5,
            name: "청담타우요가",
            description: "청담동 타우요가 스튜디오 인테리어 프로젝트입니다. 평화롭고 안정적인 수련 환경을 조성했습니다.",
            mainImage: "images/청담타우요가 (1).jpg",
            completionPhotos: [
                "images/청담타우요가 (1).jpg",
                "images/청담타우요가 (2).jpg",
                "images/청담타우요가 (3).jpg",
                "images/청담타우요가 (4).jpg",
                "images/청담타우요가 (5).jpg",
                "images/청담타우요가 (6).jpg",
                "images/청담타우요가 (7).jpg"
            ]
        },
        {
            id: 6,
            name: "중앙대학교 다빈치 클래스룸",
            description: "중앙대학교 다빈치 클래스룸 인테리어 프로젝트입니다. 최신 교육 환경에 맞춰 스마트한 공간을 제공합니다.",
            mainImage: "images/중앙대학교 다빈치 클래스룸 (1).jpg",
            completionPhotos: [
                "images/중앙대학교 다빈치 클래스룸 (1).jpg",
                "images/중앙대학교 다빈치 클래스룸 (10).jpg",
                "images/중앙대학교 다빈치 클래스룸 (11).jpg",
                "images/중앙대학교 다빈치 클래스룸 (12).jpg",
                "images/중앙대학교 다빈치 클래스룸 (13).jpg",
                "images/중앙대학교 다빈치 클래스룸 (14).jpg",
                "images/중앙대학교 다빈치 클래스룸 (15).jpg",
                "images/중앙대학교 다빈치 클래스룸 (16).jpg",
                "images/중앙대학교 다빈치 클래스룸 (17).jpg",
                "images/중앙대학교 다빈치 클래스룸 (18).jpg",
                "images/중앙대학교 다빈치 클래스룸 (19).jpg",
                "images/중앙대학교 다빈치 클래스룸 (2).jpg",
                "images/중앙대학교 다빈치 클래스룸 (20).jpg",
                "images/중앙대학교 다빈치 클래스룸 (3).jpg",
                "images/중앙대학교 다빈치 클래스룸 (4).jpg",
                "images/중앙대학교 다빈치 클래스룸 (5).jpg",
                "images/중앙대학교 다빈치 클래스룸 (6).jpg"
            ]
        },
        {
            id: 7,
            name: "이디야카페 세종점",
            description: "이디야카페 세종점 인테리어 프로젝트입니다. 고객들이 편안하게 즐길 수 있는 카페 공간을 조성했습니다.",
            mainImage: "images/이디야카페 세종점 (2).jpg",
            completionPhotos: [
                "images/이디야카페 세종점 (1).jpg",
                "images/이디야카페 세종점 (2).jpg",
                "images/이디야카페 세종점 (3).jpg",
                "images/이디야카페 세종점 (4).jpg",
                "images/이디야카페 세종점 (5).jpg",
                "images/이디야카페 세종점 (6).jpg"
            ]
        },
        {
            id: 8,
            name: "팔람까오",
            description: "팔람까오 레스토랑 인테리어 프로젝트입니다. 동남아시아의 이국적인 분위기를 현대적으로 재해석했습니다.",
            mainImage: "images/팔람까오 (1).jpg",
            completionPhotos: [
                "images/팔람까오 (1).jpg",
                "images/팔람까오 (2).jpg",
                "images/팔람까오 (3).jpg",
                "images/팔람까오 (4).jpg",
                "images/팔람까오 (5).jpg",
                "images/팔람까오 (6).jpg"
            ]
        },
        {
            id: 9,
            name: "개포동 구축빌라",
            description: "개포동 구축빌라 리모델링 프로젝트입니다. 오래된 공간에 현대적인 감각과 실용성을 더했습니다.",
            mainImage: "images/개포동 구축빌라 (1).jpg",
            completionPhotos: [
                "images/개포동 구축빌라 (1).jpg",
                "images/개포동 구축빌라 (10).jpg",
                "images/개포동 구축빌라 (11).jpg",
                "images/개포동 구축빌라 (12).jpg",
                "images/개포동 구축빌라 (13).jpg",
                "images/개포동 구축빌라 (14).jpg",
                "images/개포동 구축빌라 (15).jpg",
                "images/개포동 구축빌라 (16).jpg",
                "images/개포동 구축빌라 (17).jpg",
                "images/개포동 구축빌라 (18).jpg",
                "images/개포동 구축빌라 (2).jpg",
                "images/개포동 구축빌라 (3).jpg",
                "images/개포동 구축빌라 (4).jpg",
                "images/개포동 구축빌라 (5).jpg",
                "images/개포동 구축빌라 (6).jpg"
            ]
        },
        {
            id: 10,
            name: "옥이네",
            description: "옥이네 음식점 인테리어 프로젝트입니다. 정겹고 편안한 한식당의 분위기를 연출했습니다.",
            mainImage: "images/옥이네  (1).jpg",
            completionPhotos: [
                "images/옥이네  (1).jpg",
                "images/옥이네  (10).jpg",
                "images/옥이네  (11).jpg",
                "images/옥이네  (12).jpg",
                "images/옥이네  (13).jpg",
                "images/옥이네  (14).jpg",
                "images/옥이네  (15).jpg",
                "images/옥이네  (2).jpg",
                "images/옥이네  (3).jpg",
                "images/옥이네  (4).jpg",
                "images/옥이네  (5).jpg",
                "images/옥이네  (6).jpg"
            ]
        },
        {
            id: 11,
            name: "양주 로스팅바이저",
            description: "양주 로스팅바이저 카페 인테리어 프로젝트입니다. 커피 로스팅 과정을 엿볼 수 있는 독특한 공간입니다.",
            mainImage: "images/양주 로스팅바이저 (1).jpg",
            completionPhotos: [
                "images/양주 로스팅바이저 (1).jpg",
                "images/양주 로스팅바이저 (2).jpg",
                "images/양주 로스팅바이저 (3).jpg",
                "images/양주 로스팅바이저 (4).jpg",
                "images/양주 로스팅바이저 (5).jpg",
                "images/양주 로스팅바이저 (6).jpg"
            ]
        },
        {
            id: 12,
            name: "분당 홍보드카페",
            description: "분당 홍보드카페 인테리어 프로젝트입니다. 다양한 보드게임을 즐길 수 있는 활기찬 공간을 조성했습니다.",
            mainImage: "images/분당 홍보드카페 (2).jpg",
            completionPhotos: [
                "images/분당 홍보드카페 (1).jpg",
                "images/분당 홍보드카페 (10).jpg",
                "images/분당 홍보드카페 (11).jpg",
                "images/분당 홍보드카페 (12).jpg",
                "images/분당 홍보드카페 (13).jpg",
                "images/분당 홍보드카페 (15).jpg",
                "images/분당 홍보드카페 (2).jpg",
                "images/분당 홍보드카페 (3).jpg",
                "images/분당 홍보드카페 (4).jpg",
                "images/분당 홍보드카페 (5).jpg",
                "images/분당 홍보드카페 (6).jpg"
            ]
        },
        {
            id: 13,
            name: "둥지 닭볶음탕",
            description: "둥지 닭볶음탕 전문점 인테리어 프로젝트입니다. 아늑하고 정감 있는 분위기에서 식사를 즐길 수 있습니다.",
            mainImage: "images/둥지 닭볶음탕 (1).jpg",
            completionPhotos: [
                "images/둥지 닭볶음탕 (1).jpg",
                "images/둥지 닭볶음탕 (10).jpg",
                "images/둥지 닭볶음탕 (11).jpg",
                "images/둥지 닭볶음탕 (12).jpg",
                "images/둥지 닭볶음탕 (13).jpg",
                "images/둥지 닭볶음탕 (2).jpg",
                "images/둥지 닭볶음탕 (3).jpg",
                "images/둥지 닭볶음탕 (4).jpg",
                "images/둥지 닭볶음탕 (5).jpg",
                "images/둥지 닭볶음탕 (6).jpg"
            ]
        },
        {
            id: 14,
            name: "카페조기나루",
            description: "카페조기나루 인테리어 프로젝트입니다. 강변의 아름다운 풍경과 어우러지는 편안한 공간입니다.",
            mainImage: "images/카페조기나루 (1).JPG",
            completionPhotos: [
                "images/카페조기나루 (1).JPG",
                "images/카페조기나루 (2).JPG",
                "images/카페조기나루 (3).JPG",
                "images/카페조기나루 (4).JPG",
                "images/카페조기나루 (5).JPG",
                "images/카페조기나루 (6).JPG"
            ]
        }
    ];

    const portfolioGrid = document.querySelector('.portfolio-grid');
    const modal = document.getElementById('project-modal');

    // 2. Render Portfolio Grid
    function renderPortfolioGrid() {
        if (!portfolioGrid) return;
        portfolioGrid.innerHTML = ''; // Clear existing items
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.dataset.projectId = project.id;
            item.innerHTML = `
                <img src="${project.mainImage}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p>${project.description.substring(0, 40)}...</p>
            `;
            portfolioGrid.appendChild(item);
        });
    }

    // 3. Modal Handling
    if (modal) {
        const modalTitle = document.getElementById('modal-project-title');
        const modalMainImage = document.getElementById('modal-main-image');
        const modalThumbnails = document.getElementById('modal-thumbnail-container');
        const modalDescription = document.getElementById('modal-project-description');
        const closeButton = document.querySelector('.close-button');

        function openModal(projectId) {
            const project = projects.find(p => p.id == projectId);
            if (!project) return;

            modalTitle.textContent = project.name;
            modalDescription.textContent = project.description;
            modalMainImage.src = project.completionPhotos[0]; // Set main image to the first completion photo

            // Populate thumbnails
            modalThumbnails.innerHTML = '';
            project.completionPhotos.forEach(photoSrc => {
                const thumb = document.createElement('img');
                thumb.src = photoSrc;
                thumb.alt = "Project thumbnail";
                thumb.classList.add('thumbnail');
                if (photoSrc === project.completionPhotos[0]) {
                    thumb.classList.add('active');
                }
                modalThumbnails.appendChild(thumb);
            });

            modal.style.display = 'block';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        // Event Listeners
        if (portfolioGrid) {
            portfolioGrid.addEventListener('click', function(e) {
                const item = e.target.closest('.portfolio-item');
                if (item && item.dataset.projectId) {
                    openModal(item.dataset.projectId);
                }
            });
        }
        
        if(closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        window.addEventListener('click', function(e) {
            if (e.target == modal) {
                closeModal();
            }
        });
        
        if (modalThumbnails) {
            modalThumbnails.addEventListener('click', function(e) {
                if (e.target.classList.contains('thumbnail')) {
                    // Update main image
                    modalMainImage.src = e.target.src;

                    // Update active thumbnail
                    document.querySelectorAll('.thumbnail.active').forEach(activeThumb => {
                        activeThumb.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
            });
        }
    }
    
    // Initial Render
    renderPortfolioGrid();
});
