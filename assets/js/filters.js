(function () {
  'use strict';

  const STATE = {
    category: 'all',
    subcategory: 'all',
    os: localStorage.getItem('shadow-red.os') || 'all',
    query: ''
  };

  const $rows = Array.from(document.querySelectorAll('.note-row'));
  const $catChips = Array.from(document.querySelectorAll('.cat-chip'));
  const $subBars = Array.from(document.querySelectorAll('.subcat-bar'));
  const $osButtons = Array.from(document.querySelectorAll('.os-toggle button'));
  const $search = document.getElementById('search');
  const $empty = document.querySelector('.notes-empty');
  const $count = document.getElementById('result-count');

  // ---- OS toggle ---------------------------------------------------------
  function applyOs() {
    $osButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.os === STATE.os);
    });
    localStorage.setItem('shadow-red.os', STATE.os);
    render();
  }
  $osButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      STATE.os = btn.dataset.os;
      applyOs();
    });
  });

  // ---- Category chips ----------------------------------------------------
  $catChips.forEach(chip => {
    chip.addEventListener('click', () => {
      STATE.category = chip.dataset.cat;
      STATE.subcategory = 'all';
      $catChips.forEach(c => c.classList.toggle('active', c === chip));
      $subBars.forEach(bar => {
        bar.classList.toggle('visible',
          STATE.category !== 'all' && bar.dataset.cat === STATE.category);
      });
      // Reset subcat highlighting in all bars
      document.querySelectorAll('.subcat-chip').forEach(s => s.classList.remove('active'));
      render();
    });
  });

  // ---- Subcategory chips -------------------------------------------------
  document.querySelectorAll('.subcat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const sub = chip.dataset.sub;
      // toggle behavior: clicking active deselects
      if (STATE.subcategory === sub) {
        STATE.subcategory = 'all';
        chip.classList.remove('active');
      } else {
        STATE.subcategory = sub;
        document.querySelectorAll('.subcat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      }
      render();
    });
  });

  // ---- Search ------------------------------------------------------------
  if ($search) {
    $search.addEventListener('input', e => {
      STATE.query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  // ---- Render ------------------------------------------------------------
  function render() {
    let visible = 0;
    $rows.forEach(row => {
      const cat = row.dataset.cat || '';
      const sub = (row.dataset.sub || '').toLowerCase();
      const os  = (row.dataset.os  || '').toLowerCase();
      const search = (row.dataset.search || '').toLowerCase();

      const catOk = STATE.category === 'all' || cat === STATE.category;
      const subOk = STATE.subcategory === 'all' || sub === STATE.subcategory.toLowerCase();
      const osOk  = STATE.os === 'all' || os.split(',').map(s => s.trim()).includes(STATE.os);
      const qOk   = !STATE.query || search.includes(STATE.query);

      const show = catOk && subOk && osOk && qOk;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if ($empty) $empty.style.display = visible === 0 ? '' : 'none';
    if ($count) $count.textContent = visible;
  }

  // ---- Init --------------------------------------------------------------
  applyOs();
  render();

  // ---- Update category counts -------------------------------------------
  $catChips.forEach(chip => {
    const cat = chip.dataset.cat;
    if (cat === 'all') {
      const span = chip.querySelector('.count');
      if (span) span.textContent = `[${$rows.length}]`;
      return;
    }
    const count = $rows.filter(r => r.dataset.cat === cat).length;
    const span = chip.querySelector('.count');
    if (span) span.textContent = `[${count}]`;
  });
})();
