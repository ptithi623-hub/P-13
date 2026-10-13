import { HashRouter, Routes, Route, Link } from "react-router-dom";

export default function HashDemo() {
  return (
    <HashRouter>
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-blue-700">
          HashRouter Demo
        </h2>

        <p className="mb-4 text-gray-600">
          Current URL routes are stored after the # symbol.
        </p>

        <nav className="mb-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Contact
          </Link>
        </nav>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Home Page</h3>
                  <p>Welcome to the HashRouter demonstration.</p>
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div>
                  <h3 className="text-xl font-semibold">About Page</h3>
                  <p>This page demonstrates hash-based navigation.</p>
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Contact Page</h3>
                  <p>You are viewing the contact page.</p>
                </div>
              }
            />
          </Routes>
        </div>

        <p className="mt-4 break-all text-sm text-gray-500">
          Example URL: http://localhost:5173/#/about
        </p>
      </div>
    </HashRouter>
  );
}