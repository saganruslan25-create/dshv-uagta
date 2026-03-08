// ============================================================
// themes.js — повністю замінити старий файл
// ============================================================

const THEMES = {
    matrix: {
        name: "🟢 Матриця",
        '--primary': '#00ff44',
        '--primary-bright': '#e0ffe8',
        '--primary-glow': 'rgba(0, 255, 68, 0.7)',
        '--bg': '#030507',
        '--card-bg': 'rgba(10, 12, 16, 0.6)',
        '--glass-border': 'rgba(0, 255, 68, 0.3)',
        '--danger': '#ef4444',
        '--warning': '#fbbf24',
        '--text-gray': '#94a3b8',
        '--neon-glow': '0 0 15px rgba(0, 255, 68, 0.4)',
        bg: '#030507',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #030507, #001a0a, #030f05, #001205, #020a03) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 12s ease infinite !important;
            }
        `
    },
    fire: {
        name: "🔥 Полум'я",
        '--primary': '#ff6b00',
        '--primary-bright': '#ffcf99',
        '--primary-glow': 'rgba(255, 107, 0, 0.7)',
        '--bg': '#0a0300',
        '--card-bg': 'rgba(25, 8, 0, 0.75)',
        '--glass-border': 'rgba(255, 107, 0, 0.35)',
        '--danger': '#ff0000',
        '--warning': '#ffdd00',
        '--text-gray': '#b0a090',
        '--neon-glow': '0 0 15px rgba(255, 107, 0, 0.4)',
        bg: '#0a0300',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #0a0300, #1a0500, #0f0200, #200800, #120300) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
            }
        `
    },
    ice: {
        name: "❄️ Льодяний",
        '--primary': '#38bdf8',
        '--primary-bright': '#e0f7ff',
        '--primary-glow': 'rgba(56, 189, 248, 0.7)',
        '--bg': '#020810',
        '--card-bg': 'rgba(5, 15, 30, 0.7)',
        '--glass-border': 'rgba(56, 189, 248, 0.3)',
        '--danger': '#f87171',
        '--warning': '#fbbf24',
        '--text-gray': '#7ec8e3',
        '--neon-glow': '0 0 15px rgba(56, 189, 248, 0.4)',
        bg: '#020810',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #020810, #001525, #030e1a, #001830, #020c18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 10s ease infinite !important;
            }
        `
    },
    cosmos: {
        name: "🌌 Космос",
        '--primary': '#c084fc',
        '--primary-bright': '#f3e8ff',
        '--primary-glow': 'rgba(192, 132, 252, 0.7)',
        '--bg': '#05020f',
        '--card-bg': 'rgba(12, 5, 25, 0.7)',
        '--glass-border': 'rgba(192, 132, 252, 0.3)',
        '--danger': '#f87171',
        '--warning': '#fb923c',
        '--text-gray': '#a78bca',
        '--neon-glow': '0 0 15px rgba(192, 132, 252, 0.4)',
        bg: '#05020f',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #05020f, #0d0520, #080015, #100228, #060010) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 14s ease infinite !important;
            }
        `
    },
    gold: {
        name: "✨ Золото",
        '--primary': '#fbbf24',
        '--primary-bright': '#fef3c7',
        '--primary-glow': 'rgba(251, 191, 36, 0.7)',
        '--bg': '#080500',
        '--card-bg': 'rgba(18, 12, 0, 0.7)',
        '--glass-border': 'rgba(251, 191, 36, 0.3)',
        '--danger': '#ef4444',
        '--warning': '#f97316',
        '--text-gray': '#b8a060',
        '--neon-glow': '0 0 15px rgba(251, 191, 36, 0.4)',
        bg: '#080500',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #080500, #140c00, #0f0800, #1a1000, #0a0600) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 11s ease infinite !important;
            }
        `
    },
    ruby: {
        name: "💎 Рубін",
        '--primary': '#fb7185',
        '--primary-bright': '#ffe4e6',
        '--primary-glow': 'rgba(251, 113, 133, 0.7)',
        '--bg': '#0a0204',
        '--card-bg': 'rgba(20, 5, 10, 0.7)',
        '--glass-border': 'rgba(251, 113, 133, 0.3)',
        '--danger': '#ff0000',
        '--warning': '#fb923c',
        '--text-gray': '#c08090',
        '--neon-glow': '0 0 15px rgba(251, 113, 133, 0.4)',
        bg: '#0a0204',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #0a0204, #180308, #0f0205, #1f0510, #0c0205) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 9s ease infinite !important;
            }
        `
    },
    cyberpunk: {
        name: "⚡ Кіберпанк",
        '--primary': '#faef00',
        '--primary-bright': '#fffde0',
        '--primary-glow': 'rgba(250, 239, 0, 0.75)',
        '--bg': '#060005',
        '--card-bg': 'rgba(15, 0, 12, 0.8)',
        '--glass-border': 'rgba(250, 239, 0, 0.3)',
        '--danger': '#ff007f',
        '--warning': '#00f0ff',
        '--text-gray': '#c0b08a',
        '--neon-glow': '0 0 15px rgba(250, 239, 0, 0.4)',
        bg: '#060005',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                25%  { background-position: 100% 0%; }
                50%  { background-position: 100% 100%; }
                75%  { background-position: 0% 100%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #060005, #0a0010, #12000a, #080015, #050008) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 7s ease infinite !important;
            }
        `
    },
    light: {
        name: "☀️ Білий День",
        '--primary': '#059669',
        '--primary-bright': '#065f46',
        '--primary-glow': 'rgba(5, 150, 105, 0.4)',
        '--bg': '#f0f4f8',
        '--card-bg': 'rgba(255, 255, 255, 0.85)',
        '--glass-border': 'rgba(5, 150, 105, 0.3)',
        '--danger': '#dc2626',
        '--warning': '#d97706',
        '--text-gray': '#475569',
        '--neon-glow': '0 0 15px rgba(5, 150, 105, 0.3)',
        bg: '#f0f4f8',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #e8f5f0, #f0f9f5, #e0f2ec, #f5fffe, #eaf6f2) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 15s ease infinite !important;
                color: #1a2a1a !important;
            }
        `
    },
    arctic: {
        name: "🌨️ Арктика",
        '--primary': '#67e8f9',
        '--primary-bright': '#e0ffff',
        '--primary-glow': 'rgba(103, 232, 249, 0.6)',
        '--bg': '#010b10',
        '--card-bg': 'rgba(2, 20, 28, 0.8)',
        '--glass-border': 'rgba(103, 232, 249, 0.25)',
        '--danger': '#f87171',
        '--warning': '#fbbf24',
        '--text-gray': '#88c8d8',
        '--neon-glow': '0 0 15px rgba(103, 232, 249, 0.4)',
        bg: '#010b10',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #010b10, #001520, #021018, #002030, #010e18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 13s ease infinite !important;
            }
        `
    },
    toxic: {
        name: "☢️ Токсин",
        '--primary': '#a3e635',
        '--primary-bright': '#ecfccb',
        '--primary-glow': 'rgba(163, 230, 53, 0.7)',
        '--bg': '#020501',
        '--card-bg': 'rgba(8, 15, 2, 0.7)',
        '--glass-border': 'rgba(163, 230, 53, 0.3)',
        '--danger': '#ef4444',
        '--warning': '#facc15',
        '--text-gray': '#86a840',
        '--neon-glow': '0 0 15px rgba(163, 230, 53, 0.4)',
        bg: '#020501',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #020501, #080f02, #040a01, #0a1403, #030701) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
            }
        `
    },
    ocean: {
        name: "🌊 Океан",
        '--primary': '#22d3ee',
        '--primary-bright': '#cffafe',
        '--primary-glow': 'rgba(34, 211, 238, 0.6)',
        '--bg': '#00080e',
        '--card-bg': 'rgba(0, 20, 35, 0.75)',
        '--glass-border': 'rgba(34, 211, 238, 0.25)',
        '--danger': '#f87171',
        '--warning': '#fb923c',
        '--text-gray': '#60a5c0',
        '--neon-glow': '0 0 15px rgba(34, 211, 238, 0.4)',
        bg: '#00080e',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 0%; }
                33%  { background-position: 100% 50%; }
                66%  { background-position: 0% 100%; }
                100% { background-position: 0% 0%; }
            }
            body {
                background: linear-gradient(-45deg, #00080e, #001525, #00101e, #002035, #000c18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 10s ease infinite !important;
            }
        `
    },
    bloodmoon: {
        name: "🌑 Кривавий Місяць",
        '--primary': '#ff3366',
        '--primary-bright': '#ffccdd',
        '--primary-glow': 'rgba(255, 51, 102, 0.7)',
        '--bg': '#050000',
        '--card-bg': 'rgba(15, 0, 5, 0.8)',
        '--glass-border': 'rgba(255, 51, 102, 0.3)',
        '--danger': '#ff0000',
        '--warning': '#ff8c00',
        '--text-gray': '#cc6688',
        '--neon-glow': '0 0 15px rgba(255, 51, 102, 0.4)',
        bg: '#050000',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #050000, #120005, #0a0002, #180008, #080001) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 9s ease infinite !important;
            }
        `
    },
    steel: {
        name: "⚔️ Сталь",
        '--primary': '#94a3b8',
        '--primary-bright': '#e2e8f0',
        '--primary-glow': 'rgba(148, 163, 184, 0.5)',
        '--bg': '#06080a',
        '--card-bg': 'rgba(15, 18, 22, 0.8)',
        '--glass-border': 'rgba(148, 163, 184, 0.25)',
        '--danger': '#f87171',
        '--warning': '#fbbf24',
        '--text-gray': '#64748b',
        '--neon-glow': '0 0 15px rgba(148, 163, 184, 0.3)',
        bg: '#06080a',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #06080a, #0e1218, #080c10, #121820, #070a0e) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 16s ease infinite !important;
            }
        `
    },
    amber: {
        name: "🟠 Бурштин",
        '--primary': '#f59e0b',
        '--primary-bright': '#fde68a',
        '--primary-glow': 'rgba(245, 158, 11, 0.7)',
        '--bg': '#070400',
        '--card-bg': 'rgba(20, 12, 0, 0.75)',
        '--glass-border': 'rgba(245, 158, 11, 0.3)',
        '--danger': '#dc2626',
        '--warning': '#10b981',
        '--text-gray': '#a8834a',
        '--neon-glow': '0 0 15px rgba(245, 158, 11, 0.4)',
        bg: '#070400',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #070400, #120900, #0f0700, #180c00, #090500) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 11s ease infinite !important;
            }
        `
    },
    neon: {
        name: "🎮 Неонова Ніч",
        '--primary': '#e879f9',
        '--primary-bright': '#fae8ff',
        '--primary-glow': 'rgba(232, 121, 249, 0.7)',
        '--bg': '#04000a',
        '--card-bg': 'rgba(12, 0, 22, 0.8)',
        '--glass-border': 'rgba(232, 121, 249, 0.3)',
        '--danger': '#ff4444',
        '--warning': '#00ff99',
        '--text-gray': '#c080d0',
        '--neon-glow': '0 0 15px rgba(232, 121, 249, 0.4)',
        bg: '#04000a',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                25%  { background-position: 100% 0%; }
                50%  { background-position: 100% 100%; }
                75%  { background-position: 0% 100%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg, #04000a, #0a0018, #070010, #0e0020, #050012) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
            }
        `
    },
};

// ============================================================
// Застосування теми
// ============================================================
function applyTheme(themeKey) {
    const theme = THEMES[themeKey];
    if (!theme) return;

    // 1. CSS змінні
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        if (key.startsWith('--')) root.style.setProperty(key, value);
    });

    // 2. Анімований фон — видалити старий тег і вставити новий
    const old = document.getElementById('dsv-theme-anim');
    if (old) old.remove();
    const style = document.createElement('style');
    style.id = 'dsv-theme-anim';
    style.textContent = theme.anim;
    document.head.appendChild(style);

    // 3. Зберегти
    localStorage.setItem('dsv-theme', themeKey);
}

// ============================================================
// Авто-застосування при завантаженні (без чекання DOM)
// ============================================================
(function () {
    const saved = localStorage.getItem('dsv-theme') || 'matrix';
    const theme = THEMES[saved];
    if (!theme) return;

    // CSS змінні одразу
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        if (key.startsWith('--')) root.style.setProperty(key, value);
    });

    // Анімований фон — вставляємо тег одразу
    const style = document.createElement('style');
    style.id = 'dsv-theme-anim';
    style.textContent = theme.anim;
    // Якщо head ще не готовий — чекаємо
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.head.appendChild(style);
        });
    }
})();

// Глобальний доступ (потрібно для module скриптів)
window.THEMES = THEMES;
window.applyTheme = applyTheme;
