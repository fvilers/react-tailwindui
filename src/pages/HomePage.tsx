import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="space-y-6 p-4">
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

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Elements
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/elements/buttons">Buttons</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default HomePage;