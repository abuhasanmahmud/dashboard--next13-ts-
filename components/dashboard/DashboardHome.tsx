import { fetchAllProduct } from "@/lib/actions/product.action";
import ProductTable from "../products/ProductTable";
import SaleHistory from "../SaleHistory/SaleHistory";

const DashboardHome = async () => {
  const allproduct = await fetchAllProduct();
  return (
    <>
      <SaleHistory />
      <ProductTable products={allproduct} />
    </>
  );
};

export default DashboardHome;
