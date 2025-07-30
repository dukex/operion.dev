import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-6 text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Operion
        </h1>
        <p className="mb-8 text-xl text-fd-muted-foreground max-w-2xl mx-auto">
          A powerful workflow automation platform that helps you build, deploy, and manage
          event-driven workflows with ease.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/docs/reference/api"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-fd-foreground border border-fd-border rounded-lg hover:bg-fd-muted transition-colors"
          >
            API Reference
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="text-lg font-semibold mb-2">Event-Driven</h3>
            <p className="text-fd-muted-foreground">
              Trigger workflows from Kafka, queues, and other event sources with built-in reliability.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="text-lg font-semibold mb-2">Visual Editor</h3>
            <p className="text-fd-muted-foreground">
              Design workflows visually with our intuitive drag-and-drop interface.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-fd-border bg-fd-card">
            <h3 className="text-lg font-semibold mb-2">Production Ready</h3>
            <p className="text-fd-muted-foreground">
              Deploy with Docker or Kubernetes with built-in monitoring and observability.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
