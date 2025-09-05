# Zish.xyz - Personal Blog

A beautiful, mobile-first personal blog built with Next.js, featuring long-form writing, code experiments, and a professional CV section.

## ✨ Features

- **AI Assistant**: Chat with an AI that knows everything about me (powered by Claude 3.5 Sonnet)
- **Editorial Design**: Magazine-like aesthetic with beautiful typography and thoughtful spacing
- **MDX-Powered Blog**: Write rich content with Markdown and React components
- **Code Experiments Section**: Showcase interactive demos and prototypes
- **Professional CV**: A comprehensive resume/portfolio section with personal touches
- **Fast & Accessible**: Optimised for performance and accessibility
- **SEO-Friendly**: Built-in meta tags, OpenGraph, and structured data

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Content**: MDX for rich blog posts
- **AI**: Vercel AI SDK with Anthropic Claude 3.5 Sonnet
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter and JetBrains Mono fonts
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── writing/           # Blog section
│   ├── experiments/       # Code experiments
│   └── cv/               # Resume/CV page
├── components/            # Reusable components
├── content/
│   └── posts/            # MDX blog posts
└── lib/                  # Utilities and helpers
```

## 🛠 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zish-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Writing Blog Posts

Create new blog posts in `src/content/posts/` as `.mdx` files:

```markdown
---
title: "Your Post Title"
date: "2025-01-02"
description: "A brief description of your post"
tags: ["tag1", "tag2"]
published: true
---

# Your Content Here

Write your blog post content using Markdown and JSX components.
```

### Customisation

#### Personal Information

Update the following files with your information:

- `src/app/layout.tsx` - Site metadata and SEO
- `src/app/cv/page.tsx` - Your professional experience and skills
- `src/app/page.tsx` - Homepage content and introduction

#### Styling

The design uses Tailwind CSS. Key customisation points:

- `src/app/globals.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration
- Component files - Individual component styling

#### Adding Experiments

Add new experiments to the array in `src/app/experiments/page.tsx`:

```typescript
{
  id: 'your-experiment',
  title: 'Your Experiment Title',
  description: 'Description of what it does',
  category: 'design', // or 'animation', 'education'
  status: 'live', // or 'coming-soon'
  tags: ['React', 'CSS', 'Animation'],
  icon: <YourIcon className="w-6 h-6" />,
}
```

## 🚀 Deployment

### Netlify (Recommended)

The blog is configured for easy deployment to Netlify:

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Netlify will automatically detect the settings from `netlify.toml`

3. **Configure domain** (optional)
   - Add your custom domain (zish.xyz) in the Netlify dashboard
   - Update DNS settings to point to Netlify

### Manual Deployment

For manual deployment to any static hosting service:

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy the `out` directory** to your hosting provider

### Local Development

To run the blog locally:

```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Blog Posts

- Store posts in `src/content/posts/` as `.mdx` files
- Use frontmatter for metadata (title, date, description, tags)
- Set `published: false` to hide drafts

### Images

- Add images to `public/` directory
- Reference in posts: `![Alt text](/image.jpg)`
- Optimise images for web (WebP format recommended)

### SEO

The blog includes built-in SEO optimisation:

- Automatic meta tags generation
- OpenGraph and Twitter cards
- Structured data for blog posts
- Sitemap generation

## 🎨 Design Philosophy

The design follows these principles:

- **Mobile-First**: Designed for mobile, enhanced for desktop
- **Typography**: Clear hierarchy with excellent readability
- **Minimalism**: Clean layouts with purposeful white space
- **Accessibility**: WCAG compliant with proper focus states
- **Performance**: Optimised for fast loading and smooth interactions

## 📧 Contact & Support

- **Email**: hello@zish.xyz
- **Issues**: Create an issue on GitHub
- **Discussions**: Use GitHub Discussions for questions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js and deployed with Vercel.