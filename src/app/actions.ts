"use server";

import { encodedRedirect } from "@/lib/encodedRedirect";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const signInAction = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
    },
  });

  console.log(data);

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect(data.url);
};

export const createInventory = async (formData: FormData): Promise<void> => {
  const supabase = await createClient();
  try {
    // insert the inventory item
    await supabase.from("inventory").insert({
      condition: formData.get("condition") as string,
      language: formData.get("language") as string,
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while creating the inventory item.");
  }
};
