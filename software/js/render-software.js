const grid = document.getElementById("softwareGrid");

softwareList.forEach(software => {
  const card = document.createElement("a");
  card.href = software.link;
  card.target = "_blank";
  card.rel = "noopener noreferrer";

  card.className =
    "bg-white dark:bg-slate-800 rounded-2xl p-5 shadow hover:shadow-xl transition hover:-translate-y-2";

  card.innerHTML = `
    <div class="flex items-center gap-4 mb-3">
      <img src="${software.image}"
           alt="${software.name}"
           class="w-12 h-12 object-contain rounded-lg">
      <h3 class="text-lg font-semibold">${software.name}</h3>
    </div>
    <p class="text-sm text-slate-600 dark:text-slate-300">
      ${software.description}
    </p>
  `;

  grid.appendChild(card);
});
