import React from "react";
import caoliflower1 from "../../../components/assets/caoliflower1.jpg";
import Image from "next/image";

type Product = {
  productId: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  imageUrl: string;
  inStock: boolean;
  quantity: number;
  originalPrice?: number; // Optional, as not all products have it
  discount?: string; // Optional, as not all products have it
};

type Category = {
  categoryName: string;
  categoryId: string;
  products: Product[];
};
const Category = () => {
  const categories: Category[] = [
    {
      categoryName: "Fruits and Vegetables",
      categoryId: "cat001",
      products: [
        {
          productId: "prod001",
          name: "Fresh Apples",
          description: "Crisp and sweet apples, perfect for a healthy snack.",
          price: 2.99,
          unit: "kg",
          imageUrl: "https://example.com/images/apples.jpg",
          inStock: true,
          quantity: 100,
        },
        {
          productId: "prod002",
          name: "Organic Carrots",
          description: "Fresh organic carrots, rich in vitamin A.",
          price: 1.99,
          unit: "kg",
          imageUrl: "https://example.com/images/carrots.jpg",
          inStock: true,
          quantity: 50,
        },
      ],
    },
    {
      categoryName: "Cooking Essentials",
      categoryId: "cat002",
      products: [
        {
          productId: "prod003",
          name: "Olive Oil",
          description: "Extra virgin olive oil for cooking and dressing.",
          price: 10.99,
          unit: "L",
          imageUrl: "https://example.com/images/olive_oil.jpg",
          inStock: true,
          quantity: 200,
        },
        {
          productId: "prod004",
          name: "Whole Wheat Flour",
          description: "Nutritious whole wheat flour for daily use.",
          price: 3.49,
          unit: "kg",
          imageUrl: "https://example.com/images/wheat_flour.jpg",
          inStock: true,
          quantity: 300,
        },
      ],
    },
    {
      categoryName: "Biscuits and Cakes",
      categoryId: "cat003",
      products: [
        {
          productId: "prod005",
          name: "Chocolate Chip Cookies",
          description: "Delicious cookies with rich chocolate chips.",
          price: 4.99,
          unit: "pack",
          imageUrl: "https://example.com/images/chocolate_cookies.jpg",
          inStock: true,
          quantity: 150,
        },
        {
          productId: "prod006",
          name: "Vanilla Cake",
          description:
            "Soft and fluffy vanilla cake, perfect for any occasion.",
          price: 7.99,
          unit: "cake",
          imageUrl: "https://example.com/images/vanilla_cake.jpg",
          inStock: false,
          quantity: 0,
        },
      ],
    },
    {
      categoryName: "Household Tools",
      categoryId: "cat004",
      products: [
        {
          productId: "prod007",
          name: "Cleaning Sponge",
          description: "Durable sponge for everyday cleaning.",
          price: 1.29,
          unit: "piece",
          imageUrl: "https://example.com/images/cleaning_sponge.jpg",
          inStock: true,
          quantity: 500,
        },
        {
          productId: "prod008",
          name: "Broom and Dustpan Set",
          description:
            "Sturdy broom with a matching dustpan for easy cleaning.",
          price: 5.99,
          unit: "set",
          imageUrl: "https://example.com/images/broom_dustpan.jpg",
          inStock: true,
          quantity: 100,
        },
      ],
    },
    {
      categoryName: "Pet Care Products",
      categoryId: "cat005",
      products: [
        {
          productId: "prod009",
          name: "Dog Food",
          description: "High-protein dry dog food for all breeds.",
          price: 15.99,
          unit: "kg",
          imageUrl: "https://example.com/images/dog_food.jpg",
          inStock: true,
          quantity: 120,
        },
        {
          productId: "prod010",
          name: "Cat Litter",
          description:
            "Odor-free cat litter for a clean and fresh environment.",
          price: 9.99,
          unit: "kg",
          imageUrl: "https://example.com/images/cat_litter.jpg",
          inStock: true,
          quantity: 80,
        },
      ],
    },
    {
      categoryName: "Beauty and Health",
      categoryId: "cat006",
      products: [
        {
          productId: "prod011",
          name: "Face Wash",
          description: "Gentle face wash for all skin types.",
          price: 5.99,
          unit: "bottle",
          imageUrl: "https://example.com/images/face_wash.jpg",
          inStock: true,
          quantity: 200,
        },
        {
          productId: "prod012",
          name: "Shampoo",
          description: "Nourishing shampoo for healthy and shiny hair.",
          price: 6.99,
          unit: "bottle",
          imageUrl: "https://example.com/images/shampoo.jpg",
          inStock: true,
          quantity: 300,
        },
      ],
    },
    {
      categoryName: "Jam and Jelly",
      categoryId: "cat007",
      products: [
        {
          productId: "prod013",
          name: "Strawberry Jam",
          description: "Sweet strawberry jam made from fresh berries.",
          price: 3.99,
          unit: "jar",
          imageUrl: "https://example.com/images/strawberry_jam.jpg",
          inStock: true,
          quantity: 180,
        },
        {
          productId: "prod014",
          name: "Grape Jelly",
          description: "Smooth grape jelly for spreading on bread and toast.",
          price: 3.49,
          unit: "jar",
          imageUrl: "https://example.com/images/grape_jelly.jpg",
          inStock: true,
          quantity: 160,
        },
      ],
    },
    {
      categoryName: "Milk and Dairy Drinks",
      categoryId: "cat008",
      products: [
        {
          productId: "prod015",
          name: "Full Cream Milk",
          description: "Rich and creamy milk for daily use.",
          price: 1.29,
          unit: "L",
          imageUrl: "https://example.com/images/full_cream_milk.jpg",
          inStock: true,
          quantity: 400,
        },
        {
          productId: "prod016",
          name: "Almond Milk",
          description:
            "Non-dairy almond milk, a great alternative to cow's milk.",
          price: 2.49,
          unit: "L",
          imageUrl: "https://example.com/images/almond_milk.jpg",
          inStock: true,
          quantity: 300,
        },
      ],
    },
    {
      categoryName: "Breakfast Products",
      categoryId: "cat009",
      products: [
        {
          productId: "prod017",
          name: "Oats",
          description:
            "Healthy whole grain oats, perfect for a nutritious breakfast.",
          price: 2.99,
          unit: "kg",
          imageUrl: "https://example.com/images/oats.jpg",
          inStock: true,
          quantity: 150,
        },
        {
          productId: "prod018",
          name: "Cornflakes",
          description: "Crunchy cornflakes, ideal for a quick breakfast.",
          price: 3.49,
          unit: "box",
          imageUrl: "https://example.com/images/cornflakes.jpg",
          inStock: true,
          quantity: 250,
        },
      ],
    },
  ];
  return (
    <div className="w-full bg-gray-100">
      <div className="text-center h-[30vh] flex flex-col gap-3 items-center justify-center ">
        <h1 className="text-xl font-bold">Featured Categories</h1>
        <span className="text-sm ">
          Choose your necessary products from this feature categories.
        </span>
      </div>
      <div className="w-full px-0 lg:px-12">
        <div className="w-full flex justify-center flex-wrap gap-1">
          {categories.map((category: Category) => {
            return (
              <div key={category?.categoryId} className="w-[100px] h-[100px] p-1  flex flex-col items-center justify-center rounded-md  bg-white text-center  transition-all duration-300 ease-in-out cursor-pointer border-2 border-gray-300 hover:border-b-black text-[0.5rem] lg:text-[0.7rem]">
                <div className="flex items-center justify-center p-3 rounded-md">
                  <Image
                    alt="product"
                    loading="lazy"
                    width="100"
                    height="100"
                    objectFit="cover"
                    src={caoliflower1}
                    className="w-full h-full"
                  />
                </div>
                <span className="font-bold text-green-600 hover:text-green-900">{category.categoryName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
