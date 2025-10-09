
const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    likes: 0
  },
  {
    id: 1,
    author: "Maya Angelou",
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    likes: 0
  },
  {
    id: 2,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0
  },
  {
    id: 3,
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
    likes: 0
  }
];

let currentQuoteIndex = null;
let lastQuoteIndex = null;

// ---------------- NEW: filtering state ----------------
let filteredIndices = null; 
let filteredPos = 0;       

// Cache DOM refs we need multiple times
const quoteSection = document.getElementById("quoteSection");

// Tools
const charsWithSpacesBtn = document.getElementById("charsWithSpacesBtn");
const charsNoSpacesBtn   = document.getElementById("charsNoSpacesBtn");
const wordCountBtn       = document.getElementById("wordCountBtn");
const likeBtn            = document.getElementById("likeBtn");
const likeCount          = document.getElementById("likeCount");

// NEW: Filter DOM
const filterForm         = document.getElementById("filterForm");
const authorFilterInput  = document.getElementById("authorFilterInput");
const prevBtn            = document.getElementById("prevBtn");
const nextBtn            = document.getElementById("nextBtn");
const filterMeta         = document.getElementById("filterMeta");
const resetFilterBtn     = document.getElementById("resetFilterBtn");

// ---------------- Helpers ----------------
function renderQuoteByIndex(index) {
  currentQuoteIndex = index;
  lastQuoteIndex = index;
  const q = quotes[index];
  quoteSection.innerHTML =
    `<p>"${q.quote}"</p><p><em>- ${q.author}</em></p><p><strong>Likes: ${q.likes}</strong></p>`;

  // enable tools
  charsWithSpacesBtn.disabled = false;
  charsNoSpacesBtn.disabled = false;
  wordCountBtn.disabled = false;
  likeBtn.disabled = false;
  likeCount.textContent = "";

  updateNavButtons();
}

function updateNavButtons() {
  const inFilter = Array.isArray(filteredIndices) && filteredIndices.length > 0;
  prevBtn.disabled = !inFilter || filteredPos <= 0;
  nextBtn.disabled = !inFilter || filteredPos >= filteredIndices.length - 1;
  resetFilterBtn.hidden = !inFilter;

  if (inFilter) {
    const a = quotes[filteredIndices[0]].author;
    filterMeta.textContent = `Showing ${filteredIndices.length} quote${filteredIndices.length === 1 ? "" : "s"} by "${a}" — ${filteredPos + 1} / ${filteredIndices.length}`;
  } else {
    filterMeta.textContent = "";
  }
}

// ---------------- Original features ----------------
function generateQuote() {
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastQuoteIndex && quotes.length > 1);

  // NEW: exit filtered view when using random
  filteredIndices = null;
  filteredPos = 0;
  updateNavButtons();

  renderQuoteByIndex(index);
}

function charsWithSpaces(text) {
  return text.length;
}

function charsNoSpaces(text) {
  let noSpaces = text.split(" ").join("");
  return noSpaces.length;
}

function countWords(text) {
  let parts = text.trim().split(" ");
  let filtered = parts.filter(word => word !== "");
  return filtered.length;
}

// ---------------- Filter logic (NEW) ----------------
function startFilteredViewByAuthor(author) {
  const target = (author || "").trim().toLowerCase();
  if (!target) {
    alert("Please type an author name.");
    return;
  }

  const matches = [];
  quotes.forEach((q, idx) => {
    if (q.author.toLowerCase() === target) matches.push(idx); // exact, case-insensitive
  });

  if (matches.length === 0) {
    filteredIndices = null;
    filteredPos = 0;
    updateNavButtons();
    quoteSection.innerHTML = `<p>No quotes found for <strong>"${author}"</strong>.</p>`;
    // disable tools since no current quote in view
    charsWithSpacesBtn.disabled = true;
    charsNoSpacesBtn.disabled = true;
    wordCountBtn.disabled = true;
    likeBtn.disabled = true;
    return;
  }

  filteredIndices = matches;
  filteredPos = 0;
  renderQuoteByIndex(filteredIndices[filteredPos]);
}

function showPrev() {
  if (!filteredIndices) return;
  if (filteredPos > 0) {
    filteredPos -= 1;
    renderQuoteByIndex(filteredIndices[filteredPos]);
  }
}

function showNext() {
  if (!filteredIndices) return;
  if (filteredPos < filteredIndices.length - 1) {
    filteredPos += 1;
    renderQuoteByIndex(filteredIndices[filteredPos]);
  }
}

// ---------------- Events ----------------
document.getElementById("generateBtn").addEventListener("click", generateQuote);

document.getElementById("charsWithSpacesBtn").addEventListener("click", function() {
  const q = quotes[currentQuoteIndex];
  alert("Characters (with spaces): " + charsWithSpaces(q.quote));
});

document.getElementById("charsNoSpacesBtn").addEventListener("click", function() {
  const q = quotes[currentQuoteIndex];
  alert("Characters (no spaces): " + charsNoSpaces(q.quote));
});

document.getElementById("wordCountBtn").addEventListener("click", function() {
  const q = quotes[currentQuoteIndex];
  alert("Word count: " + countWords(q.quote));
});

// UPDATED: keep current view (filtered or not) instead of calling generateQuote()
document.getElementById("likeBtn").addEventListener("click", function() {
  if (currentQuoteIndex == null) return;
  quotes[currentQuoteIndex].likes++;
  if (filteredIndices) {
    renderQuoteByIndex(filteredIndices[filteredPos]);
  } else {
    renderQuoteByIndex(currentQuoteIndex);
  }
});

document.getElementById("addQuote").addEventListener("submit", function(e) {
  e.preventDefault();

  const author = document.getElementById("authorInput").value.trim();
  const quote = document.getElementById("quoteInput").value.trim();

  if (author && quote) {
    const newId = quotes.length > 0 ? quotes[quotes.length - 1].id + 1 : 0;
    const newQuote = { id: newId, author: author, quote: quote, likes: 0 };
    quotes.push(newQuote);

    alert("New quote added!");
    document.getElementById("addQuote").reset();
  }
});

// NEW: filter events
filterForm.addEventListener("submit", function(e) {
  e.preventDefault();
  startFilteredViewByAuthor(authorFilterInput.value);
});

resetFilterBtn.addEventListener("click", function() {
  filteredIndices = null;
  filteredPos = 0;
  updateNavButtons();
  filterMeta.textContent = "";
  quoteSection.innerHTML = '<p>Filter cleared. Click "Generate quote" or filter again.</p>';
  // disable tools until a quote is selected again
  charsWithSpacesBtn.disabled = true;
  charsNoSpacesBtn.disabled = true;
  wordCountBtn.disabled = true;
  likeBtn.disabled = true;
});

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
