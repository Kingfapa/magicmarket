import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeSwitcher } from "../mode-switcher";
import { signInAction } from "../actions";

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to Magicmarket! <ModeSwitcher />
        </h1>
        <div className="flex gap-4">
          <Link href="/inventory">
            <Button className="btn">Inventory</Button>
          </Link>
          <Link href="/product/card/gravecrawler">
            <Button className="btn">Example product</Button>
          </Link>
        </div>
        <form>
          <Button className="btn" formAction={signInAction}>
            Sign In
          </Button>
        </form>
      </main>
    </div>
  );
}
