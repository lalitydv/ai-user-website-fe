const fs = require('fs');
const path = require('path');

// Test image paths
const testImages = [
  '/images/Logo/buildro-logo.png',
  '/images/Logo/buil-ai.png',
  '/images/Home/ai-image.png',
  '/images/Login/login-image.png',
  '/placeholder-logo.png'
];

// Check if images exist in public directory
console.log('🔍 Checking image files in public directory...\n');

testImages.forEach(imagePath => {
  const fullPath = path.join(__dirname, '..', 'public', imagePath);
  const exists = fs.existsSync(fullPath);
  
  if (exists) {
    const stats = fs.statSync(fullPath);
    const sizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ ${imagePath} - ${sizeInKB} KB`);
  } else {
    console.log(`❌ ${imagePath} - NOT FOUND`);
  }
});

console.log('\n📁 Checking public directory structure...');
const publicDir = path.join(__dirname, '..', 'public');

function listDirectory(dir, indent = '') {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    const isDir = stats.isDirectory();
    
    console.log(`${indent}${isDir ? '📁' : '📄'} ${item}`);
    
    if (isDir) {
      listDirectory(fullPath, indent + '  ');
    }
  });
}

listDirectory(publicDir);

console.log('\n🚀 Image test completed!');
console.log('If all images show ✅, the issue might be in the deployment or Next.js configuration.');
console.log('If any images show ❌, you need to add the missing files to the public directory.'); 