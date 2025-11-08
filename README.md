# Swedish Healthcare Practice Website

A modern, responsive Vue.js-based website for a Swedish healthcare practice, built with TypeScript, Tailwind CSS, and Vue Router. This project provides a comprehensive digital presence for healthcare services with a focus on accessibility and user experience.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, and mobile)
- **Accessibility**: WCAG-compliant interface with proper ARIA labels and semantic HTML
- **Swedish Language Interface**: Full Swedish language support for local healthcare context
- **Modern UI Components**: Healthcare-specific components designed for clarity and usability
- **Appointment Booking System**: Online appointment scheduling functionality
- **Patient Portal (Mina Sidor)**: Secure patient area for personal health information
- **Healthcare Guide**: Comprehensive medical information and resources
- **FAQ Section**: Frequently asked questions about services and procedures
- **Clinic Information**: Details about different clinics and departments (Mottagningar)
- **Patient Information**: Educational resources and medical forms
- **Career Opportunities**: Job listings and application information (Jobba hos oss)
- **Contact Information**: Multiple ways to get in touch with the practice

## Technology Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Language**: TypeScript for type safety and better development experience
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first responsive design
- **Routing**: Vue Router 4 for client-side navigation
- **State Management**: Pinia for centralized state management
- **Testing**: Vitest with Vue Test Utils for unit testing
- **Code Quality**: ESLint with TypeScript and Vue-specific configurations
- **Deployment**: GitHub Pages with GitHub Actions for CI/CD

## Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js) or yarn

### Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/swedish-healthcare-demo-site.git
   cd swedish-healthcare-demo-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Development Instructions

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run test:unit` - Run unit tests with Vitest
- `npm run lint` - Run ESLint to check and fix code issues

### Project Structure

```
swedish-healthcare-demo-site/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── public/                  # Static assets
├── src/
│   ├── assets/              # Project assets (images, CSS, etc.)
│   ├── components/          # Vue components
│   │   ├── common/          # Shared components (Header, Footer, etc.)
│   │   ├── display/         # Display components (Cards, Tables, etc.)
│   │   ├── forms/           # Form components (Inputs, Buttons, etc.)
│   │   └── interactive/     # Interactive components (Modal, Tabs, etc.)
│   ├── router/              # Vue Router configuration
│   ├── store/               # Pinia store files
│   ├── views/               # Page components
│   ├── App.vue              # Root component
│   ├── env.d.ts             # TypeScript environment definitions
│   └── main.ts              # Application entry point
├── .env.production          # Production environment variables
├── .gitignore               # Git ignore rules
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── tsconfig.node.json       # Node.js TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

### Development Guidelines

1. Follow the existing code style and conventions
2. Use TypeScript for all new code
3. Ensure all components are properly typed
4. Write meaningful commit messages
5. Test your changes before committing
6. Keep accessibility in mind when adding new features

## Deployment Instructions

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Fill in the repository details:
   - **Repository name**: `swedish-healthcare-demo-site` (must match this name for the configuration
     to work)
   - **Description**: Swedish healthcare practice website
   - Set repository to **Public** (required for GitHub Pages)
   - **Initialize with README**: Uncheck (we already have one)
4. Click "Create repository"

### Step 2: Push Local Repository to GitHub

1. After creating the repository, GitHub will show you a page with repository URL
2. Copy the repository URL (it will look like:
   `https://github.com/your-username/swedish-healthcare-demo-site.git`)
3. In your terminal, navigate to the project directory and run:

```bash
cd swedish-healthcare-demo-site
git remote add origin https://github.com/your-username/swedish-healthcare-demo-site.git
git branch -M main
git push -u origin main
```

Replace `your-username` with your actual GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on the "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Build and deployment", select "GitHub Actions" as the source
5. GitHub Pages is now enabled and will automatically deploy your site using the GitHub Actions
   workflow

### Step 4: Verify Deployment

1. After pushing to GitHub, the GitHub Actions workflow will automatically start
2. To check the deployment status:
   - Go to the "Actions" tab in your repository
   - Click on the "Deploy to GitHub Pages" workflow
   - You should see a green checkmark if the deployment was successful
3. Once completed, your site will be available at:
   `https://your-username.github.io/swedish-healthcare-demo-site/`

## Configuration Details

### GitHub Actions Workflow

The deployment is handled by the `.github/workflows/deploy.yml` file, which:

- Triggers on push to the main branch
- Sets up a Node.js environment (version 18)
- Installs dependencies and builds the project
- Deploys to GitHub Pages using the official GitHub Pages action
- Uses the repository name dynamically for the base URL

### Vite Configuration

The `vite.config.ts` file is configured with:

- Base path set to `/swedish-healthcare-demo-site/` to match the repository name
- Output directory set to `dist`
- Path alias `@` pointing to the `src` directory for cleaner imports

### Vue Router Configuration

The `src/router/index.ts` file is configured with:

- `createWebHistory(import.meta.env.BASE_URL)` to work with GitHub Pages
- This ensures all routes work correctly with the GitHub Pages URL structure
- Routes include: Home, About, Services, Contact, FAQ, Healthcare Guide, Book Appointment, My Pages,
  Accessibility, Clinics, Patient Information, and Careers

### Environment Variables

The project uses environment variables for configuration:

- `VITE_BASE_URL`: Set dynamically during deployment to match the repository name
- `.env.production`: Contains production-specific environment variables

## How to Contribute

We welcome contributions to improve this healthcare website. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and conventions
- Ensure all components are properly typed with TypeScript
- Test your changes thoroughly
- Update documentation as needed
- Keep accessibility in mind for all new features
- Make sure all tests pass before submitting a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Troubleshooting

### 404 Errors on Page Refresh

If you encounter 404 errors when refreshing pages on GitHub Pages, this is normal behavior for
single-page applications on GitHub Pages. The GitHub Pages workflow includes a 404.html file that
redirects to the index page, which should handle this issue.

### Build Failures

If the build fails in GitHub Actions:

1. Check the error message in the Actions tab
2. Ensure all dependencies are properly listed in package.json
3. Verify that your code compiles correctly by running `npm run build` locally

### Styling Issues

If styles don't load correctly:

1. Verify that the base path in `vite.config.ts` matches your repository name
2. Check that all asset paths are relative or use the base path

### Local Development Issues

If you encounter issues during local development:

1. Clear your node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`
2. Ensure you're using Node.js version 18 or higher
3. Check that all environment variables are properly set

## Customization

### Changing the Repository Name

If you want to use a different repository name:

1. Update the `base` property in `vite.config.ts` to match your new repository name
2. The Vue Router will automatically use the new base path through `import.meta.env.BASE_URL`
3. The GitHub Actions workflow will automatically use the new repository name

### Adding Custom Domains

To use a custom domain with GitHub Pages:

1. Follow GitHub's instructions for setting up a custom domain
2. No changes are needed in the project configuration

### Adding New Pages

To add new pages to the site:

1. Create a new Vue component in the `src/views/` directory
2. Add a route in `src/router/index.ts`
3. Update the navigation components if needed
4. Test the new page locally before deploying

## Support

For questions or support regarding this project, please:

1. Check the existing documentation and troubleshooting section
2. Search existing issues on GitHub
3. Create a new issue with detailed information about your problem
4. Include steps to reproduce any bugs you encounter
