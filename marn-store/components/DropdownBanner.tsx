import { parseDropdownMarkdown } from "@/lib/parseDropdownMarkdown";

export function DropdownBanner({ category }: { category: string }) {
    const sections = parseDropdownMarkdown(category);

    return (
      <section className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-4 gap-6">
        {sections.map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-sm font-semibold mb-2">{heading}</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              {" "}
              {links.map(({ label, href }) => (
                  <li key={label}>
                      <a href={href} className="hover:underline hover:text-black transition"> 
                          {label}
                      </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
}