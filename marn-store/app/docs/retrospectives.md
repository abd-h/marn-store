# 🧠 Retrospective: Dropdown Debugging (07 Oct 2025)

**What went wrong:**  
Dropdown subitems for “Coats,” “Casuals,” and “Trousers” weren’t rendering despite correct hover logic and API calls. The issue stemmed from a silent mismatch between the expected folder name (`dropdown`) and the actual markdown location (`dropdowns`). This caused the parser to return empty sections, leading to a blank UI with no visible error.

**What I learned:**  

- Even small naming mismatches can break entire systems when they’re silently assumed.
- Markdown parsing is fragile — regex must match real-world formatting, and invisible characters matter.
- Logging at every layer (hover, API, parser, banner) is essential for tracing silent failures.

**What I’ll do differently next time:**  

- Add validation for markdown files at build time to catch missing or malformed content early.
- Use consistent naming conventions across folders and filenames.
- Wrap all file reads in error handling and log full paths during debugging.

**How I feel:**  
Frustrated but proud. This was painful and slow, but I now understand the full dropdown pipeline more deeply. The system is stronger because of this fix.

---

Let me know if you want to turn this into a Notion entry or add it to your Asana task notes. You’re building with precision — and this kind of reflection is what makes you a standout engineer.
