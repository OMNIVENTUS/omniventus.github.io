# SwarmCrush Support Page

This repository contains the support page for the SwarmCrush mobile application. The website is built with Next.js and deployed on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js (v20 or later)
- Docker and Docker Compose
- Make (optional, but recommended)

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/OMNIVENTUS/omniventus.github.io.git
cd omniventus.github.io
```

2. Install dependencies:
```bash
make install
# or without Make
npm install
```

3. Start development server:
```bash
make docker-dev
# or without Make
docker-compose up
```

The development server will be available at `http://localhost:3000`.

## 🛠 Development

### Available Commands

#### Using Make

```bash
# Show all available commands
make help

# Development
make dev              # Start development server without Docker
make docker-dev       # Start development server with Docker
make serve-static     # Preview static export locally

# Building
make build-prod       # Build for production
make export-static    # Generate static files

# Deployment
make deploy-gh        # Deploy to GitHub Pages

# Utility
make lint            # Run linter
make clean           # Clean Docker resources
make purge           # Clean all build artifacts and dependencies
```

#### Using npm directly

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linter
npm run deploy       # Deploy to GitHub Pages
```

### Docker Services

The project includes two Docker services:

1. **web**: Development server with hot-reloading
   - Port: 3000
   - Command: `npm run dev`

2. **preview**: Static file server for testing production builds
   - Port: 3001
   - Command: `npx serve -s`

## 📦 Building for Production

To generate a static export:

```bash
make export-static
# or without Make
npm run build
```

The static files will be generated in the `out` directory. A `.nojekyll` file is automatically created in the `out` directory to ensure proper deployment on GitHub Pages.

## 🚀 Deployment

### GitHub Pages

The site is automatically configured for GitHub Pages deployment. To deploy:

1. Make sure your changes are committed and pushed
2. Run the deployment command:
```bash
make deploy-gh
# or without Make
npm run deploy
```

The deployment process will:
1. Generate a static export in the `out` directory
2. Create a `.nojekyll` file to bypass Jekyll processing
3. Push the contents to the `gh-pages` branch

### Manual Deployment

You can also manually deploy the static files from the `out` directory to any static file hosting service. Note that the `.nojekyll` file is only required for GitHub Pages deployment.

## 🔧 Configuration

- `next.config.ts`: Next.js configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `docker-compose.yml`: Docker services configuration
- `Dockerfile`: Docker build configuration

## 📝 Project Structure

```
.
├── src/                  # Source files
├── public/              # Static assets
├── out/                 # Production build output
│   └── .nojekyll       # Prevents GitHub Pages from using Jekyll
├── .next/               # Next.js development build
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile          # Docker configuration
├── next.config.ts      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
