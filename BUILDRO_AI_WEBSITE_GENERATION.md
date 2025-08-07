# Buildro AI Website Generation System

## Overview

This document outlines the enhanced result preview functionality for the Buildro AI website generation system. The system is designed to convert natural language prompts into working front-end code (React + Tailwind CSS) with a Lovable.dev-style interface.

## 🎯 Core Features

### 1. Enhanced Result Preview Component

The `ResultPreview` component (`components/result-preview.tsx`) provides:

- **Live Preview Mode**: Real-time preview of generated websites
- **Code View Mode**: Syntax-highlighted code display with component navigation
- **Component Management**: Interactive component list with file type badges
- **Prompt Integration**: Automatic website type detection based on prompt content
- **Export Functionality**: Download as ZIP, copy code, and share options

### 2. Website Type Detection

The system automatically detects website types based on prompt keywords:

```typescript
const getWebsiteType = (prompt: string) => {
  const lowerPrompt = prompt.toLowerCase();
  if (lowerPrompt.includes("lovable") || lowerPrompt.includes("landing"))
    return "Landing Page";
  if (lowerPrompt.includes("saas") || lowerPrompt.includes("ai"))
    return "AI SaaS";
  if (lowerPrompt.includes("portfolio") || lowerPrompt.includes("developer"))
    return "Developer Portfolio";
  if (lowerPrompt.includes("documentation") || lowerPrompt.includes("docs"))
    return "Documentation Site";
  if (lowerPrompt.includes("startup")) return "Startup Website";
  if (lowerPrompt.includes("product") || lowerPrompt.includes("showcase"))
    return "Product Showcase";
  if (lowerPrompt.includes("blog")) return "Blog Website";
  if (lowerPrompt.includes("event")) return "Event Website";
  if (lowerPrompt.includes("mobile app") || lowerPrompt.includes("app"))
    return "Mobile App Website";
  if (lowerPrompt.includes("personal") || lowerPrompt.includes("brand"))
    return "Personal Branding";
  return "Professional Website";
};
```

### 3. Generated Components Structure

The system generates a comprehensive set of components:

```typescript
interface GeneratedComponent {
  name: string;
  code: string;
  type: "tsx" | "css" | "config";
}
```

**Example Components:**

- `Navbar.tsx` - Navigation component with responsive design
- `Hero.tsx` - Hero section with gradient styling
- `Features.tsx` - Feature grid with icons and descriptions
- `tailwind.config.js` - Tailwind CSS configuration

## 🚀 Prompt Structure

### Standard Format

```
Create a [type] website with [tone/style] and [features]
```

### Example Prompts

1. **Lovable-style Landing Page**

   ```
   Create a homepage like Lovable.dev with a dark theme, hero section, feature blocks, and modern gradient styling.
   ```

2. **AI SaaS Website**

   ```
   Create an AI SaaS landing page with call-to-action, testimonials, and pricing cards in a modern layout.
   ```

3. **Developer Portfolio**

   ```
   Create a developer portfolio site with sections for About, Projects, Skills, and Contact.
   ```

4. **Documentation Site**

   ```
   Create a documentation-style website with sidebar navigation, content pages, and dark/light mode toggle.
   ```

5. **Startup Website**
   ```
   Create a startup landing page with a full-width hero, benefits grid, team section, and newsletter signup.
   ```

## 🎨 UI/UX Features

### 1. Preview Mode

- Real-time website preview
- Responsive design simulation
- Interactive component navigation
- Statistics display (components, lines of code, features)

### 2. Code Mode

- Syntax-highlighted code display
- Component-specific code viewing
- Copy functionality with visual feedback
- File type badges and navigation

### 3. Component Management

- Interactive component list
- File type indicators
- Click-to-view functionality
- Component statistics

### 4. Action Panel

- Edit Design button
- View All Code option
- Customize functionality
- Download ZIP feature
- Share capability

## 🛠 Technical Implementation

### 1. Component Structure

```typescript
export function ResultPreview({ prompt, onBack }: ResultPreviewProps) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("preview");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );

  // Component logic...
}
```

### 2. State Management

- `activeTab`: Controls preview/code view mode
- `selectedComponent`: Tracks currently selected component
- `copied`: Manages copy feedback state

### 3. Responsive Design

- Mobile-first approach
- Grid-based layout system
- Flexible component sizing
- Touch-friendly interactions

## 📁 File Structure

```
components/
├── result-preview.tsx          # Main result preview component
├── generating-interface.tsx    # Generation process interface
└── ui/                        # UI components
    ├── tabs.tsx
    ├── card.tsx
    ├── badge.tsx
    └── button.tsx

app/
├── generating/
│   └── page.tsx               # Generation page with Suspense
└── result/
    └── page.tsx               # Result page with Suspense
```

## 🎯 Usage Examples

### 1. Basic Usage

```typescript
import { ResultPreview } from "@/components/result-preview";

<ResultPreview
  prompt="Create a modern landing page with hero section and features"
  onBack={() => router.push("/")}
/>;
```

### 2. Custom Styling

```typescript
// The component automatically applies gradient styling
// based on the Buildro AI brand colors:
// - Primary: #F72353 (Pink/Red)
// - Secondary: #235EAD (Blue)
```

### 3. Component Navigation

```typescript
// Users can click on components to view their code
const handleComponentClick = (componentName: string) => {
  setSelectedComponent(componentName);
  setActiveTab("code");
};
```

## 🔧 Configuration

### 1. Tailwind CSS Setup

The system includes a comprehensive Tailwind configuration:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

### 2. Component Generation

The system generates components with:

- TypeScript support
- Responsive design
- Dark mode compatibility
- Modern UI patterns
- Accessibility features

## 🎨 Design System

### Color Palette

- **Primary**: `#F72353` (Pink/Red gradient)
- **Secondary**: `#235EAD` (Blue gradient)
- **Background**: Gray scale with dark mode support
- **Text**: High contrast for accessibility

### Typography

- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts
- **Code**: Monospace for code blocks

### Spacing

- Consistent 8px grid system
- Responsive padding and margins
- Flexible component spacing

## 🚀 Future Enhancements

### 1. Planned Features

- [ ] Real-time collaboration
- [ ] Version control integration
- [ ] Custom component library
- [ ] Advanced theming options
- [ ] Performance optimization

### 2. Integration Opportunities

- [ ] Figma plugin integration
- [ ] GitHub repository sync
- [ ] Deployment automation
- [ ] Analytics tracking

## 📝 Development Notes

### 1. Next.js 14 Compatibility

- Suspense boundaries for `useSearchParams`
- Server-side rendering support
- Static generation optimization

### 2. Performance Considerations

- Lazy loading for large components
- Code splitting for better load times
- Optimized bundle sizes

### 3. Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## 🤝 Contributing

1. Follow the existing code structure
2. Maintain TypeScript types
3. Add comprehensive tests
4. Update documentation
5. Follow accessibility guidelines

## 📄 License

This project is part of the Buildro AI website generation system.
