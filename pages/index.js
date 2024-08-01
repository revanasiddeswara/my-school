import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to School Management</h1>
      <nav>
        <ul>
          <li><Link href="/addSchool">Add School</Link></li>
          <li><Link href="/showSchools">Show Schools</Link></li>
        </ul>
      </nav>
    </div>
  );
}
