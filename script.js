const showBtn = document.querySelector('#contactBTN');
const closeBtn = document.querySelector('#closeBtn');
const themeToggle = document.querySelector('#themeToggle');
const modal = document.querySelector('#modal');
const root = document.documentElement;

const THEME_KEY = 'theme';

function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    themeToggle.setAttribute(
        'aria-label',
        theme === 'dark' ? '라이트모드로 전환' : '다크모드로 전환'
    );
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
});

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
