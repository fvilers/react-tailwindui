function HomePage() {
  return (
    <main className="p-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            React Tailwind UI
          </h1>

          <p className="mt-2 flex items-center text-sm text-gray-500">
            Beautifully designed, expertly crafted React components
          </p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
