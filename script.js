const showBtn = document.querySelector('#contactBTN');
const hideBtn = document.querySelector('#hideContactBTN');
const closeBtn = document.querySelector('#closeBtn');
const title = document.querySelector('h1');
const modal = document.querySelector('#modal');

function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
}

showBtn.addEventListener('click', () => {
    openModal();
    title.textContent = '반갑습니다! ^^';
});

hideBtn.addEventListener('click', () => {
    closeModal();
    title.textContent = '이서진';
});

closeBtn.addEventListener('click', closeModal);

/* 모달 밖(배경) 클릭 시 닫기 */
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

/* ESC 키로 닫기 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});
