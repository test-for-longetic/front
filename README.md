# Blood Test Tracker Frontend

Frontend application for uploading blood test reports, reviewing extracted biomarkers, tracking report history, and visualizing trends over time.

This app is built as a dark, modern MVP with a focus on UX clarity, product structure, and realistic health-data workflows.

## Features

### Dashboard
- Health summary landing page
- Real report statistics
- Dynamic health score trend chart
- Recent reports from stored data
- Latest insights derived from the newest report

### Upload flow
- Fixed header with responsive mobile drawer navigation
- Drag-and-drop upload area
- Supports PDF and CSV
- Selected file preview
- Extraction request sent to backend
- Review extracted biomarkers before saving
- Add and remove biomarkers manually before persistence

### Reports
- View all uploaded reports
- Open report details
- Delete reports from list view
- Tracked Trends block with dynamic biomarker selector

### Report details
- View extracted biomarkers
- Inline editing of biomarker values and units
- Save row changes directly to backend
- Delete report from details page

### Trends
- Dynamic biomarker selector based on stored data
- Real chart data from backend
- Time-series visualization using stored reports

### Demo reset
- Danger action in header
- Clears reports, biomarkers, and uploaded files through backend API

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recharts

## Project structure

```txt
src/
  app/
    page.tsx
    upload/
    reports/
      page.tsx
      [report]/
  components/
    dashboard/
    reports/
    report-details/
    upload/
  lib/
    api.ts
  ui/
    Header.tsx
    Logo.tsx
    RedirectButton.tsx
    ResetAppButton.tsx
```

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:3000
```

## Backend dependency

This frontend expects the backend API to run on:

```txt
http://localhost:4000
```

All API calls are handled in:

```txt
src/lib/api.ts
```

For deployment, set:

```env
NEXT_PUBLIC_API_URL=<your-backend-url>
```

## Product flow

```txt
Upload file -> Extract biomarkers -> Review draft -> Save report -> View history -> Track trends -> Edit report
```

The review step is intentionally central to the UX:
- extraction may be imperfect
- users can validate and correct extracted values before saving

## Main screens

### Dashboard (`/`)
Shows:
- summary cards
- score trend
- latest insights
- recent reports

### Upload (`/upload`)
Lets the user:
- choose or drag a file
- extract biomarker draft
- review and edit extracted data
- save final report

### Reports (`/reports`)
Shows:
- tracked trends
- all uploaded reports
- delete actions

### Report details (`/reports/[report]`)
Shows:
- report summary cards
- editable biomarker table
- delete action
- row-level inline save

## API integration

The frontend integrates with:
- `GET /reports`
- `GET /reports/:id`
- `POST /reports`
- `PATCH /biomarkers/:id`
- `DELETE /reports/:id`
- `GET /trends`
- `GET /biomarkers`
- `POST /upload`
- `POST /reset`

## Design approach

The UI uses:
- dark theme by default
- fixed header
- responsive desktop/mobile navigation
- spacious cards and soft borders
- dashboard-style layout
- minimal but product-focused interactions

The goal is to feel like a modern health analytics product rather than a plain CRUD interface.

## Limitations

- No authentication
- File extraction quality depends on the backend parser
- No OCR for image files in the current MVP
- Some dashboard insights use simplified logic
- Validation is intentionally lightweight

## Future improvements

- Toast notifications
- Better loading and error states
- OCR / image support
- LLM-assisted summaries
- Stronger validation
- Tests for key flows
- More responsive refinements for smaller screens

## Summary

This frontend delivers a realistic MVP with:
- end-to-end data flow
- editable extraction review
- dynamic trends visualization
- responsive navigation
- clean, maintainable UI structure
