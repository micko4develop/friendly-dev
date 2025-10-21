import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "The Friendly Dev | Home" },
      { name: "description", content: "Custom website development" },
    ];
  }

export default function Home() {
  return <>My App</>;
}
