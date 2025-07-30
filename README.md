# Operion Documentation

Official documentation site for Operion, a powerful workflow automation platform for event-driven applications. Built with [Fumadocs](https://fumadocs.dev) and Next.js.

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Features

- **Landing Page**: Modern homepage showcasing Operion's key features
- **Comprehensive Documentation**: Complete guides for developers and operators
- **Organized Content**: Structured documentation with proper MDX formatting
- **Interactive Search**: Full-text search across all documentation
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Documentation Structure

| Section | Description |
| ------- | ----------- |
| **Getting Started** | Installation guides and first workflow tutorial |
| **Triggers** | Kafka, Queue, and custom trigger configuration |
| **Visual Editor** | Interactive workflow design interface |
| **API Reference** | Complete REST API documentation |
| **Configuration** | Environment variables and deployment guides |
| **Troubleshooting** | Common issues and solutions |

## Project Structure

| Path | Description |
| ---- | ----------- |
| `app/(home)/` | Landing page and marketing content |
| `app/docs/` | Documentation layout and pages |
| `content/docs/` | MDX documentation content |
| `content/docs/triggers/` | Trigger-specific documentation |
| `lib/source.ts` | Content source adapter for Fumadocs |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.vercel.app) - learn about Fumadocs
