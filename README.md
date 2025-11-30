# UU Plastination Monitoring System

A student engineering research project focused on automating plastination monitoring through computer vision and precision control systems.

## Project Overview

This is a modern React web application that showcases an automated plastination monitoring system. The system uses a Raspberry Pi 5, camera-based bubble detection, and motorized valve control to automate the traditionally manual process of monitoring acetone dehydration during plastination.

**Live Site**: https://lovable.dev/projects/297bb849-1f45-4b74-9361-7f7f9e50f976

## Technologies

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI framework
- **React Router** - Client-side routing
- **shadcn/ui** - Modern, accessible component library
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library

## Project Structure

The repository has been organized for maximum readability and maintainability:

```
src/
├── App.tsx                          # Main app with routing and page components
├── main.tsx                         # Application entry point
├── components/
│   ├── LandingSections.tsx          # All landing page sections (Hero, Problem, System, Research, FAQ, Future)
│   ├── LayoutComponents.tsx         # Navigation and Footer components
│   └── ui/                          # shadcn/ui component library
├── hooks/
│   └── index.ts                     # All custom hooks (useToast, useIsMobile)
├── lib/
│   └── utils.ts                     # Utility functions
└── assets/                          # Images and static assets
```

### File Consolidation

This project follows a **consolidated file structure** to improve readability:

- **LandingSections.tsx** - Contains all 6 landing page sections (Hero, ProblemSection, SystemSection, ResearchSection, FAQSection, FutureSection) in one file
- **LayoutComponents.tsx** - Contains Navigation and Footer components
- **App.tsx** - Contains routing logic and the Index/NotFound page components
- **hooks/index.ts** - Contains all custom hooks in a single exportable module

This approach reduces file count from 18+ component files to just 3 core files, making the codebase easier to navigate while maintaining all functionality.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/xavier8264/uuplastination-public.git

# Navigate to project directory
cd uuplastination-public

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling with consistent design tokens

## Features

### Landing Page Sections

1. **Hero** - Introduces the automated plastination monitoring system
2. **Problem** - Explains the challenges of manual plastination monitoring
3. **Solution** - Details the three-layer system architecture (Hardware, Software, Vision)
4. **Research** - Highlights the multidisciplinary engineering aspects
5. **FAQ** - Answers common questions about the project
6. **Future** - Outlines the development roadmap

### Responsive Design

- Mobile-first approach
- Smooth scrolling navigation
- Accessible UI components
- Dark/light mode support via shadcn/ui

## Deployment

This project can be deployed using:

- **Lovable** - Click Share → Publish in the Lovable dashboard
- **Vercel/Netlify** - Connect your Git repository for automatic deployments
- **Static Hosting** - Build and upload the `dist` folder to any static host

## Contributing

This is a student research project. For inquiries about collaboration or technical questions, please contact through the university's engineering department.

## License

All rights reserved. © 2024 UU Plastination Project

---

**Note**: This is the public informational website. The actual control system and lab access are secured behind authentication and not included in this repository.
