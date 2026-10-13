import {
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

function CurrentLocation() {
  const location = useLocation();

  return (
    <p className="mt-4 text-sm text-purple-700">
      Internal route: {location.pathname}
    </p>
  );
}

export default function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-2xl font-bold text-purple-700">
          MemoryRouter Demo
        </h2>

        <p className="mb-4 text-gray-600">
          Navigation is stored in memory. The browser URL does not change.
        </p>

        <nav className="mb-6 flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Home
          </Link>

          <Link
            to="/profile"
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Settings
          </Link>
        </nav>

        <div className="rounded-xl border border-purple-200 bg-purple-50 p-5">
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Home Page</h3>
                  <p>Welcome to the MemoryRouter demonstration.</p>
                </div>
              }
            />

            <Route
              path="/profile"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Profile Page</h3>
                  <p>This route exists only in the router's memory.</p>
                </div>
              }
            />

            <Route
              path="/settings"
              element={
                <div>
                  <h3 className="text-xl font-semibold">Settings Page</h3>
                  <p>Try switching between the internal routes.</p>
                </div>
              }
            />
          </Routes>

          <CurrentLocation />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Observe the internal route above while the address bar stays the same.
        </p>
      </div>
    </MemoryRouter>
  );
}