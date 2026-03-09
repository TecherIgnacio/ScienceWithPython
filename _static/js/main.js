/* =====================================================
   CIENCIA CON PYTHON — main.js
   Starfield · Language Toggle · Interactive Python Cells
   ===================================================== */

/* ---------- Starfield (canvas animado) ---------------------------------------- */
(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "swp-starfield";
  document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeStars(n) {
    stars = Array.from({ length: n }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      a: Math.random() * 0.75 + 0.15,
      da: (Math.random() * 0.012 + 0.004) * (Math.random() < 0.5 ? 1 : -1),
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      s.a += s.da;
      if (s.a > 0.9 || s.a < 0.1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,210,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  makeStars(220);
  draw();
  window.addEventListener("resize", () => { resize(); makeStars(220); });
})();


/* ---------- Toggle de idioma -------------------------------------------------- */
(function () {
  const STORAGE_KEY = "swp-lang";
  let current = localStorage.getItem(STORAGE_KEY) || "es";

  // Aplica clase al body lo antes posible para evitar flash de contenido incorrecto
  document.body.classList.add("lang-" + current);

  function updateBtn(btn) {
    btn.querySelector("#lt-es").classList.toggle("active", current === "es");
    btn.querySelector("#lt-en").classList.toggle("active", current === "en");
    btn.title = current === "es" ? "Switch to English" : "Cambiar a Español";
  }

  function insertToggle() {
    // Intentar varios selectores que usa sphinx-book-theme
    const target =
      document.querySelector(".navbar-nav.ms-auto") ||
      document.querySelector(".navbar-nav") ||
      document.querySelector(".bd-header-article__inner") ||
      document.querySelector(".navbar");
    if (!target) return;

    const wrap = document.createElement("div");
    wrap.className = "lang-toggle-wrap";

    const btn = document.createElement("button");
    btn.className = "lang-toggle-btn";
    btn.innerHTML =
      '<span class="lt-opt" id="lt-es">ES</span>' +
      '<span class="lt-sep">|</span>' +
      '<span class="lt-opt" id="lt-en">EN</span>';

    updateBtn(btn);

    btn.addEventListener("click", () => {
      current = current === "es" ? "en" : "es";
      document.body.classList.remove("lang-es", "lang-en");
      document.body.classList.add("lang-" + current);
      localStorage.setItem(STORAGE_KEY, current);
      updateBtn(btn);
    });

    wrap.appendChild(btn);
    target.appendChild(wrap);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertToggle);
  } else {
    insertToggle();
  }
})();


/* ---------- Celdas Python interactivas (Pyodide) ------------------------------ */
(function () {
  let pyodide   = null;
  let loading   = false;
  let waitQueue = [];

  /**
   * Carga Pyodide desde CDN la primera vez que se necesita.
   * Las llamadas posteriores devuelven la instancia ya cargada.
   */
  async function getPyodide() {
    if (pyodide) return pyodide;
    if (loading) return new Promise((res) => waitQueue.push(res));

    loading = true;

    // Cargar el script de Pyodide si no está ya en la página
    if (!window.loadPyodide) {
      await new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js";
        s.onload = res;
        s.onerror = rej;
        document.head.appendChild(s);
      });
    }

    pyodide = await window.loadPyodide();
    loading  = false;
    waitQueue.forEach((cb) => cb(pyodide));
    waitQueue = [];
    return pyodide;
  }

  /**
   * Construye el widget de celda a partir de un elemento .py-interactive.
   * data-mode="browser" → celda ejecutable en el navegador
   * data-mode="local"   → código descargable (para ejecutar en la PC)
   */
  function buildCell(el) {
    const isBrowser = (el.dataset.mode || "browser") !== "local";
    const code = el.textContent.trim();

    const cell = document.createElement("div");
    cell.className = "py-cell " + (isBrowser ? "browser" : "local");

    /* ---- Header ---- */
    const header = document.createElement("div");
    header.className = "py-cell-header";

    const badge = document.createElement("span");
    badge.className = "py-badge " + (isBrowser ? "browser" : "local");
    badge.textContent = isBrowser ? "🌐 En el navegador" : "💻 En tu PC";

    header.appendChild(badge);
    header.insertAdjacentHTML("beforeend", "<span>python</span>");

    /* ---- Editor ---- */
    const editor = document.createElement("textarea");
    editor.className = "py-cell-editor";
    editor.value     = code;
    editor.spellcheck = false;
    editor.autocorrect = "off";
    editor.autocapitalize = "off";

    // Soporte de tecla Tab en el editor
    editor.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const s = editor.selectionStart;
        editor.value =
          editor.value.slice(0, s) + "    " + editor.value.slice(editor.selectionEnd);
        editor.selectionStart = editor.selectionEnd = s + 4;
      }
    });

    // Ajuste automático de altura
    editor.addEventListener("input", () => {
      editor.style.height = "auto";
      editor.style.height = editor.scrollHeight + "px";
    });

    /* ---- Footer ---- */
    const footer = document.createElement("div");
    footer.className = "py-cell-footer";

    /* ---- Output ---- */
    const output = document.createElement("div");
    output.className = "py-output";

    if (isBrowser) {
      /* -- Botón Ejecutar -- */
      const runBtn = document.createElement("button");
      runBtn.className = "py-run-btn";
      runBtn.innerHTML = "&#9654; Ejecutar";

      /* -- Botón Reiniciar -- */
      const resetBtn = document.createElement("button");
      resetBtn.className = "py-reset-btn";
      resetBtn.innerHTML = "&#8635; Reiniciar";

      /* -- Indicador de estado -- */
      const status = document.createElement("span");
      status.className = "py-status";
      const spinner = document.createElement("span");
      spinner.className = "py-spinner";
      const statusText = document.createElement("span");
      status.appendChild(spinner);
      status.appendChild(statusText);

      resetBtn.addEventListener("click", () => {
        editor.value = code;
        editor.style.height = "auto";
        output.className = "py-output";
        output.textContent = "";
      });

      runBtn.addEventListener("click", async () => {
        runBtn.disabled = true;
        spinner.classList.add("visible");
        statusText.textContent = "Cargando Python…";
        output.className = "py-output visible";
        output.textContent = "";

        try {
          const py = await getPyodide();
          statusText.textContent = "Ejecutando…";

          let captured = "";
          py.setStdout({ batched: (s) => { captured += s + "\n"; } });
          py.setStderr({ batched: (s) => { captured += s + "\n"; } });

          await py.runPythonAsync(editor.value);

          output.textContent = captured.trimEnd() || "(sin salida)";
          output.classList.remove("error");
        } catch (err) {
          // Mostrar solo el mensaje relevante (sin el stack de Pyodide)
          const lines = err.message.split("\n").filter(
            (l) => !l.includes("pyodide") && !l.includes("_pyodide") && l.trim()
          );
          output.textContent = lines.join("\n") || err.message;
          output.classList.add("error");
        }

        runBtn.disabled = false;
        spinner.classList.remove("visible");
        statusText.textContent = "";
      });

      footer.appendChild(runBtn);
      footer.appendChild(resetBtn);
      footer.appendChild(status);

    } else {
      /* -- Modo local: botón de descarga -- */
      const dlBtn = document.createElement("button");
      dlBtn.className = "py-download-btn";
      dlBtn.innerHTML = "&#8659; Descargar .py";

      dlBtn.addEventListener("click", () => {
        const blob = new Blob([editor.value], { type: "text/plain" });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement("a");
        a.href     = url;
        a.download = "ejercicio.py";
        a.click();
        URL.revokeObjectURL(url);
      });

      const hint = document.createElement("span");
      hint.className = "py-status";
      hint.textContent = "Ejecútalo con Python en tu computadora";

      footer.appendChild(dlBtn);
      footer.appendChild(hint);
    }

    cell.appendChild(header);
    cell.appendChild(editor);
    cell.appendChild(footer);
    cell.appendChild(output);

    // Ajustar altura inicial del editor
    requestAnimationFrame(() => {
      editor.style.height = "auto";
      editor.style.height = editor.scrollHeight + "px";
    });

    return cell;
  }

  function processPage() {
    document.querySelectorAll(".py-interactive").forEach((el) => {
      el.replaceWith(buildCell(el));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", processPage);
  } else {
    processPage();
  }
})();
