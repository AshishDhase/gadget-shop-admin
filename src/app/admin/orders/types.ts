import { createClient } from '@/supabase/server'; // Ensure this returns a Promise as per the new SSR approach

export async function getOrdersWithProducts() {
  const supabase = await createClient();  // now async
  const { data, error } = await supabase
    .from('order')
    .select('*, order_items:order_item(*, product(*)), user(*)')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch orders: ${error.message}`);
  }

  return data;
}

export type OrdersWithProducts = NonNullable<Awaited<ReturnType<typeof getOrdersWithProducts>>>;