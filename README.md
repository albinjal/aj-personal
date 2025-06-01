# AJ Personal - Portfolio & Blog

A clean, minimal personal portfolio and blog website for Albin Jaldevik, showcasing expertise in AI, quantitative trading, and mathematical modeling.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with clean, professional aesthetics
- **Blog System**: Static blog with markdown support and categorization
- **Interactive Navigation**: Smooth transitions and mobile-friendly menu
- **Portfolio Showcase**: Projects, experience, and skills presentation
- **GitHub Pages Ready**: Optimized for easy deployment

## 📱 Pages

- **Home**: Hero section with professional introduction and highlights
- **About**: Comprehensive background, education, and achievements
- **Projects**: Showcase of key projects with detailed descriptions
- **Experience**: Timeline view of education and professional experience
- **Skills**: Categorized technical skills and competencies
- **Blog**: Article listing with search and filtering capabilities
- **Contact**: Professional contact information and social links

## 🛠 Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui components
- **Routing**: React Router DOM 6.26.2
- **Build Tool**: Vite 5.4.1
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🏗 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   └── Layout.tsx    # Main layout with navigation
├── pages/
│   ├── Home.tsx      # Landing page
│   ├── About.tsx     # About page
│   ├── Projects.tsx  # Projects showcase
│   ├── Experience.tsx # Experience timeline
│   ├── Skills.tsx    # Skills and expertise
│   ├── Contact.tsx   # Contact information
│   ├── Blog.tsx      # Blog listing
│   └── BlogPost.tsx  # Individual blog post
├── lib/
│   └── blog-data.ts  # Static blog content
└── App.tsx           # Main app component
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/aj-personal.git
cd aj-personal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Content Management

### Adding Blog Posts

Blog posts are managed through the static data structure in `src/lib/blog-data.ts`. To add a new post:

1. Create a new `BlogPost` object in the `blogPosts` array
2. Include all required fields: slug, title, excerpt, content, etc.
3. The content supports basic markdown formatting

### Updating Personal Information

- **Contact Info**: Update `src/pages/Contact.tsx`
- **About Section**: Modify `src/pages/About.tsx`
- **Projects**: Add/edit projects in `src/pages/Projects.tsx`
- **Experience**: Update timeline in `src/pages/Experience.tsx`

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Typography**: Update font settings in the Tailwind config
- **Components**: Customize UI components in `src/components/ui/`

### Layout

- **Navigation**: Modify `src/components/Layout.tsx`
- **Footer**: Update footer content in the Layout component
- **Responsive Breakpoints**: Adjust in component classes

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Enable GitHub Pages in your repository settings
2. Choose GitHub Actions as the source
3. Push to the main branch - deployment happens automatically
4. Your site will be available at `https://yourusername.github.io/aj-personal/`

### Custom Domain

1. Add your domain to the `cname` field in `.github/workflows/deploy.yml`
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

### Other Platforms

The built static files in `dist/` can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores across all metrics
- **Bundle Size**: Minimized with tree-shaking and code splitting
- **Loading Speed**: Optimized images and lazy loading
- **Mobile Performance**: Mobile-first responsive design

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code linting and formatting
- **Component Architecture**: Modular, reusable components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Albin Jaldevik**
- LinkedIn: [linkedin.com/in/albinjaldevik](https://linkedin.com/in/albinjaldevik)
- Email: albin.jaldevik@example.com
- Location: London, UK

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
