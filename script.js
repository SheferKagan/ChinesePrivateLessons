/***********************************************************
 * Config
 ***********************************************************/
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzOvaFpHX6KwQQMV8O1J9ByEY1rJbrvd0EnJL9Oij1ZrFF1bzrOoNOvxg95Snf0Szxu/exec';

/***********************************************************
 * i18n dictionary (ALL texts, including testimonials & countdown labels)
 ***********************************************************/
const DICT = {
  en: {
    title: "Chinese for Beginners - Speak from Day One",
    lang: "Language:",
    hero_h1: "Chinese for Beginners",
    hero_sub: "Start speaking Chinese from day one — even if you've never learned a word before.",
    cta: "Join the Next Class Now",

    why_title: "Why This Course?",
    benefit1_h: "Tailored for Professionals",
    benefit1_p: "Business-focused vocabulary and cultural insights that matter in real settings. Perfect for expanding your career opportunities.",
    benefit2_h: "Learn Practical Phrases Fast",
    benefit2_p: "Skip the theory. Focus on real conversations you'll use immediately. From greetings to business introductions in just 6 weeks.",
    benefit3_h: "Boost Confidence in Conversation",
    benefit3_p: "Practice with native speakers and fellow learners. Gain the confidence to speak Chinese naturally.",
    benefit4_h: "Small Groups, Big Results",
    benefit4_p: "Limited class sizes ensure personal attention and faster progress.",

    details_title: "Course Details",
    loc_h: "Location",
    loc_p: "Raanana Hi-Tech Industrial Park<br>Convenient parking & public transport",
    sched_h: "Schedule",
    sched_p: "Once a week · 6 weeks total<br>1.5 hours per session",
    size_h: "Class Size",
    size_p: "Maximum 8 students<br>Intimate learning environment",

    learn_title: "What You'll Learn",
    learn1: "Perfect self-introductions",
    learn2: "Where you're from — geography and culture",
    learn3: "What you do — professional terms",
    learn4: "How to ask & respond the right way",
    learn5: "Chinese tones & pronunciation",
    learn6: "Cultural etiquette and customs",
    learn7: "Real conversation practice",
    learn8: "Phrases for travel and networking",

    urgency: "🚀 Spots are limited – Sign up now!",
    time_until_start: "until next group starts",
    seats_remaining: "seats remaining",

    testimonials_title: "What Our Students Say",
    testimonial_1: "I learned so much in such a short time!",
    testimonial_2: "The teacher is amazing, highly recommend.",
    testimonial_3: "Best language course I've ever taken.",

    signup_title: "Secure Your Spot Today",
    form_name_label: "Full Name *",
    form_phone_label: "Phone Number *",
    form_email_label: "Email Address *",
    form_cta: "Join Now",

    ph_name: "Your full name",
    ph_phone: "+972-5X-XXX-XXXX",
    ph_email: "you@company.com",

    privacy: "🔒 We'll only contact you about the course. No spam.",
    footer_brand: "Chinese for Beginners",
    footer_loc: "Raanana Hi-Tech Industrial Park",
    footer_contact: "Email: matanovax@gmail.com | Phone: +972-53-780-0337",
    footer_legal: "© 2025 Chinese for Beginners. Privacy Policy | Terms of Service",

    msg_success: "🎉 Success! Your spot is reserved. We'll be in touch soon with class details.",
    msg_error: "Sorry — there was an error submitting. Please try again later.",
    msg_processing: "Processing...",
    msg_required: "Please complete the required fields.",
    msg_phone_invalid: "Please enter a valid Israeli phone number (e.g., 050-123-4567)",
    msg_email_invalid: "Please enter a valid email address.",
    msg_blocked: "Submission blocked.",

    sale_text: "Sign-up gift for those registering by Aug 20 – 7th session for practice and hands-on experience using the language in real situations",

    /* labels for spreadsheet */
    form_field_name: "Name",
    form_field_phone: "Phone",
    form_field_email: "Email",
    form_field_timestamp: "Submission Date",

    // testimonials
    testimonials_title: "What Our Students Say",
    testimonial_1: "I learned so much in such a short time!",
    testimonial_2: "The teacher is amazing, highly recommend.",
    testimonial_3: "Best language course I've ever taken.",
    testimonial_4: "The small group made it easy to speak from day one.",
    testimonial_5: "Clear structure, practical phrases, and fun practice.",
    testimonial_6: "Great value for money. I’m already using it at work!",
  },

  he: {
    title: "סינית למתחילים - מדברים מהיום הראשון",
    lang: "שפה:",
    hero_h1: "סינית למתחילים",
    hero_sub: "מתחילים לדבר סינית כבר מהשיעור הראשון — גם אם לא למדתם מילה בעבר.",
    cta: "הצטרפו לשיעור הקרוב עכשיו",

    why_title: "למה הקורס הזה?",
    benefit1_h: "מותאם לאנשי מקצוע",
    benefit1_p: "אוצר מילים עסקי ותובנות תרבותיות למפגשים אמיתיים. מושלם להרחבת ההזדמנויות הקרייריסטיות.",
    benefit2_h: "משפטים שימושיים במהירות",
    benefit2_p: "מדלגים על התיאוריה ומתמקדים בשיחות אמיתיות. מברכות ועד היכרות עסקית תוך 6 שבועות.",
    benefit3_h: "ביטחון בשיחה",
    benefit3_p: "תרגול עם דוברי שפת אם ומשתתפים נוספים. תבנו ביטחון לשיחה טבעית בסינית.",
    benefit4_h: "קבוצות קטנות – תוצאות גדולות",
    benefit4_p: "מספר משתתפים מוגבל לקבלת יחס אישי והתקדמות מהירה.",

    details_title: "פרטי הקורס",
    loc_h: "מיקום",
    loc_p: "פארק ההייטק רעננה<br>חניה נוחה ותחבורה ציבורית",
    sched_h: "זמנים",
    sched_p: "פעם בשבוע · 6 שבועות<br>90 דקות למפגש",
    size_h: "גודל קבוצה",
    size_p: "עד 8 משתתפים<br>אווירה אינטימית",

    learn_title: "מה נלמד",
    learn1: "הצגה עצמית מושלמת",
    learn2: "מאיפה אתם — גיאוגרפיה ותרבות",
    learn3: "מה אתם עושים — מונחים מקצועיים",
    learn4: "איך לשאול ולענות נכון",
    learn5: "הגייה וטונים בסינית",
    learn6: "נימוסים וכללי תרבות",
    learn7: "תרגול שיחה אמיתית",
    learn8: "משפטים חיוניים לנסיעות ונטוורקינג",

    urgency: "🚀 מספר המקומות מוגבל – הרשמו עכשיו!",
    time_until_start: "עד תחילת הקבוצה הבאה",
    seats_remaining: "מקומות שנותרו",

    testimonials_title: "מה הסטודנטים שלנו אומרים",
    testimonial_1: "למדתי כל כך הרבה בזמן קצר!",
    testimonial_2: "המורה מעולה, ממליץ בחום.",
    testimonial_3: "הקורס הטוב ביותר שלקחתי.",

    signup_title: "שריינו מקום כבר היום",
    form_name_label: "שם מלא *",
    form_phone_label: "טלפון *",
    form_email_label: "אימייל *",
    form_cta: "הצטרפו עכשיו",

    ph_name: "שם מלא",
    ph_phone: "+972-5X-XXX-XXXX",
    ph_email: "you@company.com",

    privacy: "🔒 ניצור קשר רק לגבי הקורס. בלי ספאם.",
    footer_brand: "סינית למתחילים",
    footer_loc: "פארק ההייטק רעננה",
    footer_contact: "אימייל: matanovax@gmail.com | טלפון: +972-53-780-0337",
    footer_legal: "© 2025 סינית למתחילים. מדיניות פרטיות | תנאי שימוש",

    msg_success: "🎉 הצלחה! המקום שלך נשמר. ניצור קשר בקרוב עם פרטי השיעור.",
    msg_error: "אופס — קרתה שגיאה בשליחה. נסו שוב מאוחר יותר.",
    msg_processing: "מעבד...",
    msg_required: "אנא מלא/י את כל השדות החובה.",
    msg_phone_invalid: "אנא הזינו מספר טלפון ישראלי תקין (למשל: 050-123-4567)",
    msg_email_invalid: "אנא הזינו כתובת אימייל תקינה.",
    msg_blocked: "ההגשה נחסמה.",

    sale_text: "מתנת הצטרפות לנרשמים עד 20.8 - מפגש 7 של תירגול והתנסות בשימוש בשפה בסיטואציות אמיתיות",

    /* labels for spreadsheet */
    form_field_name: "שם",
    form_field_phone: "טלפון",
    form_field_email: "אימייל",
    form_field_timestamp: "תאריך הגשה",

    // testimonials
    testimonials_title: "מה הסטודנטים שלנו אומרים",
    testimonial_1: "למדתי כל כך הרבה בזמן קצר!",
    testimonial_2: "המורה מעולה, ממליץ בחום.",
    testimonial_3: "הקורס הטוב ביותר שלקחתי.",
    testimonial_4: "הקבוצה הקטנה נתנה לי לדבר כבר מהשיעור הראשון.",
    testimonial_5: "מבנה ברור, משפטים שימושיים ותרגול כיפי.",
    testimonial_6: "תמורה מצוינת לכסף. אני כבר משתמש בזה בעבודה!",
  }
};

/***********************************************************
 * Language & Direction
 ***********************************************************/
function applyLang(lang) {
  const t = DICT[lang] || DICT.en;

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
  document.body.style.textAlign = (lang === 'he') ? 'right' : 'left';

  document.getElementById('btn-en')?.classList.toggle('current', lang === 'en');
  document.getElementById('btn-he')?.classList.toggle('current', lang === 'he');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) titleEl.innerHTML = t.title || titleEl.innerHTML;

  const saleBanner = document.getElementById('saleBanner');
  if (saleBanner && t.sale_text) {
    saleBanner.innerHTML = `<span>${t.sale_text}</span>`;

    const span = saleBanner.querySelector('span');
    if (lang === 'he') {
      span.style.transform = 'translateX(-100%)'; // start from right for Hebrew
      span.style.animationDirection = 'reverse';  // optional: scroll left-to-right
    } else {
      span.style.transform = 'translateX(100%)'; // default left-to-right
      span.style.animationDirection = 'normal';
    }
  }
}


/***********************************************************
 * Persisted language
 ***********************************************************/
const stored = localStorage.getItem('lang');
const browserLang = (navigator.language || 'en').toLowerCase().startsWith('he') ? 'he' : 'en';
const initialLang = stored || browserLang;

document.addEventListener('DOMContentLoaded', () => {
  applyLang(initialLang);

  // Hide language toggle when scrolling down; show at top
const langToggle = document.querySelector('.lang-toggle');
let lastKnownY = 0;

function handleScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  if (!langToggle) return;
  if (y > 10) {
    langToggle.classList.add('hide');
  } else {
    langToggle.classList.remove('hide');
  }
  lastKnownY = y;
}
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();


  document.getElementById('btn-en')?.addEventListener('click', () => { applyLang('en'); localStorage.setItem('lang','en'); });
  document.getElementById('btn-he')?.addEventListener('click', () => { applyLang('he'); localStorage.setItem('lang','he'); });

  addScrollAnimations();
  initCarousel();
  initForm();
  startCountdown(new Date(Date.now() + 86400000)); // 24h demo
  updateSeats(8);
});

/***********************************************************
 * Animations
 ***********************************************************/
function addScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const animated = document.querySelectorAll('.benefit-card, .detail-item, .checklist-item, .form-container');
  animated.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
  });
}

/***********************************************************
 * Countdown + Seats
 ***********************************************************/
function startCountdown(targetDate) {
  const el = document.getElementById('countdown-timer');
  if (!el) return;

  function tick() {
    const now = new Date();
    const distance = targetDate - now;
    if (distance < 0) { el.textContent = "00:00:00"; return; }
    const h = String(Math.floor((distance / (1000*60*60)) % 24)).padStart(2,'0');
    const m = String(Math.floor((distance / (1000*60)) % 60)).padStart(2,'0');
    const s = String(Math.floor((distance / 1000) % 60)).padStart(2,'0');
    el.textContent = `${h}:${m}:${s}`;
  }
  tick();
  setInterval(tick, 1000);
}

function updateSeats(n) {
  const el = document.getElementById('seats-left');
  if (el) el.textContent = n;
}

/***********************************************************
 * Testimonials Carousel (works in RTL too, we force LTR track)
 ***********************************************************/
function initCarousel() {
  const track = document.getElementById('testimonialCarousel');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.testimonial'));
  const prev = document.getElementById('prevTestimonial');
  const next = document.getElementById('nextTestimonial');

  let index = 0;

  function cardWidth() {
    // each card is 100% of container + gap; use track width as base
    return track.getBoundingClientRect().width + 20; // gap=20px
  }
  function goTo(i) {
    index = Math.max(0, Math.min(i, cards.length - 1));
    track.scrollTo({ left: index * cardWidth(), behavior: 'smooth' });
    updateButtons();
  }
  function updateButtons() {
    if (prev) prev.disabled = (index <= 0);
    if (next) next.disabled = (index >= cards.length - 1);
  }

  prev?.addEventListener('click', () => goTo(index - 1));
  next?.addEventListener('click', () => goTo(index + 1));

  // drag to scroll (desktop)
  let isDown=false, startX=0, startLeft=0;
  track.addEventListener('mousedown', (e)=>{ isDown=true; startX=e.pageX; startLeft=track.scrollLeft; track.classList.add('grabbing'); });
  window.addEventListener('mouseup', ()=>{ isDown=false; track.classList.remove('grabbing'); });
  track.addEventListener('mouseleave', ()=>{ isDown=false; track.classList.remove('grabbing'); });
  track.addEventListener('mousemove', (e)=>{
    if(!isDown) return;
    const dx = e.pageX - startX;
    track.scrollLeft = startLeft - dx;
  });

  // sync index after manual scroll
  track.addEventListener('scroll', ()=>{
    const i = Math.round(track.scrollLeft / cardWidth());
    if (i !== index) { index = i; updateButtons(); }
  }, { passive:true });

  window.addEventListener('resize', ()=> goTo(index));

  // go to first on init
  goTo(0);
}

/***********************************************************
 * Form + Live Validation (no alerts)
 ***********************************************************/
function initForm() {
  const form = document.getElementById('signupForm');
  if (!form) return;

  const nameInput  = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const hp = document.getElementById('website');
  const submitBtn = form.querySelector('button[type="submit"]');

  // helpers
  const currentLang = () => document.documentElement.lang || 'en';
  const t = () => (DICT[currentLang()] || DICT.en);

  const phoneRegex = /^(\+972|0)5[0-9]-?[0-9]{3}-?[0-9]{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(input, messageKey) {
    const group = input.closest('.form-group');
    const errEl = group.querySelector('.error-text');
    group.classList.remove('valid');
    group.classList.add('invalid');
    errEl.textContent = t()[messageKey];
  }
  function clearError(input) {
    const group = input.closest('.form-group');
    const errEl = group.querySelector('.error-text');
    group.classList.remove('invalid');
    group.classList.add('valid');
    errEl.textContent = '';
  }

  function validateName() {
    if (!nameInput.value.trim()) { setError(nameInput, 'msg_required'); return false; }
    clearError(nameInput); return true;
  }
  function validatePhone() {
    const clean = phoneInput.value.replace(/\s/g,'');
    if (!clean) { setError(phoneInput, 'msg_required'); return false; }
    if (!phoneRegex.test(clean)) { setError(phoneInput, 'msg_phone_invalid'); return false; }
    clearError(phoneInput); return true;
  }
  function validateEmail() {
    if (!emailInput.value.trim()) { setError(emailInput, 'msg_required'); return false; }
    if (!emailRegex.test(emailInput.value.trim())) { setError(emailInput, 'msg_email_invalid'); return false; }
    clearError(emailInput); return true;
  }

  // live validation
  nameInput.addEventListener('input', validateName);
  phoneInput.addEventListener('input', validatePhone);
  emailInput.addEventListener('input', validateEmail);

  // disable button if invalid
  function updateButtonState() {
    submitBtn.disabled = !(validateName() & validatePhone() & validateEmail());
  }
  ['input','blur'].forEach(ev=>{
    nameInput.addEventListener(ev, updateButtonState);
    phoneInput.addEventListener(ev, updateButtonState);
    emailInput.addEventListener(ev, updateButtonState);
  });
  updateButtonState();

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // re-validate
    const ok = validateName() & validatePhone() & validateEmail();
    if (!ok) { updateButtonState(); return; }

    // honeypot
    if (hp && hp.value) { console.log('Bot detected'); return; }

    const lang = currentLang();
    const tt = t();

    // build payload
    const formData = new FormData();
    const cleanPhone = phoneInput.value.replace(/\s/g,'');
    formData.append(tt.form_field_name, nameInput.value.trim());
    formData.append(tt.form_field_phone, cleanPhone);
    formData.append(tt.form_field_email, emailInput.value.trim());
    formData.append(tt.form_field_timestamp, new Date().toLocaleString(lang === 'he' ? 'he-IL' : 'en-US'));

    // button state
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = tt.msg_processing || 'Processing...';

    try {
      await fetch(GAS_URL, { method: 'POST', body: formData });
      showBanner('success', tt.msg_success);
      form.reset();
      // clear states
      ['name','phone','email'].forEach(id=>{
        const el = document.getElementById(id);
        const group = el.closest('.form-group');
        group.classList.remove('valid','invalid');
        group.querySelector('.error-text').textContent = '';
      });
    } catch (err) {
      console.error(err);
      showBanner('error', tt.msg_error);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      updateButtonState();
    }
  });
}

/***********************************************************
 * Utility: message banner
 ***********************************************************/
function showBanner(type, message) {
  const banner = document.getElementById('messageBanner');
  if (!banner) return;
  banner.className = 'message-banner ' + (type === 'success' ? 'success' : 'error') + ' show';
  banner.textContent = message;
  setTimeout(() => {
    banner.className = 'message-banner';
    banner.textContent = '';
  }, 5000);
}

/***********************************************************
 * CTA keyboard helper
 ***********************************************************/
function scrollToSignup() {
  const signupSection = document.getElementById('signup');
  signupSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && event.target.classList.contains('cta-button')) {
    scrollToSignup();
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const urgencyTitle = document.querySelector('#urgency h2');
  if (urgencyTitle) {
    urgencyTitle.style.cursor = 'pointer';
    urgencyTitle.addEventListener('click', scrollToSignup);
  }
});