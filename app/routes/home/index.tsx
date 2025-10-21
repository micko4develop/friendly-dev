import { useState, useEffect } from "react";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "The Friendly Dev | Home" },
      { name: "description", content: "Custom website development" },
    ];
  }

export default function Home() {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
      setNow(Date.now());
    }, []);

    // Always render the same content on server and client initially
    return <div>{now ? new Date(now).toLocaleTimeString() : 'Loading...'}</div>;
}
