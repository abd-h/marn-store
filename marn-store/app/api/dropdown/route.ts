import { NextResponse } from "next/server";
import { parseDropdownMarkdown } from "@/lib/parseDropdownMarkdown";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    if (!category) return NextResponse.json([]);

    const sections = parseDropdownMarkdown(category);

    return NextResponse.json(sections, {
        headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"}
    })
}