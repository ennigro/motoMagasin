"use strict";

let allComputers = []; 


async function fetchComputers() {
    const response = await fetch("./computers.json");
    return await response.json();
}


function createComputerCard(computer) {
    const statusBadge = computer.is_new 
        ? `<span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Neuf</span>`
        : `<span class="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">Remis à neuf</span>`;

    return `
        <div class="bg-white rounded-xl shadow-lg p-5 flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div class="relative mb-4">
                <img src="${computer.image_url}" alt="${computer.name}" class="w-full h-48 object-cover rounded-lg">
                <div class="absolute top-2 right-2">
                    ${statusBadge}
                </div>
            </div>
            
            <div class="flex-grow">
                <span class="text-xs font-bold text-orange-600 uppercase tracking-wider">${computer.brand} • ${computer.category}</span>
                <h3 class="text-lg font-bold text-gray-800 mt-1">${computer.name}</h3>
                <p class="text-sm text-gray-500 mt-2 line-clamp-2">${computer.description}</p>
                
                <div class="mt-4 grid grid-cols-2 gap-3 text-sm bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div class="flex items-center text-gray-500">
                         <span class="font-bold text-gray-900 ml-2">${computer.processor || 'CPU'}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                         <span class="font-bold text-gray-900 ml-2">${computer.ram}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                         <span class="font-bold text-gray-900 ml-2">${computer.storage}</span>
                    </div>
                    <div class="flex items-center text-gray-500">
                         <span class="font-bold text-gray-900 ml-2">${computer.gpu}</span>
                    </div>
                </div>
            </div>
            
            <div class="mt-5 flex items-center justify-between pt-3 border-t border-gray-100">
                <span class="text-xl font-black text-gray-900">${computer.price} <span class="text-sm font-semibold text-gray-600">DH</span></span>
                <button class="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors shadow-sm">
                    Commander
                </button>
            </div>
        </div>
    `;
}


function renderComputers(computersToRender) {
    const container = document.getElementById('products-container');
    const resultsCount = document.getElementById('results-number');
    const noResults = document.getElementById('no-results');

    if (!container) return;

   
    container.innerHTML = computersToRender.map(pc => createComputerCard(pc)).join('');

   
    if (resultsCount) {
        resultsCount.textContent = computersToRender.length;
    }

    
    if (noResults) {
        noResults.style.display = computersToRender.length === 0 ? "block" : "none";
    }
}


async function initStore() {
    const loadingContainer = document.getElementById('loading-container');
    
    try {
        
        if (loadingContainer) loadingContainer.style.display = "flex";
        
       
        allComputers = await fetchComputers();
        
        
        if (loadingContainer) loadingContainer.style.display = "none";
        
        
        renderComputers(allComputers);

        
        const filterInput = document.getElementById("name-filter-input");
        if (filterInput) {
            filterInput.addEventListener("input", (event) => {
                const searchTerm = event.target.value.toLowerCase().trim();
                
                
                const filtered = allComputers.filter(pc => 
                    pc.name.toLowerCase().includes(searchTerm) ||
                    pc.brand.toLowerCase().includes(searchTerm) ||
                    pc.category.toLowerCase().includes(searchTerm)
                );
                
                renderComputers(filtered);
            });
        }

    } catch (error) {
        console.error("Erreur lors du chargement du magasin:", error);
        if (loadingContainer) loadingContainer.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', initStore);