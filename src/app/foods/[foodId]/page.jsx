import Image from "next/image";
import Link from "next/link";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();

  const {
    id,
    dish_name,
    category,
    rating,
    price,
    cuisine,
    image_link,
    main_ingredients,
  } = data.data;

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 mt-25 rounded-xl">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          {dish_name}
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mb-8">{cuisine}</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="flex gap-3 flex-wrap">
              <span className="bg-white dark:bg-gray-800 shadow px-4 py-1 rounded-full text-sm">
                ⭐ {rating}
              </span>
              <span className="bg-white dark:bg-gray-800 shadow px-4 py-1 rounded-full text-sm">
                ৳ {price}
              </span>
              <span className="bg-white dark:bg-gray-800 shadow px-4 py-1 rounded-full text-sm">
                {category}
              </span>
            </div>

            <div className="bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-5 shadow-md">
              <h3 className="font-semibold text-lg mb-3">Ingredients</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                {main_ingredients?.slice(0, 6).map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={"/foods/addToCart"} className="btn btn-success">
              Add to Cart
            </Link>
          </div>

          {/* RIGHT SIDE - IMAGE FIXED */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-105 aspect-square relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
              <Image
                src={image_link}
                alt={dish_name}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;
