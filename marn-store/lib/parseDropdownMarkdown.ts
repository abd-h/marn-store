import fs from "fs";
import path from "path";

export function parseDropdownMarkdown(category: string) {
  const filePath = path.join(process.cwd(), "content/dropdowns", `${category}.md`);
  const raw = fs.readFileSync(filePath, "utf-8");

  const lines = raw.split("\n");
  const sections: { heading: string; links: { label: string; href: string }[] }[] = [];

  let currentSection: { heading: string; links: { label: string; href: string }[] } | null = null;

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.*)/);
    const linkMatch = line.match(/^-\s*\[(.+?)\]\((.+?)\)/);

    if (headingMatch) {
      if (currentSection) sections.push(currentSection);
      currentSection = { heading: headingMatch[1], links: [] };
    } else if (linkMatch && currentSection) {
      currentSection.links.push({ label: linkMatch[1], href: linkMatch[2] });
    }
  }

  if (currentSection) sections.push(currentSection);
console.log("✅ Parsed sections:", JSON.stringify(sections, null, 2));
  return sections;
}
