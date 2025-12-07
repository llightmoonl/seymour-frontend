import HomePage, { metadata } from "@pages/Home";

export async function generateMetadata() {
    return metadata;
}

export default function Home() {
  return (
      <HomePage/>
  )
}
