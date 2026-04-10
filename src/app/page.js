import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to Food App
      </h1>

      <p className="text-gray-500 mb-6">Discover delicious foods and recipes</p>

      <Link
        href="/foods"
        className="btn btn-success"
      >
        Explore Foods
      </Link>
    </div>
  );
}
