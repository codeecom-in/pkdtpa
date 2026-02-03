// src/utils/importImages.js

// Function to import images based on prefix and count
export function importImages(prefix, count) {
  const images = [];
  for (let i = 1; i <= count; i++) {
    try {
      images.push(require(`../assets/${prefix}_${i}.jpg`));
    } catch (err) {
      console.warn(`Image not found: ${prefix}_${i}.jpg`);
    }
  }
  return images;
}

// Event images
export const eventPhotos = {
  1: importImages('ptpa_football', 22), // Football images
  2: importImages('ptpa_award', 21),   // Awards images
  3: importImages('ptpa_home', 12),     // Home images (adjusted to 13 as in your example)
};

// Optional titles for fallback
export const eventTitles = {
  1: 'Pravasi Football Tournament 2024',
  2: 'Academic Excellence Awards 2025',
  3: 'Charity Initiatives',
};
