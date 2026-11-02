'use strict';

const drawer = document.getElementById('mobileDrawer');
const manager = document.getElementById('managerModal');
const menuButton = document.getElementById('burgerOpenBtn');
const message = document.getElementById('lessonMessage');
const copyStatus = document.getElementById('copyStatus');
const background = document.querySelectorAll('main, .site-header, .site-footer, .back-to-top, .skip-link');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let activeDialog = null;
let previousFocus = null;

function closeDialog(restoreFocus = true) {
  if (!activeDialog) return;
  activeDialog.classList.remove('is-open');
  activeDialog.setAttribute('aria-hidden', 'true');
  activeDialog.inert = true;
  activeDialog = null;
  background.forEach(element => { element.inert = false; });
  document.body.classList.remove('modal-open');
  menuButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus && previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
}

function openDialog(dialog) {
  const trigger = document.activeElement;
  closeDialog(false);
  previousFocus = trigger;
  activeDialog = dialog;
  dialog.inert = false;
  dialog.setAttribute('aria-hidden', 'false');
  dialog.classList.add('is-open');
  background.forEach(element => { element.inert = true; });
  document.body.classList.add('modal-open');
  menuButton.setAttribute('aria-expanded', String(dialog === drawer));
  dialog.querySelector('button, a[href], textarea').focus({ preventScroll: true });
}

function setGoal(goal) {
  message.value = `Здравствуйте! Хочу записаться на пробный урок в TURKISH ACADEMY. Интересует: ${goal.toLocaleLowerCase('ru')}. Подскажите, пожалуйста, актуальное расписание и стоимость.`;
  copyStatus.textContent = '';
  const selectedGoal = goal === 'Турецкий с нуля' ? goal : goal === 'Подобрать уровень' ? goal : 'Продолжить обучение';
  document.querySelectorAll('[data-goal]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.goal === selectedGoal));
  });
}

menuButton.addEventListener('click', () => openDialog(drawer));
document.querySelectorAll('[data-close-drawer], [data-close-modal]').forEach(button => {
  button.addEventListener('click', () => closeDialog());
});
document.querySelectorAll('[data-open-modal="manager"]').forEach(button => {
  button.addEventListener('click', () => {
    setGoal(button.dataset.interest || 'Подобрать уровень');
    openDialog(manager);
  });
});
manager.addEventListener('click', event => {
  if (event.target === manager) closeDialog();
});
document.querySelectorAll('[data-goal]').forEach(button => {
  button.addEventListener('click', () => setGoal(button.dataset.goal));
});

document.addEventListener('keydown', event => {
  if (!activeDialog) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeDialog();
  } else if (event.key === 'Tab') {
    const focusable = [...activeDialog.querySelectorAll('button, a[href], textarea, [tabindex="0"]')]
      .filter(element => !element.disabled && element.getClientRects().length);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !activeDialog.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.getElementById('copyMessageBtn').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    copyStatus.textContent = 'Сообщение скопировано. Вставьте его в чат школы.';
  } catch {
    message.focus();
    message.select();
    copyStatus.textContent = 'Текст выделен. Скопируйте его через Ctrl+C или меню устройства.';
  }
});

const quiz = document.getElementById('miniPlatformQuiz');
const feedback = document.getElementById('miniQuizFeedback');
quiz.querySelectorAll('.mini-quiz-btn').forEach(button => {
  button.addEventListener('click', () => {
    quiz.querySelectorAll('.mini-quiz-btn').forEach(option => {
      option.classList.remove('is-correct', 'is-wrong');
      option.setAttribute('aria-pressed', String(option === button));
    });
    const correct = button.dataset.correct === 'true';
    button.classList.add(correct ? 'is-correct' : 'is-wrong');
    feedback.textContent = correct
      ? 'Harika! «Afiyet olsun!» — так желают приятного аппетита в Турции.'
      : 'Попробуйте ещё! «Geçmiş olsun!» — пожелание выздоровления, а «İyi yolculuklar!» — счастливого пути.';
    feedback.dataset.result = correct ? 'correct' : 'retry';
  });
});

const topButton = document.getElementById('backToTopBtn');
const updateTopButton = () => topButton.classList.toggle('is-visible', window.scrollY > 560);
window.addEventListener('scroll', updateTopButton, { passive: true });
updateTopButton();
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
});
window.matchMedia('(min-width: 1261px)').addEventListener('change', event => {
  if (event.matches && activeDialog === drawer) closeDialog();
});
