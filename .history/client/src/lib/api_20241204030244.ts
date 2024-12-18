export async function getProducts(params: Record<string, string> = {}) {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
    `http://localhost:4000/api/products?${searchParams}`
  );
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`http://localhost:4000/api/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
}
