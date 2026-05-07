// One-off script to generate the EduAdapta validation deck as a .pptx
// Run with: node scripts/gen-pptx.cjs
// Requires: npm install --no-save pptxgenjs

const PptxGenJS = require("pptxgenjs");
const path = require("path");
const os = require("os");

const pres = new PptxGenJS();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5 inches
pres.title = "Validación EduAdapta";
pres.author = "Equipo EduAdapta";

const C = {
  bg: "FBF7F2",
  bgAlt: "EAE3D9",
  orange: "E8611A",
  orangeLight: "F9D4B8",
  green: "2A6049",
  greenLight: "C8E6DA",
  purple: "5B4B8A",
  yellow: "F5C842",
  text: "1A1208",
  textMid: "5C4A2A",
  textSoft: "9C8060",
  white: "FFFFFF",
  cardBorder: "E8E0D2",
};
const SERIF = "Georgia";
const SANS = "Calibri";

function imgPlaceholder(s, x, y, w, h, label) {
  s.addShape("roundRect", {
    x, y, w, h,
    fill: { color: C.bgAlt },
    line: { color: "C8A98B", dashType: "dash", width: 1.5 },
    rectRadius: 0.15,
  });
  s.addText(label, {
    x, y, w, h,
    fontSize: 13, color: C.textSoft, align: "center", valign: "middle",
    italic: true, fontFace: SANS,
  });
}

// =================================================================
// SLIDE 1 — PORTADA
// =================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  // Decorative blobs
  s.addShape("ellipse", { x: 9.5, y: -1.8, w: 5, h: 5, fill: { color: C.orangeLight }, line: { color: C.orangeLight, width: 0 } });
  s.addShape("ellipse", { x: -1.5, y: 4.2, w: 5, h: 5, fill: { color: C.greenLight }, line: { color: C.greenLight, width: 0 } });

  // Logo block
  s.addShape("roundRect", {
    x: 5.83, y: 0.9, w: 1.67, h: 1.67,
    fill: { color: C.orange }, line: { color: C.orange, width: 0 }, rectRadius: 0.25,
  });
  s.addText("EA", {
    x: 5.83, y: 0.9, w: 1.67, h: 1.67,
    fontSize: 60, bold: true, color: C.white,
    align: "center", valign: "middle", fontFace: SERIF,
  });

  // Title
  s.addText([
    { text: "Validación Final", options: { color: C.green } },
    { text: "\n", options: {} },
    { text: "Edu", options: { color: C.green } },
    { text: "Adapta", options: { color: C.orange } },
  ], {
    x: 0.5, y: 2.9, w: 12.33, h: 1.8,
    fontSize: 54, bold: true, fontFace: SERIF, align: "center",
  });

  // Subtitle
  s.addText("Data-driven design para contextos sin conectividad", {
    x: 0.5, y: 4.85, w: 12.33, h: 0.5,
    fontSize: 20, bold: true, color: C.green, fontFace: SANS, align: "center",
  });

  // Team box
  s.addShape("roundRect", {
    x: 3.5, y: 5.9, w: 6.33, h: 1.0,
    fill: { color: C.white }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.18,
  });
  s.addText([
    { text: "Equipo Emprendedor:\n", options: { bold: true, color: C.text, fontSize: 14 } },
    { text: "José Aguilar  ·  José Islas  ·  Freddy Castro  ·  Juan Olivarria", options: { color: C.textMid, fontSize: 14 } },
  ], {
    x: 3.5, y: 5.9, w: 6.33, h: 1.0,
    align: "center", valign: "middle", fontFace: SANS,
  });
}

// =================================================================
// SLIDE 2 — MÉTODOS
// =================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("Metodología y Demografía", {
    x: 0.5, y: 0.4, w: 12.33, h: 0.7,
    fontSize: 32, bold: true, color: C.text, fontFace: SERIF,
  });
  s.addShape("line", { x: 0.5, y: 1.15, w: 5.5, h: 0, line: { color: C.orangeLight, width: 3 } });

  // Métodos card (white)
  s.addShape("roundRect", {
    x: 0.5, y: 1.6, w: 6.0, h: 2.6,
    fill: { color: C.white }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.18,
  });
  s.addText("Métodos de Validación (n=32)", {
    x: 0.8, y: 1.75, w: 5.4, h: 0.4,
    fontSize: 18, bold: true, color: C.green, fontFace: SERIF,
  });
  s.addText([
    { text: "1. Landing Page: ", options: { bold: true } },
    { text: "Medición de claridad de la UVP (Propuesta Única de Valor).\n\n" },
    { text: "2. Prototipo Ejecutable: ", options: { bold: true } },
    { text: "Pruebas de usabilidad de interfaces Docente / Alumno.\n\n" },
    { text: "3. Entrevistas / Forms: ", options: { bold: true } },
    { text: "Retroalimentación cualitativa y cuantitativa." },
  ], {
    x: 0.8, y: 2.2, w: 5.4, h: 1.95,
    fontSize: 13, color: C.textMid, fontFace: SANS,
  });

  // Perfil card (green)
  s.addShape("roundRect", {
    x: 0.5, y: 4.4, w: 6.0, h: 2.5,
    fill: { color: C.green }, line: { color: C.green, width: 0 }, rectRadius: 0.18,
  });
  s.addText("Perfil Confirmado (Early Adopters)", {
    x: 0.8, y: 4.55, w: 5.4, h: 0.4,
    fontSize: 18, bold: true, color: C.white, fontFace: SERIF,
  });
  s.addText([
    { text: "Conectividad Promedio: ", options: { color: C.white } },
    { text: "2.1 / 5\n", options: { color: C.yellow, bold: true, fontSize: 18 } },
    { text: "El 68% de los docentes reportó acceso a internet nulo o esporádico (rural/multigrado).\n", options: { color: C.white } },
    { text: 'Problema "muy frecuente" — dificultad ', options: { color: C.white } },
    { text: "9.1 / 10", options: { color: C.yellow, bold: true } },
    { text: " para atender distintos niveles a la vez.", options: { color: C.white } },
  ], {
    x: 0.8, y: 5.0, w: 5.4, h: 1.85,
    fontSize: 13, fontFace: SANS, lineSpacingMultiple: 1.4,
  });

  imgPlaceholder(s, 6.83, 1.6, 6.0, 5.3,
    '[Insertar gráficas de Google Forms\n— "Tipos de Escuela" y "Aceptación"]');

  s.addText("Diapositiva 2 — Métodos", {
    x: 0.5, y: 7.05, w: 12.33, h: 0.3,
    fontSize: 10, color: C.textSoft, align: "right", italic: true, fontFace: SANS,
  });
}

// =================================================================
// SLIDE 3 — EVIDENCIA (32 entrevistas)
// =================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("Evidencia: Las Voces del Segmento", {
    x: 0.5, y: 0.4, w: 12.33, h: 0.7,
    fontSize: 30, bold: true, color: C.text, fontFace: SERIF,
  });
  s.addShape("line", { x: 0.5, y: 1.15, w: 6.5, h: 0, line: { color: C.orangeLight, width: 3 } });

  s.addText([
    { text: "Se entrevistó a 32 docentes, validando un " },
    { text: "Problem-Solution Fit innegable", options: { bold: true } },
    { text: " (ninguno respondió que NO usaría la herramienta). Evidencia fotográfica y extractos:" },
  ], {
    x: 0.5, y: 1.3, w: 12.33, h: 0.6,
    fontSize: 13, color: C.textMid, fontFace: SANS,
  });

  // Photo grid
  const pY = 2.0, pH = 1.1, pW = 2.95, pGap = 0.15;
  for (let i = 0; i < 4; i++) {
    imgPlaceholder(s, 0.5 + i * (pW + pGap), pY, pW, pH, `[Foto entrevista ${i + 1}]`);
  }

  // 8 testimonials in 2 columns × 4 rows
  const quotes = [
    { tag: "DOCENTE RURAL", code: "R01", text: '"El modo 100% offline es lo mejor. En las primarias de las comisarías cerca de Obregón la señal es nula."' },
    { tag: "DOCENTE URBANO", code: "U02", text: '"Tengo 45 alumnos. Que la app detecte a los estancados me ahorra horas los fines de semana."' },
    { tag: "MULTIGRADO", code: "M03", text: '"Me gustaría exportar reportes a PDF para mandárselos a los papás por WhatsApp cuando agarramos señal."' },
    { tag: "DOCENTE-DIRECTOR", code: "D04", text: '"Soy maestro y director al mismo tiempo. Necesito ver a toda la escuela en una pantalla."' },
    { tag: "DOCENTE RURAL", code: "R05", text: '"Mis alumnos heredan celulares muy viejos. Necesitamos modo de bajo consumo e instalación sin Wi-Fi."' },
    { tag: "USAER / INCLUSIÓN", code: "U06", text: '"Agregaría un estado preventivo (amarillo) antes de que el rezago sea crítico."' },
    { tag: "COMUNITARIO", code: "M07", text: '"Los contenidos deben considerar el contexto indígena. Textos en lenguas originarias generarían conexión."' },
    { tag: "DIRECTOR", code: "U08", text: '"¿Cuál es el costo real? Si es convenio con SEP es viable, si lo pagan los padres es difícil."' },
  ];

  const cW = 6.0, cH = 0.78, cGap = 0.08;
  const startY = 3.35;
  for (let i = 0; i < 8; i++) {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.5 + col * (cW + 0.3);
    const y = startY + row * (cH + cGap);

    s.addShape("roundRect", {
      x, y, w: cW, h: cH,
      fill: { color: C.white }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.1,
    });
    s.addShape("roundRect", {
      x: x + 0.1, y: y + 0.14, w: 0.5, h: 0.5,
      fill: { color: C.orangeLight }, line: { color: C.orangeLight, width: 0 }, rectRadius: 0.08,
    });
    s.addText(quotes[i].code, {
      x: x + 0.1, y: y + 0.14, w: 0.5, h: 0.5,
      fontSize: 9, bold: true, color: C.orange,
      align: "center", valign: "middle", fontFace: SANS,
    });
    s.addText([
      { text: quotes[i].tag + "\n", options: { bold: true, color: C.green, fontSize: 9 } },
      { text: quotes[i].text, options: { italic: true, color: C.textMid, fontSize: 10 } },
    ], {
      x: x + 0.7, y: y + 0.05, w: cW - 0.8, h: cH - 0.1,
      fontFace: SANS, valign: "middle",
    });
  }

  s.addText("Diapositiva 3 — Evidencia cualitativa  ·  Registro completo de 32 entrevistas en anexo", {
    x: 0.5, y: 7.05, w: 12.33, h: 0.3,
    fontSize: 10, color: C.textSoft, align: "right", italic: true, fontFace: SANS,
  });
}

// =================================================================
// SLIDE 4 — PROTOTIPO MEJORADO (UX/UI)
// =================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("Prototipo Mejorado (UX / UI)", {
    x: 0.5, y: 0.4, w: 12.33, h: 0.7,
    fontSize: 30, bold: true, color: C.text, fontFace: SERIF,
  });
  s.addShape("line", { x: 0.5, y: 1.15, w: 6.0, h: 0, line: { color: C.orangeLight, width: 3 } });

  s.addText("Los resultados de usabilidad (7.5/10) indicaron fricción técnica. Iteramos el diseño para adaptarlo a la realidad física de las escuelas:", {
    x: 0.5, y: 1.35, w: 6.5, h: 0.6, fontSize: 13, color: C.textMid, fontFace: SANS,
  });

  const mejoras = [
    { badge: "PDF / WHATSAPP", badgeBg: C.purple, badgeText: C.white,
      title: "Módulo de Exportación",
      desc: "Justificación: Petición #1 (Q14). Docentes rurales necesitan enviar reportes ligeros (KB) a padres cuando bajan al pueblo y agarran señal de datos." },
    { badge: "MODO LITE", badgeBg: C.yellow, badgeText: C.text,
      title: "Ahorro de Batería y Alto Contraste",
      desc: "Justificación: Barrera de hardware. Celulares antiguos con pantallas dañadas; aulas con cortes de luz." },
    { badge: "DASHBOARD PREVENTIVO", badgeBg: C.greenLight, badgeText: C.green,
      title: "Semáforo (Verde, Amarillo, Rojo)",
      desc: 'Justificación: Los docentes pidieron ver alumnos que "empiezan a fallar" (amarillo), no solo de los que ya están en rezago profundo.' },
  ];

  let cardY = 2.1;
  const cardW = 6.5, cardH = 1.45, gapY = 0.15;
  for (const m of mejoras) {
    s.addShape("roundRect", {
      x: 0.5, y: cardY, w: cardW, h: cardH,
      fill: { color: C.white }, line: { color: C.cardBorder, width: 1 }, rectRadius: 0.15,
    });
    s.addShape("roundRect", {
      x: 0.7, y: cardY + 0.18, w: 1.9, h: 0.3,
      fill: { color: m.badgeBg }, line: { color: m.badgeBg, width: 0 }, rectRadius: 0.05,
    });
    s.addText(m.badge, {
      x: 0.7, y: cardY + 0.18, w: 1.9, h: 0.3,
      fontSize: 9, bold: true, color: m.badgeText,
      align: "center", valign: "middle", fontFace: SANS,
    });
    s.addText(m.title, {
      x: 0.7, y: cardY + 0.55, w: cardW - 0.4, h: 0.35,
      fontSize: 16, bold: true, color: C.text, fontFace: SERIF,
    });
    s.addText(m.desc, {
      x: 0.7, y: cardY + 0.92, w: cardW - 0.4, h: 0.5,
      fontSize: 11, color: C.textMid, fontFace: SANS,
    });
    cardY += cardH + gapY;
  }

  imgPlaceholder(s, 7.4, 1.35, 5.43, 4.3,
    "[Capturas del nuevo Dashboard Docente\ny Pantalla de Configuración]");

  // CTA button (hyperlink)
  s.addShape("roundRect", {
    x: 7.4, y: 5.9, w: 5.43, h: 0.85,
    fill: { color: C.orange }, line: { color: C.orange, width: 0 }, rectRadius: 0.15,
  });
  s.addText("🚀  Probar Prototipo Interactivo", {
    x: 7.4, y: 5.9, w: 5.43, h: 0.85,
    fontSize: 18, bold: true, color: C.white,
    align: "center", valign: "middle", fontFace: SANS,
    hyperlink: { url: "https://edu-adapta-landing-page-surh.vercel.app/prototipo" },
  });

  s.addText("Diapositiva 4 — Iteración del producto", {
    x: 0.5, y: 7.05, w: 12.33, h: 0.3,
    fontSize: 10, color: C.textSoft, align: "right", italic: true, fontFace: SANS,
  });
}

// =================================================================
// SLIDE 5 — LANDING PAGE MEJORADA (Negocio)
// =================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  s.addText("Landing Page Mejorada (Negocio)", {
    x: 0.5, y: 0.4, w: 12.33, h: 0.7,
    fontSize: 30, bold: true, color: C.text, fontFace: SERIF,
  });
  s.addShape("line", { x: 0.5, y: 1.15, w: 6.5, h: 0, line: { color: C.orangeLight, width: 3 } });

  s.addText('La validación indicó que la propuesta técnica ("Qué hacemos") era clara (8.0/10), pero existían dudas comerciales y logísticas ("Cómo se implementa").', {
    x: 0.5, y: 1.35, w: 12.33, h: 0.6,
    fontSize: 13, color: C.textMid, fontFace: SANS,
  });

  // Orange card
  s.addShape("roundRect", {
    x: 0.5, y: 2.1, w: 6.5, h: 5.0,
    fill: { color: C.orange }, line: { color: C.orange, width: 0 }, rectRadius: 0.18,
  });
  s.addText("Nuevas Secciones Implementadas", {
    x: 0.75, y: 2.3, w: 6.0, h: 0.4,
    fontSize: 18, bold: true, color: C.white, fontFace: SERIF,
  });

  const secciones = [
    { title: "Instalación Cero-Internet", body: "Diagrama explicando la transferencia P2P (Bluetooth / USB / APK).",
      just: 'Resolvió la duda crítica de Q10 ("¿Cómo la instalo sin red?").' },
    { title: "Modelos de Precios Claros", body: "Esquemas: convenio SEP, ONG (gratis) y plan privado.",
      just: 'El factor "precio" generaba incertidumbre en directivos ("Depende").' },
    { title: "Perfiles Multigrado y Director", body: "Copys dirigidos a docentes que enseñan 6 grados a la vez.",
      just: "La demografía mostró alta incidencia de docentes con doble rol." },
    { title: "Lenguas Originarias", body: "Compromiso visible en la ventaja competitiva.",
      just: "Feedback directo que exige adaptación al contexto indígena." },
  ];

  let secY = 2.85;
  for (const sec of secciones) {
    s.addText([
      { text: "•  " + sec.title + ": ", options: { bold: true, color: C.white, fontSize: 13 } },
      { text: sec.body + "\n", options: { color: C.white, fontSize: 13 } },
      { text: "      ↳ Justificación: ", options: { color: C.white, fontSize: 11, italic: true } },
      { text: sec.just, options: { color: "FFE4D2", fontSize: 11 } },
    ], {
      x: 0.75, y: secY, w: 6.0, h: 1.0, fontFace: SANS, lineSpacingMultiple: 1.3,
    });
    secY += 1.05;
  }

  imgPlaceholder(s, 7.3, 2.1, 5.5, 5.0,
    '[Captura de la Landing Page actualizada:\nsección "Instalación" o "Modelos de Acceso"]');

  s.addText("Diapositiva 5 — Iteración comercial", {
    x: 0.5, y: 7.05, w: 12.33, h: 0.3,
    fontSize: 10, color: C.textSoft, align: "right", italic: true, fontFace: SANS,
  });
}

// =================================================================
// WRITE
// =================================================================
const outPath = path.join(os.homedir(), "Downloads", "validacion-eduadapta.pptx");
pres.writeFile({ fileName: outPath })
  .then((f) => console.log("Saved:", f))
  .catch((e) => { console.error("Error:", e); process.exit(1); });
