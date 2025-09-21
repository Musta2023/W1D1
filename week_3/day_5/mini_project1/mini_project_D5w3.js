     const COLORS = [
    "#ef0b0b", "#f55a05", "#f4a306",
    "#2b2308", "#9acd32", "#98fb98",
    "#0a7a15", "#51d0c1", "#14f1ff",
    "#9fd3ff", "#2d8cff", "#001bff",
    "#0a1b92", "#4b0082", "#8a0ea6",
    "#e588ff", "#f5b0c5", "#3f3f3f",
    "#8f8f8f", "#000000", "#1a1a1a"
  ];
  const ROWS=32;
  const COLS=60;
  const ERASE_WITH_ALT=true;
  const paletteEl=document.getElementById("palette");
  const boardEl=document.getElementById("board");
  const clearBtn=document.getElementById("clearBtn");
  const activeColorChip=document.getElementById("activeColor");
  boardEl.style.setProperty('--rows', ROWS);
  boardEl.style.setProperty('--cols', COLS);
  let isPainting=false;
  let color=COLORS[0];
  let eraseMode=false
   function setActiveColor(c){
    color = c;
    activeColorChip.style.background = c;
    document.querySelectorAll(".swatch").forEach(s => s.classList.toggle("selected", s.dataset.color === c));
  }
  COLORS.forEach(c => {
    const sw = document.createElement("button");
    sw.className = "swatch";
    sw.style.background = c;
    sw.setAttribute("aria-label", `Choose color ${c}`);
    sw.dataset.color = c;
    sw.addEventListener("click", () => setActiveColor(c));
    paletteEl.appendChild(sw);
  });
  setActiveColor(color);
   const frag = document.createDocumentFragment();
  for(let i=0;i<ROWS*COLS;i++){
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.setAttribute("role", "gridcell");
    cell.dataset.filled = "0";
    frag.appendChild(cell);
  }
  boardEl.appendChild(frag);
   function paintCell(cell, e){
    if(!(cell && cell.classList.contains("cell"))) return;
    const paintWith = (ERASE_WITH_ALT && (eraseMode || e?.altKey)) ? "transparent" : color;
    cell.style.background = paintWith;
    cell.dataset.filled = paintWith === "transparent" ? "0" : "1";
  }
   // ====== Events (mousedown / mouseover / mouseup / leave) ======
  boardEl.addEventListener("mousedown", (e) => {
    if(e.button !== 0) return;              // left click only for paint
    isPainting = true;
    paintCell(e.target, e);
  });
  boardEl.addEventListener("mouseover", (e) => {
    if(!isPainting) return;
    paintCell(e.target, e);
  });
  window.addEventListener("mouseup", () => { isPainting = false; });

  // Optional keyboard toggle for erase (hold E to toggle)
  window.addEventListener("keydown", (e) => {
    if(e.key.toLowerCase() === "e"){ eraseMode = true; }
  });
  window.addEventListener("keyup", (e) => {
    if(e.key.toLowerCase() === "e"){ eraseMode = false; }
  });

  // Clear board
  clearBtn.addEventListener("click", () => {
    boardEl.querySelectorAll(".cell").forEach(c => { c.style.background = "transparent"; c.dataset.filled = "0"; });
  });

  // Prevent drag-image ghost when painting
  boardEl.addEventListener("dragstart", e => e.preventDefault());
