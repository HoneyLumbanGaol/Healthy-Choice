const choices = [
  { category: "Awal Hari", question: "Alarm berbunyi. Apa yang kamu lakukan?", hint: "Pilihan terbaik membuat harimu terasa lebih siap.", options: [{ icon: "😴", title: "Tidur lagi sampai siang", detail: "Tubuhmu bisa melewatkan waktu istirahat yang teratur.", good: false }, { icon: "🌞", title: "Bangun setelah tidur cukup", detail: "Tidur 7–9 jam membantu tubuh dan otak pulih.", good: true }] },
  { category: "Gerak Aktif", question: "Ada waktu luang 30 menit. Kamu memilih...", hint: "Ayo buat tubuhmu bergerak dengan cara yang menyenangkan!", options: [{ icon: "🏃", title: "Jalan santai atau olahraga", detail: "Aktivitas fisik menjaga jantung kuat dan suasana hati ceria.", good: true }, { icon: "📱", title: "Scroll video tanpa berhenti", detail: "Terlalu lama duduk membuat tubuh kurang aktif.", good: false }] },
  { category: "Hidrasi", question: "Tenggorokanmu terasa kering. Minuman mana pilihanmu?", hint: "Tubuh kita senang sekali mendapat cukup air.", options: [{ icon: "💧", title: "Air putih", detail: "Air membantu tubuh tetap segar, fokus, dan terhidrasi.", good: true }, { icon: "🥤", title: "Minuman manis ekstra besar", detail: "Terlalu banyak gula bukan pilihan terbaik untuk setiap hari.", good: false }] },
  { category: "Isi Piring", question: "Saat makan siang, kamu mengisi piring dengan...", hint: "Makanan beragam memberi tubuh banyak tenaga.", options: [{ icon: "🍟", title: "Gorengan saja", detail: "Camilan boleh, tetapi tubuh juga butuh gizi dari makanan beragam.", good: false }, { icon: "🥗", title: "Sayur, protein, dan nasi secukupnya", detail: "Kombinasi seimbang memberi energi dan nutrisi yang dibutuhkan.", good: true }] },
  { category: "Kebersihan", question: "Sebelum makan, kebiasaan pentingnya adalah...", hint: "Langkah kecil ini menjaga kuman pergi jauh.", options: [{ icon: "🧼", title: "Cuci tangan pakai sabun", detail: "Sabun membantu membersihkan kuman sebelum masuk ke tubuh.", good: true }, { icon: "🙈", title: "Langsung makan karena lapar", detail: "Tangan yang belum bersih bisa membawa kuman ke makanan.", good: false }] },
  { category: "Waktu Istirahat", question: "Malam sudah tiba. Apa yang kamu lakukan?", hint: "Malam yang tenang membantu tidurmu lebih berkualitas.", options: [{ icon: "🌙", title: "Tidur sesuai jadwal", detail: "Rutinitas tidur teratur membuat tubuh lebih siap besok.", good: true }, { icon: "🎮", title: "Bermain sampai larut", detail: "Layar dan waktu tidur yang berantakan bisa membuatmu lelah.", good: false }] },
  { category: "Pikiran Sehat", question: "Kamu merasa penuh pikiran. Pilihan sehatmu...", hint: "Menjaga pikiran juga bagian dari merawat diri.", options: [{ icon: "🌬️", title: "Tarik napas dan cerita pada orang tepercaya", detail: "Berbagi perasaan dapat membuat hati terasa lebih ringan.", good: true }, { icon: "😣", title: "Memendam semuanya sendiri", detail: "Kamu tidak harus menghadapi perasaan sendirian.", good: false }] },
  { category: "Kebiasaan Baik", question: "Hari ini hampir selesai. Kamu akan...", hint: "Rayakan progres kecilmu dan siapkan pilihan baik untuk besok.", options: [{ icon: "📓", title: "Menyiapkan botol air dan jadwal besok", detail: "Persiapan kecil membuat kebiasaan sehat lebih mudah dilakukan.", good: true }, { icon: "🍬", title: "Mengganti makan malam dengan permen", detail: "Tubuh tetap memerlukan makanan bergizi, bukan hanya rasa manis.", good: false }] },
];

const state = { current: 0, score: 0, answered: false };
const el = { level: document.getElementById("levelValue"), levelName: document.getElementById("levelName"), score: document.getElementById("scoreValue"), progress: document.getElementById("progressBar"), progressText: document.getElementById("progressText"), round: document.getElementById("roundBadge"), category: document.getElementById("categoryLabel"), question: document.getElementById("questionText"), hint: document.getElementById("questionHint"), choices: document.getElementById("choiceList"), feedback: document.getElementById("feedback"), next: document.getElementById("nextBtn"), modal: document.getElementById("resultModal"), resultMessage: document.getElementById("resultMessage"), finalScore: document.getElementById("finalScore") };

function renderQuestion() {
  const item = choices[state.current];
  state.answered = false;
  el.round.textContent = `PILIHAN ${state.current + 1}`;
  el.category.textContent = item.category;
  el.question.textContent = item.question;
  el.hint.textContent = item.hint;
  el.feedback.hidden = true;
  el.next.hidden = true;
  el.choices.innerHTML = item.options.map((option, index) => `<button class="choice-btn" type="button" data-index="${index}"><span class="choice-icon">${option.icon}</span><span class="choice-copy"><strong>${option.title}</strong><span>${option.detail}</span></span></button>`).join("");
  el.choices.querySelectorAll(".choice-btn").forEach((button) => button.addEventListener("click", () => choose(Number(button.dataset.index))));
  updateProgress();
}

function choose(index) {
  if (state.answered) return;
  state.answered = true;
  const selected = choices[state.current].options[index];
  const buttons = [...el.choices.querySelectorAll(".choice-btn")];
  buttons.forEach((button, buttonIndex) => { button.disabled = true; if (buttonIndex === index) button.classList.add(selected.good ? "is-good" : "is-bad"); });
  if (selected.good) { state.score += 100; el.feedback.className = "feedback"; el.feedback.innerHTML = `✨ <strong>Pilihan hebat!</strong> ${selected.detail} <strong>+100 poin</strong>`; } else { el.feedback.className = "feedback warning"; el.feedback.innerHTML = `🌱 <strong>Belum tepat.</strong> ${selected.detail} Coba pilih kebiasaan yang lebih membantu tubuhmu.`; }
  el.feedback.hidden = false;
  el.next.textContent = state.current === choices.length - 1 ? "Lihat hasil" : "Lanjutkan";
  el.next.hidden = false;
  updateProgress();
}

function updateProgress() {
  const answered = state.answered ? state.current + 1 : state.current;
  const ratio = answered / choices.length * 100;
  const level = Math.min(4, Math.floor(state.score / 200) + 1);
  const names = ["Pemula Sehat", "Penjelajah Aktif", "Jagoan Seimbang", "Pahlawan Kesehatan"];
  el.score.textContent = state.score;
  el.progress.style.width = `${ratio}%`;
  el.progressText.textContent = `${answered} dari ${choices.length} pilihan selesai`;
  el.level.textContent = level;
  el.levelName.textContent = names[level - 1];
}

function showResult() {
  const message = state.score >= 700 ? "Kamu sudah punya banyak kebiasaan hebat. Terus rawat tubuh dan pikiranmu setiap hari!" : state.score >= 400 ? "Kamu sedang membangun kebiasaan baik. Sedikit demi sedikit, kamu pasti makin sehat!" : "Setiap pilihan adalah kesempatan belajar. Yuk, coba lagi dan temukan pilihan sehatmu!";
  el.finalScore.textContent = state.score;
  el.resultMessage.textContent = message;
  el.modal.hidden = false;
}

function resetGame() { state.current = 0; state.score = 0; el.modal.hidden = true; renderQuestion(); }
el.next.addEventListener("click", () => { if (state.current === choices.length - 1) showResult(); else { state.current += 1; renderQuestion(); } });
document.getElementById("restartBtn").addEventListener("click", resetGame);
document.getElementById("playAgainBtn").addEventListener("click", resetGame);
renderQuestion();