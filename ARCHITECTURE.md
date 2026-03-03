# Architecture

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (with OKLCH color system)
- **State**: Zustand
- **Charts**: Recharts
- **Storage**: localStorage API

## Design System (OKLCH)

### Main Colors
- **Primary**: `oklch(0.6723 0.1606 244.9955)` (Electric Blue)
- **Secondary**: `oklch(0.1884 0.0128 248.5103)` (Deep Midnight)
- **Accent**: `oklch(0.9392 0.0166 250.8453)` (Soft Sky)
- **Background**: `oklch(1.0000 0 0)` / `oklch(0 0 0)` (Pure White / Black)

### Typography
- **Sans-serif**: `Open Sans` (Primary)
- **Serif**: `Georgia`
- **Monospace**: `Menlo`
- **Radius**: `1.3rem` (Soft corners)

```
app/
  layout.tsx      # Root layout
  page.tsx        # Main page
components/
  ExpenseForm.tsx # Add new expense
  ExpenseList.tsx # Display expenses
  ExpenseChart.tsx # Pie/bar chart
  CategoryFilter.tsx # Filter dropdown
store/
  useExpenseStore.ts # Zustand store
types/
  expense.ts      # TypeScript types
```

## Data Shape

```typescript
interface Expense {
  id: string
  amount: number
  description: string
  category: string
  date: string // ISO format
  createdAt: number // timestamp
}
```

## Values

- Keep it simple
- No over-engineering
- Make it work first, then improve
