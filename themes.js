// ============================================================
// themes.js — повна версія з анімованими фонами
// Покриває ВСІ змінні з усіх файлів сайту
// ============================================================

const THEMES = {

    // ── 0. ЗА ЗАМОВЧУВАННЯМ (оригінальна зелена) ──────────────
    default: {
        name: "🔄 За замовчуванням",
        '--primary':        '#00ff44',
        '--primary-bright': '#e0ffe8',
        '--primary-glow':   'rgba(0,255,68,0.7)',
        '--primary-dark':   '#00cc33',
        '--primary-dim':    'rgba(0,255,68,0.15)',
        '--bg':             '#030507',
        '--bg-secondary':   '#0a0c10',
        '--card-bg':        'rgba(10,12,16,0.6)',
        '--card-hover':     'rgba(15,18,24,0.8)',
        '--glass-bg':       'rgba(10,12,16,0.7)',
        '--glass-border':   'rgba(0,255,68,0.3)',
        '--danger':         '#ef4444',
        '--danger-glow':    'rgba(239,68,68,0.6)',
        '--warning':        '#fbbf24',
        '--warning-glow':   'rgba(251,191,36,0.5)',
        '--text-gray':      '#94a3b8',
        '--text-light':     '#cbd5e1',
        '--text-dim':       '#64748b',
        '--neon-glow':      '0 0 15px rgba(0,255,68,0.4)',
        '--info':           '#38bdf8',
        '--info-glow':      'rgba(56,189,248,0.5)',
        '--success':        '#00ff44',
        '--accent':         '#f97316',
        '--accent-glow':    'rgba(249,115,22,0.5)',
        '--currency':       '#fbbf24',
        '--sale':           '#ef4444',
        '--sale-glow':      'rgba(239,68,68,0.5)',
        // cabinetpilota аліаси
        '--pr': '#00ff44', '--pb': '#e0ffe8', '--pg': 'rgba(0,255,68,0.7)',
        '--cb': 'rgba(10,12,16,0.6)', '--gb': 'rgba(0,255,68,0.3)',
        '--dn': '#ef4444', '--wn': '#fbbf24', '--tg': '#94a3b8',
        '--bl': '#38bdf8', '--gd': '#f59e0b', '--mn': '#a855f7',
        '--mnb': 'rgba(168,85,247,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#030507,#001a0a,#030f05,#001205,#020a03) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 12s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 1. МАТРИЦЯ ─────────────────────────────────────────────
    matrix: {
        name: "🟢 Матриця",
        '--primary':        '#00ff44',
        '--primary-bright': '#e0ffe8',
        '--primary-glow':   'rgba(0,255,68,0.7)',
        '--primary-dark':   '#00cc33',
        '--primary-dim':    'rgba(0,255,68,0.15)',
        '--bg':             '#030507',
        '--bg-secondary':   '#0a0c10',
        '--card-bg':        'rgba(10,12,16,0.6)',
        '--card-hover':     'rgba(15,18,24,0.8)',
        '--glass-bg':       'rgba(10,12,16,0.7)',
        '--glass-border':   'rgba(0,255,68,0.3)',
        '--danger':         '#ef4444',
        '--danger-glow':    'rgba(239,68,68,0.6)',
        '--warning':        '#fbbf24',
        '--warning-glow':   'rgba(251,191,36,0.5)',
        '--text-gray':      '#94a3b8',
        '--text-light':     '#cbd5e1',
        '--text-dim':       '#64748b',
        '--neon-glow':      '0 0 15px rgba(0,255,68,0.4)',
        '--info':           '#38bdf8',
        '--info-glow':      'rgba(56,189,248,0.5)',
        '--success':        '#00ff44',
        '--accent':         '#f97316',
        '--accent-glow':    'rgba(249,115,22,0.5)',
        '--currency':       '#fbbf24',
        '--sale':           '#ef4444',
        '--sale-glow':      'rgba(239,68,68,0.5)',
        '--pr': '#00ff44', '--pb': '#e0ffe8', '--pg': 'rgba(0,255,68,0.7)',
        '--cb': 'rgba(10,12,16,0.6)', '--gb': 'rgba(0,255,68,0.3)',
        '--dn': '#ef4444', '--wn': '#fbbf24', '--tg': '#94a3b8',
        '--bl': '#38bdf8', '--gd': '#f59e0b', '--mn': '#a855f7',
        '--mnb': 'rgba(168,85,247,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#030507,#001a0a,#030f05,#001205,#020a03) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 12s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 2. ПОЛУМ'Я ─────────────────────────────────────────────
    fire: {
        name: "🔥 Полум'я",
        '--primary':        '#ff6b00',
        '--primary-bright': '#ffcf99',
        '--primary-glow':   'rgba(255,107,0,0.7)',
        '--primary-dark':   '#cc5500',
        '--primary-dim':    'rgba(255,107,0,0.15)',
        '--bg':             '#0a0300',
        '--bg-secondary':   '#140600',
        '--card-bg':        'rgba(25,8,0,0.75)',
        '--card-hover':     'rgba(35,12,0,0.9)',
        '--glass-bg':       'rgba(20,6,0,0.8)',
        '--glass-border':   'rgba(255,107,0,0.35)',
        '--danger':         '#ff2200',
        '--danger-glow':    'rgba(255,34,0,0.6)',
        '--warning':        '#ffdd00',
        '--warning-glow':   'rgba(255,221,0,0.5)',
        '--text-gray':      '#c0a080',
        '--text-light':     '#ffe0c0',
        '--text-dim':       '#806040',
        '--neon-glow':      '0 0 15px rgba(255,107,0,0.5)',
        '--info':           '#ffaa44',
        '--info-glow':      'rgba(255,170,68,0.5)',
        '--success':        '#ff6b00',
        '--accent':         '#ffdd00',
        '--accent-glow':    'rgba(255,221,0,0.5)',
        '--currency':       '#ffdd00',
        '--sale':           '#ff2200',
        '--sale-glow':      'rgba(255,34,0,0.5)',
        '--pr': '#ff6b00', '--pb': '#ffcf99', '--pg': 'rgba(255,107,0,0.7)',
        '--cb': 'rgba(25,8,0,0.75)', '--gb': 'rgba(255,107,0,0.35)',
        '--dn': '#ff2200', '--wn': '#ffdd00', '--tg': '#c0a080',
        '--bl': '#ffaa44', '--gd': '#ffdd00', '--mn': '#ff6b00',
        '--mnb': 'rgba(255,107,0,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#0a0300,#1a0500,#0f0200,#200800,#120300) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 3. ЛЬОДЯНИЙ ────────────────────────────────────────────
    ice: {
        name: "❄️ Льодяний",
        '--primary':        '#38bdf8',
        '--primary-bright': '#e0f7ff',
        '--primary-glow':   'rgba(56,189,248,0.7)',
        '--primary-dark':   '#0ea5e9',
        '--primary-dim':    'rgba(56,189,248,0.15)',
        '--bg':             '#020810',
        '--bg-secondary':   '#051525',
        '--card-bg':        'rgba(5,15,30,0.7)',
        '--card-hover':     'rgba(8,22,45,0.9)',
        '--glass-bg':       'rgba(5,15,30,0.8)',
        '--glass-border':   'rgba(56,189,248,0.3)',
        '--danger':         '#f87171',
        '--danger-glow':    'rgba(248,113,113,0.6)',
        '--warning':        '#fbbf24',
        '--warning-glow':   'rgba(251,191,36,0.5)',
        '--text-gray':      '#7ec8e3',
        '--text-light':     '#cff0ff',
        '--text-dim':       '#4a8ca0',
        '--neon-glow':      '0 0 15px rgba(56,189,248,0.5)',
        '--info':           '#38bdf8',
        '--info-glow':      'rgba(56,189,248,0.5)',
        '--success':        '#38bdf8',
        '--accent':         '#67e8f9',
        '--accent-glow':    'rgba(103,232,249,0.5)',
        '--currency':       '#fbbf24',
        '--sale':           '#f87171',
        '--sale-glow':      'rgba(248,113,113,0.5)',
        '--pr': '#38bdf8', '--pb': '#e0f7ff', '--pg': 'rgba(56,189,248,0.7)',
        '--cb': 'rgba(5,15,30,0.7)', '--gb': 'rgba(56,189,248,0.3)',
        '--dn': '#f87171', '--wn': '#fbbf24', '--tg': '#7ec8e3',
        '--bl': '#38bdf8', '--gd': '#fbbf24', '--mn': '#818cf8',
        '--mnb': 'rgba(129,140,248,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#020810,#001525,#030e1a,#001830,#020c18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 10s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 4. КОСМОС ──────────────────────────────────────────────
    cosmos: {
        name: "🌌 Космос",
        '--primary':        '#c084fc',
        '--primary-bright': '#f3e8ff',
        '--primary-glow':   'rgba(192,132,252,0.7)',
        '--primary-dark':   '#a855f7',
        '--primary-dim':    'rgba(192,132,252,0.15)',
        '--bg':             '#05020f',
        '--bg-secondary':   '#0d0520',
        '--card-bg':        'rgba(12,5,25,0.7)',
        '--card-hover':     'rgba(18,8,38,0.9)',
        '--glass-bg':       'rgba(12,5,25,0.8)',
        '--glass-border':   'rgba(192,132,252,0.3)',
        '--danger':         '#f87171',
        '--danger-glow':    'rgba(248,113,113,0.6)',
        '--warning':        '#fb923c',
        '--warning-glow':   'rgba(251,146,60,0.5)',
        '--text-gray':      '#a78bca',
        '--text-light':     '#e9d5ff',
        '--text-dim':       '#6d4a9c',
        '--neon-glow':      '0 0 15px rgba(192,132,252,0.5)',
        '--info':           '#818cf8',
        '--info-glow':      'rgba(129,140,248,0.5)',
        '--success':        '#c084fc',
        '--accent':         '#f472b6',
        '--accent-glow':    'rgba(244,114,182,0.5)',
        '--currency':       '#fb923c',
        '--sale':           '#f87171',
        '--sale-glow':      'rgba(248,113,113,0.5)',
        '--pr': '#c084fc', '--pb': '#f3e8ff', '--pg': 'rgba(192,132,252,0.7)',
        '--cb': 'rgba(12,5,25,0.7)', '--gb': 'rgba(192,132,252,0.3)',
        '--dn': '#f87171', '--wn': '#fb923c', '--tg': '#a78bca',
        '--bl': '#818cf8', '--gd': '#fb923c', '--mn': '#c084fc',
        '--mnb': 'rgba(192,132,252,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#05020f,#0d0520,#080015,#100228,#060010) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 14s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 5. ЗОЛОТО ──────────────────────────────────────────────
    gold: {
        name: "✨ Золото",
        '--primary':        '#fbbf24',
        '--primary-bright': '#fef3c7',
        '--primary-glow':   'rgba(251,191,36,0.7)',
        '--primary-dark':   '#d97706',
        '--primary-dim':    'rgba(251,191,36,0.15)',
        '--bg':             '#080500',
        '--bg-secondary':   '#140c00',
        '--card-bg':        'rgba(18,12,0,0.7)',
        '--card-hover':     'rgba(28,18,0,0.9)',
        '--glass-bg':       'rgba(18,12,0,0.8)',
        '--glass-border':   'rgba(251,191,36,0.3)',
        '--danger':         '#ef4444',
        '--danger-glow':    'rgba(239,68,68,0.6)',
        '--warning':        '#f97316',
        '--warning-glow':   'rgba(249,115,22,0.5)',
        '--text-gray':      '#b8a060',
        '--text-light':     '#fde68a',
        '--text-dim':       '#78600a',
        '--neon-glow':      '0 0 15px rgba(251,191,36,0.5)',
        '--info':           '#fbbf24',
        '--info-glow':      'rgba(251,191,36,0.5)',
        '--success':        '#fbbf24',
        '--accent':         '#f97316',
        '--accent-glow':    'rgba(249,115,22,0.5)',
        '--currency':       '#fbbf24',
        '--sale':           '#ef4444',
        '--sale-glow':      'rgba(239,68,68,0.5)',
        '--pr': '#fbbf24', '--pb': '#fef3c7', '--pg': 'rgba(251,191,36,0.7)',
        '--cb': 'rgba(18,12,0,0.7)', '--gb': 'rgba(251,191,36,0.3)',
        '--dn': '#ef4444', '--wn': '#f97316', '--tg': '#b8a060',
        '--bl': '#fbbf24', '--gd': '#fbbf24', '--mn': '#fbbf24',
        '--mnb': 'rgba(251,191,36,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#080500,#140c00,#0f0800,#1a1000,#0a0600) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 11s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 6. РУБІН ───────────────────────────────────────────────
    ruby: {
        name: "💎 Рубін",
        '--primary':        '#fb7185',
        '--primary-bright': '#ffe4e6',
        '--primary-glow':   'rgba(251,113,133,0.7)',
        '--primary-dark':   '#e11d48',
        '--primary-dim':    'rgba(251,113,133,0.15)',
        '--bg':             '#0a0204',
        '--bg-secondary':   '#180308',
        '--card-bg':        'rgba(20,5,10,0.7)',
        '--card-hover':     'rgba(30,8,15,0.9)',
        '--glass-bg':       'rgba(20,5,10,0.8)',
        '--glass-border':   'rgba(251,113,133,0.3)',
        '--danger':         '#ff0033',
        '--danger-glow':    'rgba(255,0,51,0.6)',
        '--warning':        '#fb923c',
        '--warning-glow':   'rgba(251,146,60,0.5)',
        '--text-gray':      '#c08090',
        '--text-light':     '#ffd0d8',
        '--neon-glow':      '0 0 15px rgba(251,113,133,0.5)',
        '--text-dim':       '#804050',
        '--info':           '#fb7185',
        '--info-glow':      'rgba(251,113,133,0.5)',
        '--success':        '#fb7185',
        '--accent':         '#fb923c',
        '--accent-glow':    'rgba(251,146,60,0.5)',
        '--currency':       '#fb923c',
        '--sale':           '#ff0033',
        '--sale-glow':      'rgba(255,0,51,0.5)',
        '--pr': '#fb7185', '--pb': '#ffe4e6', '--pg': 'rgba(251,113,133,0.7)',
        '--cb': 'rgba(20,5,10,0.7)', '--gb': 'rgba(251,113,133,0.3)',
        '--dn': '#ff0033', '--wn': '#fb923c', '--tg': '#c08090',
        '--bl': '#fb7185', '--gd': '#fb923c', '--mn': '#fb7185',
        '--mnb': 'rgba(251,113,133,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#0a0204,#180308,#0f0205,#1f0510,#0c0205) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 9s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 7. КІБЕРПАНК ───────────────────────────────────────────
    cyberpunk: {
        name: "⚡ Кіберпанк",
        '--primary':        '#faef00',
        '--primary-bright': '#fffde0',
        '--primary-glow':   'rgba(250,239,0,0.75)',
        '--primary-dark':   '#d4c900',
        '--primary-dim':    'rgba(250,239,0,0.15)',
        '--bg':             '#060005',
        '--bg-secondary':   '#0f0010',
        '--card-bg':        'rgba(15,0,12,0.8)',
        '--card-hover':     'rgba(22,0,18,0.95)',
        '--glass-bg':       'rgba(15,0,12,0.85)',
        '--glass-border':   'rgba(250,239,0,0.3)',
        '--danger':         '#ff007f',
        '--danger-glow':    'rgba(255,0,127,0.6)',
        '--warning':        '#00f0ff',
        '--warning-glow':   'rgba(0,240,255,0.5)',
        '--text-gray':      '#c0b08a',
        '--text-light':     '#fff9c0',
        '--text-dim':       '#806a30',
        '--neon-glow':      '0 0 15px rgba(250,239,0,0.5)',
        '--info':           '#00f0ff',
        '--info-glow':      'rgba(0,240,255,0.5)',
        '--success':        '#faef00',
        '--accent':         '#ff007f',
        '--accent-glow':    'rgba(255,0,127,0.5)',
        '--currency':       '#faef00',
        '--sale':           '#ff007f',
        '--sale-glow':      'rgba(255,0,127,0.5)',
        '--pr': '#faef00', '--pb': '#fffde0', '--pg': 'rgba(250,239,0,0.75)',
        '--cb': 'rgba(15,0,12,0.8)', '--gb': 'rgba(250,239,0,0.3)',
        '--dn': '#ff007f', '--wn': '#00f0ff', '--tg': '#c0b08a',
        '--bl': '#00f0ff', '--gd': '#faef00', '--mn': '#ff007f',
        '--mnb': 'rgba(255,0,127,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                25%  { background-position: 100% 0%; }
                50%  { background-position: 100% 100%; }
                75%  { background-position: 0% 100%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#060005,#0a0010,#12000a,#080015,#050008) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 7s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 8. БІЛИЙ ДЕНЬ (виправлена світла тема) ─────────────────
    light: {
        name: "☀️ Білий День",
        '--primary':        '#16a34a',
        '--primary-bright': '#15803d',
        '--primary-glow':   'rgba(22,163,74,0.5)',
        '--primary-dark':   '#166534',
        '--primary-dim':    'rgba(22,163,74,0.15)',
        '--bg':             '#f1f5f9',
        '--bg-secondary':   '#e2e8f0',
        '--card-bg':        'rgba(255,255,255,0.9)',
        '--card-hover':     'rgba(248,250,252,0.98)',
        '--glass-bg':       'rgba(255,255,255,0.85)',
        '--glass-border':   'rgba(22,163,74,0.3)',
        '--danger':         '#dc2626',
        '--danger-glow':    'rgba(220,38,38,0.4)',
        '--warning':        '#d97706',
        '--warning-glow':   'rgba(217,119,6,0.4)',
        '--text-gray':      '#64748b',
        '--text-light':     '#334155',
        '--text-dim':       '#94a3b8',
        '--neon-glow':      '0 0 10px rgba(22,163,74,0.3)',
        '--info':           '#0284c7',
        '--info-glow':      'rgba(2,132,199,0.4)',
        '--success':        '#16a34a',
        '--accent':         '#d97706',
        '--accent-glow':    'rgba(217,119,6,0.4)',
        '--currency':       '#d97706',
        '--sale':           '#dc2626',
        '--sale-glow':      'rgba(220,38,38,0.4)',
        '--pr': '#16a34a', '--pb': '#15803d', '--pg': 'rgba(22,163,74,0.5)',
        '--cb': 'rgba(255,255,255,0.9)', '--gb': 'rgba(22,163,74,0.3)',
        '--dn': '#dc2626', '--wn': '#d97706', '--tg': '#64748b',
        '--bl': '#0284c7', '--gd': '#d97706', '--mn': '#7c3aed',
        '--mnb': 'rgba(124,58,237,0.15)',
        bodyColor: '#1e293b',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#f1f5f9,#e8f5ee,#f0f9f5,#e2f0e8,#eef5f1) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 15s ease infinite !important;
                color: #1e293b !important;
            }
            /* Виправлення тексту для світлої теми */
            header { background: rgba(241,245,249,0.95) !important; border-bottom-color: rgba(22,163,74,0.3) !important; }
            .menu-item { color: #334155 !important; }
            .user-name { color: #1e293b !important; text-shadow: none !important; }
            #notifDropdown { background: rgba(255,255,255,0.98) !important; }
            .notif-item-link { color: #1e293b !important; }
            .modal-content { background: #ffffff !important; }
            .modal-input { background: #f1f5f9 !important; color: #1e293b !important; border-color: #cbd5e1 !important; }
            .report-body { color: #334155 !important; }
            ::-webkit-scrollbar-track { background: #e2e8f0 !important; }
        `
    },

    // ── 9. АРКТИКА ─────────────────────────────────────────────
    arctic: {
        name: "🌨️ Арктика",
        '--primary':        '#67e8f9',
        '--primary-bright': '#e0ffff',
        '--primary-glow':   'rgba(103,232,249,0.6)',
        '--primary-dark':   '#22d3ee',
        '--primary-dim':    'rgba(103,232,249,0.15)',
        '--bg':             '#010b10',
        '--bg-secondary':   '#021520',
        '--card-bg':        'rgba(2,20,28,0.8)',
        '--card-hover':     'rgba(4,30,40,0.95)',
        '--glass-bg':       'rgba(2,20,28,0.85)',
        '--glass-border':   'rgba(103,232,249,0.25)',
        '--danger':         '#f87171',
        '--danger-glow':    'rgba(248,113,113,0.6)',
        '--warning':        '#fbbf24',
        '--warning-glow':   'rgba(251,191,36,0.5)',
        '--text-gray':      '#88c8d8',
        '--text-light':     '#cff8ff',
        '--text-dim':       '#4a8090',
        '--neon-glow':      '0 0 15px rgba(103,232,249,0.4)',
        '--info':           '#67e8f9',
        '--info-glow':      'rgba(103,232,249,0.5)',
        '--success':        '#67e8f9',
        '--accent':         '#a5f3fc',
        '--accent-glow':    'rgba(165,243,252,0.5)',
        '--currency':       '#fbbf24',
        '--sale':           '#f87171',
        '--sale-glow':      'rgba(248,113,113,0.5)',
        '--pr': '#67e8f9', '--pb': '#e0ffff', '--pg': 'rgba(103,232,249,0.6)',
        '--cb': 'rgba(2,20,28,0.8)', '--gb': 'rgba(103,232,249,0.25)',
        '--dn': '#f87171', '--wn': '#fbbf24', '--tg': '#88c8d8',
        '--bl': '#67e8f9', '--gd': '#fbbf24', '--mn': '#818cf8',
        '--mnb': 'rgba(129,140,248,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#010b10,#001520,#021018,#002030,#010e18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 13s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 10. ТОКСИН ─────────────────────────────────────────────
    toxic: {
        name: "☢️ Токсин",
        '--primary':        '#a3e635',
        '--primary-bright': '#ecfccb',
        '--primary-glow':   'rgba(163,230,53,0.7)',
        '--primary-dark':   '#65a30d',
        '--primary-dim':    'rgba(163,230,53,0.15)',
        '--bg':             '#020501',
        '--bg-secondary':   '#080f02',
        '--card-bg':        'rgba(8,15,2,0.7)',
        '--card-hover':     'rgba(12,22,3,0.9)',
        '--glass-bg':       'rgba(8,15,2,0.8)',
        '--glass-border':   'rgba(163,230,53,0.3)',
        '--danger':         '#ef4444',
        '--danger-glow':    'rgba(239,68,68,0.6)',
        '--warning':        '#facc15',
        '--warning-glow':   'rgba(250,204,21,0.5)',
        '--text-gray':      '#86a840',
        '--text-light':     '#d9f99d',
        '--text-dim':       '#4a6010',
        '--neon-glow':      '0 0 15px rgba(163,230,53,0.5)',
        '--info':           '#a3e635',
        '--info-glow':      'rgba(163,230,53,0.5)',
        '--success':        '#a3e635',
        '--accent':         '#facc15',
        '--accent-glow':    'rgba(250,204,21,0.5)',
        '--currency':       '#facc15',
        '--sale':           '#ef4444',
        '--sale-glow':      'rgba(239,68,68,0.5)',
        '--pr': '#a3e635', '--pb': '#ecfccb', '--pg': 'rgba(163,230,53,0.7)',
        '--cb': 'rgba(8,15,2,0.7)', '--gb': 'rgba(163,230,53,0.3)',
        '--dn': '#ef4444', '--wn': '#facc15', '--tg': '#86a840',
        '--bl': '#a3e635', '--gd': '#facc15', '--mn': '#a3e635',
        '--mnb': 'rgba(163,230,53,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#020501,#080f02,#040a01,#0a1403,#030701) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 11. ОКЕАН ──────────────────────────────────────────────
    ocean: {
        name: "🌊 Океан",
        '--primary':        '#22d3ee',
        '--primary-bright': '#cffafe',
        '--primary-glow':   'rgba(34,211,238,0.6)',
        '--primary-dark':   '#0891b2',
        '--primary-dim':    'rgba(34,211,238,0.15)',
        '--bg':             '#00080e',
        '--bg-secondary':   '#001525',
        '--card-bg':        'rgba(0,20,35,0.75)',
        '--card-hover':     'rgba(0,28,48,0.92)',
        '--glass-bg':       'rgba(0,20,35,0.8)',
        '--glass-border':   'rgba(34,211,238,0.25)',
        '--danger':         '#f87171',
        '--danger-glow':    'rgba(248,113,113,0.6)',
        '--warning':        '#fb923c',
        '--warning-glow':   'rgba(251,146,60,0.5)',
        '--text-gray':      '#60a5c0',
        '--text-light':     '#a5f3fc',
        '--text-dim':       '#2a6880',
        '--neon-glow':      '0 0 15px rgba(34,211,238,0.4)',
        '--info':           '#22d3ee',
        '--info-glow':      'rgba(34,211,238,0.5)',
        '--success':        '#22d3ee',
        '--accent':         '#67e8f9',
        '--accent-glow':    'rgba(103,232,249,0.5)',
        '--currency':       '#fb923c',
        '--sale':           '#f87171',
        '--sale-glow':      'rgba(248,113,113,0.5)',
        '--pr': '#22d3ee', '--pb': '#cffafe', '--pg': 'rgba(34,211,238,0.6)',
        '--cb': 'rgba(0,20,35,0.75)', '--gb': 'rgba(34,211,238,0.25)',
        '--dn': '#f87171', '--wn': '#fb923c', '--tg': '#60a5c0',
        '--bl': '#22d3ee', '--gd': '#fb923c', '--mn': '#818cf8',
        '--mnb': 'rgba(129,140,248,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 0%; }
                33%  { background-position: 100% 50%; }
                66%  { background-position: 0% 100%; }
                100% { background-position: 0% 0%; }
            }
            body {
                background: linear-gradient(-45deg,#00080e,#001525,#00101e,#002035,#000c18) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 10s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 12. КРИВАВИЙ МІСЯЦЬ ────────────────────────────────────
    bloodmoon: {
        name: "🌑 Кривавий Місяць",
        '--primary':        '#ff3366',
        '--primary-bright': '#ffccdd',
        '--primary-glow':   'rgba(255,51,102,0.7)',
        '--primary-dark':   '#cc0033',
        '--primary-dim':    'rgba(255,51,102,0.15)',
        '--bg':             '#050000',
        '--bg-secondary':   '#120005',
        '--card-bg':        'rgba(15,0,5,0.8)',
        '--card-hover':     'rgba(22,0,8,0.95)',
        '--glass-bg':       'rgba(15,0,5,0.85)',
        '--glass-border':   'rgba(255,51,102,0.3)',
        '--danger':         '#ff0000',
        '--danger-glow':    'rgba(255,0,0,0.6)',
        '--warning':        '#ff8c00',
        '--warning-glow':   'rgba(255,140,0,0.5)',
        '--text-gray':      '#cc6688',
        '--text-light':     '#ffaabb',
        '--text-dim':       '#882244',
        '--neon-glow':      '0 0 15px rgba(255,51,102,0.5)',
        '--info':           '#ff3366',
        '--info-glow':      'rgba(255,51,102,0.5)',
        '--success':        '#ff3366',
        '--accent':         '#ff8c00',
        '--accent-glow':    'rgba(255,140,0,0.5)',
        '--currency':       '#ff8c00',
        '--sale':           '#ff0000',
        '--sale-glow':      'rgba(255,0,0,0.5)',
        '--pr': '#ff3366', '--pb': '#ffccdd', '--pg': 'rgba(255,51,102,0.7)',
        '--cb': 'rgba(15,0,5,0.8)', '--gb': 'rgba(255,51,102,0.3)',
        '--dn': '#ff0000', '--wn': '#ff8c00', '--tg': '#cc6688',
        '--bl': '#ff3366', '--gd': '#ff8c00', '--mn': '#ff3366',
        '--mnb': 'rgba(255,51,102,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#050000,#120005,#0a0002,#180008,#080001) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 9s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 13. СТАЛЬ ──────────────────────────────────────────────
    steel: {
        name: "⚔️ Сталь",
        '--primary':        '#94a3b8',
        '--primary-bright': '#e2e8f0',
        '--primary-glow':   'rgba(148,163,184,0.5)',
        '--primary-dark':   '#64748b',
        '--primary-dim':    'rgba(148,163,184,0.15)',
        '--bg':             '#06080a',
        '--bg-secondary':   '#0e1218',
        '--card-bg':        'rgba(15,18,22,0.8)',
        '--card-hover':     'rgba(22,26,32,0.95)',
        '--glass-bg':       'rgba(15,18,22,0.85)',
        '--glass-border':   'rgba(148,163,184,0.25)',
        '--danger':         '#f87171',
        '--danger-glow':    'rgba(248,113,113,0.6)',
        '--warning':        '#fbbf24',
        '--warning-glow':   'rgba(251,191,36,0.5)',
        '--text-gray':      '#64748b',
        '--text-light':     '#cbd5e1',
        '--text-dim':       '#334155',
        '--neon-glow':      '0 0 10px rgba(148,163,184,0.3)',
        '--info':           '#94a3b8',
        '--info-glow':      'rgba(148,163,184,0.4)',
        '--success':        '#94a3b8',
        '--accent':         '#cbd5e1',
        '--accent-glow':    'rgba(203,213,225,0.4)',
        '--currency':       '#fbbf24',
        '--sale':           '#f87171',
        '--sale-glow':      'rgba(248,113,113,0.5)',
        '--pr': '#94a3b8', '--pb': '#e2e8f0', '--pg': 'rgba(148,163,184,0.5)',
        '--cb': 'rgba(15,18,22,0.8)', '--gb': 'rgba(148,163,184,0.25)',
        '--dn': '#f87171', '--wn': '#fbbf24', '--tg': '#64748b',
        '--bl': '#94a3b8', '--gd': '#fbbf24', '--mn': '#94a3b8',
        '--mnb': 'rgba(148,163,184,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#06080a,#0e1218,#080c10,#121820,#070a0e) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 16s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 14. БУРШТИН ────────────────────────────────────────────
    amber: {
        name: "🟠 Бурштин",
        '--primary':        '#f59e0b',
        '--primary-bright': '#fde68a',
        '--primary-glow':   'rgba(245,158,11,0.7)',
        '--primary-dark':   '#b45309',
        '--primary-dim':    'rgba(245,158,11,0.15)',
        '--bg':             '#070400',
        '--bg-secondary':   '#120900',
        '--card-bg':        'rgba(20,12,0,0.75)',
        '--card-hover':     'rgba(30,18,0,0.92)',
        '--glass-bg':       'rgba(20,12,0,0.8)',
        '--glass-border':   'rgba(245,158,11,0.3)',
        '--danger':         '#dc2626',
        '--danger-glow':    'rgba(220,38,38,0.6)',
        '--warning':        '#10b981',
        '--warning-glow':   'rgba(16,185,129,0.5)',
        '--text-gray':      '#a8834a',
        '--text-light':     '#fcd34d',
        '--text-dim':       '#705020',
        '--neon-glow':      '0 0 15px rgba(245,158,11,0.5)',
        '--info':           '#f59e0b',
        '--info-glow':      'rgba(245,158,11,0.5)',
        '--success':        '#f59e0b',
        '--accent':         '#10b981',
        '--accent-glow':    'rgba(16,185,129,0.5)',
        '--currency':       '#f59e0b',
        '--sale':           '#dc2626',
        '--sale-glow':      'rgba(220,38,38,0.5)',
        '--pr': '#f59e0b', '--pb': '#fde68a', '--pg': 'rgba(245,158,11,0.7)',
        '--cb': 'rgba(20,12,0,0.75)', '--gb': 'rgba(245,158,11,0.3)',
        '--dn': '#dc2626', '--wn': '#10b981', '--tg': '#a8834a',
        '--bl': '#f59e0b', '--gd': '#f59e0b', '--mn': '#f59e0b',
        '--mnb': 'rgba(245,158,11,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                50%  { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#070400,#120900,#0f0700,#180c00,#090500) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 11s ease infinite !important;
                color: white !important;
            }
        `
    },

    // ── 15. НЕОНОВА НІЧ ────────────────────────────────────────
    neon: {
        name: "🎮 Неонова Ніч",
        '--primary':        '#e879f9',
        '--primary-bright': '#fae8ff',
        '--primary-glow':   'rgba(232,121,249,0.7)',
        '--primary-dark':   '#a21caf',
        '--primary-dim':    'rgba(232,121,249,0.15)',
        '--bg':             '#04000a',
        '--bg-secondary':   '#0a0018',
        '--card-bg':        'rgba(12,0,22,0.8)',
        '--card-hover':     'rgba(18,0,32,0.95)',
        '--glass-bg':       'rgba(12,0,22,0.85)',
        '--glass-border':   'rgba(232,121,249,0.3)',
        '--danger':         '#ff4444',
        '--danger-glow':    'rgba(255,68,68,0.6)',
        '--warning':        '#00ff99',
        '--warning-glow':   'rgba(0,255,153,0.5)',
        '--text-gray':      '#c080d0',
        '--text-light':     '#f0d0ff',
        '--text-dim':       '#804090',
        '--neon-glow':      '0 0 15px rgba(232,121,249,0.5)',
        '--info':           '#818cf8',
        '--info-glow':      'rgba(129,140,248,0.5)',
        '--success':        '#00ff99',
        '--accent':         '#00ff99',
        '--accent-glow':    'rgba(0,255,153,0.5)',
        '--currency':       '#00ff99',
        '--sale':           '#ff4444',
        '--sale-glow':      'rgba(255,68,68,0.5)',
        '--pr': '#e879f9', '--pb': '#fae8ff', '--pg': 'rgba(232,121,249,0.7)',
        '--cb': 'rgba(12,0,22,0.8)', '--gb': 'rgba(232,121,249,0.3)',
        '--dn': '#ff4444', '--wn': '#00ff99', '--tg': '#c080d0',
        '--bl': '#818cf8', '--gd': '#00ff99', '--mn': '#e879f9',
        '--mnb': 'rgba(232,121,249,0.2)',
        bodyColor: 'white',
        anim: `
            @keyframes dsv-bg {
                0%   { background-position: 0% 50%; }
                25%  { background-position: 100% 0%; }
                50%  { background-position: 100% 100%; }
                75%  { background-position: 0% 100%; }
                100% { background-position: 0% 50%; }
            }
            body {
                background: linear-gradient(-45deg,#04000a,#0a0018,#070010,#0e0020,#050012) !important;
                background-size: 400% 400% !important;
                animation: dsv-bg 8s ease infinite !important;
                color: white !important;
            }
        `
    },
};

// ============================================================
// ЗАСТОСУВАННЯ ТЕМИ
// ============================================================
function applyTheme(themeKey) {
    const theme = THEMES[themeKey];
    if (!theme) return;

    // 1. CSS змінні — ВСІ
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        if (key.startsWith('--')) root.style.setProperty(key, value);
    });

    // 2. Колір тексту body
    document.body.style.color = theme.bodyColor || 'white';

    // 3. Анімований фон — видалити старий і вставити новий
    const old = document.getElementById('dsv-theme-anim');
    if (old) old.remove();
    const style = document.createElement('style');
    style.id = 'dsv-theme-anim';
    style.textContent = theme.anim;
    document.head.appendChild(style);

    // 4. Зберегти
    localStorage.setItem('dsv-theme', themeKey);
}

// ============================================================
// АВТО-ЗАСТОСУВАННЯ ПРИ ЗАВАНТАЖЕННІ
// ============================================================
(function () {
    const saved = localStorage.getItem('dsv-theme') || 'default';
    const theme = THEMES[saved];
    if (!theme) return;

    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
        if (key.startsWith('--')) root.style.setProperty(key, value);
    });

    const style = document.createElement('style');
    style.id = 'dsv-theme-anim';
    style.textContent = theme.anim;

    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.head.appendChild(style);
        });
    }
})();

// Глобальний доступ
window.THEMES = THEMES;
window.applyTheme = applyTheme;
