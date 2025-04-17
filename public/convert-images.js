/**
 * Image Conversion Script for Kin India Website
 *
 * This script converts PNG and JPG images to the modern WebP format
 * to improve website loading speed and performance.
 *
 * Usage:
 * 1. Install Sharp: npm install sharp
 * 2. Run: node convert-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Directories to scan for images
const directories = [
  path.join(__dirname, '../src/assets'),
  path.join(__dirname, '../src/assets/clients'),
  path.join(__dirname, '../src/assets/illustration'),
  path.join(__dirname, '../src/assets/icons'),
];

// File extensions to convert
const extensions = ['.png', '.jpg', '.jpeg'];

// Function to convert an image to WebP
async function convertToWebP(filePath) {
  try {
    const outputPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    // Skip if WebP version already exists
    if (fs.existsSync(outputPath)) {
      console.log(`WebP version already exists: ${outputPath}`);
      return;
    }

    await sharp(filePath)
      .webp({ quality: 80 }) // 80% quality offers good balance between quality and file size
      .toFile(outputPath);

    console.log(`Converted: ${filePath} → ${outputPath}`);

    // Get file sizes for comparison
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = (((originalSize - webpSize) / originalSize) * 100).toFixed(
      2
    );

    console.log(
      `Size reduction: ${savings}% (${(originalSize / 1024).toFixed(2)}KB → ${(
        webpSize / 1024
      ).toFixed(2)}KB)`
    );
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error);
  }
}

// Function to scan directories and convert images
async function processDirectories() {
  let totalConverted = 0;

  for (const dir of directories) {
    try {
      if (!fs.existsSync(dir)) {
        console.log(`Directory does not exist: ${dir}`);
        continue;
      }

      const files = fs.readdirSync(dir);

      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Skip subdirectories that are already in our list
          if (!directories.includes(filePath)) {
            console.log(`Found subdirectory: ${filePath}`);
          }
          continue;
        }

        const ext = path.extname(file).toLowerCase();
        if (extensions.includes(ext)) {
          await convertToWebP(filePath);
          totalConverted++;
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dir}:`, error);
    }
  }

  console.log(
    `\nConversion complete! Converted ${totalConverted} images to WebP format.`
  );
  console.log(
    'To use these images in your HTML/CSS, update your code to use the .webp versions.'
  );
  console.log(
    'For example: <img src="/src/assets/kin-logo.webp" alt="Kin Logo">'
  );
  console.log(
    '\nFor browser compatibility, consider using the <picture> element:'
  );
  console.log(`
<picture>
  <source srcset="/src/assets/kin-logo.webp" type="image/webp">
  <img src="/src/assets/kin-logo.png" alt="Kin Logo">
</picture>
  `);
}

// Run the conversion process
processDirectories().catch(console.error);
