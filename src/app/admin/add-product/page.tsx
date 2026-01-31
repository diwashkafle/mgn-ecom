import { prisma } from "@/lib/prisma"; // Adjust path to your prisma client
import ProductForm from "@/components/admin-dashboard/ProductForm";

export default async function AddProductPage() {
  // Direct database call - no fetch needed!
  const categories = await prisma.category.findMany();
  const subcategories = await prisma.subcategory.findMany();

  return (
    <ProductForm
      mode="add"
      categories={categories}
      subcategories={subcategories}
    />
  );
}