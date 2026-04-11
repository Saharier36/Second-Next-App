import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {
  if (!food) return null;

  const { id, dish_name, image_link, category, rating, price, cuisine } = food;

  return (
    <div className="group rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-200 dark:border-gray-700 mt-4">
      <div className="relative h-45 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image_link}
          alt={dish_name}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 right-3 badge badge-secondary">
          NEW
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 line-clamp-2">
          {dish_name}
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">{cuisine}</p>

        <div className="flex gap-2 flex-wrap">
          <span className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full">
            ⭐ {rating}
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full">
            ৳ {price}
          </span>
          <span className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        <div className="flex gap-2 pt-3">
          <Link href={"/foods/addToCart"} className="flex-1 btn btn-success">
            Add to Cart
          </Link>

          <Link href={`/foods/${id}`} className="flex-1 btn btn-outline">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
