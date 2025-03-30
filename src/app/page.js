// app/page.js or pages/index.js depending on your Next.js version
import Head from "next/head";
import HomePage from "./ui/HomePage";
export const metadata = {
  title: "Daniel Atu | Portfolio",
};
export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
