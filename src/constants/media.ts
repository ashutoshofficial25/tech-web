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
const EXHIBITION_BASE_URL =
  'https://storage.googleapis.com/squidlor/kin/kin/exhibitions/';

// --- Define Exceptions and Exclusions ---

// --- FIX: Define numbers to exclude for museums ---
const museumExclusions: ExcludeNumbers = [22, 26, 27];

// Exceptions for exhibitions 1-10 (remains the same)
const exhibitionExceptions: ExtensionExceptions = {};
for (let i = 1; i <= 10; i++) {
  exhibitionExceptions[i] = 'jpg';
}

// --- Generate the arrays with exceptions and exclusions ---
export const museums: MediaItem[] = generateMediaArray(
  74, // Still generate up to 74 conceptually, but filter out exclusions
  MUSEUM_BASE_URL,
  'Museum',
  'jpeg',
  {}, // No extension exceptions for museums
  museumExclusions // Pass the numbers to exclude
);

export const exhibitions: MediaItem[] = generateMediaArray(
  50,
  EXHIBITION_BASE_URL,
  'Exhibition',
  'jpeg',
  exhibitionExceptions // Pass exhibition extension exceptions
  // No exclusions needed for exhibitions based on current info
);

// --- Keep existing arrays ---

const clients = Array.from(
  { length: 21 },
  (_, i) => new URL(`../assets/clients/${i + 1}.png`, import.meta.url).href
);
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
