import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma"; 
import ProductForm, { ProductData, Category } from "@/components/admin-dashboard/ProductForm";
import { SpecificationGroup, VariantGroup } from "@/Types/adminComponentTypes";

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

export default async function EditProductPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = id;

  // Fetch directly from database instead of API routes
  const [product, categories, subcategories] = await Promise.all([
    prisma.product.findUnique({
      where: { id: productId },
      include: {
        category: true,
        subcategory: true,
      },
    }),
    prisma.category.findMany(),
    prisma.subcategory.findMany(),
  ]);

  // Handle not found
  if (!product) {
    notFound();
  }

  const formattedProduct: ProductData = {
  id: product.id,
  name: product.name,
  categoryId: product.categoryId,
  price: Number(product.price),          
  crossedPrice: Number(product.crossedPrice || 0),  
  stock: product.stock,                    
  status: product.status,
  description: product.description || "",
  images: product.images as unknown as string[],   
  specifications: product.specifications as unknown as SpecificationGroup[], 
  variants: product.variants as unknown as VariantGroup[], 
};

  return (
    <ProductForm 
      categories={categories as Category[]}
      subcategories={subcategories as Subcategory[]}
      mode="edit"
      initialData={formattedProduct}
    />
  );
}