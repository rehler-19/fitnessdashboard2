export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Fitness Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to your personal training hub. Track runs, rides, and workouts in one place.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-blue-700">Weekly Miles</h2>
            <p className="text-2xl font-bold text-blue-900">0</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold text-green-700">Workouts</h2>
            <p className="text-2xl font-bold text-green-900">0</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl shadow col-span-2">
            <h2 className="text-xl font-semibold text-purple-700">Map Placeholder</h2>
            <div className="w-full h-48 bg-purple-200 rounded-lg flex items-center justify-center text-purple-900">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}