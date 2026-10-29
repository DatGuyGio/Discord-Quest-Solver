void "MIT License\r\n\r\nCopyright (c) 2026 Gabriel Bertolassi\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy\r\nof this software and associated documentation files (the \"Software\"), to deal\r\nin the Software without restriction, including without limitation the rights\r\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\ncopies of the Software, and to permit persons to whom the Software is\r\nfurnished to do so, subject to the following conditions:\r\n\r\nThe above copyright notice and this permission notice shall be included in all\r\ncopies or substantial portions of the Software.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\r\nSOFTWARE.";

(async () => {
    "use strict";

    const CONFIG = {
        NAME: "Quest Studio",
        VERSION: "v4.12.0-gio.4",
        THEME: "#7ce6c2",
        SUCCESS: "#3BA55C",
        WARN: "#faa61a",
        ERR: "#f04747",
        HIDE_ACTIVITY: false,

        PLAY_SESSION_TAIL_MIN: 2,

    };

    const GIO_LOGO = 'data:image/jpeg;base64,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';

    const SYS = Object.freeze({
        MAX_TIME: 25 * 60 * 1000,
        HEARTBEAT_GRACE: 90 * 1000,
        MAX_TASK_FAILURES: 5,
        MAX_RETRIES: 3,
        IS_DESKTOP: typeof window.DiscordNative !== 'undefined'
    });

    const RUNTIME = {
        alive: true,
        running: true,
        questCleanups: new Set(),
        cleanups: new Set(),
        autoEnroll: true,
        autoClaim: false,
        playSound: false,
        randomDelay: false
    };

    const HideKeys = {
        defaults: { code: 'Period', ctrl: false, alt: false, shift: true, meta: false },
        valid(binding) {
            return binding && typeof binding === 'object'
                && /^(Key[A-Z]|Digit[0-9]|F([1-9]|1[0-9]|2[0-4])|Space|Period|Comma|Slash|Semicolon|Quote|BracketLeft|BracketRight|Backslash|Backquote|Minus|Equal|Arrow(Up|Down|Left|Right)|Home|End|PageUp|PageDown|Insert|Delete|Backspace)$/.test(binding.code)
                && ['ctrl', 'alt', 'shift', 'meta'].every(key => typeof binding[key] === 'boolean');
        },
        fromEvent(event) {
            let code = event.code;
            if (!code) {
                const key = event.key;
                code = key === '.' || key === '>' ? 'Period'
                    : /^[a-z]$/i.test(key) ? `Key${key.toUpperCase()}`
                    : /^\d$/.test(key) ? `Digit${key}` : key;
            }
            const binding = { code, ctrl: event.ctrlKey, alt: event.altKey, shift: event.shiftKey, meta: event.metaKey };
            return this.valid(binding) ? binding : null;
        },
        matches(event, binding) {
            const pressed = this.fromEvent(event);
            return binding && pressed && ['code', 'ctrl', 'alt', 'shift', 'meta'].every(key => pressed[key] === binding[key]);
        },
        label(binding) {
            if (!binding) return 'Unassigned';
            const names = { Period: '.', Comma: ',', Slash: '/', Semicolon: ';', Quote: "'", Space: 'Space' };
            return [binding.ctrl && 'Ctrl', binding.alt && 'Alt', binding.shift && 'Shift', binding.meta && 'Win', names[binding.code] || binding.code.replace(/^(Key|Digit)/, '')].filter(Boolean).join(' + ');
        }
    };

    const GioPrefs = {
        key: 'gio.quest.ui.v1',
        value: { accent: 'mint', compact: true, sort: 'expiry', favorites: [], hideBinding: { ...HideKeys.defaults } },
        load() {
            try {
                const data = JSON.parse(window.localStorage.getItem(this.key) || '{}');
                if (['mint', 'violet', 'blue'].includes(data.accent)) this.value.accent = data.accent;
                if (data.hideBinding === null) this.value.hideBinding = null;
                else if (HideKeys.valid(data.hideBinding)) {
                    const { code, ctrl, alt, shift, meta } = data.hideBinding;
                    this.value.hideBinding = { code, ctrl, alt, shift, meta };
                }
                if (typeof data.compact === 'boolean') this.value.compact = data.compact;
                if (['expiry', 'reward', 'name', 'favorites'].includes(data.sort)) this.value.sort = data.sort;
                if (Array.isArray(data.favorites)) this.value.favorites = data.favorites.filter(id => typeof id === 'string').slice(0, 300);
            } catch (_) {                                                                 }
        },
        save() {
            try { window.localStorage.setItem(this.key, JSON.stringify(this.value)); } catch (_) { }
        },
        toggleFavorite(id) {
            const ids = new Set(this.value.favorites);
            if (ids.has(id)) ids.delete(id); else ids.add(id);
            this.value.favorites = [...ids].slice(-300);
            this.save();
            return ids.has(id);
        },
        expiry(value, now = Date.now()) {
            const time = value ? new Date(value).getTime() : NaN;
            if (!Number.isFinite(time)) return { text: 'No expiry listed', urgent: false, time: Infinity };
            const remaining = time - now;
            if (remaining <= 0) return { text: 'Expired', urgent: true, time };
            const hours = Math.ceil(remaining / 3600000);
            return { text: hours < 24 ? `Ends in ${hours}h` : `Ends in ${Math.ceil(hours / 24)}d`, urgent: hours <= 24, time };
        },
        compare(a, b, mode) {
            const byName = () => a.name.localeCompare(b.name) || a.id.localeCompare(b.id);
            if (mode === 'reward') return b.orbs - a.orbs || byName();
            if (mode === 'favorites') return Number(this.value.favorites.includes(b.id)) - Number(this.value.favorites.includes(a.id)) || byName();
            if (mode === 'name') return byName();
            return (a.expiry.time - b.expiry.time) || byName();
        }
    };
    GioPrefs.load();

    const Sound = {
        _ctx: null,
        play(type) {
            if (!RUNTIME.playSound) return;
            try {
                const Ctx = window.AudioContext || window.webkitAudioContext;
                if (!Ctx) return;

                if (!this._ctx || this._ctx.state === 'closed') this._ctx = new Ctx();
                const ctx = this._ctx;
                const o = ctx.createOscillator();
                const g = ctx.createGain();
                o.connect(g); g.connect(ctx.destination);
                o.type = 'sine';
                const t0 = ctx.currentTime;
                if (type === 'done') {

                    o.frequency.setValueAtTime(523.25, t0);
                    o.frequency.setValueAtTime(659.25, t0 + 0.12);
                    o.frequency.setValueAtTime(783.99, t0 + 0.24);
                    g.gain.setValueAtTime(0.55, t0);
                    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.55);
                    o.start(t0); o.stop(t0 + 0.6);
                } else {
                    o.frequency.value = 880;
                    g.gain.setValueAtTime(0.45, t0);
                    g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.18);
                    o.start(t0); o.stop(t0 + 0.2);
                }
            } catch (_) { }
        }
    };

    const Consent = {
        _granted: new Set(),
        TIMEOUT: 60000,
        SCOPES: ['identify', 'applications.commands', 'applications.entitlements'],
        ask(appId, appName) {
            if (!RUNTIME.running) return Promise.resolve(false);
            if (this._granted.has(appId)) return Promise.resolve(true);
            return new Promise(resolve => {
                const ov = document.createElement('div');
                ov.id = 'orion-consent';
                ov.style.cssText = 'position:fixed;inset:0;z-index:1002;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.6);font-family:var(--font-primary);';
                ov.innerHTML = `<div style="width:420px;max-width:92vw;background:var(--background-base-low);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);box-shadow:var(--shadow-button-overlay);color:var(--text-default);overflow:hidden;">
                    <div style="padding:14px 16px;background:var(--background-mod-muted);border-bottom:1px solid var(--border-subtle);font-weight:700;color:var(--text-strong);">Authorize application?</div>
                    <div style="padding:16px;font-size:13px;line-height:1.5;">
                        <div>To complete this achievement quest, Quest Studio By Gio needs to OAuth-authorize this app on your Discord account:</div>
                        <div id="oc-app" style="font-weight:700;color:var(--text-strong);margin:6px 0;"></div>
                        <div style="color:var(--text-muted);">Scopes requested:</div>
                        <ul id="oc-scopes" style="margin:4px 0 10px;padding-left:18px;color:var(--text-muted);"></ul>
                        <div style="color:var(--text-feedback-warning);">The app's backend receives a real authorization code. Quest Studio revokes the grant immediately after the quest is marked complete. Discord enforcement against quest automation can affect the whole account.</div>
                        <label style="display:flex;gap:8px;align-items:center;margin-top:12px;font-size:12px;color:var(--text-muted);">
                            <input type="checkbox" id="oc-remember" class="native-cb"> Don't ask again for this app this session</label>
                    </div>
                    <div style="display:flex;gap:10px;padding:12px 16px;border-top:1px solid var(--border-subtle);">
                        <button id="oc-no" class="quest-pick-btn deselect" style="flex:1;">Cancel</button>
                        <button id="oc-yes" class="quest-pick-btn start" style="flex:1;">Authorize</button>
                    </div></div>`;
                document.body.appendChild(ov);
                ov.querySelector('#oc-app').textContent = appName ? `${appName} (${appId})` : `App ${appId}`;
                const ul = ov.querySelector('#oc-scopes');
                this.SCOPES.forEach(s => { const li = document.createElement('li'); li.textContent = s; ul.appendChild(li); });
                let done = false;
                const finish = v => {
                    if (done) return; done = true;
                    clearTimeout(timer); document.removeEventListener('keydown', onKey);
                    RUNTIME.questCleanups.delete(cancel);
                    if (v && ov.querySelector('#oc-remember').checked) this._granted.add(appId);
                    ov.remove(); resolve(v);
                };
                const onKey = e => { if (e.key === 'Escape') finish(false); };
                ov.querySelector('#oc-yes').addEventListener('click', () => finish(true));
                ov.querySelector('#oc-no').addEventListener('click', () => finish(false));
                ov.addEventListener('mousedown', e => { if (e.target === ov) finish(false); });
                document.addEventListener('keydown', onKey);
                const cancel = () => finish(false);
                const timer = setTimeout(cancel, this.TIMEOUT);
                RUNTIME.questCleanups.add(cancel);
            });
        }
    };

    const ICONS = Object.freeze({
		OPT: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>`,
        BOLT: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.29-.62L14.5 3h1l-1 7h3.5c.58 0 .57.32.29.62L11 21z"/></svg>`,
        VIDEO: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
        GAME: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
        STREAM: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
        ACTIVITY: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/></svg>`,
        CHECK: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
        CLOCK: `<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
        STOP: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>`
    });

    const CONST = Object.freeze({
        ID: "1412491570820812933",
        EVT: Object.freeze({
            HEARTBEAT: "QUESTS_SEND_HEARTBEAT_SUCCESS",

            HEARTBEAT_FAIL: "QUESTS_SEND_HEARTBEAT_FAILURE",
            GAME: "RUNNING_GAMES_CHANGE",
            RPC: "LOCAL_ACTIVITY_UPDATE"
        })
    });

    if (window.orionLock) {
        const existingUI = document.getElementById('orion-ui');
        if (existingUI) existingUI.style.display = 'flex';
        const launcher = document.getElementById('gio-launcher');
        if (launcher) launcher.style.display = 'none';
        return console.warn(`[${CONFIG.NAME}] Already running.`);
    }
    window.orionLock = true;

    const sleep = ms => new Promise(resolve => {
        if (!RUNTIME.running) { resolve(false); return; }
        const cancel = () => { clearTimeout(timer); RUNTIME.questCleanups.delete(cancel); resolve(false); };
        const timer = setTimeout(() => { RUNTIME.questCleanups.delete(cancel); resolve(true); }, ms);
        RUNTIME.questCleanups.add(cancel);
    });
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    const notExpired = q => {
        try {
            const store = Mods.QuestStore;
            if (typeof store?.isQuestExpired === 'function') return store.isQuestExpired(q.id) !== true;
        } catch (_) {                                     }
        const e = new Date(q.config?.expiresAt ?? 0).getTime();
        return Number.isNaN(e) || e > Date.now();
    };

    const orbReward = config => {
        const rewards = config?.rewardsConfig?.rewards;
        if (!Array.isArray(rewards)) return null;
        const amount = v => (typeof v === 'number' && Number.isFinite(v) && v > 0 ? v : 0);

        let orbs = 0, premium = 0;
        for (const r of rewards) {
            const base = amount(r?.orbQuantity);
            if (!base) continue;
            orbs += base;
            premium += amount(r?.premiumOrbQuantity) || base;
        }
        return orbs > 0 ? { orbs, premium } : null;
    };

    const canUseMoreQuestOrbs = () => {
        try {
            const user = Mods.UserStore?.getCurrentUser?.();
            return user != null && Mods.Premium?.canUseMoreQuestOrbs?.(user) === true;
        } catch {
            return false;
        }
    };

    const orbPayout = (reward, boosted) => (reward ? (boosted ? reward.premium : reward.orbs) : 0);

    const fmtOrbs = (reward, boosted) => (reward ? `${orbPayout(reward, boosted)} Orbs` : '');

    const orbBalance = v => (typeof v === 'number' && Number.isInteger(v) && v >= 0 ? v : null);

    const readOrbBalance = async () => {
        const account = Mods.UserStore?.getCurrentUser?.()?.id ?? null;
        if (!account) throw new Error('no account is signed in');
        const store = Mods.OrbStore;
        const stored = orbBalance(store?.getCurrentBalance?.() ?? store?.balance);
        if (stored !== null) return stored;
        const res = await Mods.API.get({ url: '/users/@me/virtual-currency/balance' });
        const after = Mods.UserStore?.getCurrentUser?.()?.id ?? null;
        if (after !== account) throw new Error('the account changed during the read');
        return orbBalance(res?.body?.balance);
    };

    const sealedFor = questId => {
        try { return Mods.QuestStore?.getQuest?.(questId)?.trafficMetadataSealed ?? null; }
        catch (_) { return null; }
    };

    const CONSOLE_ONLY_KEYS = new Set(['PLAY_ON_XBOX', 'PLAY_ON_PLAYSTATION']);

    const taskKeys = (tasks) => (tasks instanceof Map ? [...tasks.keys()] : Object.keys(tasks ?? {}));
    const taskAt = (tasks, key) => (tasks instanceof Map ? tasks.get(key) : tasks?.[key]);

    const selectTaskConfig = (config) => {
        const current = config?.taskConfigV2;
        if (taskKeys(current?.tasks).length > 0) return current;
        const legacy = config?.taskConfig;
        if (taskKeys(legacy?.tasks).length > 0) return legacy;
        return current ?? legacy ?? null;
    };

    const UNAUTOMATABLE_KEYS = new Map([
        ['ACHIEVEMENT_IN_GAME', 'That needs the game linked to your account and an achievement earned inside the game itself, which nothing running in Discord can do for you.']
    ]);

    const questBlocker = ({ name, hasTaskConfig, keys, typeData, isDesktop }) => {
        if (!hasTaskConfig) return `"${name}" has no usable task config, so there is nothing to drive.`;

        if (!typeData) {
            if (!keys.length) return `"${name}" lists no tasks at all, so there is nothing to drive.`;
            if (keys.every(k => CONSOLE_ONLY_KEYS.has(k))) return `"${name}" is console-only (${keys.join(', ')}), so no desktop client can run it.`;

            const named = keys.find(k => UNAUTOMATABLE_KEYS.has(k));
            if (named) {
                return keys.length === 1
                    ? `"${name}" offers only ${named}. ${UNAUTOMATABLE_KEYS.get(named)}`
                    : `"${name}" offers ${keys.join(', ')}, and none of them run here. The one we know about is ${named}. ${UNAUTOMATABLE_KEYS.get(named)}`;
            }

            return `"${name}" uses an unsupported task type (${keys.join(', ')}).`;
        }

        const { type, target, appId } = typeData;

        if (!isDesktop && (type === 'GAME' || type === 'STREAM')) return `"${name}" needs the desktop app for its ${type} task.`;
        if (target <= 0) return `"${name}" has an invalid target (${target}).`;

        if ((type === 'GAME' || type === 'STREAM') && !appId) return `"${name}" has no application id in its config, so the game cannot be spoofed.`;

        return null;
    };

    const recordOutcome = (outcomes, id, outcome) => {
        if (outcomes.get(id) === 'completed') return;
        outcomes.set(id, outcome);
    };

    const summarizeRun = (outcomes) => {
        let finished = 0, blocked = 0, failed = 0;
        for (const outcome of outcomes.values()) {
            if (outcome === 'completed') finished++;
            else if (outcome === 'blocked') blocked++;
            else failed++;
        }

        if (!blocked && !failed) return { finished, blocked, failed, line: 'All available quests are completed!', playDone: true };

        const parts = [];
        if (finished) parts.push(`${finished} quest(s) finished`);
        if (blocked) parts.push(`${blocked} skipped because this client cannot drive them`);
        if (failed) parts.push(`${failed} failed`);
        return { finished, blocked, failed, line: `Nothing left to run. ${parts.join(', ')}.`, playDone: finished > 0 };
    };

    const futureDate = (raw) => {
        try {
            if (!raw) return null;
            const when = raw instanceof Date ? raw : new Date(raw);
            return Number.isNaN(when.getTime()) || when.getTime() <= Date.now() ? null : when;
        } catch (_) { return null; }
    };

    const enrollmentBlockedUntil = () => futureDate(Mods.QuestStore?.questEnrollmentBlockedUntil);

    const questAccessSuspendedUntil = () => {
        const store = Mods.QuestStore;
        if (!store) return null;
        const explicit = futureDate(store.questAccessSuspendedUntil);
        if (explicit) return explicit;
        return store.isQuestAccessSuspended === true ? new Date(0) : null;
    };

    const buildStreamKey = () => {
        try {
            const ownerId = Mods.UserStore?.getCurrentUser?.()?.id;
            if (!ownerId) return null;

            const dm = Mods.ChanStore?.getSortedPrivateChannels()?.[0]?.id;
            if (dm) return `call:${dm}:${ownerId}`;

            for (const g of Object.values(Mods.GuildChanStore?.getAllGuilds() ?? {})) {
                const vc = g?.VOCAL?.[0]?.channel;
                const guildId = vc?.guild_id ?? g?.id;
                if (vc?.id && guildId) return `guild:${guildId}:${vc.id}:${ownerId}`;
            }
            return null;
        } catch (e) {
            Logger.log(`[Task] Stream key lookup error: ${e.message}`, 'debug');
            return null;
        }
    };

    const ErrorHandler = {
        RETRYABLE: new Set([429, 500, 502, 503, 504, 408]),
        CLIENT_ERRORS: new Set([400, 403, 404, 409, 410]),

        classify(error) {
            const status = error?.status ?? error?.statusCode;
            return {
                isRetryable: this.RETRYABLE.has(status),
                isClientError: this.CLIENT_ERRORS.has(status),
                status,
                message: error?.message ?? error?.body?.message ?? `HTTP ${status ?? 'UNKNOWN'}`
            };
        },

        isSkippableQuest(error) {
            const status = error?.status;
            return status === 404 || status === 403 || status === 410;
        }
    };

    const Rewards = {
        items: new Map(), claimed: new Map(), requests: new Map(),
        owner: null, batchBusy: false, message: '', gapMs: 1200,

        currentAccount() { return Mods.UserStore?.getCurrentUser?.()?.id ?? null; },
        canClaim() { return RUNTIME.alive && this.owner !== null && this.currentAccount() === this.owner; },

        start() {
            this.owner = this.currentAccount();
            this.sync();
            const timer = setInterval(() => this.sync(), 2500);
            RUNTIME.cleanups.add(() => clearInterval(timer));
        },

        fromQuest(q) {
            const reward = orbReward(q.config);
            return {
                id: String(q.id), name: q.config?.messages?.questName ?? 'Completed quest',
                reward: fmtOrbs(reward, canUseMoreQuestOrbs()) || q.config?.rewardsConfig?.rewards?.[0]?.messages?.name || 'Quest reward',
                state: 'ready'
            };
        },

        sync() {
            if (!RUNTIME.alive) return;
            if (!this.canClaim()) {
                this.message = 'Account unavailable or changed. Stop and reopen the dashboard.';
                this.render(); return;
            }
            const store = Mods.QuestStore?.quests;
            if (!store) return;
            const quests = store instanceof Map ? [...store.values()] : Object.values(store);
            const next = new Map();
            const externallyClaimed = new Set();
            for (const q of quests) {
                const id = String(q.id);
                if (q.userStatus?.claimedAt) { externallyClaimed.add(id); continue; }
                if (!q.userStatus?.completedAt || this.claimed.has(id)) continue;
                const old = this.items.get(id);
                next.set(id, { ...this.fromQuest(q), state: old?.state ?? 'ready', note: old?.note });
            }

            for (const [id, task] of Logger.tasks) {
                if (!task.claimable || this.claimed.has(id) || externallyClaimed.has(id) || next.has(id)) continue;
                next.set(id, this.items.get(id) ?? { id, name: task.name, reward: 'Quest reward', state: 'ready' });
            }
            for (const id of externallyClaimed) {
                const task = Logger.tasks.get(id);
                if (task?.claimable) Logger.updateTask(id, { status: 'CLAIMED', claimable: false, claimState: null });
            }
            const changed = JSON.stringify([...next]) !== JSON.stringify([...this.items]);
            this.items = next;
            if (changed) this.render();
        },

        track(id, task) {
            if (!task.claimable || this.claimed.has(id)) return;
            const q = Mods.QuestStore?.getQuest?.(id);
            const item = this.items.get(id) ?? (q ? this.fromQuest(q) : { id, name: task.name, reward: 'Quest reward', state: 'ready' });
            this.items.set(id, item);
            this.render();
        },

        async request(id, send) {
            if (!this.canClaim()) throw new Error('Claim cancelled: the session stopped or account changed.');
            if (this.claimed.has(id)) return this.claimed.get(id);
            if (this.requests.has(id)) return this.requests.get(id);
            const item = this.items.get(id);
            if (item) { item.state = 'waiting'; item.note = ''; }
            if (Logger.tasks.has(id)) Logger.updateTask(id, { claimState: 'WAITING' });
            const request = Promise.resolve().then(() => {
                if (!this.canClaim()) throw new Error('Claim cancelled before sending.');
                return send();
            }).then(response => {
                if (!this.canClaim()) return response;
                if (response?.body?.claimed_at) {
                    this.claimed.set(id, response);
                    this.items.delete(id);
                    if (Logger.tasks.has(id)) Logger.updateTask(id, { status: 'CLAIMED', claimable: false, claimState: null });
                    Logger.log(`[Claim] Reward for "${item?.name ?? id}" claimed.`, 'success');
                } else {
                    this.needsAction(id, 'Claim not confirmed. Open Discord Quests.');
                }
                return response;
            }).catch(error => {
                if (this.canClaim()) {
                    const note = error?.body?.captcha_key || error?.body?.captcha_sitekey
                        ? 'Captcha required. Open Discord Quests.'
                        : (error?.status === 429 || error?.response?.status === 429)
                            ? 'Rate limited. Try later in Discord Quests.'
                            : 'Claim failed. Open Discord Quests.';
                    this.needsAction(id, note);
                }
                throw error;
            }).finally(() => { this.requests.delete(id); this.render(); });
            this.requests.set(id, request);
            this.render();
            return request;
        },

        needsAction(id, note) {
            const item = this.items.get(id);
            if (item) { item.state = 'manual'; item.note = note; }
            if (Logger.tasks.has(id)) Logger.updateTask(id, { claimState: 'FAILED' });
            Logger.log(`[Claim] ${note}`, 'warn');
        },

        async claimOne(id, fromBatch = false) {
            if (!this.canClaim() || (this.batchBusy && !fromBatch)) return false;
            try {
                const response = await Tasks.claimReward(id);
                const ok = this.canClaim() && !!response?.body?.claimed_at;
                if (!fromBatch && this.canClaim()) {
                    this.message = ok ? 'Reward claimed.' : 'Action needed. Open Discord Quests to finish.';
                }
                return ok;
            } catch (_) {
                if (!fromBatch && this.canClaim()) this.message = 'Claim paused. Open Discord Quests to finish.';
                return false;
            } finally { this.render(); }
        },

        waitBetween() {
            return new Promise(resolve => {
                const finish = () => { clearTimeout(timer); RUNTIME.cleanups.delete(finish); resolve(); };
                const timer = setTimeout(finish, this.gapMs);
                RUNTIME.cleanups.add(finish);
            });
        },

        async claimAll() {
            if (this.batchBusy || this.requests.size || !this.canClaim()) return;
            this.sync();
            const ids = [...this.items.values()].filter(item => item.state === 'ready').map(item => item.id);
            if (!ids.length) return;
            this.batchBusy = true;
            let count = 0, interrupted = false;
            this.message = `Claiming 0 of ${ids.length}…`; this.render();
            try {
                for (let i = 0; i < ids.length; i++) {
                    if (!this.canClaim()) { interrupted = true; break; }
                    this.sync();
                    const item = this.items.get(ids[i]);
                    if (!item || item.state !== 'ready') continue;
                    if (!(await this.claimOne(ids[i], true))) { interrupted = true; break; }
                    count++;
                    this.message = `Claimed ${count} of ${ids.length}…`; this.render();
                    if (i < ids.length - 1) await this.waitBetween();
                }
            } finally {
                this.batchBusy = false;
                this.message = `${count} reward${count === 1 ? '' : 's'} claimed.${interrupted ? ' Batch paused; remaining rewards were not attempted.' : ''}`;
                this.render();
            }
        },

        render() {
            const root = Logger.root;
            if (!root?.isConnected) return;
            const list = root.querySelector('#gio-reward-list');
            if (!list) return;
            root.querySelector('#gio-reward-count').textContent = String(this.items.size);
            const ready = [...this.items.values()].filter(item => item.state === 'ready').length;
            const bulk = root.querySelector('#gio-claim-all');
            bulk.disabled = !ready || this.batchBusy || this.requests.size > 0 || !this.canClaim();
            bulk.textContent = this.batchBusy ? 'Claiming…' : `Claim all${ready ? ` (${ready})` : ''}`;
            root.querySelector('#gio-reward-status').textContent = this.message;
            list.innerHTML = this.items.size ? [...this.items.values()].map(item => `
                <div class="gio-reward-card">
                    <span class="gio-reward-check" aria-hidden="true">✓</span>
                    <div class="task-info"><div class="task-name" title="${esc(item.name)}">${esc(item.name)}</div>
                        <div class="task-meta">${esc(item.reward)} · Completed</div>
                        ${item.note ? `<div class="gio-reward-note">${esc(item.note)}</div>` : ''}
                    </div>
                    ${item.state === 'manual' ? '<button type="button" class="gio-reward-open">Open quests</button>' :
                        `<button type="button" class="gio-reward-claim" data-id="${esc(item.id)}" ${this.batchBusy || item.state === 'waiting' || !this.canClaim() ? 'disabled' : ''}>${item.state === 'waiting' ? 'Claiming…' : 'Claim'}</button>`}
                </div>`).join('') : '<div class="gio-rewards-empty">All caught up.<span>No completed, unclaimed quests.</span></div>';
        }
    };

    const Logger = {
        root: null, tasks: new Map(), tickerId: null, _hotkey: null,

        records: new Map(), logHistory: [], _pickerCancel: null,
        _logQuery: '', _logFollowing: true, _logUnread: 0, _logVisibleCount: 0,

        _bindingCapture: false, _questsStarted: false,

        renderHideBinding() {
            const label = this.root.querySelector('#gio-hide-binding');
            if (!label) return;
            label.textContent = this._bindingCapture ? 'Press a key combination…' : HideKeys.label(GioPrefs.value.hideBinding);
            this.root.querySelector('#gio-bind-hide').textContent = this._bindingCapture ? 'Cancel' : 'Set shortcut';
            this.root.querySelector('#gio-binding-hint').textContent = this._bindingCapture
                ? 'Press Escape to cancel.'
                : 'Hide or show the dashboard. Ignored while typing; the floating button can always restore it.';
        },

        toggleOptions(open = this.root.dataset.options !== 'true') {
            this.root.dataset.options = String(open);
            this.root.querySelector('#orion-opts').setAttribute('aria-expanded', String(open));
            if (!open) this._bindingCapture = false;
            this.root.querySelectorAll('[data-runtime-option]').forEach(input => { input.checked = RUNTIME[input.dataset.runtimeOption]; });
            this.renderHideBinding();
            if (!open && this._logFollowing) this.followLatestLog();
        },

        syncRunControl() {
            const button = this.root?.querySelector('#gio-stop-quests');
            if (!button) return;
            const stopping = !RUNTIME.running && QuestRunner.pending !== null;
            button.textContent = RUNTIME.running ? 'STOP QUESTS' : stopping ? 'STOPPING…' : 'RESUME QUESTS';
            button.disabled = !RUNTIME.alive || !this._questsStarted || stopping || (!RUNTIME.running && !QuestRunner.selected.size);
            button.title = RUNTIME.running ? 'Stop quests; keep the dashboard and rewards open'
                : stopping ? 'Waiting for active requests and cleanup to finish'
                    : 'Resume selected unfinished quests from their saved progress';
        },

        beginQuests(selected) {
            if (!RUNTIME.running || !RUNTIME.alive) return false;
            if (selected) QuestRunner.selected = new Set(selected);
            this._questsStarted = true;
            this.syncRunControl();
            return true;
        },

        stopQuests(silent = false) {
            if (!RUNTIME.running) return;
            RUNTIME.running = false;
            if (this._pickerCancel) this._pickerCancel();
            Traffic.cancel();
            for (const cleanup of [...RUNTIME.questCleanups]) {
                try { cleanup(); } catch (e) { this.log(`[Cleanup] ${e.message}`, 'debug'); }
            }
            RUNTIME.questCleanups.clear();
            try { Patcher.clean(); } catch (e) { this.log(`[Cleanup] ${e.message}`, 'debug'); }
            for (const [id, task] of this.tasks) {
                if (!task.done && !task.failed) this.updateTask(id, { status: 'STOPPED', actionRequired: null });
            }
            this.syncRunControl();
            if (!silent) this.log('[System] Quests stopped. Resume quests continues your selection. Options and reward claims remain available.', 'info');
            this.render(); this.updateSummary();
        },

        applyAppearance() {
            this.root.dataset.accent = GioPrefs.value.accent;
            this.root.dataset.compact = String(GioPrefs.value.compact);
            const compact = this.root.querySelector('#gio-compact');
            compact.setAttribute('aria-pressed', String(GioPrefs.value.compact));
        },

        setStats(values) {
            values.forEach(([value, label], index) => {
                const stat = this.root?.querySelectorAll('.gio-stat')[index];
                if (!stat) return;
                stat.querySelector('strong').textContent = String(value);
                stat.querySelector('span').textContent = label;
            });
        },

        updateSummary() {
            if (document.getElementById('orion-picker-form')) return;
            const records = [...this.records.values()];
            this.setStats([
                [records.filter(t => !t.done && !t.failed && !t.pending && t.status !== 'STOPPED').length, 'Active'],
                [records.filter(t => t.done).length, 'Completed'],
                [records.filter(t => t.failed).length, 'Needs attention']
            ]);
        },

        matchesLog(entry) {
            return !this._logQuery || `${entry.time} ${entry.type} ${entry.message}`.toLowerCase().includes(this._logQuery);
        },

        createLogRow(entry) {
            const row = document.createElement('article');
            row.className = `log-item c-${entry.type}`;
            const meta = document.createElement('div'); meta.className = 'gio-log-meta';
            const badge = document.createElement('span'); badge.className = 'gio-log-level';
            badge.textContent = { info: 'INFO', success: 'SUCCESS', warn: 'WARNING', err: 'ERROR', debug: 'DEBUG' }[entry.type];
            const time = document.createElement('time'); time.className = 'log-ts';
            time.dateTime = entry.time; time.title = entry.time;
            time.textContent = new Date(entry.time).toLocaleTimeString([], { hour12: false });
            const message = document.createElement('div'); message.className = 'gio-log-message';
            message.textContent = entry.message;
            meta.append(badge, time); row.append(meta, message);
            return row;
        },

        updateLogTools() {
            const count = this.root?.querySelector('#gio-log-count');
            if (!count) return;
            count.textContent = this._logQuery ? `${this._logVisibleCount} / ${this.logHistory.length}` : `${this.logHistory.length}`;
            const latest = this.root.querySelector('#gio-log-latest');
            latest.hidden = this._logFollowing;
            latest.textContent = this._logUnread ? `${this._logUnread} new ↓` : 'Latest ↓';
        },

        followLatestLog() {
            const box = this.root?.querySelector('#orion-logs');
            if (!box) return;
            this._logFollowing = true; this._logUnread = 0;
            box.scrollTop = box.scrollHeight; this.updateLogTools();
        },

        renderLogs() {
            const box = this.root?.querySelector('#orion-logs');
            if (!box) return;
            const fragment = document.createDocumentFragment();
            this._logVisibleCount = 0;
            for (const entry of this.logHistory) {
                if (!this.matchesLog(entry)) continue;
                fragment.appendChild(this.createLogRow(entry));
                this._logVisibleCount++;
            }
            if (!this._logVisibleCount) {
                const empty = document.createElement('div'); empty.className = 'gio-log-empty';
                empty.textContent = this._logQuery ? 'No matching entries.' : 'Session activity will appear here.';
                fragment.appendChild(empty);
            }
            box.replaceChildren(fragment);
            this._logUnread = 0; this._logFollowing = true;
            box.scrollTop = box.scrollHeight;
            this.updateLogTools();
        },

        exportLog() {

            const text = [`Quest Studio | By Gio`, ...this.logHistory.map(entry => `${entry.time} [${entry.type}] ${entry.message}`)].join('\n');
            const blob = new window.Blob([text], { type: 'text/plain;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `by-gio-session-${new Date().toISOString().slice(0, 10)}.txt`;
            document.body.appendChild(link); link.click(); link.remove();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        },

        init() {
            const oldUI = document.getElementById('orion-ui'); if (oldUI) oldUI.remove();
            const oldStyle = document.getElementById('orion-styles'); if (oldStyle) oldStyle.remove();

            const style = document.createElement('style');
            style.id = 'orion-styles';
            style.innerHTML = `
                @keyframes slideIn { from { transform: translateY(-20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
                @keyframes fadeOut { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.95); margin: 0; padding: 0; height: 0; border: none; } }

                #orion-ui {
                    position: fixed; top: 32px; left: auto; right: 20px; width: 380px;
                    max-height: 53vh;
                    background: var(--background-base-low); color: var(--text-default);
                    border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);
                    box-shadow: var(--shadow-button-overlay); z-index: 1001;
                    font-family: var(--font-primary);
                    overflow: hidden; animation: slideIn 0.3s ease; 
                    display: flex; flex-direction: column; box-sizing: border-box;
                    user-select: none;-webkit-app-region: no-drag;
                }

                #orion-head { padding: 12px 16px; background: var(--background-mod-muted); flex: 0 0 auto; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); cursor: grab; }
                #orion-head.dragging { cursor: grabbing; background: var(--control-secondary-background-default); }
                #orion-title { font-weight: 700; font-size: 15px; color: var(--text-strong); display: flex; align-items: center; gap: 8px; }
                #orion-title svg { color: var(--text-brand); }
                .dev-credit { font-size: 12px; margin-left: -4px; padding-top: 2px; font-weight: 500; color: var(--text-muted); }

                #orion-controls { display: flex; gap: 10px; align-items: center; }
                .ctrl-btn { cursor: pointer; transition: 0.2s; display: flex; align-items: center; }
                .ctrl-hide, .ctrl-opts { font-size: 11px; font-weight: 600; color: var(--text-muted); }
                .ctrl-hide:hover, .ctrl-opts:hover { color: var(--text-default); }
                .ctrl-stop { font-size: 11px; font-weight: 700; gap: 4px; padding: 3px 8px 3px 6px; border-radius: var(--radius-sm); background: transparent; border: 1px solid var(--control-critical-primary-background-default); color: var(--control-critical-primary-background-default); }
                .ctrl-stop:hover { background: var(--control-critical-primary-background-default); color: #fff; }

                #orion-logs { padding: 10px 14px; background: var(--background-base-lower); flex: 0 0 auto; font-family: 'Consolas', 'Monaco', monospace; font-size: 11px; height: 110px; overflow-y: auto; border-top: 1px solid var(--border-subtle); scroll-behavior: smooth; }
                .log-item { margin-bottom: 6px; display: flex; gap: 8px; line-height: 1.4; padding-bottom: 4px; }
                .log-ts { opacity: 0.5; min-width: 50px; font-size: 10px; }
                .c-info { color: var(--text-feedback-info); opacity: .8; } .c-success { color: var(--text-feedback-positive); } .c-err { color: var(--text-feedback-critical); } .c-warn { color: var(--text-feedback-warning); } .c-debug { color: #949ba4; }

                #orion-body { flex: 1 1 auto; padding: 12px; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; }

                #orion-picker-form { display: flex; flex-direction: column; min-height: 0; }

                #orion-ui ::-webkit-scrollbar { width: 4px; height: 4px; }
                #orion-ui ::-webkit-scrollbar-track { background: transparent; }
                #orion-ui ::-webkit-scrollbar-thumb { background: var(--scrollbar-auto-scrollbar-color-thumb); border-radius: 4px; }

                .task-card { 
                    --state-color: var(--ansi-bright-blue);
                    --icon-bg-opacity: 15%;
                    --icon-color: var(--state-color);

                    display: flex; gap: 12px; padding: 10px 12px; margin-bottom: 8px; align-items: center;
                    background: var(--control-secondary-background-default); 
                    border-radius: var(--radius-sm); border: 1px solid var(--border-muted); 
                    border-left: 4px solid var(--state-color);
                    box-shadow: var(--shadow-low); transition: 0.3s; flex-shrink: 0;
                }
                .task-card.removing { animation: fadeOut 0.4s forwards; }
                .task-card.done { --state-color: var(--ansi-green); --icon-bg-opacity: 100%; --icon-color: #fff; }
                .task-card.failed { --state-color: var(--ansi-red); }
                .task-card.pending { --state-color: var(--ansi-bright-yellow); }

                .task-icon { position: relative; width: 40px; height: 40px; border-radius: 50%; flex: 0 0 auto; background-color: color-mix(in srgb, var(--state-color) var(--icon-bg-opacity), transparent); display: flex; align-items: center; justify-content: center; }

                .task-card.running .task-icon::before { content: ''; position: absolute; inset: 0; border-radius: 50%; z-index: 1; background: conic-gradient(lch(71 59 139) 0% var(--p, 0%), var(--border-subtle) var(--p, 0%) 100%); -webkit-mask-image: radial-gradient(circle at center, transparent 16px, black 17px); mask-image: radial-gradient(circle at center, transparent 16px, black 17px); }

                .task-icon-inner { z-index: 2; color: var(--icon-color); display: flex; transition: filter 0.2s, opacity 0.2s; }
                .task-card.running:hover .task-icon-inner { filter: blur(2px); opacity: 0.3; }

                .task-icon-overlay { position: absolute; inset: 0; z-index: 3; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: var(--text-default); opacity: 0; transition: opacity 0.2s; pointer-events: none; }
                .task-card.running:hover .task-icon-overlay { opacity: 1; }

                .task-info { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; justify-content: center; }
                .task-status { font-size: 10px; font-weight: 800; color: var(--state-color); text-transform: uppercase; letter-spacing: 0.5px; }
                .task-name { font-size: 13px; font-weight: 700; color: var(--text-strong); letter-spacing: 0.2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.2; }
                .task-meta { font-size: 11px; font-weight: 700; color: var(--text-muted); display: flex; justify-content: space-between; }
                .task-actions { flex: 0 0 auto; display: flex; align-items: center; margin-left: 4px; }

                .claim-btn, .goto-btn { padding: 6px 10px; border: none; border-radius: var(--radius-sm); font-size: 11px; font-weight: 700; cursor: pointer; transition: 0.2s; text-transform: uppercase; letter-spacing: 0.2px; white-space: nowrap; font-family: inherit; color: #fff; }
                .claim-btn { background: var(--control-connected-background-default); }
                .claim-btn:hover:not(:disabled) { background: var(--control-connected-background-hover); }
                .claim-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .claim-btn.failed { background: var(--control-secondary-background-active); color: var(--text-default); }
                .goto-btn { background: var(--control-primary-background-default); }
                .goto-btn:hover:not(:disabled) { background: var(--control-primary-background-hover); }

                .picker-section-title { font-size: 11px; font-weight: 700; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; }
                .reward-filters { display: flex; gap: 6px; margin-bottom: 12px; flex-wrap: wrap; flex-shrink: 0; }

                .reward-filter, .type-filter { background-color: transparent; border: 2px solid; padding: 4px 10px; border-radius: 24px; font-size: 10px; font-weight: 600; cursor: pointer; transition: 0.2s; color: var(--text-subtle); font-family: inherit; }
                .reward-filter:hover, .type-filter:hover { background-color: color-mix(in srgb, currentColor 25%, transparent); }
                .reward-filter.off, .type-filter.off { background: transparent; color: var(--text-muted); opacity: 0.4; }

                .picker-quest-list { display: flex; flex-direction: column; gap: 8px; flex: 1 1 auto; min-height: 50px; overflow-y: auto; padding-right: 4px; }

                .quest-pick { display: flex; gap: 12px; padding: 10px; background: var(--control-secondary-background-default); border-radius: var(--radius-sm); border: 1px solid var(--border-muted); border-left-width: 4px; cursor: pointer; transition: 0.2s; align-items: center; user-select: none; flex-shrink: 0; }
                .quest-pick:hover { filter: brightness(1.15); }
                .quest-pick.hidden { display: none !important; }

                .native-cb { appearance: none; width: 20px; height: 20px; margin: 0; flex-shrink: 0; border: 1px solid var(--checkbox-border-default); border-radius: var(--radius-xs); background: transparent; cursor: pointer; transition: 0.15s; display: grid; place-content: center; }
                .native-cb::before {
                    content: ''; width: 12px; height: 12px; opacity: 0; transition: 0.1s;
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
                    background-size: contain; background-repeat: no-repeat; background-position: center;
                }
                .native-cb:checked { background: var(--checkbox-background-selected-default); border-color: var(--checkbox-border-selected-default); }
                .native-cb:checked::before { opacity: 1; }

                .picker-options { display: flex; flex-direction: column; gap: 6px; flex-shrink: 0; }
                .orion-option { display: flex; justify-content: space-between; align-items: center; background: var(--control-secondary-background-default); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-muted); }
                .orion-option-label { font-size: 13px; font-weight: 500; color: var(--text-default); }

                .native-toggle { appearance: none; width: 40px; height: 20px; margin: 0; flex-shrink: 0; background: var(--control-secondary-background-default); border-radius: 12px; cursor: pointer; position: relative; transition: 0.2s; border: 1px solid var(--border-muted); }
                .native-toggle::after { content: ''; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px; background: white; border-radius: 50%; box-shadow: var(--shadow-low); transition: 0.2s; }
                .native-toggle:checked { background: var(--control-primary-background-default); }
                .native-toggle:checked::after { transform: translateX(20px); }

                .orb-total { display: none; padding-top: 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; color: #5865F2; text-align: center; flex-shrink: 0; }
                .picker-actions { display: flex; gap: 10px; padding-top: 12px; flex-shrink: 0; }
                .quest-pick-btn { flex: 1; padding: 10px; border: 1px solid; border-radius: var(--radius-sm, 8px); font-size: 13px; font-weight: 700; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: inherit; color: #fff;}
                .quest-pick-btn.start { background-color: var(--control-connected-background-default); border-color: var(--control-connected-border-default); }
                .quest-pick-btn.start:hover:not(:disabled) { background: var(--control-connected-background-hover); border-color: var(--control-connected-border-hover); }
                .quest-pick-btn.deselect { background-color: var(--control-secondary-background-default); border-color: var(--control-secondary-border-default); color: var(--text-default); }
                .quest-pick-btn.deselect:hover:not(:disabled) { background: var(--control-secondary-background-hover); }
                .quest-pick-btn:disabled { opacity: 0.5; cursor: not-allowed; }
            `;
            style.textContent += `
                #orion-ui {
                    --gio-accent: #7ce6c2; --gio-ink: #101b19;
                    --background-base-low: #101719; --background-base-lower: #0b1113;
                    --background-mod-muted: #151f22; --control-secondary-background-default: #1a2529;
                    --control-secondary-background-hover: #223238; --control-secondary-background-active: #2a383d;
                    --border-subtle: #2b393e; --border-muted: #2a383d;
                    --text-default: #cbd7db; --text-strong: #f1f7f8; --text-muted: #9cafb6; --text-subtle: #adc0c7;
                    --text-brand: var(--gio-accent); --text-feedback-info: #a2c6e4;
                    --text-feedback-positive: #7ce6c2; --text-feedback-critical: #ff919b; --text-feedback-warning: #f5cb89;
                    --control-primary-background-default: #324a55; --control-primary-background-hover: #405e6c;
                    --control-connected-background-default: var(--gio-accent); --control-connected-border-default: var(--gio-accent);
                    --control-connected-background-hover: #b1f3de; --control-connected-border-hover: #b1f3de;
                    --control-critical-primary-background-default: #ff919b;
                    --checkbox-border-default: #586d75; --checkbox-background-selected-default: #387c67; --checkbox-border-selected-default: #7ce6c2;
                    --scrollbar-auto-scrollbar-color-thumb: #41575f; --ansi-bright-blue: #85cfff;
                    --ansi-green: #7ce6c2; --ansi-red: #ff919b; --ansi-bright-yellow: #f5cb89;
                    --radius-xs: 5px; --radius-sm: 12px; --radius-lg: 22px;
                    --font-primary: 'Segoe UI', system-ui, sans-serif;
                    width: min(540px, calc(100vw - 24px)); max-height: calc(100dvh - 40px);
                    top: 20px; right: 20px; border-color: #34464e;
                    box-shadow: 0 24px 90px #0009; background: #101719;
                }
                #orion-ui[data-accent="violet"] { --gio-accent: #c3adff; --gio-ink: #211934; }
                #orion-ui[data-accent="blue"] { --gio-accent: #8ed8ff; --gio-ink: #122633; }
                #orion-ui button, #orion-ui input, #orion-ui select { font-family: inherit; }
                #orion-ui button:focus-visible, #orion-ui input:focus-visible, #orion-ui select:focus-visible { outline: 2px solid var(--gio-accent); outline-offset: 3px; }
                #orion-ui #orion-head { padding: 18px 20px 14px; background: transparent; border: 0; gap: 8px; }
                #orion-ui #orion-title { gap: 10px; font-size: 18px; letter-spacing: -.5px; }
                #orion-ui .gio-monogram { background: var(--gio-accent); color: var(--gio-ink); width: 36px; height: 36px; display: grid; place-items: center; border-radius: 12px; font-weight: 900; font-size: 15px; letter-spacing: -1px; }
                #orion-ui .dev-credit { display: block; margin: 3px 0 0; padding: 0; font-size: 10px; font-weight: 600; letter-spacing: 1.8px; color: var(--gio-accent); }
                #orion-ui .ctrl-btn { border: 1px solid #34464e; border-radius: 8px; background: transparent; color: var(--text-muted); height: 28px; padding: 0 7px; font-size: 10px; }
                #orion-ui .ctrl-stop { color: #ff919b; }
                #orion-ui .ctrl-btn:hover { background: #26363c; color: white; }
                #orion-ui #orion-controls { gap: 5px; }
                #orion-ui .gio-hero { padding: 0 20px 15px; flex: 0 0 auto; }
                #orion-ui .gio-kicker { color: var(--text-muted); font-size: 10px; letter-spacing: 1.6px; display: flex; justify-content: space-between; }
                #orion-ui .gio-kicker span:first-child { color: var(--gio-accent); }
                #orion-ui .gio-heading { color: var(--text-strong); font-size: 25px; font-weight: 650; letter-spacing: -.8px; margin: 12px 0 6px; }
                #orion-ui .gio-caption { font-size: 12px; color: var(--text-muted); line-height: 1.5; margin: 0; }
                #orion-ui .gio-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 16px; }
                #orion-ui .gio-stat { border: 1px solid #2c3c43; border-radius: 12px; padding: 11px 12px; background: linear-gradient(135deg,#1c2a2e,#142024); }
                #orion-ui .gio-stat strong { display: block; font-size: 22px; color: var(--text-strong); font-weight: 600; font-variant-numeric: tabular-nums; }
                #orion-ui .gio-stat span { font-size: 9px; color: var(--text-muted); letter-spacing: 1px; text-transform: uppercase; }
                #orion-ui #orion-body { padding: 0 20px 16px; }
                #orion-ui #orion-picker-form { gap: 12px; }
                #orion-ui .gio-discovery { display: flex; gap: 8px; }
                #orion-ui .gio-search, #orion-ui .gio-sort { min-width: 0; border: 1px solid #34464e; border-radius: 10px; background: #0b1316; color: var(--text-default); padding: 10px; font-size: 12px; }
                #orion-ui .gio-search { flex: 1; width: 50%; }
                #orion-ui .gio-search::placeholder { color: #98abb3; }
                #orion-ui .gio-sort { width: 148px; }
                #orion-ui .gio-presets { display: flex; flex-wrap: wrap; gap: 6px; }
                #orion-ui .gio-chip { border: 1px solid #34464e; background: transparent; color: var(--text-muted); padding: 6px 10px; border-radius: 20px; font-size: 11px; cursor: pointer; }
                #orion-ui .gio-chip[aria-pressed="true"] { color: var(--gio-ink); background: var(--gio-accent); border-color: var(--gio-accent); }
                #orion-ui .picker-quest-list { gap: 9px; min-height: 100px; max-height: 36vh; }
                #orion-ui .quest-pick { padding: 13px 12px; gap: 11px; border-left-width: 1px; position: relative; background: #182328; }
                #orion-ui .quest-pick:has(input:checked) { border-color: #42665f; background: #1a2c2d; }
                #orion-ui .task-name { font-size: 13px; letter-spacing: 0; line-height: 1.5; }
                #orion-ui .task-meta { font-weight: 500; font-size: 10px; flex-wrap: wrap; line-height: 1.5; }
                #orion-ui .gio-type-icon { width: 34px; height: 34px; border-radius: 10px; background: #ffffff0b; display: grid; place-items: center; flex-shrink: 0; color: #b1c4ce; }
                #orion-ui .gio-type-icon svg { width: 19px; height: 19px; }
                #orion-ui .gio-expiry { font-size: 10px; color: var(--text-muted); margin-top: 5px; }
                #orion-ui .gio-expiry.urgent { color: #f5cb89; }
                #orion-ui .gio-favorite { flex-shrink: 0; cursor: pointer; border: 0; color: #a5b5bc; background: transparent; padding: 5px; font-size: 20px; border-radius: 6px; }
                #orion-ui .gio-favorite[aria-pressed="true"] { color: #f5cb89; }
                #orion-ui .native-cb { width: 17px; height: 17px; }
                #orion-ui .picker-actions { padding: 0; }
                #orion-ui .quest-pick-btn { min-height: 43px; font-size: 11px; letter-spacing: .4px; }
                #orion-ui .quest-pick-btn.start, #orion-ui .claim-btn { color: var(--gio-ink); }
                #orion-ui .orb-total { padding: 0; color: var(--gio-accent); font-size: 10px; }
                #orion-ui .gio-foot { padding: 10px 20px; border-top: 1px solid #293a41; display: flex; justify-content: space-between; gap: 8px; align-items: center; flex-shrink: 0; color: var(--text-muted); font-size: 9px; }
                #orion-ui .gio-foot strong { font-weight: 600; color: var(--gio-accent); }
                #orion-ui .gio-foot button { background: none; border: 0; color: var(--text-muted); font-size: 10px; cursor: pointer; padding: 3px; }
                #orion-ui #orion-logs { height: 92px; flex-shrink: 0; }
                #orion-ui .gio-progress { height: 4px; border-radius: 4px; background: #34464e; margin-top: 7px; overflow: hidden; }
                #orion-ui .gio-progress-fill { height: 100%; width: var(--p,0%); background: var(--gio-accent); transition: width .4s; }
                #orion-ui .task-card { padding: 14px; border-left-width: 2px; }
                #orion-ui[data-compact="true"] .quest-pick, #orion-ui[data-compact="true"] .task-card { padding: 8px 10px; }
                #orion-ui[data-compact="true"] .gio-type-icon, #orion-ui[data-compact="true"] .gio-caption { display: none; }
                #orion-ui[data-compact="true"] .gio-hero { padding-bottom: 10px; }
                #orion-ui[data-compact="true"] .gio-heading { font-size: 20px; margin-top: 8px; }
                #orion-ui[data-compact="true"] .gio-stats { margin-top: 10px; }
                #orion-ui.gio-collapsed > :not(#orion-head) { display: none !important; }
                #orion-ui .gio-options-hint { font-size: 11px; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5; }
                #orion-ui #orion-options-panel { overflow-y: auto; }
                #gio-launcher { position: fixed; right: 20px; bottom: 22px; z-index: 1001; border: 1px solid #7ce6c2; border-radius: 30px; padding: 12px 18px; color: #7ce6c2; background: #101719; cursor: pointer; font: 600 12px 'Segoe UI',sans-serif; box-shadow: 0 8px 30px #0006; }
                @media (max-width: 440px) {
                    #orion-ui { right: 12px; top: 12px; max-height: calc(100dvh - 24px); }
                    #orion-ui #orion-head { padding: 14px 12px; }
                    #orion-ui #orion-title { font-size: 15px; }
                    #orion-ui .gio-monogram { display: none; }
                    #orion-ui .gio-hero, #orion-ui #orion-body { padding-left: 12px; padding-right: 12px; }
                    #orion-ui .gio-foot { padding-left: 12px; padding-right: 12px; }
                    #orion-ui .gio-sort { width: 126px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    #orion-ui, #orion-ui * { animation: none !important; transition: none !important; scroll-behavior: auto; }
                }

`;
            style.textContent += `
                #orion-ui { width: min(390px, calc(100vw - 24px)); max-height: min(620px, calc(100dvh - 24px)); top: 12px; right: 12px; border-radius: 15px; }
                #orion-ui #orion-head { padding: 10px 12px; }
                #orion-ui #orion-title { font-size: 14px; gap: 8px; }
                #orion-ui .gio-logo { width: 36px; height: 36px; border-radius: 9px; object-fit: contain; flex-shrink: 0; background: #000; }
                #orion-ui .dev-credit { margin-top: 1px; font-size: 9px; letter-spacing: 1px; }
                #orion-ui .ctrl-btn { height: 25px; padding: 0 5px; font-size: 9px; border-radius: 6px; }
                #orion-ui .gio-hero { padding: 0 12px 8px; }
                #orion-ui .gio-kicker, #orion-ui .gio-heading, #orion-ui .gio-caption { display: none; }
                #orion-ui .gio-stats, #orion-ui[data-compact="true"] .gio-stats { margin: 0; gap: 5px; }
                #orion-ui .gio-stat { display: flex; align-items: baseline; gap: 5px; border: 0; padding: 5px 7px; border-radius: 6px; background: #1a272b; }
                #orion-ui .gio-stat strong { font-size: 14px; }
                #orion-ui .gio-stat span { font-size: 8px; letter-spacing: 0; }
                #orion-ui .gio-tabs { display: flex; gap: 14px; padding: 0 12px; border-bottom: 1px solid #293a41; margin-bottom: 9px; flex-shrink: 0; }
                #orion-ui .gio-tab { color: #9cafb6; cursor: pointer; background: none; border: 0; border-bottom: 2px solid transparent; padding: 7px 0; font-size: 11px; }
                #orion-ui .gio-tab[aria-selected="true"] { color: var(--gio-accent); border-bottom-color: var(--gio-accent); }
                #orion-ui #gio-reward-count { padding: 1px 5px; margin-left: 3px; border-radius: 5px; background: #283a3b; font-size: 9px; color: var(--gio-accent); }
                #orion-ui #orion-body { padding: 0 12px 10px; }
                #orion-ui #orion-picker-form { gap: 8px; }
                #orion-ui .gio-search, #orion-ui .gio-sort { padding: 7px 8px; font-size: 11px; border-radius: 7px; }
                #orion-ui .gio-sort { width: 118px; }
                #orion-ui .gio-chip { padding: 4px 8px; font-size: 10px; }
                #orion-ui .gio-presets { gap: 4px; }
                #orion-ui .picker-quest-list { gap: 6px; max-height: 230px; min-height: 60px; }
                #orion-ui .quest-pick, #orion-ui .task-card { padding: 8px 9px; border-radius: 8px; gap: 8px; }
                #orion-ui[data-compact="true"] .quest-pick, #orion-ui[data-compact="true"] .task-card { padding: 6px 8px; }
                #orion-ui .task-name { font-size: 11px; line-height: 1.4; }
                #orion-ui .task-meta { font-size: 9px; }
                #orion-ui .gio-expiry { font-size: 9px; margin-top: 2px; }
                #orion-ui .gio-type-icon { width: 26px; height: 26px; border-radius: 6px; }
                #orion-ui .gio-favorite { font-size: 17px; padding: 3px; }
                #orion-ui .native-cb { width: 15px; height: 15px; }
                #orion-ui .quest-pick-btn { min-height: 32px; padding: 6px; font-size: 10px; border-radius: 7px; }
                #orion-ui .orb-total { font-size: 9px; letter-spacing: 0; }
                #orion-ui .gio-foot { padding: 7px 12px; font-size: 9px; }
                #orion-ui .gio-foot button { font-size: 9px; }
                #orion-ui #orion-logs { height: 60px; padding: 7px 10px; font-size: 10px; }
                #orion-ui .task-icon { width: 32px; height: 32px; }
                #orion-ui .task-icon svg { width: 20px; height: 20px; }
                #orion-ui .task-card.running .task-icon::before { mask-image: radial-gradient(circle at center, transparent 12px, black 13px); }
                #orion-ui .claim-btn, #orion-ui .goto-btn { padding: 6px; font-size: 9px; }
                #orion-ui .gio-rewards { display: none; flex-direction: column; min-height: 0; padding: 0 12px 12px; }
                #orion-ui .gio-reward-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 8px; color: #9cafb6; font-size: 10px; }
                #orion-ui #gio-claim-all, #orion-ui .gio-reward-claim { background: var(--gio-accent); color: var(--gio-ink); border: 0; border-radius: 6px; padding: 7px 9px; font-size: 10px; font-weight: 600; cursor: pointer; white-space: nowrap; }
                #orion-ui button:disabled { opacity: .45; cursor: default; }
                #orion-ui #gio-reward-list { display: flex; flex-direction: column; gap: 6px; overflow-y: auto; max-height: 300px; }
                #orion-ui .gio-reward-card { display: flex; align-items: center; gap: 8px; padding: 9px; background: #18282a; border: 1px solid #33504a; border-radius: 8px; flex-shrink: 0; }
                #orion-ui .gio-reward-check { color: var(--gio-accent); font-size: 16px; }
                #orion-ui .gio-reward-note { color: #f5cb89; font-size: 9px; margin-top: 3px; }
                #orion-ui .gio-reward-open { background: #263940; color: #cfe2eb; border: 1px solid #445b64; border-radius: 6px; padding: 6px; font-size: 9px; cursor: pointer; }
                #orion-ui #gio-reward-status { color: #9cafb6; font-size: 10px; line-height: 1.5; margin-top: 7px; }
                #orion-ui #gio-reward-status:empty { display: none; }
                #orion-ui .gio-rewards-empty { text-align: center; padding: 22px 8px; font-size: 13px; color: var(--gio-accent); }
                #orion-ui .gio-rewards-empty span { display: block; margin-top: 5px; color: #9cafb6; font-size: 10px; }
                #orion-ui[data-tab="rewards"] #orion-body, #orion-ui[data-tab="rewards"] #gio-log-panel { display: none !important; }
                #orion-ui[data-tab="rewards"] #gio-rewards { display: flex; }

`;
            style.textContent += `
                #orion-ui #orion-head { flex-wrap: wrap; }
                #orion-ui #orion-controls { margin-left: auto; }
                #orion-ui #gio-stop-quests { color: #f5cb89; }
                #orion-ui #orion-options-panel { display: none; padding: 0 12px 10px; min-height: 0; flex: 1 1 auto; overflow-y: auto; }
                #orion-ui[data-options="true"] #orion-options-panel { display: block; }
                #orion-ui[data-options="true"] #orion-body, #orion-ui[data-options="true"] #gio-rewards, #orion-ui[data-options="true"] #gio-log-panel, #orion-ui[data-options="true"] .gio-tabs { display: none !important; }
                #orion-ui #orion-opts[aria-expanded="true"] { background: #294139; color: var(--gio-accent); border-color: #517e6e; }
                #orion-ui #orion-options-panel .picker-section-title { font-size: 10px; margin: 8px 0 7px; }
                #orion-ui #orion-options-panel .orion-option { padding: 7px 9px; border-radius: 7px; }
                #orion-ui #orion-options-panel .orion-option-label { font-size: 11px; }
                #orion-ui #orion-options-panel .gio-options-hint { font-size: 10px; margin: 8px 0 12px; }
                #orion-ui .gio-shortcut-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
                #orion-ui .gio-shortcut-row kbd { font: 11px 'Consolas', monospace; color: var(--gio-accent); background: #0b1316; border: 1px solid #34464e; border-radius: 6px; padding: 7px; }
                #orion-ui .gio-shortcut-row button, #orion-ui .gio-shortcut-actions button { cursor: pointer; background: #1a2529; color: var(--text-default); border: 1px solid #34464e; border-radius: 6px; padding: 6px 8px; font-size: 10px; }
                #orion-ui .gio-shortcut-actions { display: flex; gap: 6px; margin-top: 7px; }
                #orion-ui .task-card.stopped { --state-color: #9cafb6; opacity: .8; }
                #orion-ui #gio-log-panel { flex: 0 0 auto; min-width: 0; border-top: 1px solid #293a41; background: #0b1215; }
                #orion-ui .gio-log-toolbar { display: flex; gap: 6px; align-items: center; padding: 9px 12px 5px; }
                #orion-ui .gio-log-title { flex: 1; color: #c9dbdf; font-size: 10px; font-weight: 650; letter-spacing: .3px; }
                #orion-ui #gio-log-count { margin-left: 5px; color: #86a4ac; background: #1b2b30; padding: 1px 5px; border-radius: 4px; font-size: 9px; }
                #orion-ui .gio-log-toolbar button, #orion-ui #gio-log-latest { border: 1px solid #30464e; background: #18272c; color: #bdd0d7; border-radius: 5px; padding: 4px 7px; font-size: 9px; cursor: pointer; white-space: nowrap; }
                #orion-ui .gio-log-search-row { display: flex; gap: 6px; padding: 0 12px 7px; }
                #orion-ui #gio-log-search { flex: 1; min-width: 0; color: #d6e4e8; border: 1px solid #263c44; background: #101c21; border-radius: 5px; padding: 5px 7px; font: 10px 'Segoe UI', sans-serif; }
                #orion-ui #gio-log-search::placeholder { color: #7e9aa5; }
                #orion-ui #gio-log-latest { color: var(--gio-accent); }
                #orion-ui #gio-log-latest[hidden] { display: none; }
                #orion-ui #orion-logs { height: 108px; max-height: 23dvh; padding: 0 10px 8px; border: 0; overflow: auto; scroll-behavior: auto; scrollbar-width: thin; scrollbar-color: #35535a #0b1215; user-select: text; overflow-anchor: none; }
                #orion-ui #gio-log-panel[data-expanded="true"] #orion-logs { height: 260px; max-height: 40dvh; }
                #orion-ui #orion-logs .log-item { display: block; min-width: 0; margin: 0 0 5px; padding: 7px 9px; line-height: 1.55; border: 1px solid #25373e; border-left: 2px solid var(--log-color); border-radius: 6px; background: #111d22; color: #c6d6dc; --log-color: #83b6d2; }
                #orion-ui #orion-logs .c-success { --log-color: #7ce6c2; }
                #orion-ui #orion-logs .c-warn { --log-color: #f5cb89; }
                #orion-ui #orion-logs .c-err { --log-color: #f58d9c; }
                #orion-ui #orion-logs .c-debug { --log-color: #91a5ae; }
                #orion-ui .gio-log-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 3px; }
                #orion-ui .gio-log-level { color: var(--log-color); font: 600 8px 'Segoe UI', sans-serif; letter-spacing: .7px; }
                #orion-ui #orion-logs .log-ts { color: #7f9aa5; opacity: 1; min-width: 0; font-size: 8px; }
                #orion-ui .gio-log-message { font: 10px/1.55 'Consolas', 'Monaco', monospace; white-space: pre-wrap; overflow-wrap: anywhere; word-break: normal; }
                #orion-ui .gio-log-empty { padding: 14px 4px; color: #7f9aa5; font-size: 10px; }

`;
            document.head.appendChild(style);

            this.root = document.createElement('div');
            this.root.id = 'orion-ui';
            this.root.innerHTML = `
                <div id="orion-head">
                    <span id="orion-title"><img class="gio-logo" src="${GIO_LOGO}" alt="Gio puppy logo"><span>Quest Studio<span class="dev-credit">By Gio</span></span></span>
                    <div id="orion-controls">
                        <button type="button" class="ctrl-btn ctrl-opts" id="orion-opts" aria-label="Quest options" aria-expanded="false" aria-controls="orion-options-panel" title="Quest options">OPTIONS</button>
                        <button type="button" class="ctrl-btn" id="gio-stop-quests" title="Stop quest execution; keep dashboard and rewards" disabled>STOP QUESTS</button>
                        <button type="button" class="ctrl-btn ctrl-stop" id="orion-stop" title="End the entire session and remove the dashboard">TERMINATE</button>
                    </div>
                </div>
                <div class="gio-hero">
                    <div class="gio-kicker"><span>YOUR QUEST CONTROL ROOM</span><span id="gio-session-state">READY WHEN YOU ARE</span></div>
                    <div class="gio-heading" id="gio-heading">Make your next move.</div>
                    <p class="gio-caption" id="gio-caption">Pick your quests. Keep an eye on every reward.</p>
                    <div class="gio-stats">
                        <div class="gio-stat"><strong>0</strong><span>Available</span></div>
                        <div class="gio-stat"><strong>0</strong><span>Selected</span></div>
                        <div class="gio-stat"><strong>0</strong><span>Selected Orbs</span></div>
                    </div>
                </div>
                <section id="orion-options-panel" aria-label="Quest options">
                    <div class="picker-section-title">Session settings</div>
                    <div class="picker-options">
                        <label class="orion-option"><span class="orion-option-label">Auto-enroll</span><input type="checkbox" class="native-toggle" data-runtime-option="autoEnroll" aria-label="Auto-enroll in quests" checked></label>
                        <label class="orion-option"><span class="orion-option-label">Auto-claim rewards</span><input type="checkbox" class="native-toggle" data-runtime-option="autoClaim" aria-label="Auto-claim rewards"></label>
                        <label class="orion-option"><span class="orion-option-label">Completion sound</span><input type="checkbox" class="native-toggle" data-runtime-option="playSound" aria-label="Sound on completion"></label>
                        <label class="orion-option"><span class="orion-option-label">Idle gaps between cycles</span><input type="checkbox" class="native-toggle" data-runtime-option="randomDelay" aria-label="Random delay between cycles"></label>
                    </div>
                    <div class="gio-options-hint">Changes apply to future actions. An idle gap already underway can be cancelled with Stop quests.</div>
                    <div class="picker-section-title">Hide / show shortcut</div>
                    <div class="gio-shortcut-row"><kbd id="gio-hide-binding"></kbd><button type="button" id="gio-bind-hide">Set shortcut</button></div>
                    <div class="gio-shortcut-actions"><button type="button" id="gio-clear-hide">Clear</button><button type="button" id="gio-reset-hide">Reset to Shift + .</button></div>
                    <div class="gio-options-hint" id="gio-binding-hint" role="status"></div>
                    <div id="gio-picker-filters"></div>
                </section>
                <div class="gio-tabs" role="tablist" aria-label="Quest views">
                    <button type="button" class="gio-tab" id="gio-tab-quests" role="tab" aria-selected="true" aria-controls="orion-body" data-tab="quests">Quests</button>
                    <button type="button" class="gio-tab" id="gio-tab-rewards" role="tab" aria-selected="false" aria-controls="gio-rewards" data-tab="rewards">Unclaimed <span id="gio-reward-count">0</span></button>
                </div>
                <div class="gio-rewards" id="gio-rewards" role="tabpanel" aria-labelledby="gio-tab-rewards">
                    <div class="gio-reward-toolbar"><span>Completed · Ready to collect</span><button type="button" id="gio-claim-all" disabled>Claim all</button></div>
                    <div id="gio-reward-list"></div>
                    <div id="gio-reward-status" role="status" aria-live="polite"></div>
                </div>
                <div id="orion-body" role="tabpanel" aria-labelledby="gio-tab-quests"><div style="text-align:center; padding:30px; color:var(--text-muted); font-size:12px; font-weight:500;">Initializing System...</div></div>
                <section id="gio-log-panel" aria-label="Session logs" data-expanded="false">
                    <div class="gio-log-toolbar"><span class="gio-log-title">Session log <span id="gio-log-count">0</span></span><button type="button" id="gio-log-expand" aria-expanded="false" aria-controls="orion-logs">Expand</button><button type="button" id="gio-log-clear">Clear</button></div>
                    <div class="gio-log-search-row"><input type="search" id="gio-log-search" placeholder="Search full session…" aria-label="Search session logs"><button type="button" id="gio-log-latest" hidden>Latest ↓</button></div>
                    <div id="orion-logs" role="log" aria-label="Session log" tabindex="0"></div>
                </section>
                <div class="gio-foot"><strong>By Gio</strong><span>
                    <button id="gio-accent" type="button" title="Cycle mint, violet and blue accents">Accent</button>
                    <button id="gio-compact" type="button" aria-pressed="false">Compact</button>
                    <button id="gio-export" type="button">Export log</button>
                </span></div>
            `;
            this.root.dataset.tab = 'quests';
            this.root.setAttribute('role', 'region');
            this.root.setAttribute('aria-label', 'Quest Studio By Gio');
            document.body.appendChild(this.root);
            this.applyAppearance();
            this.root.querySelector('#gio-accent').onclick = () => {
                const accents = ['mint', 'violet', 'blue'];
                GioPrefs.value.accent = accents[(accents.indexOf(GioPrefs.value.accent) + 1) % accents.length];
                GioPrefs.save(); this.applyAppearance();
            };
            this.root.querySelector('#gio-compact').onclick = () => {
                GioPrefs.value.compact = !GioPrefs.value.compact;
                GioPrefs.save(); this.applyAppearance();
            };
            this.root.querySelector('#gio-export').onclick = () => this.exportLog();
            const logBox = this.root.querySelector('#orion-logs');
            logBox.addEventListener('scroll', () => {
                if (!logBox.clientHeight) return;
                this._logFollowing = logBox.scrollHeight - logBox.clientHeight - logBox.scrollTop < 12;
                if (this._logFollowing) this._logUnread = 0;
                this.updateLogTools();
            });
            this.root.querySelector('#gio-log-search').value = this._logQuery;
            this.root.querySelector('#gio-log-search').oninput = e => {
                this._logQuery = e.target.value.trim().toLowerCase(); this.renderLogs();
            };
            this.root.querySelector('#gio-log-latest').onclick = () => this.followLatestLog();
            this.root.querySelector('#gio-log-clear').onclick = () => {
                this.logHistory.length = 0; this.renderLogs();
            };
            this.root.querySelector('#gio-log-expand').onclick = e => {
                const panel = this.root.querySelector('#gio-log-panel');
                const expanded = panel.dataset.expanded !== 'true';
                panel.dataset.expanded = String(expanded);
                e.currentTarget.setAttribute('aria-expanded', String(expanded));
                e.currentTarget.textContent = expanded ? 'Collapse' : 'Expand';
                if (this._logFollowing) logBox.scrollTop = logBox.scrollHeight;
            };
            this.renderLogs();
            const oldLauncher = document.getElementById('gio-launcher');
            if (oldLauncher) oldLauncher.remove();
            this.launcher = document.createElement('button');
            this.launcher.id = 'gio-launcher'; this.launcher.textContent = 'Quest Studio · By Gio';
            this.launcher.style.display = 'none'; this.launcher.onclick = () => this.toggle();
            document.body.appendChild(this.launcher);

            const keepInView = () => {
                if (!this.root?.isConnected || this.root.style.display === 'none') return;
                const rect = this.root.getBoundingClientRect();
                if (this.root.style.left) this.root.style.left = `${Math.max(0, Math.min(rect.left, window.innerWidth - rect.width))}px`;
                this.root.style.top = `${Math.max(0, Math.min(rect.top, window.innerHeight - Math.min(rect.height, window.innerHeight)))}px`;
            };
            window.addEventListener('resize', keepInView);
            RUNTIME.cleanups.add(() => window.removeEventListener('resize', keepInView));

            const head = document.getElementById('orion-head');

            let collapsed = false;
            head.addEventListener('dblclick', e => {
                if (e.target.closest('.ctrl-btn')) return;
                collapsed = !collapsed;
                this.root.classList.toggle('gio-collapsed', collapsed);
            });

            head.addEventListener('mousedown', e => {
                if (e.target.closest('.ctrl-btn')) return;

                head.classList.add('dragging');

                const startX = e.clientX, startY = e.clientY;
                const rect = this.root.getBoundingClientRect();
                const initialLeft = rect.left, initialTop = rect.top;

                this.root.style.left = `${initialLeft}px`;
                this.root.style.top = `${initialTop}px`;
                this.root.style.right = 'auto';
                e.preventDefault();

                const onMouseMove = ev => {
                    this.root.style.left = `${Math.max(0, Math.min(initialLeft + (ev.clientX - startX), window.innerWidth - this.root.offsetWidth))}px`;
                    this.root.style.top = `${Math.max(0, Math.min(initialTop + (ev.clientY - startY), window.innerHeight - 50))}px`;
                };

                const onMouseUp = () => {
                    head.classList.remove('dragging');
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                    RUNTIME.cleanups.delete(removeDrag);
                };

                const removeDrag = () => { document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mouseup', onMouseUp); };
                RUNTIME.cleanups.add(removeDrag);
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
            });

            this.root.addEventListener('click', e => {
                const button = e.target.closest('button');
                if (!button || button.disabled) return;
                if (button.matches('.gio-tab')) { this.showTab(button.dataset.tab); return; }
                if (button.id === 'gio-claim-all') { void Rewards.claimAll(); return; }
                if (button.matches('.claim-btn, .gio-reward-claim')) { void Rewards.claimOne(button.dataset.id); return; }
                if (button.matches('.goto-btn, .gio-reward-open')) {
                    if (Mods.Router) Mods.Router.transitionTo('/quest-home');
                    else this.log('[Claim] Open Discord Quests to complete the claim.', 'info');
                }
            });
            Rewards.render();

            document.getElementById('orion-stop').onclick = () => this.shutdown();
            document.getElementById('gio-stop-quests').onclick = () => {
                if (RUNTIME.running) this.stopQuests();
                else void QuestRunner.start();
            };
            this.root.querySelector('#orion-opts').onclick = () => this.toggleOptions();
            this.root.querySelector('#gio-bind-hide').onclick = () => { this._bindingCapture = !this._bindingCapture; this.renderHideBinding(); };
            this.root.querySelector('#gio-clear-hide').onclick = () => { this._bindingCapture = false; GioPrefs.value.hideBinding = null; GioPrefs.save(); this.renderHideBinding(); };
            this.root.querySelector('#gio-reset-hide').onclick = () => { this._bindingCapture = false; GioPrefs.value.hideBinding = { ...HideKeys.defaults }; GioPrefs.save(); this.renderHideBinding(); };
            this.root.addEventListener('change', e => {
                const key = e.target.dataset.runtimeOption;
                if (['autoEnroll', 'autoClaim', 'playSound', 'randomDelay'].includes(key)) RUNTIME[key] = e.target.checked;
            });
            this._hotkey = e => {
                if (this._bindingCapture) {
                    e.preventDefault(); e.stopPropagation();
                    if (e.key === 'Escape') { this._bindingCapture = false; this.renderHideBinding(); return; }
                    const binding = HideKeys.fromEvent(e);
                    if (!binding || e.repeat) return;
                    GioPrefs.value.hideBinding = binding; GioPrefs.save();
                    this._bindingCapture = false; this.renderHideBinding();
                    return;
                }
                if (e.defaultPrevented || e.repeat || e.target?.closest?.('input, textarea, select, [contenteditable="true"], [role="textbox"]')) return;
                if (HideKeys.matches(e, GioPrefs.value.hideBinding)) { e.preventDefault(); this.toggle(); }
            };
            document.addEventListener('keydown', this._hotkey);
            this.renderHideBinding();

            this.startTicker();
        },

        showTab(tab) {
            this.toggleOptions(false);
            this.root.dataset.tab = tab;
            this.root.querySelectorAll('.gio-tab').forEach(button => button.setAttribute('aria-selected', String(button.dataset.tab === tab)));
            if (tab === 'rewards') { Rewards.sync(); Rewards.render(); }
            if (tab === 'quests' && this._logFollowing) this.followLatestLog();
        },

        toggle() {
            if (!this.root?.parentElement) return;
            const visible = this.root.style.display === 'none';
            this.root.style.display = visible ? 'flex' : 'none';
            if (this.launcher) this.launcher.style.display = visible ? 'none' : 'block';
            if (visible && this._logFollowing) this.followLatestLog();
        },

        shutdown() {
            if (!RUNTIME.alive) return;
            RUNTIME.alive = false;
            this.stopQuests(true);
            this._bindingCapture = false;
            this.launcher?.remove();
            this.log("[System] Stopping script & cleaning up...", "warn");

            if (this.tickerId) clearInterval(this.tickerId);
            if (this._hotkey) { document.removeEventListener('keydown', this._hotkey); this._hotkey = null; }

            for (const cleanupFn of RUNTIME.cleanups) {
                try { cleanupFn(); } catch (e) { this.log(`[Cleanup] ${e.message}`, 'debug'); }
            }
            RUNTIME.cleanups.clear();

            window.orionLock = false;

            const styles = document.getElementById('orion-styles');
            const root = this.root;
            setTimeout(() => {
                if (styles?.parentElement) styles.remove();
                if (root?.parentElement) root.remove();
            }, 1000);
        },

        _getPct(t) {
            if (t.done) return 100;
            if (t.pending || t.failed || !t.max) return 0;
            return Math.min(100, (t.cur / t.max) * 100);
        },

        SERVER_DRIVEN: ["GAME", "STREAM"],

        startTicker() {
            if (this.tickerId) clearInterval(this.tickerId);
            this.tickerId = setInterval(() => {
                if (!RUNTIME.alive) return clearInterval(this.tickerId);
                if (!RUNTIME.running) return;
                for (const [id, task] of this.tasks.entries()) {
                    if (task.status !== "RUNNING" || task.type === "ACHIEVEMENT") continue;

                    let cur;
                    if (this.SERVER_DRIVEN.includes(task.type)) {
                        if (task.serverAt == null) continue;
                        cur = Math.min(task.serverCur + (Date.now() - task.serverAt) / 1000, task.max);
                    } else {
                        cur = Math.min(task.cur + 1, task.max);
                    }
                    this.updateTask(id, { cur });
                }
            }, 1000);
        },

        updateTask(id, data) {
            if (!RUNTIME.alive) return;
            const oldData = this.tasks.get(id);
            if (!RUNTIME.running && ['RUNNING', 'PENDING', 'QUEUE', 'FAILED'].includes(data.status)) return;
            if (!RUNTIME.running && oldData?.status === 'STOPPED' && !data.status) return;
            if (Rewards.claimed.has(id)) data = { ...data, status: 'CLAIMED', claimable: false, claimState: null };
            const status = data.status ?? oldData?.status;
            const isPending = status === "PENDING" || status === "QUEUE";
            const isDone = status === "COMPLETED" || status === "CLAIMED";
            const isFailed = status === "FAILED";

            const newData = { ...oldData, ...data, done: isDone, pending: isPending, failed: isFailed };
            this.tasks.set(id, newData);
            this.records.set(id, newData);
            Rewards.track(id, newData);
            this.updateSummary();

            if (oldData && oldData.status === newData.status && oldData.removing === newData.removing &&
                oldData.claimable === newData.claimable && oldData.claimState === newData.claimState &&
                oldData.actionRequired === newData.actionRequired) {

                const card = document.getElementById(`orion-task-${esc(id)}`);
                if (card) {
                    const pct = this._getPct(newData);

                    const iconContainer = card.querySelector('.task-icon');
                    if (iconContainer) iconContainer.style.setProperty('--p', `${pct}%`);

                    const bar = card.querySelector('.gio-progress-fill');
                    if (bar) bar.style.setProperty('--p', `${pct}%`);
                    const overlay = card.querySelector('.task-icon-overlay');
                    if (overlay) overlay.textContent = `${Math.floor(pct)}%`;

                    const progressText = card.querySelector('.progress-text');
                    if (progressText) {
                        const unit = newData.type === 'ACHIEVEMENT' ? '' : 's';
                        progressText.textContent = `${Math.min(Math.floor(newData.cur), newData.max)} / ${newData.max}${unit}`;
                    }
                    return;
                }
            }
            this.render();
        },

        removeTask(id) {
            if (this.tasks.has(id)) {
                this.tasks.get(id).removing = true;
                this.render();
                setTimeout(() => { this.tasks.delete(id); this.render(); }, 500);
            }
        },

        log(msg, type = 'info') {
            const colors = { info: "#5865F2", success: "#3BA55C", warn: "#faa61a", err: "#f04747", debug: "#999" };
            if (!Object.hasOwn(colors, type)) type = 'info';
            console.log(`%c[By Gio] %c${msg}`, `color: ${CONFIG.THEME}; font-weight: bold;`, `color: ${colors[type] || colors.info}`);
            const entry = { time: new Date().toISOString(), type, message: String(msg) };
            this.logHistory.push(entry);
            try {
                const box = this.root?.querySelector('#orion-logs');
                if (box && this.matchesLog(entry)) {
                    box.querySelector('.gio-log-empty')?.remove();
                    box.appendChild(this.createLogRow(entry)); this._logVisibleCount++;
                    if (this._logFollowing) box.scrollTop = box.scrollHeight;
                    else this._logUnread++;
                }
                this.updateLogTools();
            } catch (e) { console.debug('[Logger] DOM error:', e.message); }
        },

        render() {
            if (document.getElementById('orion-picker-form')) return;
            const body = document.getElementById('orion-body');
            if (!body) return;
            if (!this.tasks.size && !RUNTIME.running) return body.innerHTML = '<div class="gio-rewards-empty">Quests stopped.<span>Options and unclaimed rewards are still available.</span></div>';
            if (!this.tasks.size) return body.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted); font-size:13px;">Waiting for tasks...</div>`;

            const sorted = [...this.tasks.entries()].sort((a, b) => {
                const ta = a[1], tb = b[1];
                if (ta.done !== tb.done) return ta.done ? 1 : -1;
                if (ta.failed !== tb.failed) return ta.failed ? 1 : -1;
                if (ta.pending !== tb.pending) return ta.pending ? 1 : -1;

                if (!ta.done && !ta.pending && !tb.done && !tb.pending) {
                    const pctA = ta.max ? ta.cur / ta.max : 0;
                    const pctB = tb.max ? tb.cur / tb.max : 0;
                    return pctB - pctA;
                }
                return 0;
            });

            body.innerHTML = sorted.map(([id, t]) => {
                const pct = this._getPct(t).toFixed(1);

                const icon =
                    t.done ? ICONS.CHECK :
                    t.failed ? ICONS.STOP :
                    t.pending ? ICONS.CLOCK :
                    t.type === 'VIDEO' ? ICONS.VIDEO :
                    t.type === 'ACHIEVEMENT' ? ICONS.ACTIVITY :
                    t.type?.includes('GAME') ? ICONS.GAME :
                    t.type?.includes('STREAM') ? ICONS.STREAM :
                    ICONS.BOLT;

                let statusText = t.status === 'CLAIMED' ? 'CLAIMED' : t.done ? 'COMPLETED' : t.status;
                let progressLabel = t.status === 'STOPPED' ? 'Stopped' : t.pending ? 'In Queue' : t.failed ? 'Aborted' : 'Progress';
                const unit = t.type === 'ACHIEVEMENT' ? '' : 's';

                let actionBtn = '';

                if (t.claimable) {
                    if (t.claimState === 'WAITING') actionBtn = `<button class="claim-btn" disabled>WAITING...</button>`;
                    else if (t.claimState === 'FAILED') actionBtn = `<button class="goto-btn">OPEN QUESTS</button>`;
                    else actionBtn = `<button class="claim-btn" data-id="${esc(id)}">CLAIM REWARD</button>`;
                } else if (t.actionRequired === 'ENROLL') {
                    statusText = 'ACTION REQUIRED'; progressLabel = 'Accept quest in Discord';
                    actionBtn = `<button class="goto-btn">GO TO QUESTS</button>`;
                } else if (t.type === 'ACHIEVEMENT' && t.status === 'RUNNING') {
                    statusText = 'ACTION REQUIRED'; progressLabel = 'Please, complete manually';
                    actionBtn = `<button class="goto-btn">GO TO QUESTS</button>`;
                }

                const stateClass = t.done ? 'done' : t.failed ? 'failed' : t.status === 'STOPPED' ? 'stopped' : t.pending ? 'pending' : 'running';
                const removingClass = t.removing ? 'removing' : '';

                let taskMetaHtml = '';
                if (!t.done) {
                    taskMetaHtml = `
                    <div class="task-meta">
                        <span>${progressLabel}</span>
                        ${actionBtn ? '' : `<span class="progress-text">${Math.min(Math.floor(t.cur), t.max)} / ${t.max}${unit}</span>`}
                    </div>`;
                }

                return `
                <div id="orion-task-${esc(id)}" class="task-card ${stateClass} ${removingClass}">
                    <div class="task-icon" style="--p: ${pct}%">
                        <div class="task-icon-inner">${icon}</div>
                        ${stateClass === 'running' ? `<div class="task-icon-overlay">${Math.floor(pct)}%</div>` : ''}
                    </div>
                    <div class="task-info">
                        <div class="task-status">${esc(statusText)}</div>
                        <div class="task-name" title="${esc(t.name)}">${esc(t.name)}</div>
                        ${taskMetaHtml}
                        <div class="gio-progress"><div class="gio-progress-fill" style="--p:${pct}%"></div></div>
                    </div>
                    ${actionBtn ? `<div class="task-actions">${actionBtn}</div>` : ''}
                </div>`;
            }).join('');
        },

        showQuestPicker(quests) {
            return new Promise((resolve) => {
                const body = document.getElementById('orion-body');
                const logs = document.getElementById('gio-log-panel');

                let settled = false;
                const closePicker = (data) => {
                    if (settled) return;
                    settled = true; this._pickerCancel = null;
                    const filters = this.root?.querySelector('#gio-picker-filters');
                    if (filters) { filters.onclick = null; filters.innerHTML = ''; }
                    if (logs) logs.style.display = 'block';
                    if (body) { body.classList.remove('picker-mode'); body.innerHTML = ''; }
                    if (data.selectedQuests.size > 0) {
                        this.root.querySelector('#gio-heading').textContent = 'Your session, in motion.';
                        this.root.querySelector('#gio-caption').textContent = 'Stop or resume quests anytime. TERMINATE closes the dashboard.';
                        this.root.querySelector('#gio-session-state').textContent = 'SESSION';
                        this.beginQuests(data.selectedQuests);
                    }
                    this.updateSummary();
                    resolve(data);
                };
                this._pickerCancel = () => closePicker({ selectedQuests: new Set(), autoEnroll: false, autoClaim: false, playSound: false, randomDelay: false });

                if (!body) return closePicker({ selectedQuests: new Set(), autoEnroll: false, autoClaim: false, playSound: false });
                if (logs) logs.style.display = 'none';

                const items = [];
                const rewardTypes = new Map();
                const questTypes = new Set();

                const boosted = canUseMoreQuestOrbs();

                const REWARD_META = { 1: { label: "IN-GAME", color: "#e67e22" }, 3: { label: "AVATAR DECORATION", color: "#a358f2" }, 4: { label: "ORBS", color: "#5865F2" } };
                const REWARD_FALLBACK = { label: "OTHER", color: "#949ba4" };

                quests.forEach(q => {
                    const cfg = selectTaskConfig(q.config);
                    if (!cfg?.tasks) return;

                    const typeData = Tasks.detectType(cfg, q.config?.application?.id);
                    if (!typeData) return;

                    if (!SYS.IS_DESKTOP && (typeData.type === 'GAME' || typeData.type === 'STREAM')) return;

                    const rw = q.config?.rewardsConfig?.rewards?.[0];
                    const orbs = orbReward(q.config);

                    const rewardType = orbs ? 4 : (rw?.type ?? 0);
                    const rewardText = rw?.messages?.name ?? "Unknown Reward";

                    const meta = REWARD_META[rewardType] ?? REWARD_FALLBACK;

                    const displayType = typeData.type === 'WATCH_VIDEO' ? 'VIDEO' : typeData.type;
                    questTypes.add(displayType);

                    if (!rewardTypes.has(rewardType)) {
                        rewardTypes.set(rewardType, { label: meta.label, count: 0, type: rewardType, color: meta.color });
                    }
                    rewardTypes.get(rewardType).count++;

                    items.push({
                        id: q.id,
                        name: q.config?.messages?.questName ?? "Unknown Quest",
                        type: displayType,
                        rewardType,
                        rewardText,
                        expiry: GioPrefs.expiry(q.config?.expiresAt),
                        orbs: orbPayout(orbs, boosted),
                        orbText: fmtOrbs(orbs, boosted),
                        color: meta.color
                    });
                });

                if (!items.length) return closePicker({ selectedQuests: new Set(), autoEnroll: false, autoClaim: false, playSound: false });

                const buildCard = (q) => `
                    <label class="quest-pick" data-id="${esc(q.id)}" data-rt="${q.rewardType}" data-qt="${esc(q.type)}" data-orbs="${q.orbs}" data-search="${esc(`${q.name} ${q.rewardText} ${q.type}`.toLowerCase())}">
                        <input type="checkbox" name="quests" value="${esc(q.id)}" aria-label="Select ${esc(q.name)}" class="native-cb" checked>
                        <span class="gio-type-icon">${ICONS[q.type] || ICONS.ACTIVITY}</span>
                        <div class="task-info">
                            <div class="task-name" title="${esc(q.name)}">${esc(q.name)}</div>
                            <div class="task-meta" style="justify-content:flex-start;gap:8px;">
                                <span>${esc(q.type)}</span>
                                <span style="color:var(--gio-accent)">${esc(q.orbText || q.rewardText)}</span>
                            </div>
                            <div class="gio-expiry ${q.expiry.urgent ? 'urgent' : ''}">${esc(q.expiry.text)}</div>
                        </div>
                        <button type="button" class="gio-favorite" data-id="${esc(q.id)}" aria-label="Favorite ${esc(q.name)}" aria-pressed="${GioPrefs.value.favorites.includes(q.id)}" title="Toggle favorite">${GioPrefs.value.favorites.includes(q.id) ? '★' : '☆'}</button>
                    </label>`;

                const filters = this.root.querySelector('#gio-picker-filters');
                filters.innerHTML = `
                            ${rewardTypes.size > 1 ? `
                                <div class="picker-section-title">Filter By Reward</div>
                                <div class="reward-filters">
                                    ${[...rewardTypes.values()].map(rt => `<button type="button" class="reward-filter" data-rt="${rt.type}" style="color: ${rt.color}; border-color: ${rt.color};">${rt.label} (${rt.count})</button>`).join('')}
                                </div>
                            ` : ''}
                            ${questTypes.size > 1 ? `
                                <div class="picker-section-title">Filter By Type</div>
                                <div class="reward-filters">
                                    ${[...questTypes].map(t => `<button type="button" class="type-filter" data-qt="${t}">${t}</button>`).join('')}
                                </div>
                            ` : ''}
`;

                body.innerHTML = `
                    <form id="orion-picker-form">
                        <div class="gio-discovery">
                            <input id="gio-search" class="gio-search" type="search" placeholder="Search quests or rewards…" aria-label="Search quests or rewards" autocomplete="off">
                            <select id="gio-sort" class="gio-sort" aria-label="Sort quests"><option value="expiry">Ending soon</option><option value="reward">Most Orbs</option><option value="name">A to Z</option><option value="favorites">Favorites first</option></select>
                        </div>
                        <div class="gio-presets" role="group" aria-label="Quick filters">
                            <button type="button" class="gio-chip" data-preset="all" aria-pressed="true">All quests</button>
                            <button type="button" class="gio-chip" data-preset="orbs" aria-pressed="false">Orbs</button>
                            <button type="button" class="gio-chip" data-preset="video" aria-pressed="false">Videos</button>
                            <button type="button" class="gio-chip" data-preset="favorites" aria-pressed="false">★ Favorites</button>
                        </div>
                        <div id="orion-quest-list" class="picker-quest-list">${items.map(buildCard).join('')}
                            <div id="orion-no-quests" style="display: none; margin: auto; text-align: center; color: var(--text-muted); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                                No matches. Try another search or filter.
                            </div>
                        </div>

                        <div id="orion-orb-total" class="orb-total"></div>

                        <div class="picker-actions">
                            <button type="button" class="quest-pick-btn deselect" id="select-all-btn">DESELECT ALL</button>
                            <button type="submit" class="quest-pick-btn start" id="start-btn">${ICONS.BOLT} <span id="start-btn-text">START (${items.length})</span></button>
                        </div>
                    </form>`;

                const form = document.getElementById('orion-picker-form');
                const selectAllBtn = document.getElementById('select-all-btn');
                const startBtn = document.getElementById('start-btn');

                const getVisibleCheckboxes = () => Array.from(form.querySelectorAll('.quest-pick input[type="checkbox"]'))
                    .filter(cb => !cb.closest('.quest-pick').classList.contains('hidden'));

                let balanceText = '';

                const syncUI = () => {
                    if (settled) return;
                    const visibleCbs = getVisibleCheckboxes();
                    const totalChecked = visibleCbs.filter(cb => cb.checked).length;
                    const selectedOrbs = visibleCbs.filter(cb => cb.checked).reduce((sum, cb) => sum + Number(cb.closest('.quest-pick').dataset.orbs || 0), 0);
                    this.setStats([[visibleCbs.length, 'Visible quests'], [totalChecked, 'Selected'], [selectedOrbs.toLocaleString(), 'Selected Orbs']]);

                    const orbTotal = document.getElementById('orion-orb-total');
                    if (orbTotal) {
                        const picked = visibleCbs.filter(cb => cb.checked).map(cb => cb.closest('.quest-pick'));
                        const orbs = picked.reduce((total, el) => total + (Number(el?.getAttribute('data-orbs')) || 0), 0);
                        const selectedText = orbs > 0 ? `${orbs} Orbs selected` : '';
                        const text = [selectedText, balanceText].filter(Boolean).join(' · ');
                        orbTotal.textContent = text;
                        orbTotal.style.display = text ? 'block' : 'none';
                    }

                    const startBtnText = document.getElementById('start-btn-text');
                    if (startBtnText) startBtnText.textContent = `START (${totalChecked})`;
                    startBtn.disabled = totalChecked === 0;

                    if (visibleCbs.length === 0) {
                        selectAllBtn.disabled = true;
                        selectAllBtn.textContent = 'SELECT ALL';
                    } else {
                        selectAllBtn.disabled = false;
                        selectAllBtn.textContent = visibleCbs.every(cb => cb.checked) ? 'DESELECT ALL' : 'SELECT ALL';
                    }

                    const noQuestsMsg = document.getElementById('orion-no-quests');
                    if (noQuestsMsg) {
                        noQuestsMsg.style.display = visibleCbs.length === 0 ? 'block' : 'none';
                    }
                };

                form.addEventListener('change', (e) => { if (e.target.name === 'quests') syncUI(); });

                const activeRewards = new Set([...rewardTypes.keys()].map(String));
                const activeTypes = new Set([...questTypes]);

                let preset = 'all';
                const search = form.querySelector('#gio-search');
                const sort = form.querySelector('#gio-sort');
                sort.value = GioPrefs.value.sort;
                const sortCards = () => {
                    const list = form.querySelector('#orion-quest-list');
                    const cards = new Map([...list.querySelectorAll('.quest-pick')].map(el => [el.dataset.id, el]));
                    [...items].sort((a,b) => GioPrefs.compare(a,b,sort.value)).forEach(item => list.appendChild(cards.get(item.id)));
                    list.appendChild(form.querySelector('#orion-no-quests'));
                };
                const applyFilters = () => {
                    form.querySelectorAll('.quest-pick').forEach(el => {
                        const rt = el.getAttribute('data-rt');
                        const qt = el.getAttribute('data-qt');
                        const matchSearch = el.dataset.search.includes(search.value.trim().toLowerCase());
                        const matchPreset = preset === 'all' || (preset === 'orbs' && Number(el.dataset.orbs) > 0) || (preset === 'video' && qt === 'VIDEO') || (preset === 'favorites' && GioPrefs.value.favorites.includes(el.dataset.id));
                        el.classList.toggle('hidden', !(activeRewards.has(rt) && activeTypes.has(qt) && matchSearch && matchPreset));
                    });
                    syncUI();
                };

                search.addEventListener('input', applyFilters);

                search.addEventListener('keydown', e => { if (e.key === 'Enter') e.preventDefault(); });
                sort.addEventListener('change', () => { GioPrefs.value.sort = sort.value; GioPrefs.save(); sortCards(); });
                form.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
                    preset = button.dataset.preset;
                    form.querySelectorAll('[data-preset]').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
                    applyFilters();
                }));
                form.querySelectorAll('.gio-favorite').forEach(button => button.addEventListener('click', e => {
                    e.preventDefault(); e.stopPropagation();
                    const active = GioPrefs.toggleFavorite(button.dataset.id);
                    button.textContent = active ? '★' : '☆'; button.setAttribute('aria-pressed', String(active));
                    if (sort.value === 'favorites') sortCards();
                    applyFilters();
                }));

                const FILTER_KINDS = [
                    { cls: 'reward-filter', attr: 'data-rt', set: activeRewards },
                    { cls: 'type-filter', attr: 'data-qt', set: activeTypes }
                ];

                const onPickerClick = (e) => {
                    const kind = FILTER_KINDS.find(k => e.target.classList.contains(k.cls));
                    if (kind) {
                        e.preventDefault();
                        const value = e.target.getAttribute(kind.attr);
                        e.target.classList.toggle('off');
                        if (e.target.classList.contains('off')) kind.set.delete(value);
                        else kind.set.add(value);
                        applyFilters();
                        return;
                    }

                    if (e.target.id === 'select-all-btn') {
                        e.preventDefault();
                        const visibleCbs = getVisibleCheckboxes();
                        if (visibleCbs.length === 0) return;

                        const shouldCheck = !visibleCbs.every(cb => cb.checked);
                        visibleCbs.forEach(cb => { cb.checked = shouldCheck; });
                        syncUI();
                    }
                };
                form.addEventListener('click', onPickerClick);
                filters.onclick = onPickerClick;

                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const selected = getVisibleCheckboxes().filter(cb => cb.checked);
                    if (selected.length === 0) return;

                    closePicker({
                        selectedQuests: new Set(selected.map(cb => cb.value)),
                        autoEnroll: RUNTIME.autoEnroll,
                        autoClaim: RUNTIME.autoClaim,
                        playSound: RUNTIME.playSound,
                        randomDelay: RUNTIME.randomDelay
                    });
                });

                body.classList.add('picker-mode');
                sortCards();
                syncUI();

                readOrbBalance()
                    .then(balance => {
                        if (balance === null) {
                            Logger.log('[System] Discord sent no Orb balance, so the picker shows none.', 'warn');
                            return;
                        }
                        balanceText = `${balance} Orbs on the account`;
                        syncUI();
                    })
                    .catch(e => Logger.log(`[System] Could not read the Orb balance: ${e?.message ?? e}`, 'warn'));
            });
        }
    };

    const Traffic = {
        queue: [], processing: false, idleWaiters: new Set(),

        whenIdle() {
            return this.processing ? new Promise(resolve => this.idleWaiters.add(resolve)) : Promise.resolve();
        },

        cancel() {
            for (const request of this.queue.splice(0)) request.reject(new Error('Quests stopped'));
        },

        async enqueue(url, body) {
            if (!RUNTIME.running) return Promise.reject(new Error("Stopped"));
            return new Promise((resolve, reject) => {
                this.queue.push({ url, body, resolve, reject, attempts: 0 });
                this.process();
            });
        },

        async process() {
            if (this.processing || this.queue.length === 0) return;
            this.processing = true;

            try {
            while (this.queue.length > 0) {
                if (!RUNTIME.running) {
                    this.queue.forEach(req => req.reject(new Error("Shutdown")));
                    this.queue = [];
                    this.processing = false;
                    return;
                }

                const req = this.queue.shift();
                try {
                    const res = await Mods.API.post({ url: req.url, body: req.body });
                    req.resolve(res);
                } catch (e) {
                    if (!RUNTIME.running) { req.reject(new Error('Quests stopped')); continue; }
                    const err = ErrorHandler.classify(e);

                    if (err.isRetryable && req.attempts < SYS.MAX_RETRIES) {
                        req.attempts++;
                        const delay = (e.body?.retry_after ?? Math.pow(2, req.attempts)) * 1000;
                        const isGlobal = e.body?.global === true;

                        Logger.log(`[Network] Retry ${req.attempts}/${SYS.MAX_RETRIES} in ${(delay / 1000).toFixed(1)}s (HTTP ${err.status})`, 'warn');

                        const retryJitter = rnd(200, 800);

                        if (isGlobal) {

                            this.queue.unshift(req);
                            await sleep(delay + retryJitter);
                        } else {

                            const cancelRetry = () => { clearTimeout(timer); RUNTIME.questCleanups.delete(cancelRetry); req.reject(new Error('Quests stopped')); };
                            const timer = setTimeout(() => {
                                RUNTIME.questCleanups.delete(cancelRetry);
                                if (RUNTIME.running) { this.queue.push(req); this.process(); }
                                else req.reject(new Error('Quests stopped'));
                            }, delay + retryJitter);
                            RUNTIME.questCleanups.add(cancelRetry);
                        }
                    } else if (err.isClientError) {
                        Logger.log(`[Network] HTTP ${err.status}: ${req.url}`, 'debug');
                        req.reject(e);
                    } else {
                        Logger.log(`[Network] Request to ${req.url} failed: ${err.message}`, 'err');
                        req.reject(e);
                    }
                }

                await sleep(rnd(1200, 1800));
            }
            } finally {
                this.processing = false;
                for (const resolve of this.idleWaiters) resolve();
                this.idleWaiters.clear();
            }
        }
    };

    let Mods = {};

    const Patcher = {
        games: [], real: {}, active: false,
        savedShowCurrentGame: null,
        _unhide: null,

        PATCHED: ['getRunningGames', 'getGameForPID', 'getVisibleGame', 'getVisibleRunningGames',
                  'getRunningDiscordApplicationIds', 'getCandidateGames'],

        init(Store) {
            if (!Store) return;
            this.real = {};
            for (const name of this.PATCHED) {
                if (typeof Store[name] === 'function') this.real[name] = Store[name];
            }
            const absent = this.PATCHED.filter(n => !this.real[n]);
            if (absent.length) Logger.log(`[Patcher] Store lacks ${absent.join(', ')}, not patching those.`, 'debug');
        },

        toggle(on) {
            const S = Mods.RunStore;
            const real = this.real;

            if (on && !this.active) {
                S.getRunningGames = () => [...real.getRunningGames.call(S), ...this.games];
                S.getGameForPID = (pid) => this.games.find(g => g.pid === pid) || real.getGameForPID.call(S, pid);

                if (real.getVisibleGame) S.getVisibleGame = () => this.games[0] ?? real.getVisibleGame.call(S);
                if (real.getVisibleRunningGames) S.getVisibleRunningGames = () => [...real.getVisibleRunningGames.call(S), ...this.games];
                if (real.getCandidateGames) S.getCandidateGames = () => [...real.getCandidateGames.call(S), ...this.games];
                if (real.getRunningDiscordApplicationIds) {
                    S.getRunningDiscordApplicationIds = () => {
                        const ids = real.getRunningDiscordApplicationIds.call(S);
                        const ours = this.games.map(g => String(g.id));

                        return ids instanceof Set ? new Set([...ids, ...ours]) : [...(ids ?? []), ...ours];
                    };
                }
                this.active = true;
            } else if (!on && this.active) {
                for (const [name, fn] of Object.entries(real)) S[name] = fn;
                this.active = false;
            }
        },

        syncPresenceSuppression() {
            const setting = Mods.ShowCurrentGame;
            const shouldSuppress = CONFIG.HIDE_ACTIVITY && this.games.length > 0;

            if (!setting) {
                if (shouldSuppress) Logger.log('[Patcher] status.showCurrentGame not found, cannot hide activity.', 'warn');
                return;
            }

            if (shouldSuppress && this.savedShowCurrentGame === null) {
                try {

                    this.savedShowCurrentGame = setting.getSetting() !== false;
                    if (this.savedShowCurrentGame) {
                        Promise.resolve(setting.updateSetting(false)).catch(e =>
                            Logger.log(`[Patcher] Could not turn showCurrentGame off, activity stays visible: ${e.message}`, 'warn'));

                        this._unhide = () => { try { setting.updateSetting(true); } catch (_) { } };
                        window.addEventListener('pagehide', this._unhide);
                        Logger.log('[Patcher] Your "Display current activity as a status message" setting is off while quests run. Stop quests or Terminate puts it back. If Discord is closed or reloaded before then, re-enable it in Discord settings.', 'warn');
                    }
                } catch (e) {
                    this.savedShowCurrentGame = null;
                    Logger.log(`[Patcher] showCurrentGame read failed, cannot hide activity: ${e.message}`, 'warn');
                }
            } else if (!shouldSuppress && this.savedShowCurrentGame !== null) {
                const restore = this.savedShowCurrentGame;
                this.savedShowCurrentGame = null;
                if (this._unhide) { window.removeEventListener('pagehide', this._unhide); this._unhide = null; }
                if (restore) {
                    try {
                        Promise.resolve(setting.updateSetting(true)).catch(e =>
                            Logger.log(`[Patcher] Failed to restore showCurrentGame. Re-enable "Display current activity as a status message" in Discord settings: ${e.message}`, 'err'));
                    } catch (e) {
                        Logger.log(`[Patcher] Failed to restore showCurrentGame. Re-enable "Display current activity as a status message" in Discord settings: ${e.message}`, 'err');
                    }
                }
            }
        },

        add(g) {
            if (this.games.some(x => x.pid === g.pid)) return;
            this.games.push(g);
            this.toggle(true);
            this.syncPresenceSuppression();
            this.dispatch([g], []);
            this.rpc(g);
        },

        remove(g) {
            const before = this.games.length;
            this.games = this.games.filter(x => x.pid !== g.pid);
            if (this.games.length === before) return;

            this.dispatch([], [g]);
            this.syncPresenceSuppression();
            if (!this.games.length) {
                this.toggle(false);
                this.rpc(null);
            } else {
                this.rpc(this.games[0]);
            }
        },

        dispatch(added, removed) {
            Mods.Dispatcher?.dispatch({
                type: CONST.EVT.GAME,
                added,
                removed,
                games: Mods.RunStore.getRunningGames()
            });
        },

        rpc(g) {
            if (CONFIG.HIDE_ACTIVITY && g) return;
            try {
                Mods.Dispatcher?.dispatch({
                    type: CONST.EVT.RPC,
                    socketId: null,

                    pid: g ? g.pid : 9999,
                    activity: g ? {
                        application_id: g.id,
                        name: g.name,
                        type: 0,
                        details: null,
                        state: null,
                        timestamps: { start: g.start },
                        icon: g.icon,
                        assets: null
                    } : null
                });
            } catch (e) {
                Logger.log(`[RPC Cleanup] ${e.message}`, 'debug');
            }
        },

        clean() {
            this.games = [];
            this.toggle(false);

            this.syncPresenceSuppression();
            this.rpc(null);
        }
    };

    const describeHeartbeatError = payload => {
        const e = payload?.error ?? payload;
        const parts = [];
        const status = e?.status ?? e?.httpStatus;
        if (status) parts.push(`HTTP ${status}`);
        const code = e?.body?.code ?? e?.code;
        if (code != null && code !== status) parts.push(`code ${code}`);
        const message = e?.body?.message ?? e?.message;
        if (message) parts.push(String(message));
        if (!parts.length) {
            try { parts.push(JSON.stringify(e).slice(0, 160)); } catch { parts.push(String(e)); }
        }
        return parts.join(', ') || 'no detail';
    };

    const Tasks = {
        skipped: new Set(),

        outcomes: new Map(),
        _streamReal: undefined,
        _streamSpoofs: 0,

        readProgress(userStatus, key) {
            const p = userStatus?.progress;
            const entry = p instanceof Map ? p.get(key) : p?.[key];
            return entry?.value ?? userStatus?.streamProgressSeconds ?? 0;
        },

        sanitize(name) { return name.replace(/[^a-zA-Z0-9 ]/g, "").trim().replace(/\s+/g, " "); },

        appIdFor(cfg, keyName, legacyAppId) {
            return taskAt(cfg?.tasks, keyName)?.applications?.[0]?.id ?? legacyAppId ?? null;
        },

        detectType(cfg, applicationId) {
            const keys = taskKeys(cfg.tasks);

            const typeMap = [
                { match: k => k === "ACHIEVEMENT_IN_ACTIVITY", type: "ACHIEVEMENT" },
                { match: k => k === "PLAY_ACTIVITY", type: "ACTIVITY" },
                { match: k => k.includes("VIDEO"), type: "WATCH_VIDEO", prefer: ["WATCH_VIDEO"] },
                { match: k => k.startsWith("PLAY"), type: "GAME", prefer: ["PLAY_ON_DESKTOP"] },
                { match: k => k.startsWith("STREAM"), type: "STREAM", prefer: ["STREAM_ON_DESKTOP"] },
                { match: k => k.includes("ACTIVITY"), type: "ACTIVITY" }
            ];

            for (const { match, type, prefer } of typeMap) {
                const keyName = (prefer && keys.find(k => prefer.includes(k)))
                    || keys.find(k => match(k) && !CONSOLE_ONLY_KEYS.has(k));
                if (keyName) {
                    return {
                        type, keyName,
                        target: taskAt(cfg.tasks, keyName)?.target ?? 0,
                        appId: this.appIdFor(cfg, keyName, applicationId)
                    };
                }
            }

            if (keys.length > 0 && keys.every(k => CONSOLE_ONLY_KEYS.has(k))) return null;

            if (applicationId) {
                return {
                    type: "GAME", keyName: "PLAY_ON_DESKTOP",
                    target: taskAt(cfg.tasks, keys[0])?.target ?? 0,
                    appId: applicationId
                };
            }

            return null;
        },

        pickExecutable(executables, cleanName) {
            const loose = v => v.replace(/[^a-z0-9]/gi, "").toLowerCase();
            const fallbackExe = `${cleanName.replace(/\s+/g, "")}.exe`;

            const win32 = (Array.isArray(executables) ? executables : [])
                .filter(x => x?.os === "win32" && typeof x.name === "string" && x.name.length > 0)
                .map(x => x.name.replace(">", "").replace(/\\/g, "/"));
            if (win32.length === 0) return { exeName: fallbackExe, relPath: `${cleanName}/${fallbackExe}` };

            const rank = n => [
                /(^|[-_./ ])test([-_. ]|\.exe$)/i.test(n) ? "1" : "0",
                /launcher/i.test(n) ? "1" : "0",
                n.includes("/") ? "1" : "0",
                n
            ].join("");
            const chosen = win32.slice().sort((a, b) => (rank(a) < rank(b) ? -1 : rank(a) > rank(b) ? 1 : 0))[0];
            const parts = chosen.split("/").filter(Boolean);
            const exeName = parts[parts.length - 1];
            const dirs = parts.slice(0, -1);

            const alreadyRooted = dirs.length > 0 && loose(dirs[0]) === loose(cleanName);
            return { exeName, relPath: (alreadyRooted ? parts : [cleanName, ...parts]).join("/") };
        },

        async fetchGameData(appId, appName) {
            try {
                const res = await Mods.API.get({ url: `/applications/public?application_ids=${appId}` });
                const appData = res?.body?.[0];
                const cleanName = this.sanitize(appData?.name || appName);
                const { exeName, relPath } = this.pickExecutable(appData?.executables, cleanName);

                return {
                    name: appData?.name || appName,
                    icon: appData?.icon,
                    exeName,
                    cmdLine: `C:\\Program Files\\${relPath.replace(/\//g, "\\")}`,
                    exePath: `c:/program files/${relPath.toLowerCase()}`,
                    id: appId
                };
            } catch (e) {
                Logger.log(`[FetchGame] Fallback for ${appName}: ${e?.message ?? e}`, 'debug');
                const cleanName = this.sanitize(appName);
                const safeExe = `${cleanName.replace(/\s+/g, "")}.exe`;
                return {
                    name: appName, exeName: safeExe,
                    cmdLine: `C:\\Program Files\\${cleanName}\\${safeExe}`,
                    exePath: `c:/program files/${cleanName.toLowerCase()}/${safeExe}`,
                    id: appId
                };
            }
        },

        async claimReward(questId) {
            return Rewards.request(questId, () => Mods.API.post({
                url: `/quests/${questId}/claim-reward`,

                body: { platform: 0, location: 11, is_targeted: false, metadata_sealed: null, traffic_metadata_sealed: sealedFor(questId) }
            }));
        },

        failTask(q, t, reason) {
            if (!RUNTIME.running) return;
            const currentProgress = Logger.tasks.get(q.id)?.cur ?? 0;
            Logger.updateTask(q.id, { name: t.name, type: t.type, cur: currentProgress, max: t.target, status: "FAILED" });
            Logger.log(`[Task] Aborted "${t.name}": ${reason}`, 'err');
            Tasks.skipped.add(q.id);

            recordOutcome(Tasks.outcomes, q.id, 'failed');
            setTimeout(() => Logger.removeTask(q.id), 2000);
        },

        async VIDEO(q, t, s) {

            let cur = s?.progress?.[t.keyName]?.value ?? s?.progress?.[t.type]?.value ?? 0;
            let failCount = 0;

            Logger.updateTask(q.id, { name: t.name, type: "VIDEO", cur, max: t.target, status: "RUNNING" });

            const startTime = Date.now();
            let calls = 0;

            while (cur < t.target && RUNTIME.running) {

                const delayMs = rnd(7000, 9500);
                if (!(await sleep(delayMs))) return;

                const elapsedSec = (delayMs / 1000) + (Math.random() * 0.02 - 0.01);
                cur += elapsedSec;

                const payloadTs = Number(Math.min(t.target, cur).toFixed(6));

                try {
                    const r = await Traffic.enqueue(`/quests/${q.id}/video-progress`, { timestamp: payloadTs });
                    calls++;

                    const serverVal = r?.body?.progress?.[t.keyName]?.value ?? r?.body?.progress?.WATCH_VIDEO?.value;
                    if (serverVal > cur) cur = Math.min(t.target, serverVal);
                    if (r?.body?.completed_at) break;
                    failCount = 0;
                } catch (e) {
                    failCount++;
                    const err = ErrorHandler.classify(e);
                    if (err.isClientError) {
                        Logger.log(`[Task] Video quest unavailable (HTTP ${err.status}). Skipping.`, 'warn');
                        return Tasks.failTask(q, t, `Client Error ${err.status}`);
                    }
                    if (failCount >= SYS.MAX_TASK_FAILURES) {
                        return Tasks.failTask(q, t, 'Too many network failures');
                    }
                    Logger.log(`[Task] VIDEO progress failed (${failCount}/${SYS.MAX_TASK_FAILURES}): ${err.message}`, 'debug');
                }

                Logger.updateTask(q.id, { name: t.name, type: "VIDEO", cur, max: t.target, status: "RUNNING" });

                if (Date.now() - startTime > SYS.MAX_TIME) {
                    return Tasks.failTask(q, t, 'Timeout exceeded');
                }
            }
            if (RUNTIME.running) {
                Logger.log(`[Task] VIDEO "${t.name}" done in ${calls} API calls`, 'debug');
                return Tasks.finish(q, t);
            }
        },

        GAME(q, t, s) { return Tasks.generic(q, t, "GAME", "PLAY_ON_DESKTOP", s); },
        STREAM(q, t, s) { return Tasks.generic(q, t, "STREAM", "STREAM_ON_DESKTOP", s); },

        async generic(q, t, type, fallbackKey, s) {
            if (!RUNTIME.running) return;

            const key = t.keyName || fallbackKey;
            const gameData = await this.fetchGameData(t.appId, t.name);

            if (!RUNTIME.running) return;

            return new Promise(resolve => {
                const pid = rnd(2500, 12500) * 4;
                const game = {
                    id: gameData.id, name: gameData.name, icon: gameData.icon,
                    pid, pidPath: [pid], processName: gameData.name, start: Date.now(),
                    exeName: gameData.exeName, exePath: gameData.exePath, cmdLine: gameData.cmdLine,
                    executables: [{ os: 'win32', name: gameData.exeName, is_launcher: false }],
                    windowHandle: 0, fullscreenType: 0, overlay: true, sandboxed: false,
                    hidden: false, isLauncher: false
                };

                let cleanupHook;
                let cleaned = false;
                let spoofReleased = false;
                let safetyTimer;
                let watchdogTimer;
                let beats = 0;
                let failedBeats = 0;
                let consecutiveFailures = 0;
                let lastFailure = null;

                if (type === "STREAM") {
                    if (Mods.StreamStore) {

                        if (Tasks._streamSpoofs === 0) Tasks._streamReal = Mods.StreamStore.getStreamerActiveStreamMetadata;
                        Tasks._streamSpoofs++;
                        Mods.StreamStore.getStreamerActiveStreamMetadata = () => ({ id: gameData.id, pid, sourceName: gameData.name });
                    }

                    cleanupHook = () => {
                        if (Mods.StreamStore && Tasks._streamSpoofs > 0 && --Tasks._streamSpoofs === 0) {
                            Mods.StreamStore.getStreamerActiveStreamMetadata = Tasks._streamReal;
                        }
                    };
                } else {
                    Patcher.add(game);
                    cleanupHook = () => Patcher.remove(game);
                }

                const seeded = Tasks.readProgress(s, key);
                Logger.updateTask(q.id, { name: t.name, type, cur: seeded, max: t.target, status: "RUNNING" });
                Logger.log(`[Task] Started ${type}: ${gameData.name}`, 'info');

                const stopWatching = () => {
                    if (cleaned) return;
                    cleaned = true;
                    clearTimeout(safetyTimer);
                    clearTimeout(watchdogTimer);
                    try { Mods.Dispatcher?.unsubscribe(CONST.EVT.HEARTBEAT, check); } catch (e) {
                        Logger.log(`[Dispatcher] Unsubscribe failed: ${e.message}`, 'debug');
                    }
                    try { Mods.Dispatcher?.unsubscribe(CONST.EVT.HEARTBEAT_FAIL, onFail); } catch (e) {
                        Logger.log(`[Dispatcher] Unsubscribe failed: ${e.message}`, 'debug');
                    }
                };

                const releaseSpoof = () => {
                    if (spoofReleased) return;
                    spoofReleased = true;
                    try { cleanupHook(); } catch (e) { Logger.log(`[Task] Cleanup: ${e.message}`, 'debug'); }
                    RUNTIME.questCleanups.delete(abort);
                };

                const finish = () => { stopWatching(); releaseSpoof(); };

                const linger = async () => {
                    const maxMinutes = Number(CONFIG.PLAY_SESSION_TAIL_MIN ?? 0);
                    if (!Number.isFinite(maxMinutes) || maxMinutes <= 0) return;
                    const maxMs = Math.round(maxMinutes * 60 * 1000);
                    const tailMs = rnd(Math.round(maxMs * 0.4), maxMs);
                    Logger.log(`[Task] Holding ${type} "${gameData.name}" for ${Math.round(tailMs / 1000)}s after completion.`, 'debug');
                    const step = 500;
                    for (let waited = 0; waited < tailMs && RUNTIME.running && !spoofReleased; waited += step) {
                        await sleep(Math.min(step, tailMs - waited));
                    }
                };

                const abort = () => { finish(); resolve(); };

                safetyTimer = setTimeout(() => {
                    if (RUNTIME.running) Tasks.failTask(q, t, 'Timeout exceeded (25m)');
                    finish();
                    resolve();
                }, SYS.MAX_TIME);

                const armWatchdog = () => {
                    clearTimeout(watchdogTimer);
                    watchdogTimer = setTimeout(() => {
                        if (cleaned || !RUNTIME.running) return;
                        const failureTail = failedBeats > 0
                            ? ` and ${failedBeats} failed beat(s), the last one ${lastFailure}`
                            : '';
                        Logger.log(beats === 0
                            ? (failedBeats > 0
                                ? `[Task] Discord never reported progress for "${t.name}". All ${failedBeats} heartbeat(s) it tried failed, the last one ${lastFailure}.`
                                : `[Task] Discord never reported progress for "${t.name}". It is not accepting the injected process on this client, so there is nothing to wait for.`)
                            : `[Task] Discord stopped reporting progress for "${t.name}" after ${beats} update(s)${failureTail}. Giving up instead of idling.`, 'err');
                        Tasks.failTask(q, t, failedBeats > 0
                            ? `No heartbeat from Discord (${failedBeats} failed beat(s))`
                            : 'No heartbeat from Discord');
                        finish();
                        resolve();
                    }, SYS.HEARTBEAT_GRACE);
                };
                armWatchdog();

                const check = (d) => {
                    if (!RUNTIME.running) { finish(); resolve(); return; }
                    if (d?.questId !== q.id) return;

                    beats++;
                    consecutiveFailures = 0;
                    armWatchdog();
                    const prog = Tasks.readProgress(d.userStatus, key);

                    Logger.updateTask(q.id, {
                        name: t.name, type, cur: prog, max: t.target, status: "RUNNING",
                        serverCur: prog, serverAt: Date.now()
                    });

                    if (prog >= t.target) {
                        stopWatching();
                        Promise.resolve(Tasks.finish(q, t))
                            .then(linger)
                            .finally(() => { releaseSpoof(); resolve(); });
                    }
                };

                const onFail = (d) => {
                    if (!RUNTIME.running) { finish(); resolve(); return; }
                    if (d?.questId !== q.id) return;

                    failedBeats++;
                    consecutiveFailures++;
                    lastFailure = describeHeartbeatError(d);

                    if (consecutiveFailures >= SYS.MAX_TASK_FAILURES) {
                        Logger.log(`[Task] Discord's heartbeat for "${t.name}" failed ${consecutiveFailures} times in a row: ${lastFailure}. Giving up rather than waiting out the watchdog.`, 'err');
                        Tasks.failTask(q, t, `Discord could not report progress (${lastFailure})`);
                        finish();
                        resolve();
                        return;
                    }

                    Logger.log(`[Task] Discord's heartbeat for "${t.name}" failed (${consecutiveFailures}/${SYS.MAX_TASK_FAILURES}): ${lastFailure}`, 'debug');
                    if (beats > 0) armWatchdog();
                };

                Mods.Dispatcher?.subscribe(CONST.EVT.HEARTBEAT, check);
                Mods.Dispatcher?.subscribe(CONST.EVT.HEARTBEAT_FAIL, onFail);
                RUNTIME.questCleanups.add(abort);
            });
        },

        _relayUrl: 'http://127.0.0.1:43210',
        _relayProbe: null,
        _relayProbeAt: 0,
        RELAY_PROBE_TTL: 60000,

        _probeRelay() {
            if (this._relayProbe && Date.now() - this._relayProbeAt < this.RELAY_PROBE_TTL) return this._relayProbe;
            this._relayProbeAt = Date.now();
            return this._relayProbe = (async () => {
                try {
                    const r = await Promise.race([
                        fetch(`${this._relayUrl}/health`, { method: 'GET', redirect: 'error' }),
                        new Promise((_, reject) => setTimeout(() => reject(new Error('probe timeout')), 800))
                    ]);
                    if (!RUNTIME.running) return false;
                    if (r.ok) Logger.log('[Bypass] Orion Relay detected on 127.0.0.1:43210.', 'info');
                    return r.ok;
                } catch (_) {
                    return false;
                }
            })();
        },

        async _bypassPost(url, headers, jsonBody) {

            const relayAvailable = await this._probeRelay();
            if (!RUNTIME.running) throw new Error('Shutdown');
            if (relayAvailable) {
                let r;
                try {
                    r = await fetch(`${this._relayUrl}/proxy`, {
                        method: 'POST',

                        headers: { 'Content-Type': 'application/json', 'X-Orion-Relay': '1' },
                        body: JSON.stringify({ url, headers, body: jsonBody }),
                        redirect: 'error'
                    });
                    if (!RUNTIME.running) throw new Error('Shutdown');
                } catch (e) {
                    if (!RUNTIME.running) throw e;

                    this._relayProbe = null;
                    Logger.log(`[Bypass] Relay stopped responding, trying other transports: ${e?.message ?? e}`, 'debug');
                }
                if (r) {
                    if (!r.ok) {
                        const body = await r.text();
                        if (!RUNTIME.running) throw new Error('Shutdown');

                        if (r.status === 403 && body.includes('X-Orion-Relay')) {
                            this._relayProbe = null;
                            Logger.log('[Bypass] The running Orion Relay is out of date. Update it from tools/orion-relay/ (it now requires the X-Orion-Relay header so a web page cannot drive it). Trying other transports.', 'warn');
                            r = null;
                        } else {
                            throw { status: r.status, body };
                        }
                    }
                }
                if (r) {
                    const result = await r.json();
                    if (!RUNTIME.running) throw new Error('Shutdown');
                    if (!result.ok) throw { status: result.status, body: result.body };
                    return result;
                }
            }

            try {
                const helper = window.VencordNative?.pluginHelpers?.OrionQuests;
                if (helper) {
                    const u = new URL(url);
                    const appId = u.hostname.split('.')[0];
                    const questId = headers['X-Discord-Quest-ID'];
                    const referrer = headers['Referer'];
                    if (u.pathname.endsWith('/acf/authorize')) {
                        const { code } = JSON.parse(jsonBody);
                        const r = await helper.discordsaysAuthorize({ appId, questId, authCode: code, referrer });
                        if (!RUNTIME.running) throw new Error('Shutdown');
                        if (!r.ok) throw { status: r.status, body: r.body };
                        return { ok: true, status: r.status, body: r.body };
                    }
                    if (u.pathname.endsWith('/acf/quest/progress')) {
                        const { progress } = JSON.parse(jsonBody);
                        const token = headers['X-Auth-Token'];
                        const r = await helper.discordsaysProgress({ appId, questId, token, target: progress, referrer });
                        if (!RUNTIME.running) throw new Error('Shutdown');
                        if (!r.ok) throw { status: r.status, body: r.body };
                        return { ok: true, status: r.status, body: r.body };
                    }
                }
            } catch (e) {
                if (!RUNTIME.running) throw e;
                if (e?.status) throw e;
                Logger.log(`[Bypass] VencordNative path errored: ${e?.message ?? e}`, 'debug');
            }

            const dn = window.DiscordNative;
            if (dn) {

                const probes = [
                    () => dn.http?.makeRequest,
                    () => dn.app?.makeRequest,
                ];
                for (const probe of probes) {
                    if (!RUNTIME.running) throw new Error('Shutdown');
                    try {
                        const fn = probe();
                        if (typeof fn === 'function') {
                            const r = await fn.call(dn, { method: 'POST', url, headers, body: jsonBody });
                            if (!RUNTIME.running) throw new Error('Shutdown');
                            if (r && (r.status || r.statusCode)) {
                                const status = r.status ?? r.statusCode;
                                return { ok: status >= 200 && status < 300, status, body: r.body ?? r.responseText ?? '' };
                            }
                        }
                    } catch (e) {
                        if (!RUNTIME.running) throw e;
                    }
                }
            }

            if (!RUNTIME.running) throw new Error('Shutdown');
            const res = await fetch(url, { method: 'POST', headers, body: jsonBody, redirect: 'error' });
            if (!RUNTIME.running) throw new Error('Shutdown');
            const body = await res.text();
            if (!RUNTIME.running) throw new Error('Shutdown');
            if (!res.ok) throw { status: res.status, body };
            return { ok: true, status: res.status, body };
        },

        async bypassAchievement(q, t) {

            const appId = t.appId || q.config?.application?.id;
            let reason = null;
            if (!appId) {
                reason = 'this quest carries no application id, so there is nothing to authorize against';
                return { ok: false, reason };
            }

            if (!/^\d+$/.test(String(appId))) {
                reason = `the quest's application id ("${appId}") is not numeric, so it was refused before any request went out`;
                Logger.log(`[Bypass] Refusing non-numeric appId "${appId}".`, 'warn');
                return { ok: false, reason };
            }

            let preGrantIds;
            try {
                const before = await Mods.API.get({ url: '/oauth2/tokens' });
                if (!RUNTIME.running) return { ok: false, reason };
                preGrantIds = new Set((before?.body || []).filter(tk => tk.application?.id === appId).map(tk => tk.id));
            } catch (e) {
                if (!RUNTIME.running) return { ok: false, reason };
                Logger.log(`[Bypass] Couldn't snapshot existing grants; aborting so we never leave an un-revocable authorization: ${e?.message}`, 'warn');
                return { ok: false, reason };
            }

            try {

                let appName = null;
                try {
                    const a = await Mods.API.get({ url: `/applications/public?application_ids=${appId}` });
                    if (!RUNTIME.running) return { ok: false, reason };
                    appName = a?.body?.[0]?.name ?? null;
                } catch (_) {
                    if (!RUNTIME.running) return { ok: false, reason };
                }
                const consented = await Consent.ask(appId, appName);
                if (!RUNTIME.running) return { ok: false, reason };
                if (!consented) {
                    Logger.log(`[Bypass] Consent declined for "${t.name}". Not authorizing the app.`, 'warn');
                    return { ok: false, reason };
                }

                Logger.log(`[Bypass] Trying Discord Says auth flow for "${t.name}"...`, 'info');

                const authRes = await Mods.API.post({
                    url: '/oauth2/authorize',
                    query: {
                        response_type: 'code',
                        client_id: appId,
                        scope: 'identify applications.commands applications.entitlements'
                    },
                    body: {
                        permissions: '0',
                        authorize: true,
                        integration_type: 1,
                        location_context: { guild_id: '10000', channel_id: '10000', channel_type: 10000 }
                    }
                });
                if (!RUNTIME.running) return { ok: false, reason };
                const location = authRes?.body?.location;
                if (!location) throw new Error('no location in /oauth2/authorize response');
                const authCode = new URL(location).searchParams.get('code');
                if (!authCode) throw new Error('no code in authorize location');

                const ticketRes = await Mods.API.post({ url: `/applications/${appId}/proxy-tickets`, body: {} });
                if (!RUNTIME.running) return { ok: false, reason };
                const proxyTicket = ticketRes?.body?.ticket;
                if (!proxyTicket) throw new Error('no proxy ticket');

                const referrer = `https://${appId}.discordsays.com/?instance_id=example-cl-instance&platform=desktop&discord_proxy_ticket=${encodeURIComponent(proxyTicket)}`;

                const dsAuthRes = await Tasks._bypassPost(
                    `https://${appId}.discordsays.com/.proxy/acf/authorize`,
                    { 'Content-Type': 'application/json', 'X-Auth-Token': '', 'X-Discord-Quest-ID': q.id, 'Referer': referrer },
                    JSON.stringify({ code: authCode })
                );
                if (!RUNTIME.running) return { ok: false, reason };
                let dsToken;
                try { dsToken = JSON.parse(dsAuthRes.body)?.token; }
                catch { throw new Error('discordsays returned non-JSON: ' + String(dsAuthRes.body).slice(0, 120)); }
                if (!dsToken) throw new Error('no discordsays token');

                await Tasks._bypassPost(
                    `https://${appId}.discordsays.com/.proxy/acf/quest/progress`,
                    { 'Content-Type': 'application/json', 'X-Auth-Token': dsToken, 'X-Discord-Quest-ID': q.id, 'Referer': referrer },
                    JSON.stringify({ progress: t.target })
                );
                if (!RUNTIME.running) return { ok: false, reason };

                Logger.log(`[Bypass] Success. "${t.name}" completed via Discord Says.`, 'success');
                return { ok: true, reason: null };
            } catch (e) {
                if (!RUNTIME.running) return { ok: false, reason };

                if (e instanceof TypeError && /failed to fetch|networkerror/i.test(e.message)) {
                    Logger.log(`[Bypass] Discord's CSP blocks the script from reaching discordsays.com. Use the Vencord plugin port for the auto-bypass, since a userscript cannot bypass CSP. Skipping "${t.name}".`, 'warn');
                    return { ok: false, reason };
                }

                const code = e?.body?.code;

                if (code === 50165) {
                    reason = 'the activity is age-gated or delisted, so Discord refuses the proxy ticket on this account';
                    Logger.log(`[Bypass] "${t.name}" can't be launched (age-gated or delisted). Discord blocks the proxy ticket, so there is nothing we can do.`, 'warn');
                    return { ok: false, reason };
                }
                const parts = [];
                if (e?.status) parts.push(`HTTP ${e.status}`);
                if (code) parts.push(`code ${code}`);
                if (e?.body?.message) parts.push(e.body.message);
                else if (e?.message) parts.push(e.message);
                else if (typeof e === 'string') parts.push(e);
                else if (e) { try { parts.push(JSON.stringify(e).slice(0, 200)); } catch { parts.push(String(e)); } }
                reason = `the Discord Says bypass failed (${parts.join(', ') || 'unknown error'})`;
                Logger.log(`[Bypass] Failed: ${parts.join(', ') || 'unknown'}`, 'warn');
                return { ok: false, reason };
            } finally {

                if (preGrantIds) {
                    try {
                        const after = await Mods.API.get({ url: '/oauth2/tokens' });
                        const ours = (after?.body || []).filter(tk => tk.application?.id === appId && !preGrantIds.has(tk.id));
                        for (const g of ours) await Mods.API.del({ url: `/oauth2/tokens/${g.id}` });
                    } catch (e) {
                        Logger.log(`[Bypass] Deauthorize cleanup non-fatal: ${e?.message}`, 'debug');
                    }
                }
            }
        },

        async ACHIEVEMENT(q, t) {
            Logger.updateTask(q.id, { name: t.name, type: "ACHIEVEMENT", cur: 0, max: t.target, status: "RUNNING" });

            const key = buildStreamKey();

            if (key) {
                Logger.log(`[Task] Attempting heartbeat spoofing for "${t.name}"...`, 'info');

                const beat = { stream_key: key, application_id: String(t.appId || ''), terminal: false };
                let cur = 0;
                let failCount = 0;

                while (cur < t.target && RUNTIME.running) {
                    try {
                        const r = await Traffic.enqueue(`/quests/${q.id}/heartbeat`, beat);
                        if (!RUNTIME.running) return;
                        cur = r?.body?.progress?.[t.keyName]?.value ?? r?.body?.progress?.ACHIEVEMENT_IN_ACTIVITY?.value ?? cur;
                        Logger.updateTask(q.id, { name: t.name, type: "ACHIEVEMENT", cur, max: t.target, status: "RUNNING" });
                        failCount = 0;

                        if (cur >= t.target) {
                            try { await Traffic.enqueue(`/quests/${q.id}/heartbeat`, { ...beat, terminal: true }); }
                            catch (_) { }
                            break;
                        }
                    } catch (e) {
                        if (!RUNTIME.running) return;
                        failCount++;
                        const err = ErrorHandler.classify(e);
                        if (err.isClientError) {
                            Logger.log(`[Achievement] Heartbeat rejected (HTTP ${err.status}). Falling back to passive mode.`, 'warn');
                            break;
                        }
                        if (failCount >= SYS.MAX_TASK_FAILURES) {
                            Logger.log(`[Achievement] Too many failures. Falling back to passive mode.`, 'warn');
                            break;
                        }
                    }
                    await sleep(rnd(19000, 22000));
                }

                if (cur >= t.target && RUNTIME.running) return Tasks.finish(q, t);
            }

            if (!RUNTIME.running) return;
            const bypass = await Tasks.bypassAchievement(q, t);
            if (!RUNTIME.running) return;
            if (bypass.ok) return Tasks.finish(q, t);

            Logger.log(`[Task] Skipping "${t.name}". No auto-completion path worked (heartbeat rejected, bypass blocked). Likely age-gated/delisted on your account.`, 'warn');

            return Tasks.failTask(q, t, bypass.reason ?? 'no auto-completion path worked');
        },

        async ACTIVITY(q, t) {
            const key = buildStreamKey();
            if (!key) {
                return Tasks.failTask(q, t, 'No voice channel found');
            }

            const beat = { stream_key: key, application_id: String(t.appId || ''), terminal: false };
            let cur = 0;
            let failCount = 0;
            let stalledBeats = 0;
            Logger.updateTask(q.id, { name: t.name, type: "ACTIVITY", cur, max: t.target, status: "RUNNING" });

            const startTime = Date.now();

            while (cur < t.target && RUNTIME.running) {
                try {
                    const r = await Traffic.enqueue(`/quests/${q.id}/heartbeat`, beat);
                    const reported = r?.body?.progress?.[t.keyName]?.value ?? r?.body?.progress?.PLAY_ACTIVITY?.value;

                    if (typeof reported === 'number') { cur = reported; stalledBeats = 0; }
                    else if (++stalledBeats >= SYS.MAX_TASK_FAILURES) return Tasks.failTask(q, t, 'Discord credited no progress');
                    Logger.updateTask(q.id, { name: t.name, type: "ACTIVITY", cur, max: t.target, status: "RUNNING" });
                    failCount = 0;
                    if (cur >= t.target) {
                        try { await Traffic.enqueue(`/quests/${q.id}/heartbeat`, { ...beat, terminal: true }); }
                        catch (e) { Logger.log(`[ACTIVITY] Final heartbeat failed: ${e?.message}`, 'debug'); }
                        break;
                    }
                } catch (e) {
                    failCount++;
                    const err = ErrorHandler.classify(e);
                    if (err.isClientError) {
                        Logger.log(`[Task] Activity quest unavailable (HTTP ${err.status}). Skipping.`, 'warn');
                        return Tasks.failTask(q, t, `Client Error ${err.status}`);
                    }
                    if (failCount >= SYS.MAX_TASK_FAILURES) {
                        return Tasks.failTask(q, t, 'Too many network failures');
                    }
                    Logger.log(`[Task] ACTIVITY heartbeat failed (${failCount}/${SYS.MAX_TASK_FAILURES}): ${err.message}`, 'debug');
                }

                if (Date.now() - startTime > SYS.MAX_TIME) {
                    return Tasks.failTask(q, t, 'Timeout exceeded');
                }
                await sleep(rnd(19000, 22000));
            }
            if (RUNTIME.running && cur >= t.target) return Tasks.finish(q, t);
        },

        async finish(q, t) {
            if (!RUNTIME.running) return;
            Logger.updateTask(q.id, { name: t.name, type: t.type, cur: t.target, max: t.target, status: "COMPLETED", claimable: true, questId: q.id });

            recordOutcome(Tasks.outcomes, q.id, 'completed');
            Logger.log(`[Task] Completed "${t.name}"!`, 'success');
            Sound.play('tick');

            try {
                if (typeof Notification !== 'undefined') {

                    if (Notification.permission === 'default') { try { await Notification.requestPermission(); } catch (_) { } }
                    if (Notification.permission === 'granted') {
                        new Notification("By Gio: Quest Completed", { body: t.name, icon: "https://cdn.discordapp.com/emojis/1120042457007792168.webp", tag: `orion-${q.id}` });
                    }
                }
            } catch (e) { Logger.log(`[Notification] ${e.message}`, 'debug'); }

            if (RUNTIME.autoClaim) {
                try {
                    await sleep(rnd(2500, 6000));
                    if (!RUNTIME.running) return;
                    if (!RUNTIME.autoClaim) {
                        Logger.updateTask(q.id, { claimable: true, questId: q.id });
                        return;
                    }

                    const claimRes = await this.claimReward(q.id);

                    if (claimRes?.body?.claimed_at) {
                        Logger.log(`[Claim] Reward for "${t.name}" claimed automatically!`, 'success');
                        Logger.updateTask(q.id, { name: t.name, type: t.type, cur: t.target, max: t.target, status: "CLAIMED" });
                        setTimeout(() => Logger.removeTask(q.id), 2000);
                        return;
                    }
                } catch (e) {

                    const needsCaptcha = e?.body?.captcha_key || e?.body?.captcha_sitekey;
                    if (needsCaptcha) {
                        Logger.log(`[Claim] Captcha required for "${t.name}". Use UI button.`, 'warn');
                    } else {
                        Logger.log(`[Claim] Auto-claim failed for "${t.name}": ${e?.body?.message ?? e?.message}`, 'err');
                    }
                }
            }

            Logger.updateTask(q.id, { name: t.name, type: t.type, cur: t.target, max: t.target, status: "COMPLETED", claimable: true, questId: q.id });
        }
    };

    function findShowCurrentGameSetting(moduleCache) {
        if (!moduleCache) return undefined;

        let actions, delay, BoolValue;
        for (const m of Object.values(moduleCache)) {
            try {
                const exp = m?.exports;
                if (!exp || typeof exp !== 'object') continue;

                for (const key of Object.keys(exp)) {
                    const p = exp[key];
                    if (!p) continue;

                    if (!BoolValue && typeof p.create === 'function'
                        && String(p.typeName ?? '').includes('Bool')) BoolValue = p;

                    if (!actions && typeof p.updateAsync === 'function'
                        && (p.ProtoClass?.typeName?.endsWith('.PreloadedUserSettings') || p.type === 1)) {
                        actions = p;

                        delay = exp.UserSettingsDelay?.INFREQUENT_USER_ACTION ?? 0;
                    }
                }
                if (actions && BoolValue) break;
            } catch { }
        }
        if (!actions) return undefined;
        if (!BoolValue) Logger.log('[Patcher] BoolValue proto type not found. Hiding activity will only work if the setting already exists.', 'debug');

        return {

            getSetting: () => actions.getCurrentValue?.()?.status?.showCurrentGame?.value,
            updateSetting: value => actions.updateAsync('status', settings => {
                if (settings.showCurrentGame && typeof settings.showCurrentGame.value === 'boolean') {
                    settings.showCurrentGame.value = value;
                } else if (BoolValue) {
                    settings.showCurrentGame = BoolValue.create({ value });
                } else {
                    throw new Error('BoolValue proto type not found');
                }
            }, delay)
        };
    }

    function loadModules() {
        try {

            if (typeof window.Vencord !== 'undefined' && window.Vencord.Webpack) {
                Logger.log('[System] Vencord detected. Using Vencord Webpack API...', 'info');
                const W = window.Vencord.Webpack;

                let routerModule;
                try {
                    const m = W.findByCode('transitionTo -');
                    if (m) {
                        for (const prop of [m, m.default, ...Object.values(m)]) {
                            if (typeof prop === 'function' && prop.toString().includes('transitionTo -')) {
                                routerModule = { transitionTo: prop };
                                break;
                            }
                        }
                    }
                } catch (e) { }

                Mods = {
                    QuestStore: W.findStore('QuestStore') || W.findStore('QuestsStore'),
                    RunStore: W.findStore('RunningGameStore'),
                    StreamStore: W.findStore('ApplicationStreamingStore'),
                    ChanStore: W.findStore('ChannelStore'),
                    GuildChanStore: W.findStore('GuildChannelStore'),
                    UserStore: W.findStore('UserStore'),
                    OrbStore: W.findStore('VirtualCurrencyStore'),
                    Premium: W.findByProps('canUseMoreQuestOrbs', 'canUseShopDiscounts'),
                    Dispatcher: W.Common?.FluxDispatcher || W.findByProps('dispatch', 'subscribe', 'flushWaitQueue'),
                    API: W.Common?.RestAPI || W.findByProps('get', 'post', 'del'),
                    Router: routerModule,

                    ShowCurrentGame: findShowCurrentGameSetting(W.cache || W.wreq?.c)
                };

                const required = ['QuestStore', 'API', 'Dispatcher', 'RunStore'];
                const missing = required.filter(k => !Mods[k]);

                if (missing.length === 0) {
                    const optional =['StreamStore', 'ChanStore', 'GuildChanStore', 'Router'];
                    optional.forEach(k => { if (!Mods[k]) Logger.log(`[System] Optional module '${k}' not found. Features may be limited.`, 'warn'); });

                    Patcher.init(Mods.RunStore);
                    return true;
                }
                Logger.log(`[System] Vencord extraction missed: ${missing.join(', ')}. Falling back to native...`, 'warn');
            }

            if (typeof webpackChunkdiscord_app === 'undefined') {
                throw new Error("Webpack chunk not found - is this running inside Discord?");
            }

            let req;
            webpackChunkdiscord_app.push([[Symbol()], {}, (r) => {
                const cur = Object.keys(req?.c || {}).length;
                const incoming = Object.keys(r?.c || {}).length;
                if (incoming > cur) req = r;
            }]);
            webpackChunkdiscord_app.pop();

            if (!req?.c) throw new Error("Module registry not available - Discord build incompatible (see issue #20)");

            const modules = Object.values(req.c);

            function findStore(storeName) {
                for (const m of modules) {
                    try {
                        const exp = m?.exports;
                        if (!exp || typeof exp !== 'object') continue;
                        for (const key of Object.keys(exp)) {
                            const prop = exp[key];
                            if (prop && typeof prop === 'object'
                                && prop.__proto__?.constructor?.displayName === storeName) {
                                return prop;
                            }
                        }
                    } catch { }
                }
                return undefined;
            }

            function findDispatcher() {
                for (const m of modules) {
                    try {
                        const exp = m?.exports;
                        if (!exp || typeof exp !== 'object') continue;
                        for (const key of Object.keys(exp)) {
                            const prop = exp[key];
                            if (prop && prop._subscriptions
                                && typeof prop.subscribe === 'function'
                                && typeof prop.dispatch === 'function'
                                && typeof prop.__proto__?.flushWaitQueue === 'function') {
                                return prop;
                            }
                        }
                    } catch { }
                }
                return undefined;
            }

            function findAPI() {
                for (const m of modules) {
                    try {
                        const exp = m?.exports;
                        if (!exp || typeof exp !== 'object') continue;
                        for (const key of Object.keys(exp)) {
                            const prop = exp[key];
                            if (prop && typeof prop.get === 'function'
                                && typeof prop.post === 'function'
                                && typeof prop.del === 'function'
                                && !prop._dispatcher) {
                                return prop;
                            }
                        }
                    } catch { }
                }
                return undefined;
            }

            function findRouter() {
                for (const m of modules) {
                    try {
                        const exp = m?.exports;
                        if (!exp) continue;

                        for (const prop of [exp, exp.default, ...Object.values(exp)]) {
                            if (typeof prop === 'function' && prop.toString().includes('transitionTo -')) {
                                return { transitionTo: prop };
                            }
                        }
                    } catch { }
                }
                return undefined;
            }

            function findPremiumFeatures() {
                for (const m of modules) {
                    try {
                        const exp = m?.exports;
                        if (!exp || typeof exp !== 'object') continue;
                        for (const prop of [exp, ...Object.values(exp)]) {
                            if (prop && typeof prop.canUseMoreQuestOrbs === 'function'
                                && typeof prop.canUseShopDiscounts === 'function') {
                                return prop;
                            }
                        }
                    } catch { }
                }
                return undefined;
            }

            Mods = {
                QuestStore: findStore('QuestStore'),
                RunStore: findStore('RunningGameStore'),
                StreamStore: findStore('ApplicationStreamingStore'),
                ChanStore: findStore('ChannelStore'),
                GuildChanStore: findStore('GuildChannelStore'),
                UserStore: findStore('UserStore'),
                OrbStore: findStore('VirtualCurrencyStore'),
                Premium: findPremiumFeatures(),
                Dispatcher: findDispatcher(),
                API: findAPI(),
                Router: findRouter(),
                ShowCurrentGame: findShowCurrentGameSetting(req.c)
            };

            const required = ['QuestStore', 'API', 'Dispatcher', 'RunStore'];
            const missing = required.filter(k => !Mods[k]);
            if (missing.length > 0) throw new Error(`Core modules not found: ${missing.join(', ')}`);

            const optional = ['StreamStore', 'ChanStore', 'GuildChanStore', 'Router'];
            optional.forEach(k => { if (!Mods[k]) Logger.log(`[System] Optional module '${k}' not found. Features may be limited.`, 'warn'); });
            Patcher.init(Mods.RunStore);
            return true;
        } catch (e) {
            Logger.log(`[System] Module loading error: ${e.message ?? e}`, 'err');
            console.error(e);
            return false;
        }
    }

    const QuestRunner = {
        selected: new Set(), pending: null,

        start(selected = this.selected) {
            if (!RUNTIME.alive || this.pending || !selected.size) return false;
            if (!Rewards.canClaim()) {
                Logger.log('[System] Account unavailable or changed. Terminate and reopen the dashboard.', 'warn');
                return false;
            }
            const resuming = !RUNTIME.running;
            this.selected = new Set(selected);
            RUNTIME.running = true;
            Logger.beginQuests(this.selected);
            if (resuming) Logger.log('[System] Resuming selected unfinished quests from their saved progress.', 'info');
            this.pending = Promise.resolve().then(() => runQuestCycle({ selectedQuests: this.selected })).catch(error => {
                Logger.log(`[System] Quest runner failed: ${error?.message ?? error}`, 'err');
                Logger.stopQuests(true);
            }).finally(async () => {
                await Traffic.whenIdle();
                this.pending = null;
                if (RUNTIME.alive) Logger.syncRunControl();
            });
            Logger.syncRunControl();
            return this.pending;
        }
    };

    async function runConcurrent(tasks, limit) {
        const executing = new Set();

        try {
        for (const task of tasks) {
            if (!RUNTIME.running) break;

            const p = task().finally(() => executing.delete(p));
            executing.add(p);

            await sleep(rnd(1500, 4000));

            if (executing.size >= limit) {
                await Promise.race(executing);
            }
        }

        } finally {
            await Promise.allSettled(executing);
        }
    }

    async function main() {
        Logger.init();
        if (!loadModules()) return Logger.log('[System] Failed to load Discord modules. Aborting.', 'err');

        const getQuests = () => {
            const q = Mods.QuestStore.quests;
            return q instanceof Map ? [...q.values()] : Object.values(q);
        };

        if (!getQuests().length) {
            Logger.log('[System] Waiting for Discord to send its quest list...', 'info');
            for (let waited = 0; waited < 15000 && !getQuests().length && RUNTIME.running; waited += 250) {
                await new Promise(r => setTimeout(r, 250));
            }
        }
        if (!RUNTIME.running) return;

        Rewards.start();
        const allQuests = getQuests();
        const quests = allQuests.filter(q =>
            !q.userStatus?.completedAt
            && notExpired(q)
            && q.id !== CONST.ID
            && !Tasks.skipped.has(q.id)
        );

        if (!quests.length && Rewards.items.size) {
            Logger.root.querySelector('#orion-body').textContent = 'No unfinished quests available.';
            Logger.toggleOptions(false);
            Logger.updateSummary();
            Logger.showTab('rewards');
            return;
        }

        if (!quests.length) {

            if (!allQuests.length) {
                Logger.log('[System] Discord has not given this client a quest list. Reload Discord (Ctrl+R) and paste again.', 'err');
            } else {
                Logger.log('[System] All available quests are completed!', 'success');
            }
            return Logger.shutdown();
        }

        const pickerResult = await Logger.showQuestPicker(quests);
        if (!RUNTIME.running) return;

        RUNTIME.autoEnroll = pickerResult.autoEnroll;
        RUNTIME.autoClaim = pickerResult.autoClaim;
        RUNTIME.playSound = pickerResult.playSound;
        RUNTIME.randomDelay = pickerResult.randomDelay;

        if (pickerResult.selectedQuests.size === 0 && Rewards.items.size) { Logger.showTab('rewards'); return; }
        if (pickerResult.selectedQuests.size === 0) {
            Logger.log('[System] No quests selected. Shutting down.', 'info');
            return Logger.shutdown();
        }

        return QuestRunner.start(pickerResult.selectedQuests);
    }

    async function runQuestCycle(pickerResult) {
        const getQuests = () => {
            const q = Mods.QuestStore.quests;
            return q instanceof Map ? [...q.values()] : Object.values(q);
        };
        let loopCount = 1;

        while (RUNTIME.running) {
            try {
                Logger.log(`[Cycle] Starting loop #${loopCount}...`, 'info');

                const suspendedUntil = questAccessSuspendedUntil();
                if (suspendedUntil) {
                    const when = suspendedUntil.getTime() === 0 ? 'for now' : `until ${suspendedUntil.toLocaleString()}`;
                    Logger.log(`[System] Discord has suspended quest access on this account ${when}. Its own client refuses to start a quest in this state, so Quest Studio stops too.`, 'err');
                    break;
                }

                const blockedUntil = enrollmentBlockedUntil();
                if (blockedUntil) {
                    Logger.log(`[System] Discord has blocked quest enrollment on this account until ${blockedUntil.toLocaleString()}. Stopping instead of retrying.`, 'err');
                    break;
                }

                const quests = getQuests();

                const active = quests.filter(q =>
                    pickerResult.selectedQuests.has(q.id)
                    && !q.userStatus?.completedAt
                    && Tasks.outcomes.get(q.id) !== 'completed'
                    && !Rewards.claimed.has(q.id)
                    && notExpired(q)
                    && q.id !== CONST.ID
                    && !Tasks.skipped.has(q.id)
                );

                if (!active.length) {

                    const summary = summarizeRun(Tasks.outcomes);
                    Logger.log(`[System] ${summary.line}`, summary.blocked || summary.failed ? 'warn' : 'success');
                    if (summary.playDone) Sound.play('done');
                    break;
                }

                const queues = { video: [], game: [] };

                active.forEach(q => {
                    try {
                        const cfg = selectTaskConfig(q.config);
                        const questName = q.config?.messages?.questName ?? q.id;
                        const hasTaskConfig = !!cfg?.tasks && typeof cfg.tasks === 'object';
                        const typeData = hasTaskConfig ? Tasks.detectType(cfg, q.config?.application?.id) : null;
                        const blocker = questBlocker({
                            name: questName,
                            hasTaskConfig,
                            keys: hasTaskConfig ? taskKeys(cfg.tasks) : [],
                            typeData,
                            isDesktop: SYS.IS_DESKTOP
                        });
                        if (blocker) {
                            Logger.log(`[Quest] ${blocker} Skipping it for the rest of this run.`, 'warn');

                            Tasks.skipped.add(q.id);
                            recordOutcome(Tasks.outcomes, q.id, 'blocked');
                            return;
                        }

                        const { type, keyName, target, appId } = typeData;

                        const tInfo = {
                            id: q.id,
                            appId: appId ?? 0,
                            name: q.config?.messages?.questName ?? "Unknown Quest",
                            target,
                            type,
                            keyName
                        };

                        if (!q.userStatus?.enrolledAt && !RUNTIME.autoEnroll) {
                            Logger.updateTask(tInfo.id, {
                                name: tInfo.name, type: tInfo.type, cur: 0, max: tInfo.target,
                                status: "PENDING", actionRequired: 'ENROLL'
                            });
                            return;
                        }

                        if (Logger.tasks.has(q.id) && Logger.tasks.get(q.id).status === "RUNNING") return;

                        Logger.updateTask(tInfo.id, {
                            name: tInfo.name, type: tInfo.type, cur: 0, max: tInfo.target,
                            status: "QUEUE", actionRequired: null
                        });

                        const taskFunc = async () => {
                            if (!RUNTIME.running) return;
                            if (!q.userStatus?.enrolledAt && !RUNTIME.autoEnroll) {
                                Logger.updateTask(q.id, { status: 'PENDING', actionRequired: 'ENROLL' });
                                return;
                            }

                            if (!q.userStatus?.enrolledAt) {
                                Logger.log(`[Enroll] Accepting quest: ${tInfo.name}`, 'info');
                                try {
                                    await Traffic.enqueue(`/quests/${q.id}/enroll`, {
                                        location: 11,
                                        is_targeted: false,
                                        metadata_sealed: null,
                                        traffic_metadata_sealed: sealedFor(q.id)
                                    });
                                    await sleep(rnd(800, 1500));
                                } catch (e) {
                                    const err = ErrorHandler.classify(e);
                                    if (ErrorHandler.isSkippableQuest(e)) {
                                        Tasks.skipped.add(q.id);
                                        Logger.log(`[Enroll] ${tInfo.name} unavailable (${err.status}). Skipping.`, 'warn');
                                    } else {
                                        Logger.log(`[Enroll] Failed for ${tInfo.name}: ${err.message}`, 'err');
                                    }
                                    return Tasks.failTask(q, tInfo, `Enrollment failed`);
                                }
                            }

                            if (!RUNTIME.running) return;
                            if (type === "WATCH_VIDEO") return Tasks.VIDEO(q, tInfo, q.userStatus);
                            if (type === "ACHIEVEMENT") return Tasks.ACHIEVEMENT(q, tInfo);
                            const runner = type === "STREAM" ? Tasks.STREAM : (type === "ACTIVITY" ? Tasks.ACTIVITY : Tasks.GAME);
                            return runner(q, tInfo, q.userStatus);
                        };

                        if (type === "WATCH_VIDEO") queues.video.push(taskFunc);
                        else queues.game.push(taskFunc);
                    } catch (e) {
                        Logger.log(`[Quest] Error processing ${q.id}: ${e.message}`, 'err');
                    }
                });

                const totalTasks = queues.video.length + queues.game.length;

                if (totalTasks > 0) {
                    Logger.log(`[Cycle] Processing: ${queues.video.length} videos, ${queues.game.length} games.`, 'info');
                    const pGames = runConcurrent(queues.game, 1);
                    const pVideos = runConcurrent(queues.video, 2);
                    await Promise.all([pGames, pVideos]);
                } else {
                    if (active.length === 0) { Logger.log('[System] All available quests are completed!', 'success'); break; }
                    else await sleep(rnd(4000, 6000));
                }

                if (!RUNTIME.running) break;

                if (RUNTIME.randomDelay) {
                    const delayMs = rnd(60000, 1800000);
                    Logger.log(`[Cycle] Loop #${loopCount} complete. Random delay: ${Math.round(delayMs / 60000)}m before rescan.`, 'info');
                    await sleep(delayMs);
                } else {
                    Logger.log(`[Cycle] Loop #${loopCount} complete. Waiting before rescan...`, 'info');
                    await sleep(rnd(2500, 4500));
                }
                loopCount++;

            } catch (cycleError) {
                Logger.log(`[Cycle] Error in loop #${loopCount}: ${cycleError?.message ?? cycleError}`, 'err');
                console.error(cycleError);
                await sleep(3000);
                loopCount++;
            }
        }

        if (!RUNTIME.running) return;

        Rewards.sync();
        const hasUnclaimed = Rewards.items.size > 0 || Rewards.requests.size > 0 || Rewards.batchBusy || [...Logger.tasks.values()].some(t => t.claimable && !t.removing);
        if (hasUnclaimed) {
            Logger.log('[System] Quest cycle finished. Claim your rewards above, then click TERMINATE.', 'info');
            return;
        }

        Logger.shutdown();
    }

    main().catch(e => {
        const msg = e?.message ?? e?.toString?.() ?? "Unknown fatal error";
        console.error('[By Gio Fatal]', e);
        try { Logger.log(`[System] FATAL: ${msg}`, 'err'); } catch (_) { }
        Logger.shutdown();

        setTimeout(() => { window.orionLock = false; }, 1500);
    });
})();
