// Arbi Go — Bengali → Arabic learning app
// Vocabulary: [arabic, bengali meaning, category]
const vocab = [
  ['مَرْحَبًا', 'হ্যালো / স্বাগতম', 'অভিবাদন'],
  ['السَّلَامُ عَلَيْكُمْ', 'আপনার প্রতি শান্তি বর্ষিত হোক', 'অভিবাদন'],
  ['وَعَلَيْكُمُ السَّلَام', 'আপনার প্রতিও শান্তি বর্ষিত হোক', 'অভিবাদন'],
  ['صَبَاحُ الْخَيْر', 'শুভ সকাল', 'অভিবাদন'],
  ['مَسَاءُ الْخَيْر', 'শুভ সন্ধ্যা', 'অভিবাদন'],
  ['مَعَ السَّلَامَة', 'বিদায়', 'অভিবাদন'],
  ['كَيْفَ حَالُكَ؟', 'আপনি কেমন আছেন?', 'অভিবাদন'],
  ['أَنَا بِخَيْر', 'আমি ভালো আছি', 'অভিবাদন'],
  ['مَا اسْمُكَ؟', 'আপনার নাম কী?', 'অভিবাদন'],
  ['اِسْمِي', 'আমার নাম', 'অভিবাদন'],
  ['شُكْرًا', 'ধন্যবাদ', 'দৈনন্দিন'],
  ['عَفْوًا', 'কোনো সমস্যা নেই', 'দৈনন্দিন'],
  ['نَعَمْ', 'হ্যাঁ', 'দৈনন্দিন'],
  ['لَا', 'না', 'দৈনন্দিন'],
  ['مِنْ فَضْلِكَ', 'দয়া করে', 'দৈনন্দিন'],
  ['صَدِيق', 'বন্ধু', 'দৈনন্দিন'],
  ['بَيْت', 'বাড়ি', 'দৈনন্দিন'],
  ['كِتَاب', 'বই', 'দৈনন্দিন'],
  ['مَدْرَسَة', 'স্কুল', 'দৈনন্দিন'],
  ['مُعَلِّم', 'শিক্ষক', 'দৈনন্দিন'],
  ['طَالِب', 'শিক্ষার্থী', 'দৈনন্দিন'],
  ['قَلَم', 'কলম', 'দৈনন্দিন'],
  ['يَوْم', 'দিন', 'দৈনন্দিন'],
  ['لَيْل', 'রাত', 'দৈনন্দিন'],
  ['جَمِيل', 'সুন্দর', 'দৈনন্দিন'],
  ['كَبِير', 'বড়', 'দৈনন্দিন'],
  ['صَغِير', 'ছোট', 'দৈনন্দিন'],
  ['أُمّ', 'মা', 'পরিবার'],
  ['أَب', 'বাবা', 'পরিবার'],
  ['أَخ', 'ভাই', 'পরিবার'],
  ['أُخْت', 'বোন', 'পরিবার'],
  ['جَدّ', 'দাদা / নানা', 'পরিবার'],
  ['جَدَّة', 'দাদি / নানি', 'পরিবার'],
  ['اِبْن', 'ছেলে', 'পরিবার'],
  ['بِنْت', 'মেয়ে', 'পরিবার'],
  ['عَائِلَة', 'পরিবার', 'পরিবার'],
  ['وَاحِد', 'এক', 'সংখ্যা'],
  ['اِثْنَان', 'দুই', 'সংখ্যা'],
  ['ثَلَاثَة', 'তিন', 'সংখ্যা'],
  ['أَرْبَعَة', 'চার', 'সংখ্যা'],
  ['خَمْسَة', 'পাঁচ', 'সংখ্যা'],
  ['سِتَّة', 'ছয়', 'সংখ্যা'],
  ['سَبْعَة', 'সাত', 'সংখ্যা'],
  ['ثَمَانِيَة', 'আট', 'সংখ্যা'],
  ['تِسْعَة', 'নয়', 'সংখ্যা'],
  ['عَشَرَة', 'দশ', 'সংখ্যা'],
  ['مَاء', 'পানি', 'খাবার'],
  ['طَعَام', 'খাবার', 'খাবার'],
  ['خُبْز', 'রুটি', 'খাবার'],
  ['حَلِيب', 'দুধ', 'খাবার'],
  ['قَهْوَة', 'কফি', 'খাবার'],
  ['شَاي', 'চা', 'খাবার'],
  ['تُفَّاحَة', 'আপেল', 'খাবার'],
  ['مَوْز', 'কলা', 'খাবার'],
  ['تَمْر', 'খেজুর', 'খাবার'],
  ['أَرُزّ', 'ভাত / চাল', 'খাবার'],
  ['لَحْم', 'মাংস', 'খাবার'],
  ['بَيْض', 'ডিম', 'খাবার'],
  ['أَحْمَر', 'লাল', 'রং'],
  ['أَزْرَق', 'নীল', 'রং'],
  ['أَخْضَر', 'সবুজ', 'রং'],
  ['أَصْفَر', 'হলুদ', 'রং'],
  ['أَبْيَض', 'সাদা', 'রং'],
  ['أَسْوَد', 'কালো', 'রং'],
  ['رَأْس', 'মাথা', 'শরীর'],
  ['عَيْن', 'চোখ', 'শরীর'],
  ['أُذُن', 'কান', 'শরীর'],
  ['فَم', 'মুখ (হাঁ)', 'শরীর'],
  ['يَد', 'হাত', 'শরীর'],
  ['قَدَم', 'পা', 'শরীর'],
  ['قِطَّة', 'বিড়াল', 'প্রাণী'],
  ['كَلْب', 'কুকুর', 'প্রাণী'],
  ['حِصَان', 'ঘোড়া', 'প্রাণী'],
  ['طَائِر', 'পাখি', 'প্রাণী'],
  ['سَمَكَة', 'মাছ', 'প্রাণী'],
  ['بَقَرَة', 'গরু', 'প্রাণী'],
];
const byAr = Object.fromEntries(vocab.map(w => [w[0], w]));

// Course structure: units → lessons → words (Arabic keys)
const UNITS = [
  { t: 'সালাম ও পরিচয়', d: 'দৈনন্দিন জীবনের দরকারি শব্দ', icon: '👋', lessons: [
    { n: 'সালাম', w: ['مَرْحَبًا', 'السَّلَامُ عَلَيْكُمْ', 'وَعَلَيْكُمُ السَّلَام', 'صَبَاحُ الْخَيْر', 'مَسَاءُ الْخَيْر', 'مَعَ السَّلَامَة'] },
    { n: 'ভদ্রতা', w: ['شُكْرًا', 'عَفْوًا', 'نَعَمْ', 'لَا', 'مِنْ فَضْلِكَ'] },
    { n: 'পরিচয়', w: ['كَيْفَ حَالُكَ؟', 'أَنَا بِخَيْر', 'مَا اسْمُكَ؟', 'اِسْمِي', 'صَدِيق'] },
  ] },
  { t: 'পরিবার ও ঘর', d: 'আপনজন আর চারপাশের জিনিস', icon: '👨‍👩‍👧', lessons: [
    { n: 'বাবা-মা', w: ['أُمّ', 'أَب', 'أَخ', 'أُخْت', 'عَائِلَة'] },
    { n: 'আত্মীয়', w: ['جَدّ', 'جَدَّة', 'اِبْن', 'بِنْت', 'أَب', 'أُمّ'] },
    { n: 'স্কুল', w: ['بَيْت', 'مَدْرَسَة', 'مُعَلِّم', 'طَالِب', 'كِتَاب', 'قَلَم'] },
  ] },
  { t: 'সংখ্যা', d: 'এক থেকে দশ পর্যন্ত গুনুন', icon: '🔢', lessons: [
    { n: '১–৫', w: ['وَاحِد', 'اِثْنَان', 'ثَلَاثَة', 'أَرْبَعَة', 'خَمْسَة'] },
    { n: '৬–১০', w: ['سِتَّة', 'سَبْعَة', 'ثَمَانِيَة', 'تِسْعَة', 'عَشَرَة'] },
    { n: 'রিভিউ', w: ['وَاحِد', 'اِثْنَان', 'ثَلَاثَة', 'أَرْبَعَة', 'خَمْسَة', 'سِتَّة', 'سَبْعَة', 'ثَمَانِيَة', 'تِسْعَة', 'عَشَرَة'] },
  ] },
  { t: 'খাবার ও পানীয়', d: 'বাজারে ও খাবার টেবিলে', icon: '🍎', lessons: [
    { n: 'পানীয়', w: ['مَاء', 'حَلِيب', 'قَهْوَة', 'شَاي', 'طَعَام'] },
    { n: 'ফল', w: ['تُفَّاحَة', 'مَوْز', 'تَمْر', 'خُبْز'] },
    { n: 'খাবার', w: ['أَرُزّ', 'لَحْم', 'بَيْض', 'خُبْز', 'طَعَام'] },
  ] },
  { t: 'রং ও বর্ণনা', d: 'জিনিসের রং আর আকার', icon: '🎨', lessons: [
    { n: 'রং ১', w: ['أَحْمَر', 'أَزْرَق', 'أَخْضَر'] },
    { n: 'রং ২', w: ['أَصْفَر', 'أَبْيَض', 'أَسْوَد', 'أَحْمَر'] },
    { n: 'বর্ণনা', w: ['جَمِيل', 'كَبِير', 'صَغِير', 'يَوْم', 'لَيْل'] },
  ] },
  { t: 'শরীর ও প্রাণী', d: 'শরীরের অঙ্গ আর পরিচিত প্রাণী', icon: '🐪', lessons: [
    { n: 'শরীর', w: ['رَأْس', 'عَيْن', 'أُذُن', 'فَم', 'يَد', 'قَدَم'] },
    { n: 'প্রাণী', w: ['قِطَّة', 'كَلْب', 'حِصَان', 'طَائِر', 'سَمَكَة', 'بَقَرَة'] },
    { n: 'রিভিউ', w: ['رَأْس', 'عَيْن', 'يَد', 'قِطَّة', 'كَلْب', 'طَائِر', 'سَمَكَة'] },
  ] },
];
const LESSONS = [];
UNITS.forEach((u, ui) => u.lessons.forEach((l, li) => LESSONS.push({ ...l, id: `u${ui}l${li}`, unit: ui, label: `ইউনিট ${bn(ui + 1)} · পাঠ ${bn(li + 1)} · ${l.n}` })));

function bn(n) { return String(n).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]); }
const $ = x => document.getElementById(x);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const todayKey = (d = new Date()) => d.toISOString().slice(0, 10);

// ---------- State ----------
let state = load();
function load() {
  let s;
  try { s = JSON.parse(localStorage.getItem('arbigo-v3')); } catch (e) {}
  if (!s) {
    s = { xp: 0, done: [], streak: 1, days: [], todayXp: 0, today: todayKey(), sound: true };
    // migrate from previous version
    try {
      const old = JSON.parse(localStorage.getItem('arbigo-v2'));
      if (old) { s.xp = old.xp || 0; s.streak = old.streak || 1; s.done = (old.done || []).filter(i => i >= 0 && i < 3).map(i => `u0l${i}`); }
    } catch (e) {}
  }
  if (s.today !== todayKey()) { s.todayXp = 0; s.today = todayKey(); }
  if (s.sound === undefined) s.sound = true;
  s.days = s.days || [];
  return s;
}
function save() { localStorage.setItem('arbigo-v3', JSON.stringify(state)); render(); }
function addXp(n) {
  const t = todayKey();
  if (state.today !== t) { state.today = t; state.todayXp = 0; }
  if (!state.days.includes(t)) {
    const y = todayKey(new Date(Date.now() - 864e5));
    state.streak = state.days.includes(y) ? state.streak + 1 : (state.days.length ? 1 : state.streak);
    state.days.push(t); state.days = state.days.slice(-30);
  }
  state.xp += n; state.todayXp += n;
}

// ---------- Sound (Web Audio, no files needed) ----------
let actx;
function ctx() {
  if (!actx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; actx = new C(); }
  if (actx.state === 'suspended') actx.resume();
  return actx;
}
function tone(freq, start, dur, type = 'sine', vol = 0.18) {
  const c = ctx(); if (!c) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + start;
  o.type = type; o.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.02);
}
const sfx = {
  tap() { tone(620, 0, 0.07, 'triangle', 0.12); },
  select() { tone(520, 0, 0.06, 'triangle', 0.12); tone(780, 0.04, 0.07, 'triangle', 0.1); },
  correct() { tone(660, 0, 0.12, 'sine', 0.2); tone(880, 0.1, 0.2, 'sine', 0.2); },
  wrong() { tone(220, 0, 0.18, 'square', 0.08); tone(170, 0.14, 0.25, 'square', 0.08); },
  complete() { [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.12, 0.25, 'triangle', 0.18)); tone(1319, 0.5, 0.45, 'sine', 0.14); },
  locked() { tone(300, 0, 0.1, 'sawtooth', 0.06); },
};
function play(name) { if (state.sound) try { sfx[name](); } catch (e) {} }

// Arabic speech
let arVoice = null;
function pickVoice() { if (!('speechSynthesis' in window)) return; arVoice = speechSynthesis.getVoices().find(v => /^ar/i.test(v.lang)) || null; }
if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
function speak(t, slow) {
  if (!('speechSynthesis' in window)) { notify('এই ব্রাউজারে অডিও সুবিধা নেই।'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(t); u.lang = 'ar-SA'; if (arVoice) u.voice = arVoice; u.rate = slow ? 0.6 : 0.85;
  speechSynthesis.speak(u);
}

// ---------- Render home ----------
function isUnlocked(i) { return i === 0 || state.done.includes(LESSONS[i - 1].id); }
function drawUnits() {
  let html = '', idx = 0;
  UNITS.forEach((u, ui) => {
    const ids = u.lessons.map((_, li) => `u${ui}l${li}`), cnt = ids.filter(id => state.done.includes(id)).length;
    html += `<div class="unitblock"><div class="unit u${ui}"><div><h2>${u.icon} ইউনিট ${bn(ui + 1)} · ${u.t}</h2><p>${u.d}</p></div><div class="unitcount"><span>${bn(cnt)}/${bn(ids.length)} পাঠ</span><div class="bar"><i style="width:${cnt / ids.length * 100}%"></i></div></div></div><div class="path">`;
    u.lessons.forEach(l => {
      const L = LESSONS[idx], done = state.done.includes(L.id), open = isUnlocked(idx);
      html += `<button class="lesson ${done ? 'done' : open ? '' : 'locked'}" data-i="${idx}" aria-label="${esc(L.label)}">${done ? '✓' : open ? '★' : '🔒'}<small>${esc(l.n)}</small></button>`;
      idx++;
    });
    html += '</div></div>';
  });
  $('units').innerHTML = html;
  document.querySelectorAll('#units .lesson').forEach(b => b.onclick = () => {
    const i = +b.dataset.i;
    if (!isUnlocked(i)) { play('locked'); notify('আগের পাঠটি আগে সম্পন্ন করুন!'); return; }
    play('tap'); startLesson(LESSONS[i]);
  });
}
function render() {
  const total = LESSONS.length, d = state.done.length;
  $('xp').textContent = state.xp; $('streak').textContent = state.streak;
  $('rankxp').textContent = state.xp; $('profilexp').textContent = state.xp; $('rankstreak').textContent = state.streak;
  $('ranklessons').textContent = d; $('profilelessons').textContent = `${d} / ${total}`;
  const tx = state.today === todayKey() ? state.todayXp : 0;
  $('goal').style.width = Math.min(100, tx / 20 * 100) + '%'; $('goalLabel').textContent = `${Math.min(tx, 999)} / 20 XP`;
  $('soundToggle').textContent = state.sound ? '🔊' : '🔇';
  $('soundToggle2').textContent = state.sound ? 'চালু' : 'বন্ধ';
  // week strip (Sat → Fri)
  const names = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র', 'শনি'], now = new Date(), start = new Date(now);
  start.setDate(now.getDate() - ((now.getDay() + 1) % 7));
  let w = '';
  for (let i = 0; i < 7; i++) { const dt = new Date(start); dt.setDate(start.getDate() + i); const on = state.days.includes(todayKey(dt)); w += `<div class="day ${on ? 'on' : ''}"><b>${on ? '✓' : '·'}</b>${names[dt.getDay()]}</div>`; }
  $('week').innerHTML = w;
  drawUnits();
}

// ---------- Word list ----------
let filter = 'সব';
const cats = ['সব', ...new Set(vocab.map(w => w[2]))];
$('filters').insertAdjacentHTML('beforeend', cats.map(c => `<button class="filter ${c === 'সব' ? 'active' : ''}" data-filter="${c}">${c}</button>`).join(''));
function drawWords() {
  const q = ($('search').value || '').toLowerCase().trim();
  const list = vocab.filter(w => (filter === 'সব' || w[2] === filter) && (!q || w[0].includes(q) || w[1].toLowerCase().includes(q)));
  $('wordlist').innerHTML = list.map(w => `<div class="word"><div><b lang="ar" dir="rtl">${w[0]}</b><br><span>${w[1]}</span></div><button class="wbtn" title="উচ্চারণ শুনুন" aria-label="উচ্চারণ শুনুন" data-ar="${esc(w[0])}">🔊</button></div>`).join('') || '<p>কোনো শব্দ পাওয়া যায়নি।</p>';
}
$('wordlist').onclick = e => { const b = e.target.closest('.wbtn'); if (b) speak(b.dataset.ar); };
$('search').oninput = drawWords;
document.querySelectorAll('#filters .filter').forEach(b => b.onclick = () => { play('tap'); filter = b.dataset.filter; document.querySelectorAll('#filters .filter').forEach(x => x.classList.remove('active')); b.classList.add('active'); drawWords(); });

// ---------- Quiz engine ----------
// Question types — never Arabic prompt with Arabic options:
//  ar2bn : Arabic word shown → pick Bengali meaning
//  bn2ar : Bengali meaning shown → pick Arabic word
//  listen: hear Arabic audio → pick Bengali meaning
function distractors(word, pool, field) {
  const val = word[field], picked = [], seen = new Set([word[1]]);
  const sources = [shuffle(pool), shuffle(vocab.filter(w => w[2] === word[2])), shuffle(vocab)];
  for (const src of sources) for (const w of src) {
    if (picked.length >= 2) return picked;
    if (w[0] === word[0] || seen.has(w[1]) || w[field] === val) continue;
    seen.add(w[1]); picked.push(w);
  }
  return picked;
}
function makeQuestion(word, type, pool) {
  const field = type === 'bn2ar' ? 0 : 1;
  const opts = shuffle([word, ...distractors(word, pool, field)]);
  return { word, type, options: opts.map(w => w[field]), answer: opts.indexOf(word) };
}
function buildQuiz(words, max = 10) {
  const pool = words.map(a => byAr[a]).filter(Boolean);
  const canListen = 'speechSynthesis' in window && !!arVoice;
  let qs = [];
  // first pass: introduce every word (Arabic → Bengali), second pass: reverse / listening
  shuffle(pool).forEach(w => qs.push(makeQuestion(w, 'ar2bn', pool)));
  shuffle(pool).forEach((w, i) => qs.push(makeQuestion(w, canListen && i % 3 === 2 ? 'listen' : 'bn2ar', pool)));
  if (qs.length > max) { const first = qs.slice(0, Math.ceil(max / 2)), rest = shuffle(qs.slice(pool.length)).slice(0, max - first.length); qs = first.concat(rest); }
  return qs;
}

let quiz = null;
function startLesson(L) { openQuiz(L.label, buildQuiz(L.w), L.id); }
function startReview() {
  const learned = LESSONS.filter(l => state.done.includes(l.id)).flatMap(l => l.w);
  const words = shuffle([...new Set(learned.length >= 4 ? learned : LESSONS[0].w)]).slice(0, 8);
  openQuiz('শব্দ কুইজ · মিশ্র অনুশীলন', buildQuiz(words, 10), null);
}
function openQuiz(label, qs, id) {
  quiz = { queue: qs, total: qs.length, correct: 0, mistakes: 0, id, label, selected: -1, checked: false };
  $('lessonName').textContent = label;
  $('quizbody').hidden = false; $('result').hidden = true;
  loadQ();
  $('modal').classList.add('show');
}
function loadQ() {
  const q = quiz.queue[0];
  quiz.selected = -1; quiz.checked = false;
  $('qbar').style.width = (quiz.correct / quiz.total * 100) + '%';
  $('feedback').textContent = '';
  const chk = $('check'); chk.textContent = 'উত্তর যাচাই'; chk.classList.remove('ready');
  const A = $('arabic');
  A.className = 'arabic';
  if (q.type === 'ar2bn') {
    $('qtitle').textContent = 'সঠিক অর্থটি বেছে নিন';
    $('prompt').textContent = 'এই আরবি শব্দটির বাংলা অর্থ কী?';
    A.innerHTML = `<button class="say" aria-label="উচ্চারণ শুনুন">🔊</button><span lang="ar" dir="rtl">${q.word[0]}</span>`;
    setTimeout(() => speak(q.word[0]), 250);
  } else if (q.type === 'bn2ar') {
    $('qtitle').textContent = 'সঠিক আরবি শব্দটি বেছে নিন';
    $('prompt').textContent = 'নিচের বাংলা অর্থের আরবি কোনটি?';
    A.classList.add('bn');
    A.innerHTML = `<span>“${esc(q.word[1])}”</span>`;
  } else {
    $('qtitle').textContent = 'শুনুন এবং অর্থ বেছে নিন';
    $('prompt').textContent = 'আরবি শব্দটি শুনে বাংলা অর্থ বেছে নিন।';
    A.innerHTML = `<button class="say bigsay" aria-label="আবার শুনুন">🔊</button><button class="say" aria-label="ধীরে শুনুন" data-slow="1">🐢</button>`;
    setTimeout(() => speak(q.word[0]), 250);
  }
  A.querySelectorAll('.say').forEach(b => b.onclick = () => speak(q.word[0], !!b.dataset.slow));
  const isAr = q.type === 'bn2ar';
  $('answers').innerHTML = q.options.map((o, i) => `<button class="answer ${isAr ? 'ar' : ''}" data-i="${i}" ${isAr ? 'lang="ar" dir="rtl"' : ''}>${esc(o)}</button>`).join('');
  document.querySelectorAll('#answers .answer').forEach(b => b.onclick = () => {
    if (quiz.checked) return;
    quiz.selected = +b.dataset.i;
    document.querySelectorAll('#answers .answer').forEach(x => x.classList.remove('sel'));
    b.classList.add('sel'); chk.classList.add('ready');
    if (isAr) speak(q.options[quiz.selected]); else play('select');
  });
}
$('check').onclick = () => {
  if (!quiz) return;
  const q = quiz.queue[0], fb = $('feedback');
  if (quiz.checked) { // continue
    play('tap');
    quiz.queue.shift();
    if (quiz.queue.length) loadQ(); else finish();
    return;
  }
  if (quiz.selected < 0) { play('locked'); fb.style.color = '#e05a4f'; fb.textContent = 'আগে একটি উত্তর নির্বাচন করুন।'; return; }
  quiz.checked = true;
  const btns = document.querySelectorAll('#answers .answer');
  btns.forEach(x => x.classList.remove('sel'));
  if (quiz.selected === q.answer) {
    quiz.correct++;
    play('correct');
    btns[q.selected = quiz.selected].classList.add('correct');
    fb.style.color = '#44a400';
    fb.innerHTML = `সঠিক উত্তর! দারুণ করছেন 🎉<br><small style="color:var(--sub);font-weight:600"><span lang="ar" dir="rtl">${q.word[0]}</span> = ${esc(q.word[1])}</small>`;
  } else {
    quiz.mistakes++;
    play('wrong');
    btns[quiz.selected].classList.add('wrong'); btns[q.answer].classList.add('reveal');
    fb.style.color = '#e05a4f';
    fb.innerHTML = `সঠিক উত্তর: <span lang="ar" dir="rtl">${q.word[0]}</span> = ${esc(q.word[1])}<br><small style="font-weight:600">চিন্তা নেই—প্রশ্নটি একটু পরে আবার আসবে।</small>`;
    quiz.queue.push(makeQuestion(q.word, q.type, quiz.queue.map(x => x.word)));
  }
  $('qbar').style.width = (quiz.correct / quiz.total * 100) + '%';
  $('check').textContent = quiz.queue.length === 1 && quiz.selected === q.answer ? 'পাঠ শেষ করুন' : 'চালিয়ে যান';
  $('check').classList.add('ready');
};
function finish() {
  const first = quiz.id && !state.done.includes(quiz.id);
  const gain = first ? 20 : 10;
  if (first) state.done.push(quiz.id);
  addXp(gain); save();
  play('complete');
  const acc = Math.round(quiz.total / (quiz.total + quiz.mistakes) * 100);
  $('qbar').style.width = '100%';
  $('quizbody').hidden = true; $('result').hidden = false;
  $('qtitle').textContent = 'পাঠ সম্পন্ন!';
  const nextIdx = quiz.id ? LESSONS.findIndex(l => l.id === quiz.id) + 1 : -1;
  const hasNext = nextIdx > 0 && nextIdx < LESSONS.length;
  $('result').innerHTML = `<div class="big">🎉</div><h2>অসাধারণ!</h2><p>+${bn(gain)} XP · নির্ভুলতা ${bn(acc)}%</p>${hasNext ? `<button class="primary" id="nextLesson">পরের পাঠ: ${esc(LESSONS[nextIdx].n)} →</button>` : ''}<button class="check ready" id="doneBtn">ঠিক আছে</button>`;
  $('doneBtn').onclick = () => { play('tap'); closeQuiz(); };
  if (hasNext) $('nextLesson').onclick = () => { play('tap'); startLesson(LESSONS[nextIdx]); };
}
function closeQuiz() { $('modal').classList.remove('show'); if ('speechSynthesis' in window) speechSynthesis.cancel(); quiz = null; }
$('close').onclick = () => { play('tap'); closeQuiz(); };
$('modal').onclick = e => { if (e.target === $('modal')) closeQuiz(); };

// ---------- Navigation & misc ----------
document.querySelectorAll('.nav button').forEach(n => n.onclick = () => {
  play('tap');
  document.querySelectorAll('.nav button').forEach(x => x.classList.remove('active')); n.classList.add('active');
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active')); $('page-' + n.dataset.page).classList.add('active');
  window.scrollTo(0, 0);
});
$('review').onclick = () => { play('tap'); startReview(); };
function toggleSound() { state.sound = !state.sound; save(); play('select'); notify(state.sound ? 'সাউন্ড চালু 🔊' : 'সাউন্ড বন্ধ 🔇'); }
$('soundToggle').onclick = toggleSound; $('soundToggle2').onclick = toggleSound;
$('reset').onclick = () => { if (confirm('সব অগ্রগতি মুছে ফেলবেন?')) { state = { xp: 0, done: [], streak: 1, days: [], todayXp: 0, today: todayKey(), sound: state.sound }; save(); notify('অগ্রগতি রিসেট হয়েছে'); } };
let toastT;
function notify(t) { const e = $('toast'); e.textContent = t; e.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove('show'), 2400); }

render(); drawWords();
