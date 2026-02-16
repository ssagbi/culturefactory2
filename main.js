document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('active');
        });
    }

    // --- Portfolio and Modal Logic ---

    // 1. Project Data (Existing)
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
            mainImage: "images/대치성공스토리 (4).jpg",
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
            mainImage: "images/이디야카페 세종점 (5).jpg", // Changed
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
            mainImage: "images/옥이네  (4).jpg", // Changed
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
        },
        {
            id: 15,
            name: "ABC-MART 울산무거점",
            description: "ABC-MART 울산무거점 인테리어 프로젝트입니다. 신발 쇼핑에 최적화된 모던하고 깔끔한 공간을 구현했습니다.",
            mainImage: "images/ABC-MART 울산무거점 (1).jpg",
            completionPhotos: [
                "images/ABC-MART 울산무거점 (1).jpg",
                "images/ABC-MART 울산무거점 (10).jpg",
                "images/ABC-MART 울산무거점 (11).jpg",
                "images/ABC-MART 울산무거점 (12).jpg",
                "images/ABC-MART 울산무거점 (13).jpg",
                "images/ABC-MART 울산무거점 (2).jpg",
                "images/ABC-MART 울산무거점 (3).jpg",
                "images/ABC-MART 울산무거점 (4).jpg",
                "images/ABC-MART 울산무거점 (5).jpg",
                "images/ABC-MART 울산무거점 (6).jpg",
                "images/ABC-MART 울산무거점 (7).jpg",
                "images/ABC-MART 울산무거점 (8).jpg",
                "images/ABC-MART 울산무거점 (9).jpg"
            ]
        },
        {
            id: 16,
            name: "ABC-MART 천안신부점",
            description: "ABC-MART 천안신부점 인테리어 프로젝트입니다. 트렌디한 디자인과 쾌적한 쇼핑 환경을 제공합니다.",
            mainImage: "images/ABC-MART 천안신부점 (1).jpg",
            completionPhotos: [
                "images/ABC-MART 천안신부점 (1).jpg",
                "images/ABC-MART 천안신부점 (2).jpg",
                "images/ABC-MART 천안신부점 (3).jpg",
                "images/ABC-MART 천안신부점 (4).jpg",
                "images/ABC-MART 천안신부점 (5).jpg",
                "images/ABC-MART 천안신부점 (6).jpg",
                "images/ABC-MART 천안신부점 (7).jpg",
                "images/ABC-MART 천안신부점 (8).jpg",
                "images/ABC-MART 천안신부점 (9).jpg"
            ]
        }
    ];

    // 1. Projects Data (3D Images) - Placeholder
    const projects3D = [
        {
            id: 101,
            name: "공동관",
            description: "공동관 3D 모델링 프로젝트입니다.",
            mainImage: "images/공동관-라운지01.jpg",
            completionPhotos: [
                "images/공동관 -vip.jpg",
                "images/공동관 -무대.jpg",
                "images/공동관 -입구02.jpg",
                "images/공동관 -컨테이너.jpg",
                "images/공동관-라운지01.jpg",
                "images/공동관-라운지02.jpg",
                "images/공동관-스튜디오.jpg"
            ]
        },
        {
            id: 102,
            name: "문화관",
            description: "문화관 3D 모델링 프로젝트입니다.",
            mainImage: "images/문화관-무대.jpg",
            completionPhotos: [
                "images/문화관-vr.jpg",
                "images/문화관-그린란드.jpg",
                "images/문화관-등대.jpg",
                "images/문화관-무대.jpg",
                "images/문화관-발리.jpg",
                "images/문화관-섬.jpg",
                "images/문화관-잔지바르.jpg"
            ]
        },
        {
            id: 103,
            name: "미래관",
            description: "미래관 3D 모델링 프로젝트입니다.",
            mainImage: "images/미래관_1.png",
            completionPhotos: [
                "images/미래관_1.png",
                "images/미래관_2.png",
                "images/미래관_3.png",
                "images/미래관_4.png"
            ]
        },
        {
            id: 104,
            name: "봄날스테이",
            description: "봄날스테이 3D 모델링 프로젝트입니다.",
            mainImage: "images/봄날스테이 (1).png",
            completionPhotos: [
                "images/봄날스테이 (1).png",
                "images/봄날스테이 (2).png",
                "images/봄날스테이 (3).png",
                "images/봄날스테이_4.png",
                "images/봄날스테이_5.png",
                "images/봄날스테이_6.png",
                "images/봄날스테이_7.png",
                "images/봄날스테이_8.png",
                "images/봄날스테이_9.png",
                "images/봄날스테이_10.png",
                "images/봄날스테이_11.png",
                "images/봄날스테이_12.png"
            ]
        },
        {
            id: 105,
            name: "비건 카페 디자인",
            description: "비건 카페 3D 디자인 프로젝트입니다.",
            mainImage: "images/비건_카페_디자인_1.jpeg",
            completionPhotos: [
                "images/비건_카페_디자인_1.jpeg",
                "images/비건_카페_디자인_2.jpeg",
                "images/비건_카페_디자인_3.jpeg",
                "images/비건_카페_디자인_4.jpeg"
            ]
        },
        {
            id: 106,
            name: "섬놀이터",
            description: "섬놀이터 3D 모델링 프로젝트입니다.",
            mainImage: "images/섬놀이터 - 열매.jpg",
            completionPhotos: [
                "images/섬놀이터 - 열매.jpg",
                "images/섬놀이터 -거울.jpg",
                "images/섬놀이터 -영상.jpg",
                "images/섬놀이터 -풍선.jpg",
                "images/섬놀이터-쉼터.jpg",
                "images/섬놀이터-열기구-2.jpg"
            ]
        },
        {
            id: 107,
            name: "섬식당",
            description: "섬식당 3D 모델링 프로젝트입니다.",
            mainImage: "images/섬식당_1.jpg",
            completionPhotos: [
                "images/섬식당_1.jpg",
                "images/섬식당_2.jpg",
                "images/섬식당_3.jpg"
            ]
        },
        {
            id: 108,
            name: "안산피자집",
            description: "안산피자집 3D 모델링 프로젝트입니다.",
            mainImage: "images/안산피자집_1.png",
            completionPhotos: [
                "images/안산피자집_1.png",
                "images/안산피자집_2.png",
                "images/안산피자집_3.png",
                "images/안산피자집_4.png",
                "images/안산피자집_5.png",
                "images/안산피자집_6.png",
                "images/안산피자집_7.png",
                "images/안산피자집_8.png",
                "images/안산피자집_9.png"
            ]
        },
        {
            id: 109,
            name: "위저드 클럽 보드카페",
            description: "위저드 클럽 보드카페 3D 모델링 프로젝트입니다.",
            mainImage: "images/위저드 클럽 보드카페 (1).png",
            completionPhotos: [
                "images/위저드 클럽 보드카페 (1).png",
                "images/위저드 클럽 보드카페 (2).png",
                "images/위저드 클럽 보드카페 (3).png",
                "images/위저드_클럽_보드카페_4.png",
                "images/위저드_클럽_보드카페_5.png",
                "images/위저드_클럽_보드카페_6.png",
                "images/위저드_클럽_보드카페_7.png",
                "images/위저드_클럽_보드카페_8.png",
                "images/위저드_클럽_보드카페_9.png",
                "images/위저드_클럽_보드카페_10.png",
                "images/위저드_클럽_보드카페_11.png",
                "images/위저드_클럽_보드카페_12.png",
                "images/위저드_클럽_보드카페_13.png",
                "images/위저드_클럽_보드카페_14.png",
                "images/위저드_클럽_보드카페_15.png",
                "images/위저드_클럽_보드카페_16.png",
                "images/위저드_클럽_보드카페_17.png",
                "images/위저드_클럽_보드카페_18.png",
                "images/위저드_클럽_보드카페_19.png",
                "images/위저드_클럽_보드카페_20.png"
            ]
        },
        {
            id: 110,
            name: "청담 고깃집",
            description: "청담 고깃집 3D 모델링 프로젝트입니다.",
            mainImage: "images/청담 고깃집 (1).png",
            completionPhotos: [
                "images/청담 고깃집 (1).png",
                "images/청담 고깃집 (2).png",
                "images/청담 고깃집 (3).png",
                "images/청담_고깃집_4.png",
                "images/청담_고깃집_5.png"
            ]
        }
    ];


    const portfolioGrid = document.querySelector('.portfolio-grid');
    const portfolio3dGrid = document.querySelector('.portfolio-3d-grid'); // New 3D grid selector
    const modal = document.getElementById('project-modal');

    // 2. Render Portfolio Grid - Modified to handle different project lists and grids
    function renderPortfolioGrid(targetGrid, projectList) {
        if (!targetGrid) return;
        targetGrid.innerHTML = ''; // Clear existing items
        projectList.forEach(project => {
            const item = document.createElement('div');
            item.className = 'portfolio-item';
            item.dataset.projectId = project.id;
            item.innerHTML = `
                <img src="${project.mainImage}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p>${project.description.substring(0, 40)}...</p>
            `;
            targetGrid.appendChild(item);
        });
    }

    // 3. Modal Handling - Modified to search both project lists
    if (modal) {
        const modalTitle = document.getElementById('modal-project-title');
        const modalMainImage = document.getElementById('modal-main-image');
        const modalThumbnails = document.getElementById('modal-thumbnail-container');
        const modalDescription = document.getElementById('modal-project-description');
        const closeButton = document.querySelector('.close-button');

        function openModal(projectId) {
            let project = projects.find(p => p.id == projectId);
            if (!project) { // If not found in main projects, search in 3D projects
                project = projects3D.find(p => p.id == projectId);
            }

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

        // Event Listeners for main portfolio
        if (portfolioGrid) {
            portfolioGrid.addEventListener('click', function(e) {
                const item = e.target.closest('.portfolio-item');
                if (item && item.dataset.projectId) {
                    openModal(item.dataset.projectId);
                }
            });
        }
        
        // Event Listeners for 3D portfolio
        if (portfolio3dGrid) {
            portfolio3dGrid.addEventListener('click', function(e) {
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
    
    // Initial Render - Modified to render both grids
    renderPortfolioGrid(portfolioGrid, projects);
    renderPortfolioGrid(portfolio3dGrid, projects3D);


    // --- Contact Form Logic ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0mMxCMjuF5l_HTqIoChKFx55oHtXEoLzX5Z5kHIwOsWk-5AI997pdTlkjXhHSoQyv/exec';

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            formMessage.textContent = '문의를 접수 중입니다...';
            formMessage.style.color = '#FFA500'; // Orange for pending

            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Required for Google Apps Script
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(data).toString()
            })
            .then(response => {
                // Because of 'no-cors', we can't directly read the response.
                // Assume success if no network error.
                formMessage.textContent = '문의가 접수되었습니다. 유대리가 곧 연락드릴게요!';
                formMessage.style.color = '#28a745'; // Green for success
                contactForm.reset(); // Clear the form
            })
            .catch(error => {
                formMessage.textContent = '문의 접수에 실패했습니다. 다시 시도해 주세요.';
                formMessage.style.color = '#dc3545'; // Red for error
                console.error('Error submitting form:', error);
            });
        });
    }
});
