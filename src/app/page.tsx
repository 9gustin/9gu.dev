import { Articles } from "@/components/Articles";
import { Hero } from "@/components/Hero";
import { Loader } from "@/components/Loader";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <Articles />
      </Suspense>
    </>
  );
}
