// ============================================================================
// ИНТЕРАКТИВНАЯ ЛОГИКА ГЛАВНОЙ СТРАНИЦЫ «TURKISH ACADEMY»
// Все данные 6 временных услуг-заглушек вынесены в единый словарь SERVICE_STUBS,
// чтобы вы могли заменить их на свои реальные продукты за пару минут.
// ============================================================================

const SERVICE_STUBS = {
  '1': {
    badge: 'Временная услуга №1 · Заглушка',
    color: '#154b88',
    softBg: '#e7f0fb',
    title: 'Экспресс-программа «Турецкий для жизни и поездок»',
    desc: 'Это временная карточка-заглушка для вашей первой основной услуги (вместо старого курса А1). В будущем здесь можно разместить отдельный лендинг или форму записи на поток.',
    bullets: [
      '8 недель практики в удобном личном кабинете 24/7',
      'Постановка естественного стамбульского произношения с первых тем',
      'Проверка голосовых заданий куратором и закрытый чат участников'
    ],
    price: 'от 49 000 ₸ / поток (заглушка)'
  },
  '2': {
    badge: 'Временная услуга №2 · Заглушка',
    color: '#c83733',
    softBg: '#fdeceb',
    title: 'Практикум «Деловой и рабочий турецкий»',
    desc: 'Временная услуга-заглушка для предпринимателей, специалистов и тех, кто работает с турецкими фабриками, поставщиками и компаниями.',
    bullets: [
      'Деловой этикет, переписка в мессенджерах и лексика переговоров',
      'Моделирование реальных рабочих созвонов и сделок',
      'Готовые шаблоны писем, запросов и коммерческих фраз'
    ],
    price: 'от 65 000 ₸ / модуль (заглушка)'
  },
  '3': {
    badge: 'Временная услуга №3 · Заглушка',
    color: '#1a7e86',
    softBg: '#e3f4f5',
    title: 'Подготовка к экзамену TÖMER и поступлению в ВУЗы',
    desc: 'Временная заглушка академического трека для будущих студентов турецких университетов и участников стипендиальных программ.',
    bullets: [
      'Тренировка всех 4 блоков экзамена: чтение, аудирование, письмо и речь',
      'Мини-группы до 5 участников с детальным разбором письменных работ',
      'Пробные срезы в формате реального экзамена'
    ],
    price: 'от 75 000 ₸ / месяц (заглушка)'
  },
  '4': {
    badge: 'Временная услуга №4 · Заглушка',
    color: '#2c6ed5',
    softBg: '#e8f1fd',
    title: 'Живые спикинг-сессии с носителями языка',
    desc: 'Временная заглушка разговорного клуба в мини-группах для преодоления языкового барьера и регулярной разговорной практики.',
    bullets: [
      'Группы по уровням: начальный, продолжающий и продвинутый',
      'Живые встречи в Zoom по 90 минут каждую неделю',
      'Актуальные темы, карточки новых выражений и максимум живой речи'
    ],
    price: 'от 18 000 ₸ / абонемент (заглушка)'
  },
  '5': {
    badge: 'Временная услуга №5 · Заглушка вместо книги',
    color: '#cc7a29',
    softBg: '#fdf2e3',
    title: 'Интерактивный тренажер слов и разборов сериалов',
    desc: 'Специальная временная заглушка вместо электронной книги референса. Сюда отлично встанет ваш цифровой автопродукт: тренажер лексики, гайд по переезду, марафон по турецким сериалам или аудиокурс.',
    bullets: [
      '40 тематических модулей с озвучкой живыми носителями',
      'Интерактивные карточки интервального повторения в телефоне',
      'Мгновенный автоматический доступ сразу после оплаты'
    ],
    price: '14 900 ₸ · доступ навсегда (заглушка)'
  },
  '6': {
    badge: 'Временная услуга №6 · Заглушка',
    color: '#6f4bb8',
    softBg: '#f0ebfa',
    title: 'VIP-сопровождение 1-на-1 или в паре',
    desc: 'Временная заглушка индивидуального или парного обучения по персональной программе и гибкому расписанию.',
    bullets: [
      'Персональный учебный план под вашу цель и сроки',
      'Удобный график встреч и перенос уроков без потери занятий',
      'Прямой контакт с ведущим преподавателем академии'
    ],
    price: 'от 9 500 ₸ / занятие (заглушка)'
  }
};

const VIDEO_STUBS = {
  brand: {
    title: 'Видео-знакомство с TURKISH ACADEMY',
    speaker: 'Приветственное видео проекта (заглушка 16:9)',
    quote: '«Merhaba! В этом окне будет запускаться ваше фирменное видео о TURKISH ACADEMY, атмосфере уроков и результатах студентов.»'
  },
  deniz: {
    title: 'Видео-представление преподавателя',
    speaker: 'Дениз · Старший преподаватель (TÖMER C1)',
    quote: '«Herkese merhaba! На моих уроках вы убедитесь, что турецкая грамматика похожа на красивый и очень логичный конструктор.»'
  },
  selin: {
    title: 'Видео-представление преподавателя',
    speaker: 'Селин · Куратор разговорной практики (Стамбул)',
    quote: '«Selam друзья! Будем учиться звучать естественно, понимать быструю стамбульскую речь и говорить с улыбкой.»'
  },
  emre: {
    title: 'Видео-представление преподавателя',
    speaker: 'Эмре · Носитель турецкого языка (Измир)',
    quote: '«Hoş geldiniz! Жду вас на разговорных встречах — обсудим кино, путешествия, музыку и живые турецкие выражения.»'
  },
  leyla: {
    title: 'Видео-представление преподавателя',
    speaker: 'Лейла · Эксперт по экзамену TÖMER',
    quote: '«Merhaba! Помогу уверенно подготовиться к экзамену, поступлению в университет или рабочим собеседованиям на турецком.»'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Мобильное бургер-меню
  const mobileDrawer = document.getElementById('mobileDrawer');
  const burgerOpenBtn = document.getElementById('burgerOpenBtn');
  const burgerCloseBtn = document.getElementById('burgerCloseBtn');
  const burgerBackdrop = document.getElementById('burgerBackdrop');

  function closeDrawer() {
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  burgerOpenBtn?.addEventListener('click', () => {
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  });
  burgerCloseBtn?.addEventListener('click', closeDrawer);
  burgerBackdrop?.addEventListener('click', closeDrawer);
  document.querySelectorAll('[data-close-drawer]').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // 2. Модальные окна
  const managerModal = document.getElementById('managerModal');
  const serviceStubModal = document.getElementById('serviceStubModal');
  const videoGreetingModal = document.getElementById('videoGreetingModal');

  function closeAllModals() {
    [managerModal, serviceStubModal, videoGreetingModal].forEach((m) => {
      if (m) {
        m.classList.remove('is-open');
        m.setAttribute('aria-hidden', 'true');
      }
    });
    document.body.classList.remove('modal-open');
  }

  function openModal(modalEl) {
    closeDrawer();
    closeAllModals();
    if (!modalEl) return;
    modalEl.classList.add('is-open');
    modalEl.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  document.querySelectorAll('[data-open-modal="manager"]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(managerModal);
    });
  });

  // Открытие модалки временной услуги-заглушки
  const stubBadge = document.getElementById('serviceStubBadge');
  const stubTitle = document.getElementById('serviceStubTitle');
  const stubDesc = document.getElementById('serviceStubDesc');
  const stubList = document.getElementById('serviceStubList');
  const stubPrice = document.getElementById('serviceStubPrice');
  const stubOrderBtn = document.getElementById('serviceStubOrderBtn');
  let activeServiceTitle = '';

  document.querySelectorAll('[data-open-service]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = el.getAttribute('data-open-service');
      const data = SERVICE_STUBS[id];
      if (!data) return;
      activeServiceTitle = data.title;
      stubBadge.textContent = data.badge;
      stubBadge.style.background = data.softBg;
      stubBadge.style.color = data.color;
      stubTitle.textContent = data.title;
      stubTitle.style.color = data.color;
      stubDesc.textContent = data.desc;
      stubPrice.textContent = data.price;
      stubPrice.style.color = data.color;
      stubOrderBtn.style.background = data.color;
      stubList.innerHTML = data.bullets
        .map(
          (b) =>
            `<li><span class="format-card__check" style="background:${data.softBg};color:${data.color};">✓</span><span>${b}</span></li>`
        )
        .join('');
      openModal(serviceStubModal);
    });
  });

  stubOrderBtn?.addEventListener('click', () => {
    openModal(managerModal);
    const tgInput = managerModal.querySelector('input[name="telegram"]');
    if (tgInput && activeServiceTitle) {
      tgInput.value = `Интересует: ${activeServiceTitle}`;
    }
  });

  // Открытие видео-презентаций преподавателей
  document.querySelectorAll('[data-open-video]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-open-video');
      const v = VIDEO_STUBS[key];
      if (!v) return;
      document.getElementById('videoModalTitle').textContent = v.title;
      document.getElementById('videoModalSpeaker').textContent = v.speaker;
      document.getElementById('videoModalQuote').textContent = v.quote;
      openModal(videoGreetingModal);
    });
  });

  document.querySelectorAll('[data-close-modal]').forEach((btn) => {
    btn.addEventListener('click', closeAllModals);
  });

  [managerModal, serviceStubModal, videoGreetingModal].forEach((overlay) => {
    overlay?.addEventListener('click', (e) => {
      if (e.target === overlay) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeAllModals();
    }
  });

  // 3. Анимированный фон видео-блока Босфора + переключатель звука (аналог ANX011-1)
  const canvas = document.getElementById('bosphorusCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let tick = 0;
    const resize = () => {
      canvas.width = canvas.clientWidth || 1200;
      canvas.height = canvas.clientHeight || 520;
    };
    resize();
    window.addEventListener('resize', resize);

    const drawWaves = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        const baseY = h * (0.45 + layer * 0.16);
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 20) {
          const y =
            baseY +
            Math.sin(x * 0.006 + tick + layer * 1.4) * (22 + layer * 6) +
            Math.cos(x * 0.003 - tick * 0.7) * 12;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 255, 255, ${0.12 - layer * 0.03})`;
        ctx.fill();
      }
      tick += 0.025;
      requestAnimationFrame(drawWaves);
    };
    drawWaves();
  }

  const heroSoundToggle = document.getElementById('heroSoundToggle');
  const heroSoundLabel = document.getElementById('heroSoundLabel');
  heroSoundToggle?.addEventListener('click', () => {
    const unmuted = heroSoundToggle.classList.toggle('is-unmuted');
    heroSoundToggle.setAttribute('aria-pressed', String(unmuted));
    heroSoundLabel.textContent = unmuted ? 'Выключить звук' : 'Включить звук';
  });

  // 4. Мини-тренажер автопроверки внутри Бенто-карточки №1
  const quizWrap = document.getElementById('miniPlatformQuiz');
  const quizFeedback = document.getElementById('miniQuizFeedback');
  quizWrap?.querySelectorAll('.mini-quiz-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      quizWrap.querySelectorAll('.mini-quiz-btn').forEach((b) => {
        b.classList.remove('is-correct', 'is-wrong');
      });
      const ok = btn.getAttribute('data-correct') === 'true';
      if (ok) {
        btn.classList.add('is-correct');
        quizFeedback.textContent = 'Harika! Верно: «Afiyet olsun!» — так желают приятного аппетита в Турции.';
        quizFeedback.style.color = '#1e7e55';
      } else {
        btn.classList.add('is-wrong');
        quizFeedback.textContent = 'Почти! «Geçmiş olsun» — пожелание выздоровления, а «İyi yolculuklar» — счастливого пути. Попробуйте еще раз!';
        quizFeedback.style.color = '#c44b28';
      }
    });
  });

  // 5. Горизонтальный свайп-слайдер преподавателей (тач + мышь + адаптивный шаг стрелок)
  const track = document.getElementById('teachersTrack');
  const prevBtn = document.getElementById('teachersPrevBtn');
  const nextBtn = document.getElementById('teachersNextBtn');

  function getTeacherScrollStep() {
    const firstCard = track?.querySelector('.teacher-item');
    if (!firstCard) return 340;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '16') || 16;
    return firstCard.offsetWidth + gap;
  }

  prevBtn?.addEventListener('click', () => {
    track?.scrollBy({ left: -getTeacherScrollStep(), behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    track?.scrollBy({ left: getTeacherScrollStep(), behavior: 'smooth' });
  });

  if (track) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    window.addEventListener('mouseup', () => {
      isDown = false;
    });
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });
  }

  // 6. Аккордеон FAQ (аналог T668 + NOLIM NLM033) с пересчетом высоты на ресайзе
  const faqItems = document.querySelectorAll('#faqAccordion .faq-item');
  function syncOpenFaqHeights() {
    faqItems.forEach((item) => {
      const panel = item.querySelector('.faq-panel');
      if (panel && item.classList.contains('is-open')) {
        panel.style.maxHeight = `${panel.scrollHeight + 24}px`;
      }
    });
  }

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    trigger?.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      panel.style.maxHeight = isOpen ? `${panel.scrollHeight + 24}px` : '0px';
    });
  });

  syncOpenFaqHeights();
  window.addEventListener('resize', syncOpenFaqHeights);

  // 7. Легкая маска телефона РК (+7) и отправка форм
  document.querySelectorAll('.js-phone-input').forEach((inp) => {
    inp.addEventListener('focus', () => {
      if (!inp.value.trim()) inp.value = '+7 ';
    });
  });

  function bindConsultForm(formId, statusId) {
    const form = document.getElementById(formId);
    const status = document.getElementById(statusId);
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameVal = form.querySelector('input[name="name"]')?.value.trim();
      const phoneVal = form.querySelector('input[name="phone"]')?.value.trim();
      if (!nameVal || !phoneVal || phoneVal.length < 6) {
        status.textContent = 'Пожалуйста, укажите ваше имя и номер телефона / WhatsApp.';
        return;
      }
      status.textContent = `Teşekkürler, ${nameVal}! Заявка принята (тестовый режим) — координатор скоро напишет вам.`;
      form.reset();
    });
  }

  bindConsultForm('inlineConsultForm', 'inlineConsultStatus');
  bindConsultForm('modalConsultForm', 'modalConsultStatus');

  // 8. Кнопка возврата наверх (#rec581767249)
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 560) {
      backToTopBtn?.classList.add('is-visible');
    } else {
      backToTopBtn?.classList.remove('is-visible');
    }
  });
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
