# Rules

## Code Style
- TypeScript with strict mode
- Functional components only
- Use async/await over .then()
- Keep components under 150 lines when possible

---

## Architecture
- Use App Router (Next.js)
- Dynamic routes for:
  - /tournament/[id]
  - /match/[id]
  - /player/[id]
- Keep business logic outside UI components

---

## State Management
- Zustand for global state (tournaments, players, highlights)
- Local state for UI-only interactions (modals, filters)
- Avoid prop drilling

---

## Styling
- Tailwind CSS only (no CSS files)
- Dark mode by default
- Mobile-first responsive layout
- Video-first layout (large media area)

---

## Data
- Use mock data for MVP
- Define clear types:
  - Tournament
  - Match
  - Highlight
  - Player
- Store optional user preferences in localStorage

---

## Components
- Small, focused components
- Reusable UI pieces (Card, Button, VideoPlayer)
- Separate layout components from content components

---

## Naming
- Components: PascalCase (HighlightCard.tsx)
- Functions: camelCase (handlePlayClick)
- Types: PascalCase (Highlight, Player)
- Stores: useSomethingStore (useTournamentStore)

---

## Avoid
- Class components
- Inline styles
- Installing extra libraries unless necessary
- Backend implementation (mock only for MVP)
- Over-complicated folder structure

---

## When Stuck
- Start with static UI before adding state
- Build one page fully before moving to the next
- Ask Antigravity to explain the error
- Check the browser console
- Reduce the problem to the smallest working version