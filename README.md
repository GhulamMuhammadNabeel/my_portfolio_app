# Animated Portfolio Project

This is a single-page animated portfolio project built using [Next.js](https://nextjs.org/). The project showcases my skills, tools, and recent work through interactive and visually appealing animations.

## Features

### Sections

1. **Header**

   - Includes a navigation bar with links to:
     - Home (points to the Hero section)
     - Projects
     - About
     - Contact

2. **Hero**

   - Contains the tagline:
     > "Building Exceptional Projects"
     > I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
   - Features animated stars revolving around their orbits.

3. **Projects**

   - Highlights recently completed projects.
   - Implements CSS sticky positioning so project cards stick on top of each other while scrolling.

4. **Tape**

   - Displays keywords like:
     "Performant", "Accessible", "Secure", "Interactive", "Scalable", "User Friendly", "Responsive", "Maintainable", "Search Optimized", "Usable", "Reliable".
   - Animated to scroll right to left infinitely.

5. **Testimonials**

   - Includes user feedback.
   - Animates right to left infinitely with hover pause functionality.

6. **About**

   - Comprises four blocks:
     1. **My Reads**: Displays a book photo.
     2. **Tools**: Features technologies like GitHub, JavaScript, and HTML. Animates two lines of icons, one moving left to right and the other right to left.
     3. **My Hobbies**: Allows dragging hobby items within a box using motion frame.
     4. **Map with Memoji**: Shows a map image with a memoji featuring a ping animation.

7. **Contact**

   - Provides a contact form.

8. **Footer**

   - Contains social media links.

### Components

- Reusable components include:
  - `Card` (used across projects, about, etc.)
  - `OrbitStars` (for the animated stars in the hero section)
  - `ToolboxItems`
  - `CardHeader`
  - `Cards`
  - `SectionHeader`
  - `TechIcon`

### Animations

- Custom animations are configured in `tailwind.config.ts`:
  - From left to right
  - From right to left
  - Ping-large animation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.