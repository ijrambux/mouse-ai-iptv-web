/**
 * MOUSE AI IPTV Pro v4.0 - Web Edition
 * Universal Server Reader | CCcam | Newcamd | MAC | Xtream | Portal | Stalker
 * Professional Fire-Glow Interface | Green Red White Theme
 * Contact: https://x.com/0000000000388p
 * (c) 2025 MOUSE AI
 */

const APP_NAME = "MOUSE AI IPTV";
const APP_VERSION = "4.0.0 WEB ULTIMATE";

// Colors
const C = {
    BG_DARK: "#0a0c0f",
    BG_CARD: "#111418",
    BG_INPUT: "#161a20",
    BORDER: "#1e242c",
    BORDER_HOVER: "#2a333f",
    GREEN: "#00ff88",
    GREEN_DIM: "#00cc6a",
    RED: "#ff2a2a",
    RED_DIM: "#cc2222",
    WHITE: "#ffffff",
    TEXT_PRIMARY: "#ffffff",
    TEXT_SECONDARY: "#8b95a5",
    TEXT_MUTED: "#5a6470",
    FIRE_ORANGE: "#ff6b35"
};

// Built-in M3U
const CUSTOM_M3U_BUILTIN = `#EXTM3U
#EXTINF:-1 group-title="Islamic",QURAN ONE
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686148&extension=ts
#EXTINF:-1 group-title="Islamic",QURAN TWO
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686147&extension=ts
#EXTINF:-1 group-title="Islamic",MISHARI AL AFASI
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686160&extension=ts
#EXTINF:-1 group-title="Islamic",AL-SUDAIS
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686159&extension=ts
#EXTINF:-1 group-title="Islamic",AL MUAQLY
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686158&extension=ts
#EXTINF:-1 group-title="Islamic",FARES ABAD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686157&extension=ts
#EXTINF:-1 group-title="Islamic",AHMED ALAJMI
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686156&extension=ts
#EXTINF:-1 group-title="Islamic",ABD AL BASET
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686155&extension=ts
#EXTINF:-1 group-title="Islamic",M SIDIK ALMANCHAWI
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686154&extension=ts
#EXTINF:-1 group-title="Islamic",SAOUD SHURAIM
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686153&extension=ts
#EXTINF:-1 group-title="Islamic",RAAD AL KURDI
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686152&extension=ts
#EXTINF:-1 group-title="Islamic",SALAH BUKHATIR
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686151&extension=ts
#EXTINF:-1 group-title="Islamic",MOHAMED GIBRIL
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686150&extension=ts
#EXTINF:-1 group-title="Islamic",AL AFASY
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=686149&extension=ts
#EXTINF:-1 group-title="Islamic",ISLAM CHANNEL HD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660225&extension=ts
#EXTINF:-1 group-title="Islamic",MISR QURAN KAREEM
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660224&extension=ts
#EXTINF:-1 group-title="Islamic",SAUDI QURAN
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660223&extension=ts
#EXTINF:-1 group-title="Islamic",SAUDI QURAN HD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660222&extension=ts
#EXTINF:-1 group-title="Islamic",SAUDI SUNNAH
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660221&extension=ts
#EXTINF:-1 group-title="Islamic",SAUDI SUNNAH HD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660220&extension=ts
#EXTINF:-1 group-title="Islamic",IQRAA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660219&extension=ts
#EXTINF:-1 group-title="Islamic",RESALA HD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660218&extension=ts
#EXTINF:-1 group-title="Islamic",AL RAHMA TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660217&extension=ts
#EXTINF:-1 group-title="Islamic",MECCA TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660216&extension=ts
#EXTINF:-1 group-title="Islamic",AHLU ALQURAN
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660215&extension=ts
#EXTINF:-1 group-title="Islamic",ZAD TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660214&extension=ts
#EXTINF:-1 group-title="Islamic",AL MAJD 1
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660213&extension=ts
#EXTINF:-1 group-title="Islamic",AL MAJD 2
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660212&extension=ts
#EXTINF:-1 group-title="Islamic",AL MAJD 3
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660211&extension=ts
#EXTINF:-1 group-title="Islamic",BIN OUTHAYMINE
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660210&extension=ts
#EXTINF:-1 group-title="Islamic",TANASOH
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660209&extension=ts
#EXTINF:-1 group-title="Islamic",SAFA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660208&extension=ts
#EXTINF:-1 group-title="Islamic",AL RESALA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660207&extension=ts
#EXTINF:-1 group-title="Islamic",MTA AL ARABIA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660206&extension=ts
#EXTINF:-1 group-title="Islamic",MTA WORLD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660205&extension=ts
#EXTINF:-1 group-title="Islamic",AL HAQIQA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660204&extension=ts
#EXTINF:-1 group-title="Islamic",AL SIRAT
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660203&extension=ts
#EXTINF:-1 group-title="Islamic",KAIFA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660202&extension=ts
#EXTINF:-1 group-title="Islamic",DAWAAH TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660201&extension=ts
#EXTINF:-1 group-title="Islamic",QURAN TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660200&extension=ts
#EXTINF:-1 group-title="Islamic",AL ERTH NABAWI
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660199&extension=ts
#EXTINF:-1 group-title="Islamic",MAKKAH TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660198&extension=ts
#EXTINF:-1 group-title="Islamic",DUAA TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660197&extension=ts
#EXTINF:-1 group-title="Islamic",AL FATEH QURAN
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660196&extension=ts
#EXTINF:-1 group-title="Islamic",ALMAHDI TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660195&extension=ts
#EXTINF:-1 group-title="Islamic",AL ISTIQAMA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660194&extension=ts
#EXTINF:-1 group-title="Islamic",AL ZAHRA TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660193&extension=ts
#EXTINF:-1 group-title="Islamic",SALAAM TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660192&extension=ts
#EXTINF:-1 group-title="Islamic",ALIMAN TV
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660191&extension=ts
#EXTINF:-1 group-title="Islamic",ALFATH SONA
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=660190&extension=ts
#EXTINF:-1 group-title="Algeria",ALGERIE EN TV 1
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=368773&extension=ts
#EXTINF:-1 group-title="Tunisia",TUNISIA 1
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=368799&extension=ts
#EXTINF:-1 group-title="Morocco",AL JAZEERA MAROC HD
http://line.watchtivo-8k.com:80/play/live.php?mac=A0:BB:3E:18:9E:02&stream=853125&extension=ts`;

// Default Servers
const DEFAULT_SERVERS = {
    "Islamic Algeria Tunisia Morocco": "builtin",
    "TV14S (Main)": "http://tv14s.xyz:8080/get.php?username=rossjohn88@hotmail.com&password=KCBKTCnWTU&type=m3u",
    "51.81.106.100 (Backup)": "http://51.81.106.100:25461/get.php?username=sjzumbro7&password=7407045283&type=m3u",
    "SkyTV4K (Backup 2)": "http://skytv4k.org:8080/get.php?username=2rSvsynKRJ&password=5GHeYZFNwI&type=m3u_plus",
    "Garaveli (Backup 3)": "http://garaveli.123tv.to:8080/get.php?username=2rSvsynKRJ&password=5GHeYZFNwI&type=m3u_plus"
};

// CORS Proxy
const CORS_PROXY = "https://api.allorigins.win/raw?url=";

// ==================== Universal Code Parser ====================
class UniversalCodeParser {
    static parse(text) {
        text = text.trim();
        if (!text) return { type: "empty", data: {} };
        const parsers = [
            this._parseCccam, this._parseNewcamd, this._parseMgcamd,
            this._parseXtream, this._parseMac, this._parsePortal,
            this._parseStalker, this._parseM3uUrl, this._parseGenericHost
        ];
        for (const parser of parsers) {
            const result = parser(text);
            if (result && result.type !== "unknown") return result;
        }
        return { type: "unknown", data: { raw: text } };
    }

    static _parseCccam(text) {
        const patterns = [
            /^[Cc][:;]\s*(\S+)\s+(\d+)\s+(\S+)\s+(\S+)(?:\s+(\S+))?/,
            /CCcam[:\s]+(\S+)[:\s]+(\d+)[:\s]+(\S+)[:\s]+(\S+)/,
            /[Cc]\s*[:\s]\s*(\S+)\s+(\d+)\s+(\S+)\s+(\S+)/
        ];
        for (const pat of patterns) {
            const m = text.match(pat);
            if (m) return {
                type: "cccam", data: {
                    host: m[1], port: m[2], user: m[3], pass: m[4],
                    deskey: m[5] || "01 02 03 04 05 06 07 08 09 10 11 12 13 14",
                    raw: text
                }
            };
        }
        return null;
    }

    static _parseNewcamd(text) {
        const patterns = [
            /^[Nn][:;]\s*(\S+)\s+(\d+)\s+(\S+)\s+(\S+)\s+([0-9a-fA-F\s]+)/,
            /Newcamd[:\s]+(\S+)[:\s]+(\d+)[:\s]+(\S+)[:\s]+(\S+)/
        ];
        for (const pat of patterns) {
            const m = text.match(pat);
            if (m) return {
                type: "newcamd", data: {
                    host: m[1], port: m[2], user: m[3], pass: m[4],
                    deskey: m[5] || "", raw: text
                }
            };
        }
        return null;
    }

    static _parseMgcamd(text) {
        const m = text.match(/[Mm][Gg][Cc][Aa][Mm][Dd]?[:\s]+(\S+)[:\s]+(\d+)[:\s]+(\S+)[:\s]+(\S+)/);
        if (m) return { type: "mgcamd", data: { host: m[1], port: m[2], user: m[3], pass: m[4], raw: text } };
        return null;
    }

    static _parseXtream(text) {
        const m = text.match(/(https?:\/\/[^/\s]+(?::\d+)?)(?:\/[^\s]*)?\?.*username=([^&\s]+).*password=([^&\s]+)/i);
        if (m) return { type: "xtream", data: { host: m[1], username: m[2], password: m[3], raw: text } };
        const host = this._extractField(text, [/[Hh][Oo][Ss][Tt]\s*[:=]\s*(https?:\/\/\S+)/]);
        const user = this._extractField(text, [
            /[Uu][Ss][Ee][Rr][Nn][Aa][Mm][Ee]\s*[:=]\s*([^\s]+)/, /username=([^&\s]+)/
        ]);
        const pwd = this._extractField(text, [
            /[Pp][Aa][Ss][Ss][WW][Oo][Rr][Dd]\s*[:=]\s*([^\s]+)/, /password=([^&\s]+)/
        ]);
        if (host && user && pwd) return {
            type: "xtream", data: {
                host, username: user, password: pwd,
                created: this._extractField(text, [/[Cc][Rr][Ee][Aa][Tt][Ee][Dd]\s*[:=]\s*([^\n]+)/]),
                expire: this._extractField(text, [/[Ee][Xx][Pp][Ii][Rr][Ee]\s*[:=]\s*([^\n]+)/]),
                duration: this._extractField(text, [/[Dd][Uu][Rr][Aa][Tt][Ii][Oo][Nn]\s*[:=]\s*([^\n]+)/, /(\d+)\s*[Dd]ays/]),
                hits_by: this._extractField(text, [/[Hh][Ii][Tt][Ss]\s*[Bb][Yy]\s*[:=]\s*([^\n]+)/, /@[A-Za-z0-9_]+/]),
                raw: text
            }
        };
        return null;
    }

    static _parseMac(text) {
        const macs = text.match(/[0-9A-Fa-f]{2}[:-][0-9A-Fa-f]{2}[:-][0-9A-Fa-f]{2}[:-][0-9A-Fa-f]{2}[:-][0-9A-Fa-f]{2}[:-][0-9A-Fa-f]{2}/g);
        if (macs) {
            const host = this._extractUrl(text);
            return { type: "mac", data: { macs, host, raw: text } };
        }
        return null;
    }

    static _parsePortal(text) {
        const m = text.match(/(https?:\/\/\S+?)(?:\/c\/|\/stalker_portal\/|\/portal\/|\/server\/|\/get\.php|\/player_api\.php)/i);
        if (m) return { type: "portal", data: { host: m[1].replace(/\/$/, ""), raw: text } };
        return null;
    }

    static _parseStalker(text) {
        if (/stalker|portal/i.test(text)) {
            const host = this._extractUrl(text);
            if (host) return { type: "stalker", data: { host, raw: text } };
        }
        return null;
    }

    static _parseM3uUrl(text) {
        const m = text.match(/(https?:\/\/\S+\.(?:m3u|m3u8)(?:\?\S+)?)/i);
        if (m) return { type: "m3u_url", data: { url: m[1], raw: text } };
        return null;
    }

    static _parseGenericHost(text) {
        const host = this._extractUrl(text);
        if (host) return { type: "generic", data: { host, raw: text } };
        return null;
    }

    static _extractUrl(text) {
        const m = text.match(/https?:\/\/[^\s<>"{}|^`\[\]]+/);
        if (m) {
            let url = m[0].trim().replace(/[)\]}>]+$/, "").replace(/[^a-zA-Z0-9_/:.-]$/, "");
            return url;
        }
        return "";
    }

    static _extractField(text, patterns) {
        for (const pat of patterns) {
            const m = text.match(pat);
            if (m) return m[1].trim();
        }
        return "";
    }

    static buildM3uUrl(host, username, password, type = "m3u_plus") {
        if (!host || !username || !password) return "";
        return `${host.replace(/\/$/, "")}/get.php?username=${username}&password=${password}&type=${type}`;
    }

    static buildStalkerUrl(host, mac) {
        if (!host || !mac) return "";
        return `${host.replace(/\/$/, "")}/stalker_portal/server/load.php?type=stb&action=handshake&mac=${mac}`;
    }
}

// ==================== Main App ====================
class MouseAIApp {
    constructor() {
        this.channels = [];
        this.filteredChannels = [];
        this.favorites = new Set();
        this.customServers = {};
        this.settings = {};
        this.currentChannelIndex = -1;
        this.currentServerInfo = {};
        this.hls = null;
        this.isPlaying = false;
        this.isMuted = false;
        this.isFullscreen = false;
        this.showFavOnly = false;
        this.playHistory = [];

        this.init();
    }

    init() {
        this.loadSettings();
        this.loadFavorites();
        this.loadCustomServers();
        this.loadHistory();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
        this.setupDragDrop();
        this.refreshServerCombo();

        // Hide loading
        setTimeout(() => {
            document.getElementById('loading-screen').style.opacity = '0';
            document.getElementById('loading-screen').style.pointerEvents = 'none';
            document.getElementById('app').style.opacity = '1';
            setTimeout(() => document.getElementById('loading-screen').remove(), 700);

            if (this.settings.autoLoad) {
                this.loadChannels();
            }
        }, 1500);
    }

    // ==================== Storage ====================
    loadSettings() {
        try {
            const s = localStorage.getItem('mouse_ai_settings');
            this.settings = s ? JSON.parse(s) : {};
        } catch { this.settings = {}; }
        this.settings = { volume: 100, muteOnStart: false, autoLoad: false, showServerInfo: true, timeout: 45, ...this.settings };
        document.getElementById('settings-volume').value = this.settings.volume;
        document.getElementById('vol-val').textContent = this.settings.volume + '%';
        document.getElementById('mute-start').checked = this.settings.muteOnStart;
        document.getElementById('auto-load').checked = this.settings.autoLoad;
        document.getElementById('show-info').checked = this.settings.showServerInfo;
        document.getElementById('timeout-setting').value = this.settings.timeout;
        document.getElementById('volume-slider').value = this.settings.volume;
    }

    saveSettings() {
        localStorage.setItem('mouse_ai_settings', JSON.stringify(this.settings));
    }

    loadFavorites() {
        try {
            const f = localStorage.getItem('mouse_ai_favorites');
            this.favorites = new Set(f ? JSON.parse(f).favorites : []);
        } catch { this.favorites = new Set(); }
    }

    saveFavorites() {
        localStorage.setItem('mouse_ai_favorites', JSON.stringify({ favorites: [...this.favorites] }));
    }

    loadCustomServers() {
        try {
            const s = localStorage.getItem('mouse_ai_servers');
            this.customServers = s ? JSON.parse(s) : {};
        } catch { this.customServers = {}; }
    }

    saveCustomServers() {
        localStorage.setItem('mouse_ai_servers', JSON.stringify(this.customServers));
    }

    loadHistory() {
        try {
            const h = localStorage.getItem('mouse_ai_history');
            this.playHistory = h ? JSON.parse(h).history.slice(-50) : [];
        } catch { this.playHistory = []; }
    }

    saveHistory() {
        localStorage.setItem('mouse_ai_history', JSON.stringify({ history: this.playHistory.slice(-50) }));
    }

    // ==================== UI Helpers ====================
    setLoading(loading) {
        const buttons = document.querySelectorAll('.btn-fire');
        buttons.forEach(btn => { if(!btn.onclick || !btn.onclick.toString().includes('closeModal')) btn.disabled = loading; });
        document.getElementById('server-select').disabled = loading;
        document.getElementById('search-input').disabled = loading;
    }

    showProgress(show, value = 0, text = '') {
        const container = document.getElementById('progress-container');
        const bar = document.getElementById('progress-bar');
        const status = document.getElementById('status-text');
        container.classList.toggle('hidden', !show);
        bar.style.width = value + '%';
        status.textContent = text;
    }

    setStatus(msg) {
        document.getElementById('status-text').textContent = msg;
    }

    // ==================== Server Combo ====================
    refreshServerCombo() {
        const sel = document.getElementById('server-select');
        const current = sel.value;
        sel.innerHTML = '';
        for (const [name, url] of Object.entries(DEFAULT_SERVERS)) {
            const opt = document.createElement('option');
            opt.value = url;
            opt.textContent = name;
            sel.appendChild(opt);
        }
        if (Object.keys(this.customServers).length > 0) {
            const sep = document.createElement('option');
            sep.disabled = true;
            sep.textContent = '─── سيرفراتي ───';
            sel.appendChild(sep);
        }
        for (const [name, data] of Object.entries(this.customServers)) {
            const opt = document.createElement('option');
            opt.value = name;
            opt.textContent = '📌 ' + name;
            sel.appendChild(opt);
        }
        if (current && [...sel.options].some(o => o.value === current)) {
            sel.value = current;
        }
    }

    // ==================== M3U Parser ====================
    parseM3U(content) {
        const lines = content.split(/\r?\n/);
        const channels = [];
        let current = {};
        for (const raw of lines) {
            const line = raw.trim();
            if (!line) continue;
            if (line.startsWith('#EXTINF:')) {
                const parts = line.split(',', 1);
                const name = line.substring(parts[0].length + 1).trim() || 'قناة بدون اسم';
                let logo = '';
                const logoMatch = line.match(/tvg-logo="([^"]*)"/);
                if (logoMatch) logo = logoMatch[1].trim();
                let group = 'عام';
                const groupMatch = line.match(/group-title="([^"]*)"/);
                if (groupMatch) group = groupMatch[1].trim();
                current = { name, logo, group };
            } else if (line.startsWith('http') && current.name) {
                current.url = line;
                channels.push({ ...current });
                current = {};
            }
        }
        return channels.filter(c => c.url);
    }

    // ==================== Load Channels ====================
    async loadChannels() {
        const sel = document.getElementById('server-select');
        const selected = sel.options[sel.selectedIndex].text;
        const value = sel.value;

        this.channels = [];
        this.filteredChannels = [];
        this.currentServerInfo = {};
        document.getElementById('channels-list').innerHTML = '';
        document.getElementById('group-select').innerHTML = '<option value="all">جميع المجموعات</option>';
        this.showProgress(true, 10, 'جاري الاتصال...');

        try {
            let content = '';
            if (value === 'builtin') {
                content = CUSTOM_M3U_BUILTIN;
                this.showProgress(true, 50, 'قراءة البيانات...');
            } else if (DEFAULT_SERVERS[selected]) {
                this.showProgress(true, 30, 'جاري التحميل من الخادم...');
                const res = await fetch(CORS_PROXY + encodeURIComponent(value), { 
                    signal: AbortSignal.timeout((this.settings.timeout || 45) * 1000) 
                });
                if (!res.ok) throw new Error('خطأ في الاتصال: ' + res.status);
                content = await res.text();
                this.showProgress(true, 70, 'تحليل القنوات...');
            } else if (this.customServers[value]) {
                const data = this.customServers[value];
                this.currentServerInfo = data.info || {};
                this.showProgress(true, 30, 'جاري التحميل...');
                const res = await fetch(CORS_PROXY + encodeURIComponent(data.url), {
                    signal: AbortSignal.timeout((this.settings.timeout || 45) * 1000)
                });
                if (!res.ok) throw new Error('خطأ في الاتصال: ' + res.status);
                content = await res.text();
                this.showProgress(true, 70, 'تحليل القنوات...');
            } else {
                throw new Error('الرابط غير متوفر');
            }

            this.channels = this.parseM3U(content);
            this.filteredChannels = [...this.channels];
            this.showProgress(true, 90, 'تحديث القائمة...');

            // Groups
            const groups = new Set();
            this.channels.forEach(ch => groups.add(ch.group || 'عام'));
            const gsel = document.getElementById('group-select');
            gsel.innerHTML = '<option value="all">جميع المجموعات</option>';
            [...groups].sort().forEach(g => {
                const opt = document.createElement('option');
                opt.value = g;
                opt.textContent = g;
                gsel.appendChild(opt);
            });

            this.filterChannels();
            this.showProgress(true, 100, `تم تحميل ${this.channels.length} قناة`);
            setTimeout(() => this.showProgress(false), 1500);

            // Server info
            if (this.settings.showServerInfo && Object.keys(this.currentServerInfo).length > 0) {
                const info = this.currentServerInfo;
                const parts = [];
                if (info.created) parts.push(`الإنشاء: ${info.created}`);
                if (info.expire) parts.push(`الانتهاء: ${info.expire}`);
                if (info.duration) parts.push(`المدة: ${info.duration}`);
                if (info.hits_by) parts.push(`بواسطة: ${info.hits_by}`);
                if (parts.length > 0) {
                    document.getElementById('server-info-text').innerHTML = parts.join(' | ');
                    document.getElementById('server-info').classList.remove('hidden');
                }
            } else {
                document.getElementById('server-info').classList.add('hidden');
            }
        } catch (err) {
            this.showProgress(false);
            alert('خطأ: ' + err.message);
            this.setStatus('حدث خطأ');
        }
    }

    async loadFromFile(input) {
        const file = input.files[0];
        if (!file) return;
        input.value = '';

        this.showProgress(true, 20, 'قراءة الملف...');
        try {
            const text = await file.text();
            this.showProgress(true, 60, 'تحليل القنوات...');
            this.channels = this.parseM3U(text);
            this.filteredChannels = [...this.channels];

            const groups = new Set();
            this.channels.forEach(ch => groups.add(ch.group || 'عام'));
            const gsel = document.getElementById('group-select');
            gsel.innerHTML = '<option value="all">جميع المجموعات</option>';
            [...groups].sort().forEach(g => {
                const opt = document.createElement('option');
                opt.value = g;
                opt.textContent = g;
                gsel.appendChild(opt);
            });

            this.filterChannels();
            this.showProgress(true, 100, `تم تحميل ${this.channels.length} قناة من الملف`);
            setTimeout(() => this.showProgress(false), 1500);
            document.getElementById('server-info').classList.add('hidden');
        } catch (err) {
            this.showProgress(false);
            alert('خطأ في قراءة الملف: ' + err.message);
        }
    }

    // ==================== Filter & Display ====================
    filterChannels() {
        const search = (document.getElementById('search-input').value || '').toLowerCase().trim();
        const group = document.getElementById('group-select').value;

        this.filteredChannels = this.channels.filter(ch => {
            const name = (ch.name || '').toLowerCase();
            const chGroup = ch.group || 'عام';
            if (group !== 'all' && chGroup !== group) return false;
            if (search && !name.includes(search)) return false;
            if (this.showFavOnly && !this.favorites.has(ch.url)) return false;
            return true;
        });

        this.renderChannels();
        document.getElementById('count-label').textContent = this.filteredChannels.length + ' قناة';
    }

    renderChannels() {
        const list = document.getElementById('channels-list');
        list.innerHTML = '';

        this.filteredChannels.forEach((ch, idx) => {
            const isFav = this.favorites.has(ch.url);
            const div = document.createElement('div');
            div.className = 'channel-item' + (idx === this.currentChannelIndex ? ' active' : '');
            div.innerHTML = `
                <img src="${ch.logo || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect fill="%23161a20" width="40" height="40"/><text fill="%235a6470" x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="10">TV</text></svg>'}" 
                    class="channel-logo" alt="" onerror="this.src='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect fill="%23161a20" width="40" height="40"/><text fill="%235a6470" x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="10">TV</text></svg>'">
                <div class="flex-1 min-w-0">
                    <div class="channel-name">${isFav ? '❤️ ' : ''}${ch.name}</div>
                    <div class="channel-group">${ch.group || 'عام'}</div>
                </div>
            `;
            div.onclick = () => this.playChannel(idx);
            div.oncontextmenu = (e) => {
                e.preventDefault();
                this.showChannelContext(e, ch, idx);
            };
            list.appendChild(div);
        });
    }

    // ==================== Playback ====================
    playChannel(index) {
        if (index < 0 || index >= this.filteredChannels.length) return;
        this.currentChannelIndex = index;
        const ch = this.filteredChannels[index];
        const url = ch.url;
        const name = ch.name;

        // Update UI
        this.renderChannels();
        const items = document.querySelectorAll('.channel-item');
        if (items[index]) items[index].scrollIntoView({ behavior: 'smooth', block: 'center' });

        document.getElementById('info-label').textContent = 'جاري التشغيل: ' + name;
        document.getElementById('play-overlay').classList.add('hidden');
        document.getElementById('video-loading').classList.remove('hidden');

        // Stop previous
        if (this.hls) { this.hls.destroy(); this.hls = null; }
        const video = document.getElementById('video-player');
        video.pause();
        video.src = '';
        video.load();

        // Play new
        if (Hls.isSupported() && (url.includes('.m3u8') || url.includes('.ts') || url.includes('extension=ts'))) {
            this.hls = new Hls({ 
                enableWorker: true,
                maxBufferLength: 30,
                maxMaxBufferLength: 60
            });
            this.hls.loadSource(url);
            this.hls.attachMedia(video);
            this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.play().catch(() => {});
                this.isPlaying = true;
                this.updatePlayButton();
                document.getElementById('video-loading').classList.add('hidden');
                document.getElementById('info-label').textContent = 'يعمل الآن: ' + name;
            });
            this.hls.on(Hls.Events.ERROR, (event, data) => {
                if (data.fatal) {
                    document.getElementById('info-label').textContent = 'خطأ في التشغيل: ' + name;
                    document.getElementById('video-loading').classList.add('hidden');
                }
            });
        } else {
            video.src = url;
            video.play().then(() => {
                this.isPlaying = true;
                this.updatePlayButton();
                document.getElementById('video-loading').classList.add('hidden');
                document.getElementById('info-label').textContent = 'يعمل الآن: ' + name;
            }).catch(err => {
                document.getElementById('info-label').textContent = 'خطأ: ' + name;
                document.getElementById('video-loading').classList.add('hidden');
            });
        }

        // Volume
        video.volume = this.settings.volume / 100;
        if (this.settings.muteOnStart) {
            video.muted = true;
            this.isMuted = true;
        }
        this.updateVolumeUI();

        // History
        if (!this.playHistory.includes(url)) {
            this.playHistory.push(url);
            this.saveHistory();
        }

        // Close sidebar on mobile
        if (window.innerWidth < 768) {
            document.getElementById('sidebar').classList.add('-translate-x-full');
            document.getElementById('sidebar-overlay').classList.add('hidden');
        }
    }

    togglePlay() {
        const video = document.getElementById('video-player');
        if (!video.src) return;
        if (video.paused) {
            video.play().catch(() => {});
            this.isPlaying = true;
        } else {
            video.pause();
            this.isPlaying = false;
        }
        this.updatePlayButton();
    }

    stopPlayback() {
        const video = document.getElementById('video-player');
        if (this.hls) { this.hls.destroy(); this.hls = null; }
        video.pause();
        video.src = '';
        video.load();
        this.isPlaying = false;
        this.updatePlayButton();
        document.getElementById('info-label').textContent = 'تم الإيقاف';
        document.getElementById('play-overlay').classList.remove('hidden');
        document.getElementById('progress-slider').value = 0;
    }

    playNext() {
        if (!this.filteredChannels.length) return;
        let n = this.currentChannelIndex + 1;
        if (n >= this.filteredChannels.length) n = 0;
        this.playChannel(n);
    }

    playPrevious() {
        if (!this.filteredChannels.length) return;
        let n = this.currentChannelIndex - 1;
        if (n < 0) n = this.filteredChannels.length - 1;
        this.playChannel(n);
    }

    updatePlayButton() {
        const btn = document.getElementById('play-btn');
        const icon = btn.querySelector('i');
        if (this.isPlaying) {
            icon.className = 'fas fa-pause';
            btn.classList.remove('from-red', 'to-red-dim', 'border-red');
            btn.classList.add('from-green', 'to-green-dim', 'border-green');
        } else {
            icon.className = 'fas fa-play ml-0.5';
            btn.classList.remove('from-green', 'to-green-dim', 'border-green');
            btn.classList.add('from-red', 'to-red-dim', 'border-red');
        }
    }

    // ==================== Volume ====================
    setVolume(val) {
        const video = document.getElementById('video-player');
        video.volume = val / 100;
        this.settings.volume = parseInt(val);
        this.saveSettings();
        this.updateVolumeUI();
    }

    toggleMute() {
        const video = document.getElementById('video-player');
        video.muted = !video.muted;
        this.isMuted = video.muted;
        this.updateVolumeUI();
    }

    updateVolumeUI() {
        const video = document.getElementById('video-player');
        const btn = document.getElementById('mute-btn');
        const slider = document.getElementById('volume-slider');
        if (video.muted) {
            btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            btn.classList.add('text-red');
            btn.classList.remove('text-green');
        } else if (video.volume < 0.3) {
            btn.innerHTML = '<i class="fas fa-volume-down"></i>';
            btn.classList.remove('text-red');
            btn.classList.add('text-green');
        } else {
            btn.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.classList.remove('text-red');
            btn.classList.add('text-green');
        }
        if (!video.muted) slider.value = Math.round(video.volume * 100);
    }

    volumeUp() {
        const s = document.getElementById('volume-slider');
        s.value = Math.min(parseInt(s.value) + 10, 100);
        this.setVolume(s.value);
    }

    volumeDown() {
        const s = document.getElementById('volume-slider');
        s.value = Math.max(parseInt(s.value) - 10, 0);
        this.setVolume(s.value);
    }

    // ==================== Fullscreen ====================
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            this.isFullscreen = true;
        } else {
            document.exitFullscreen();
            this.isFullscreen = false;
        }
    }

    // ==================== Favorites ====================
    toggleFavView() {
        this.showFavOnly = !this.showFavOnly;
        const btn = document.getElementById('fav-btn');
        btn.classList.toggle('active', this.showFavOnly);
        btn.innerHTML = this.showFavOnly ? '<i class="fas fa-heart ml-1"></i> المفضلة (مفعل)' : '<i class="fas fa-heart ml-1"></i> المفضلة';
        this.filterChannels();
    }

    toggleFavorite(ch) {
        const url = ch.url;
        if (this.favorites.has(url)) {
            this.favorites.delete(url);
        } else {
            this.favorites.add(url);
        }
        this.saveFavorites();
        this.renderChannels();
    }

    // ==================== Context Menu ====================
    showChannelContext(e, ch, idx) {
        const items = [
            { label: '▶️ تشغيل', action: () => this.playChannel(idx) },
            { label: this.favorites.has(ch.url) ? '💔 إزالة من المفضلة' : '❤️ إضافة للمفضلة', action: () => { this.toggleFavorite(ch); this.renderChannels(); } },
            { label: '📋 نسخ الرابط', action: () => navigator.clipboard.writeText(ch.url).then(() => alert('تم النسخ!')) },
            { label: 'ℹ️ معلومات القناة', action: () => this.showChannelInfo(ch) }
        ];

        // Remove existing
        const existing = document.querySelector('.context-menu');
        if (existing) existing.remove();

        const menu = document.createElement('div');
        menu.className = 'context-menu fixed z-50 bg-card border border-border rounded-xl shadow-2xl py-1 min-w-[180px]';
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'px-4 py-2.5 text-sm text-white hover:bg-green hover:text-dark cursor-pointer transition-colors';
            div.textContent = item.label;
            div.onclick = () => { menu.remove(); item.action(); };
            menu.appendChild(div);
        });

        document.body.appendChild(menu);
        setTimeout(() => {
            const close = () => menu.remove();
            document.addEventListener('click', close, { once: true });
        }, 10);
    }

    showChannelInfo(ch) {
        const content = document.getElementById('channel-info-content');
        content.innerHTML = `
            <div class="bg-dark rounded-lg p-3 border border-border"><b class="text-green">الاسم:</b> <span class="text-white">${ch.name}</span></div>
            <div class="bg-dark rounded-lg p-3 border border-border"><b class="text-green">المجموعة:</b> <span class="text-white">${ch.group || 'غير محدد'}</span></div>
            <div class="bg-dark rounded-lg p-3 border border-border"><b class="text-green">الرابط:</b> <span class="text-green break-all text-xs">${ch.url}</span></div>
            <div class="bg-dark rounded-lg p-3 border border-border"><b class="text-green">الشعار:</b> <span class="text-secondary">${ch.logo || 'غير متوفر'}</span></div>
        `;
        this.openModal('modal-info');
    }

    // ==================== Add Code / Servers ====================
    openAddCode() {
        document.getElementById('code-input').value = '';
        document.getElementById('type-badge').textContent = 'لم يتم التعرف بعد';
        document.getElementById('type-badge').className = 'mt-3 text-center py-2 rounded-xl bg-input border border-border text-muted text-sm font-bold';
        document.getElementById('manual-name').value = '';
        document.getElementById('manual-host').value = '';
        document.getElementById('manual-user').value = '';
        document.getElementById('manual-pass').value = '';
        document.getElementById('manual-mac').value = '';
        document.getElementById('preview-url').value = '';
        this.openModal('modal-add-code');
    }

    parseCode() {
        const text = document.getElementById('code-input').value.trim();
        if (!text) { alert('الصق الكود أولاً'); return; }

        const result = UniversalCodeParser.parse(text);
        const data = result.data || {};
        const badge = document.getElementById('type-badge');
        const typeNames = {
            cccam: 'CCcam', newcamd: 'Newcamd', mgcamd: 'Mgcamd',
            xtream: 'Xtream Codes', mac: 'MAC Address',
            portal: 'Portal', stalker: 'Stalker Portal',
            m3u_url: 'M3U مباشر', generic: 'عام', unknown: 'غير معروف'
        };

        badge.textContent = typeNames[result.type] || result.type;
        if (result.type !== 'unknown') {
            badge.className = 'mt-3 text-center py-2 rounded-xl badge-xtream text-sm font-bold border-2 border-green-dim';
        } else {
            badge.className = 'mt-3 text-center py-2 rounded-xl badge-unknown text-sm font-bold border-2 border-red-dim';
        }

        let url = '';
        if (result.type === 'xtream') {
            const h = data.host || '', u = data.username || '', p = data.password || '';
            if (h && u && p) {
                url = UniversalCodeParser.buildM3uUrl(h, u, p, 'm3u_plus');
                document.getElementById('manual-host').value = h;
                document.getElementById('manual-user').value = u;
                document.getElementById('manual-pass').value = p;
            }
        } else if (result.type === 'cccam') {
            const h = data.host || '', port = data.port || '', u = data.user || '', p = data.pass || '';
            if (h && port && u && p) url = `http://${h}:${port}/get.php?username=${u}&password=${p}&type=m3u_plus`;
        } else if (result.type === 'mac') {
            const h = data.host || '', macs = data.macs || [];
            if (h && macs.length) {
                url = UniversalCodeParser.buildStalkerUrl(h, macs[0]);
                document.getElementById('manual-host').value = h;
                document.getElementById('manual-mac').value = macs[0];
            }
        } else if (result.type === 'portal' || result.type === 'stalker') {
            const h = data.host || '';
            if (h) url = `${h}/get.php?type=m3u_plus`;
        } else if (result.type === 'm3u_url') {
            url = data.url || '';
        } else if (result.type === 'generic') {
            url = data.host || '';
        }

        document.getElementById('preview-url').value = url || 'لا يمكن بناء الرابط - أدخل البيانات يدوياً';
        if (url && !document.getElementById('manual-name').value) {
            const hits = data.hits_by || '';
            document.getElementById('manual-name').value = (typeNames[result.type] || 'سيرفر') + (hits ? ` (${hits})` : '');
        }
    }

    addServer() {
        const name = document.getElementById('manual-name').value.trim();
        let url = document.getElementById('preview-url').value.trim();

        if (!name) { alert('أدخل اسم السيرفر'); return; }
        if (!url || url.startsWith('لا يمكن')) {
            const h = document.getElementById('manual-host').value.trim();
            const u = document.getElementById('manual-user').value.trim();
            const p = document.getElementById('manual-pass').value.trim();
            const mac = document.getElementById('manual-mac').value.trim();
            if (h && u && p) {
                const t = document.getElementById('manual-type').value;
                url = UniversalCodeParser.buildM3uUrl(h, u, p, t);
            } else if (h && mac) {
                url = `${h}/stalker_portal/server/load.php?type=stb&action=handshake&mac=${mac}`;
            } else {
                alert('أدخل البيانات كاملة'); return;
            }
        }

        this.customServers[name] = { url, info: { type: 'xtream', host: document.getElementById('manual-host').value.trim() } };
        this.saveCustomServers();
        this.refreshServerCombo();

        // Select new server
        const sel = document.getElementById('server-select');
        sel.value = name;

        this.closeModal('modal-add-code');
        alert(`تم إضافة '${name}' بنجاح!\n\nاضغط 'تحميل القنوات' للتحميل.`);
    }

    openManageServers() {
        const container = document.getElementById('servers-table');
        container.innerHTML = '';

        Object.entries(this.customServers).forEach(([name, data]) => {
            const div = document.createElement('div');
            div.className = 'server-item';
            const urlShort = data.url.length > 60 ? data.url.substring(0, 60) + '...' : data.url;
            div.innerHTML = `
                <div class="flex-1 min-w-0">
                    <div class="text-green font-bold text-sm">${name}</div>
                    <div class="text-muted text-xs mt-1 break-all">${urlShort}</div>
                </div>
                <button onclick="app.deleteServer('${name.replace(/'/g, "\'")}')" class="w-8 h-8 rounded-lg bg-red text-white flex items-center justify-center hover:brightness-110 transition-all flex-shrink-0">
                    <i class="fas fa-trash text-xs"></i>
                </button>
            `;
            container.appendChild(div);
        });

        if (!Object.keys(this.customServers).length) {
            container.innerHTML = '<div class="text-center text-muted py-8">لا توجد سيرفرات مخصصة</div>';
        }

        this.openModal('modal-manage');
    }

    deleteServer(name) {
        if (!confirm(`حذف '${name}'؟`)) return;
        delete this.customServers[name];
        this.saveCustomServers();
        this.refreshServerCombo();
        this.openManageServers(); // Refresh
    }

    // ==================== Settings ====================
    openSettings() {
        this.openModal('modal-settings');
    }

    saveSettings() {
        this.settings = {
            volume: parseInt(document.getElementById('settings-volume').value),
            muteOnStart: document.getElementById('mute-start').checked,
            autoLoad: document.getElementById('auto-load').checked,
            showServerInfo: document.getElementById('show-info').checked,
            timeout: parseInt(document.getElementById('timeout-setting').value) || 45
        };
        this.saveSettings();
        document.getElementById('volume-slider').value = this.settings.volume;
        this.closeModal('modal-settings');
        alert('تم حفظ الإعدادات');
    }

    // ==================== Modals ====================
    openModal(id) {
        const modal = document.getElementById(id);
        modal.classList.remove('hidden');
        modal.classList.add('flex', 'modal-enter');
    }

    closeModal(id) {
        const modal = document.getElementById(id);
        modal.classList.add('hidden');
        modal.classList.remove('flex', 'modal-enter');
    }

    // ==================== Sidebar ====================
    toggleSidebar() {
        const sb = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        const isOpen = !sb.classList.contains('-translate-x-full');
        if (isOpen) {
            sb.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        } else {
            sb.classList.remove('-translate-x-full');
            overlay.classList.remove('hidden');
        }
    }

    // ==================== Keyboard Shortcuts ====================
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

            switch(e.key) {
                case 'f': case 'F': this.toggleFullscreen(); break;
                case ' ': e.preventDefault(); this.togglePlay(); break;
                case 's': case 'S': this.stopPlayback(); break;
                case 'm': case 'M': this.toggleMute(); break;
                case 'ArrowRight': this.playNext(); break;
                case 'ArrowLeft': this.playPrevious(); break;
                case 'ArrowUp': e.preventDefault(); this.volumeUp(); break;
                case 'ArrowDown': e.preventDefault(); this.volumeDown(); break;
                case 'Escape': if (document.fullscreenElement) document.exitFullscreen(); break;
            }
        });
    }

    // ==================== Drag & Drop ====================
    setupDragDrop() {
        const app = document.getElementById('app');
        app.addEventListener('dragover', (e) => { e.preventDefault(); app.style.opacity = '0.7'; });
        app.addEventListener('dragleave', () => { app.style.opacity = '1'; });
        app.addEventListener('drop', (e) => {
            e.preventDefault();
            app.style.opacity = '1';
            const files = e.dataTransfer.files;
            if (files.length && files[0].name.match(/\.(m3u|m3u8)$/i)) {
                const input = document.getElementById('file-input');
                const dt = new DataTransfer();
                dt.items.add(files[0]);
                input.files = dt.files;
                this.loadFromFile(input);
            }
        });
    }

    // ==================== Event Listeners ====================
    setupEventListeners() {
        // Video events
        const video = document.getElementById('video-player');
        video.addEventListener('timeupdate', () => {
            if (video.duration) {
                const slider = document.getElementById('progress-slider');
                slider.value = (video.currentTime / video.duration) * 1000;
            }
        });
        video.addEventListener('click', () => this.togglePlay());
        video.addEventListener('dblclick', () => this.toggleFullscreen());

        // Progress seek
        document.getElementById('progress-slider').addEventListener('input', (e) => {
            if (video.duration) {
                video.currentTime = (e.target.value / 1000) * video.duration;
            }
        });

        // Close modals on backdrop click
        ['modal-add-code', 'modal-manage', 'modal-settings', 'modal-info'].forEach(id => {
            document.getElementById(id).addEventListener('click', (e) => {
                if (e.target === e.currentTarget) this.closeModal(id);
            });
        });
    }
}

// ==================== Init ====================
const app = new MouseAIApp();
