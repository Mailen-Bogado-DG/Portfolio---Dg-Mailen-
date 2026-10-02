import { HeroMarquee } from "@/components/HeroMarquee";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return <main id="contenido"><HeroMarquee /><About /><Projects /><Education /><Contact /></main>;
}
