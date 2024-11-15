import { ExampleChart } from "./ExampleChart";
import { ExampleChartY } from "./ExampleChartY";

export default async function Home() {
  return (
    <div className="mx-auto w-full border-border/40 dark:border-border min-[1800px]:max-w-[1536px] min-[1800px]:border-x">
      <main className="flex-1">
        <div className="relative">
          <div className="container py-6">
            <section className="scroll-mt-20">
              <div className="grid gap-4">
                <div className="gap-6 md:flex md:flex-row-reverse md:items-start">
                  <div className="grid flex-1 gap-12">
                    <div className="grid flex-1 scroll-mt-20 items-start gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
                      <ExampleChart />
                      <ExampleChartY />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
