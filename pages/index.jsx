import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section className="section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="box p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center mt-8 mb-6" style={{ fontFamily: "Open Sans" }}>
              Welcome to School Management
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Manage your school&apos;s information easily.
            </p>
            <nav className="flex justify-center space-x-4">
              <Link href="/addSchool" legacyBehavior>
                <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Add School
                </a>
              </Link>
              <Link href="/showSchools" legacyBehavior>
                <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  Show Schools
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
