import { Routes, Route, Link, MemoryRouter } from "react-router-dom";

export default function StaticDemo() {
  const fixedLocation = "/about";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold text-green-700">
        StaticRouter Demo
      </h2>

      <p className="mb-4 text-gray-600">
        This example demonstrates rendering a predefined route.
      </p>

      <div className="rounded-xl border border-green-200 bg-green-50 p-5">
        <MemoryRouter initialEntries={[fixedLocation]}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Home Page</h3>
                  <p>Welcome to the home page.</p>
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div>
                  <h3 className="text-xl font-semibold">About Page</h3>
                  <p>
                    This route starts at a predefined location: /about
                  </p>
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Contact Page</h3>
                  <p>This is the contact page.</p>
                </div>
              }
            />

            <Route
              path="*"
              element={<h3>404 - Page Not Found</h3>}
            />
          </Routes>
        </MemoryRouter>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        Initial location: {fixedLocation}
      </p>

      <p className="mt-2 text-sm text-amber-700">
        Note: MemoryRouter is used here as a browser-compatible
        demonstration of a fixed initial route. It is not StaticRouter.
      </p>
    </div>
  );
}