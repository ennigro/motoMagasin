"use strict";
async function fetchMotorcycles() {
    // On cible le fichier local qu'on vient de créer
    const response = await fetch("./motorcycles.json");
    const data = await response.json();
    return data.map((motorcycle) => ({
        ...motorcycle,
        created_at: new Date(motorcycle.created_at),
    }));
}

function renderMotorcycleCard(motorcycle) {
    const engineText = motorcycle.engine && motorcycle.engine !== "undefined"
        ? `${motorcycle.engine}cc`
        : "";
    return `
    <div class="motorcycle-card">
      <div class="motorcycle-card-image-container">
        <img
          class="motorcycle-card-image"
          src="${motorcycle.image_url}"
          alt="${motorcycle.name}"
        />
        <div class="motorcycle-card-year-badge">
          ${motorcycle.year}
        </div>
      </div>

      <h2 class="motorcycle-card-title">
        ${motorcycle.name}
      </h2>

      <p class="motorcycle-card-manufacturer">
        ${motorcycle.manufacturer}
      </p>

      <p class="motorcycle-card-category">
        ${motorcycle.category}
      </p>

      <p class="motorcycle-card-description">
        ${motorcycle.description}
      </p>

      <div class="motorcycle-card-footer">
        <div>
          <p class="motorcycle-card-price">
            ${motorcycle.price.toLocaleString()} DH
          </p>
          <p class="motorcycle-card-engine">
            ${engineText}
          </p>
        </div>
        <button class="motorcycle-card-button">Voir les détails</button>
      </div>
    </div>
  `;
}


class MotorcycleGalleryApp {
    constructor() {
        this.allMotorcycles = [];
        this.filteredMotorcycles = [];
        this.init();
    }
    async init() {
        const loadingContainer = document.getElementById("loading-container");
        this.allMotorcycles = await fetchMotorcycles();
        this.filteredMotorcycles = [...this.allMotorcycles];
        if (loadingContainer) {
            loadingContainer.style.display = "none";
        }
        this.renderMotorcycles();
        const filterInput = document.getElementById("name-filter-input");
        if (filterInput) {
            filterInput.addEventListener("input", (event) => {
                const value = event.target.value
                    .toLowerCase()
                    .trim();
                this.filteredMotorcycles = this.allMotorcycles.filter((motorcycle) => motorcycle.name.toLowerCase().includes(value) ||
                    motorcycle.manufacturer.toLowerCase().includes(value) ||
                    motorcycle.category.toLowerCase().includes(value));
                this.renderMotorcycles();
            });
        }
    }
    renderMotorcycles() {
        const grid = document.getElementById("motorcycle-grid");
        const noResults = document.getElementById("no-results");
        const results = document.getElementById("results-number");
        if (!grid)
            return;
        grid.innerHTML = this.filteredMotorcycles
            .map(renderMotorcycleCard)
            .join("");
        if (results) {
            results.textContent = this.filteredMotorcycles.length.toString();
        }
        if (noResults) {
            if (this.filteredMotorcycles.length === 0) {
                noResults.style.display = "block";
            }
            else {
                noResults.style.display = "none";
            }
        }
    }
}

// Start App

new MotorcycleGalleryApp();
