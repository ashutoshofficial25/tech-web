// --- Helper function to generate media items with exclusions and exceptions ---
interface MediaItem {
  details: {
    name: string;
    desc: string;
  };
  url: string;
}

// Define a type for extension exceptions
type ExtensionExceptions = {
  [key: number]: string;
};

// Define a type for numbers to exclude
type ExcludeNumbers = number[];

const generateMediaArray = (
  count: number,
  baseUrl: string,
  categoryName: string,
  defaultExtension: string = 'jpeg',
  exceptions: ExtensionExceptions = {},
  exclude: ExcludeNumbers = [] // Array of numbers to exclude
): MediaItem[] => {
  const items: MediaItem[] = []; // Initialize an empty array to push valid items
  for (let i = 0; i < count; i++) {
    const imageNumber = i + 1;

    // --- FIX: Check if the current number should be excluded ---
    if (exclude.includes(imageNumber)) {
      continue; // Skip this iteration if the number is in the exclude list
    }

    const fileExtension = exceptions[imageNumber] || defaultExtension;

    items.push({ // Push the item only if it's not excluded
      details: {
        name: `${categoryName} Exhibit ${imageNumber}`,
        desc: `Image ${imageNumber} from our ${categoryName.toLowerCase()} portfolio.`,
      },
      url: `${baseUrl}${imageNumber}.${fileExtension}`,
    });
  }
  return items; // Return the filtered array
};

// --- Base URLs ---
const MUSEUM_BASE_URL = 'https://storage.googleapis.com/squidlor/kin/kin/museum/';
const FINAL_MUSEUM_BASE_URL = 'https://storage.googleapis.com/squidlor/kin/kin/finalMuseum/';
const EXHIBITION_BASE_URL =
  'https://storage.googleapis.com/squidlor/kin/kin/exhibitions/';

// --- Define Exceptions and Exclusions ---

// --- FIX: Define numbers to exclude for museums ---
const museumExclusions: ExcludeNumbers = [1,9,8, 10,12, 13, 17, 19, 20, 22, 23, 24, 26, 27, 28,29,30, 31, 32, 33,34,35, 38, 40, 41, 45, 46, 51, 55, 56, 57, 60, 62, 71, 72];

// Define the specific sequence for final museum images
const finalMuseumImages: string[] = [
  'Bihar1.jpeg', 'Bihar2.jpeg', 'Bihar3.jpeg',
  'Odhisa1.jpeg', 'Odhisa2.jpeg', 'Odhisa3.jpeg',
  'Contemp1.jpeg', 'Contemp2.jpeg', 'Contemp3.jpeg',
  'UdaiRaj1.jpeg', 'UdaiRaj2.jpeg', 'UdaiRaj3.jpeg',
  'Patna1.jpeg', 'Patna2.jpeg', 'Patna3.jpeg'
];

// Exceptions for exhibitions 1-10 (remains the same)
const exhibitionExceptions: ExtensionExceptions = {};
for (let i = 1; i <= 10; i++) {
  exhibitionExceptions[i] = 'jpg';
}

// Define a type for numbers to include (only these numbers will be included)
type IncludeNumbers = number[];

// Helper function to generate media array with specific image names
const generateMediaArrayWithSpecificNames = (
  imageNames: string[],
  baseUrl: string,
  categoryName: string
): MediaItem[] => {
  const items: MediaItem[] = [];
  
  // Custom descriptions for the final museum images
  const customDescriptions = [
    // Bihar Museum (first 3 images)
    { name: 'Bihar Museum 1', desc: 'Bihar Museum exhibition space showcasing cultural artifacts.' },
    { name: 'Bihar Museum 2', desc: 'Bihar Museum gallery with historical collections.' },
    { name: 'Bihar Museum 3', desc: 'Bihar Museum architectural interior and exhibits.' },
    
    // Odisha State Museum (next 3 images)
    { name: 'Orientation Gallery', desc: 'Odisha State Museum inaugurated by Odisha CM.' },
    { name: 'Odisha State Museum', desc: 'Odisha State Museum gallery inaugurated by Odisha CM.' },
    { name: 'Odisha Exhibition', desc: 'Odisha State Museum special exhibition inaugurated by Odisha CM.' },
    
    // Contemporary Exhibition (next 3 images)
    { name: 'Contemporary Exhibition 1', desc: 'Contemporary Exhibition in Bihar Museum - Opening by artist Subodh Gupta and Director General of Bihar Museum Shri Anjani Kumar Singh.' },
    { name: 'Contemporary Exhibition 2', desc: 'Contemporary Exhibition in Bihar Museum featuring modern artworks curated by Subodh Gupta.' },
    { name: 'Contemporary Exhibition 3', desc: 'Contemporary Exhibition in Bihar Museum showcasing innovative installations and sculptures.' },
    
    // Suryakaal Exhibition (next 3 images)
    { name: 'Suryakaal Exhibition 1', desc: 'Suryakaal Exhibition by artist Udairaj Gadnis setup in Bihar Museum and opened by Shri Anjani Kumar Singh - Director General - Bihar Museum.' },
    { name: 'Suryakaal Exhibition 2', desc: 'Suryakaal Exhibition by artist Udairaj Gadnis featuring sun-themed artworks.' },
    { name: 'Suryakaal Exhibition 3', desc: 'Suryakaal Exhibition by artist Udairaj Gadnis with special installations and paintings.' },
    
    // Patna Museum (next 3 images)
    { name: 'Patna Museum 1', desc: 'Patna Museum artefact mounting works and preservation efforts.' },
    { name: 'Patna Museum 2', desc: 'Patna Museum display setup and artifact arrangement.' },
    { name: 'Patna Museum 3', desc: 'Patna Museum conservation and exhibition preparation.' }
  ];
  
  // Process each image name in the array
  imageNames.forEach((imageName, index) => {
    // Use custom description if available, otherwise use default
    const details = index < customDescriptions.length 
      ? customDescriptions[index] 
      : {
          name: `${categoryName} Exhibit ${index + 1}`,
          desc: `Image ${index + 1} from our ${categoryName.toLowerCase()} portfolio.`
        };
    
    items.push({
      details,
      url: `${baseUrl}${imageName}`,
    });
  });
  
  return items;
};

// Helper function to generate media array with an include list
const generateMediaArrayWithIncludeList = (
  includeNumbers: IncludeNumbers,
  baseUrl: string,
  categoryName: string,
  defaultExtension: string = 'jpeg',
  exceptions: ExtensionExceptions = {}
): MediaItem[] => {
  const items: MediaItem[] = [];
  
  // Only process the numbers in the include list
  for (const imageNumber of includeNumbers) {
    const fileExtension = exceptions[imageNumber] || defaultExtension;
    
    items.push({
      details: {
        name: `${categoryName} Exhibit ${imageNumber}`,
        desc: `Image ${imageNumber} from our ${categoryName.toLowerCase()} portfolio.`,
      },
      url: `${baseUrl}${imageNumber}.${fileExtension}`,
    });
  }
  
  return items;
};

// --- Generate the arrays with exceptions and exclusions ---
// Generate the final museum images with the specific sequence
const finalMuseumItems: MediaItem[] = generateMediaArrayWithSpecificNames(
  finalMuseumImages,
  FINAL_MUSEUM_BASE_URL,
  'Museum'
);

// Generate the original museum images (keeping for backward compatibility)
const originalMuseumItems: MediaItem[] = generateMediaArray(
  74, // Still generate up to 74 conceptually, but filter out exclusions
  MUSEUM_BASE_URL,
  'Museum',
  'jpeg',
  {}, // No extension exceptions for museums
  museumExclusions // Pass the numbers to exclude
);

// Combine both arrays, with final museum images first
export const museums: MediaItem[] = [...finalMuseumItems, ...originalMuseumItems];


// Define the specific sequence for exhibitions
const exhibitionIncludeList: IncludeNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 11, 18, 19, 20, 21, 22, 24, 25, 27, 28, 29, 31, 33, 34, 36, 37, 38, 49
];

// Generate exhibitions with only the specified numbers
export const exhibitions: MediaItem[] = generateMediaArrayWithIncludeList(
  exhibitionIncludeList,
  EXHIBITION_BASE_URL,
  'Exhibition',
  'jpeg',
  exhibitionExceptions // Pass exhibition extension exceptions
);

// --- Keep existing arrays ---

const clients = Array.from({ length: 21 }, (_, i) => i + 1)
  .filter(n => n !== 5)
  .map(n => new URL(`../assets/clients/${n}.png`, import.meta.url).href);

export default clients;

export const conferences: MediaItem[] = [
  {
    details: {
      name: 'Global Tech Summit 2023',
      desc: 'Annual conference bringing together industry leaders to discuss emerging technologies and digital transformation',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/conferences/1.jpg',
  },
  {
    details: {
      name: 'Business Leadership Forum',
      desc: 'Executive conference focused on strategic growth and innovation in the post-pandemic business landscape',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/conferences/2.jpg',
  },
  {
    details: {
      name: 'Digital Transformation Summit',
      desc: 'Industry-focused conference exploring digital strategies and technological advancements reshaping business operations',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/conferences/3.jpeg',
  },
  {
    details: {
      name: 'Sustainable Business Conference',
      desc: 'Forum for business leaders committed to implementing sustainable practices and ESG principles in corporate strategy',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/conferences/4.jpeg',
  },
  {
    details: {
      name: 'Future of Work Symposium',
      desc: 'Executive gathering focused on workplace evolution, remote collaboration, and building resilient organizational cultures',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/conferences/5.jpeg',
  },
];

export const events: MediaItem[] = [
  {
    details: {
      name: 'Corporate Awards Night',
      desc: 'Prestigious annual ceremony celebrating excellence and innovation in business leadership',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/events/1.jpg',
  },
  {
    details: {
      name: 'Product Launch Gala',
      desc: 'Exclusive event showcasing cutting-edge products with immersive brand experiences',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/events/11.jpg',
  },
  {
    details: {
      name: 'Charity Sports Tournament',
      desc: 'Community-focused sporting event raising funds for educational initiatives across India',
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/events/7.jpg',
  },
  {
    details: {
      name: 'Cultural Festival',
      desc: "Celebration of India's diverse cultural heritage through performances, art, and cuisine",
    },
    url: 'https://storage.googleapis.com/squidlor/kin/kin/events/9.jpg',
  },
];

export const videoUrls: string[] = [
  'https://storage.googleapis.com/squidlor/kin/kin/about-us/1.mp4',
  'https://storage.googleapis.com/squidlor/kin/kin/about-us/2.mp4',
  'https://storage.googleapis.com/squidlor/kin/kin/about-us/10.mp4',
];

export type { MediaItem }; // Export type if needed
