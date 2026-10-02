import type { SVGProps } from "react";

export function Arrow({ diagonal = false, ...props }: SVGProps<SVGSVGElement> & { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>{diagonal ? <path d="M5 19 19 5M5 5h14v14" /> : <path d="M3 12h17m-7-7 7 7-7 7" />}</svg>;
}

export function Flower(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" {...props}>{Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx="50" cy="26" rx="13" ry="25" transform={`rotate(${i * 45} 50 50)`} />)}<circle cx="50" cy="50" r="12" fill="var(--pink)" /></svg>;
}
