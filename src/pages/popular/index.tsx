import React, { useEffect } from "react";
import ListProduct from "@/components/common/ListProduct";
import useGetQuery from "@/components/hooks/useGetQuery";
import Loading from "@/components/common/loading";
import { GET_PRODUCT_URL } from "@/utils/constant";

const Popular = () => {
  const { data, loading, error } = useGetQuery<any[]>(GET_PRODUCT_URL,"product");
  console.log("Popular@@@@", data);
  // useEffect(() => {
  //   execute(GET_PRODUCT_URL);
  // }, []);

  if (loading) {
    return (
      <Loading />)
  };
  return (
    <div className="w-full ">
      <div className="bg-gray-100 py-10 lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-serif font-semibold">
              Popular Products for Daily Shopping
            </h2>
            <p className="text-gray-600">
              See all our popular products this week. You can choose your daily
              needs from this list and get special offers with free shipping.
            </p>
          </div>
          <ListProduct products={data} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
