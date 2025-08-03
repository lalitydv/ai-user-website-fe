# shinecoderR - AI Website Builder

A modern AI-powered website and dashboard builder with a beautiful interface and smooth animations.

## Features

- 🎨 Modern gradient design with pink to blue color scheme
- 🤖 Interactive AI chat interface with animated robot character
- 📱 Fully responsive design
- ✨ Beautiful animations and transitions
- 🔐 Complete authentication system (Login/Signup)
- 📁 File upload and Figma import functionality
- 🎯 Privacy settings with dropdown options

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: CSS animations and Tailwind transitions
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with header
│   ├── page.tsx            # Homepage with hero section
│   ├── login/page.tsx      # Animated login page
│   ├── signup/page.tsx     # Signup page
│   └── globals.css         # Global styles
├── components/
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Main hero section with AI chat
│   └── ui/                 # Reusable UI components
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
\`\`\`

## Key Features

### Homepage
- Interactive AI chat interface
- Auto-expanding textarea (3-8 rows with scroll)
- File upload functionality
- Figma import with URL validation
- Adobe XD integration (coming soon)
- Privacy settings dropdown

### Login Page
- Centered design with gradient background
- Animated robot character
- Google OAuth integration
- Form validation
- Smooth entrance animations

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Hidden elements on smaller screens
- Touch-friendly interactions

## Customization

### Colors
The project uses a custom gradient color scheme:
- Primary: `#F72353` (Pink)
- Secondary: `#235EAD` (Blue)

### Animations
Custom animations include:
- Text popping effects
- Robot character movements
- Hover transitions
- Loading sequences

## Deployment

Build the project for production:

\`\`\`bash
npm run build
npm start
\`\`\`

## License

This project is private and proprietary.
