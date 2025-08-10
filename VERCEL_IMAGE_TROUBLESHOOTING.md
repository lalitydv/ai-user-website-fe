# Vercel Image Troubleshooting Guide

## Issues Found and Fixed

### 1. **Next.js Configuration Issues**

- ✅ Fixed `next.config.js` with proper image domains
- ✅ Added image optimization settings
- ✅ Configured proper caching and security policies

### 2. **Component Issues**

- ✅ Fixed `Ai-video.tsx` - replaced invalid CSS class `center` with proper positioning
- ✅ Replaced HTML `img` tags with Next.js `Image` components in:
  - `Ai-video.tsx`
  - `app/login/page.tsx`
  - `app/signup/page.tsx`

### 3. **Vercel Configuration**

- ✅ Updated `vercel.json` with proper build commands
- ✅ Added image caching headers
- ✅ Configured function timeouts

## Common Causes of Image Issues in Vercel

### 1. **Build-time Issues**

- Images not included in build output
- Incorrect file paths
- Missing public folder

### 2. **Runtime Issues**

- CORS problems
- Missing image optimization
- Incorrect domain configuration

### 3. **Deployment Issues**

- Static assets not served correctly
- Missing cache headers
- Build optimization problems

## Solutions Applied

### 1. **Next.js Image Component Usage**

```tsx
// ❌ Before (HTML img tag)
<img src="/images/Logo/buildro-logo.png" alt="Logo" />;

// ✅ After (Next.js Image component)
import Image from "next/image";
<Image
  src="/images/Logo/buildro-logo.png"
  alt="Logo"
  width={200}
  height={80}
  priority
/>;
```

### 2. **Proper Image Configuration**

```js
// next.config.js
images: {
  domains: ['vercel.app', 'localhost', 'vercel.com'],
  formats: ['image/webp', 'image/avif'],
  minimumCacheTTL: 60,
}
```

### 3. **Vercel Headers for Images**

```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Testing Your Images

### 1. **Local Testing**

```bash
npm run build
npm run start
```

### 2. **Test Page**

Visit `/test-images` to see all images rendered with proper error handling.

### 3. **Browser Developer Tools**

- Check Network tab for failed image requests
- Look for 404 errors on image paths
- Verify image URLs are correct

## Deployment Checklist

### Before Deploying to Vercel:

1. ✅ Run `npm run build` locally
2. ✅ Verify all images are in `public/images/` folder
3. ✅ Check that all components use Next.js `Image` component
4. ✅ Ensure `next.config.js` has proper image configuration
5. ✅ Verify `vercel.json` has correct settings

### After Deploying:

1. ✅ Check Vercel deployment logs
2. ✅ Test image loading on deployed site
3. ✅ Verify image optimization is working
4. ✅ Check browser console for errors

## Common Image Paths in Your Project

```
public/images/
├── Logo/
│   ├── buildro-logo.png
│   ├── buil-ai.png
│   └── buildro-logo-old.png
├── Home/
│   ├── hero-bg.png
│   ├── ai-image.png
│   └── [other home images]
└── Login/
    └── login-image.png
```

## If Images Still Don't Work

### 1. **Check Vercel Logs**

- Go to your Vercel dashboard
- Check deployment logs for errors
- Look for build failures

### 2. **Verify File Structure**

- Ensure `public` folder is in root directory
- Check that images are committed to git
- Verify file permissions

### 3. **Test with Different Browsers**

- Clear browser cache
- Try incognito mode
- Test on different devices

### 4. **Check Network Requests**

- Open browser dev tools
- Go to Network tab
- Reload page and look for failed image requests

## Contact Support

If issues persist:

1. Check Vercel status page
2. Review Vercel documentation on image optimization
3. Contact Vercel support with specific error messages
4. Share your `next.config.js` and `vercel.json` files

## Quick Fix Commands

```bash
# Clean and rebuild
rm -rf .next
npm run build

# Check image files
ls -la public/images/

# Verify file types
file public/images/Logo/buildro-logo.png

# Test local build
npm run start
```
