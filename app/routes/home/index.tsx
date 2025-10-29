import { useState, useEffect } from "react";
import type { Route } from "./+types/index";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "The Friendly Dev | Home" },
      { name: "description", content: "Custom website development" },
    ];
  }

export default function Home() {
    return (
        <div>
            <Hero name="Milovan" text="I build friendly web expiriences and help others become, modern developers." />
        </div>
    )
}
