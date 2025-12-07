import Hebbian, { metadata } from "@pages/Hebbian";

export async function generateMetadata() {
    return metadata;
}

export default function Home() {
  return (
      <Hebbian/>
  )
}
