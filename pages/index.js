import Link from "next/link";
import Header from "./Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1
        className="text-4xl font-bold text-center mt-8"
        style={{ fontFamily: "Open Sans" }}
      >
        Welcome to School Management
      </h1>
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="box p-4 sm:p-6 lg:p-8">
          <nav>
            <ul>
              <li>
                <Link href="/addSchool">Add School</Link>
              </li>
              <li>
                <Link href="/showSchools">Show Schools</Link>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </section>
    </div>
  );
}
