import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { DropdownSection } from "./types"

export function parseDropdownMarkdown(category: string) : DropdownSection[] {
  const filePath = path.join(
    process.cwd(),
    "content/dropdowns",
    `${category}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContent);

  const sections = content
    .split(/^##\s+/gm)
    .slice(1)
    .map((section) => {
      const [headingLine, ...rest] = section.trim().split("\n");
        const links = rest
            .filter((line: string) => line.startsWith("- ["))
            .map((line: string) => {
                const match = line.match(/\- \[(.*?)\]\((.*?)\)/);
                return match
                    ? {
                        label: match[1],
                        href: match[2],
                    }
                    : null;
            })
            .filter(
                (link): link is { label: string; href: string} => link !== null
            );
        return { heading: headingLine.trim(), links };
    });
    return sections;
}
