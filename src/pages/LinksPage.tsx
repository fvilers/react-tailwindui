import { Link as RouterLink } from "react-router-dom";
import Link from "../components/elements/Link";

function LinksPage() {
  return (
    <main className="space-y-6 p-4">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Elements / Links
          </h1>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Links as React Router links
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Link as={RouterLink} to="/" variant="primary">
              Primary link
            </Link>
            <Link as={RouterLink} to="/" variant="secondary">
              Secondary link
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold leading-6 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Links as HTML anchor links
        </h2>
        <div className="bg-white px-4 py-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-start space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Link as="a" href="/" variant="primary">
              Primary link
            </Link>
            <Link as="a" href="/" variant="secondary">
              Secondary link
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LinksPage;
