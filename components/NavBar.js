import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex gap-6 justify-center">
        <li>
          <Link href="/" className="hover:text-blue-300">Dashboard</Link>
        </li>
        <li>
          <Link href="/profile" className="hover:text-blue-300">Profile</Link>
        </li>
        <li>
          <Link href="/maps" className="hover:text-blue-300">Maps</Link>
        </li>
        <li>
          <Link href="/calendar" className="hover:text-blue-300">Calendar</Link>
        </li>
        <li>
          <Link href="/activities" className="hover:text-blue-300">Activities</Link>
        </li>
      </ul>
    </nav>
  );
}
