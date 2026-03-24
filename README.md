# 🌑 Blood Test Tracker Frontend

Frontend application for uploading blood test reports, reviewing extracted biomarkers, tracking report history, and visualizing trends over time.

This app is built as a **dark, modern MVP** with a focus on UX clarity, product structure, and realistic health-data workflows.

---

## ✨ Features

### 🏠 Dashboard
- Health summary landing page
- Real report statistics
- Dynamic health score trend chart
- Recent reports from stored data
- Latest insights derived from the newest report

---

### 📤 Upload Flow
- Drag-and-drop upload area
- Supports **PDF and CSV**
- Selected file preview
- Real backend extraction (CSV + PDF)
- Review extracted biomarkers before saving
- Add / remove biomarkers manually

---

### 🗂 Reports
- View all uploaded reports
- Open report details
- Delete reports from list view
- Tracked Trends block with dynamic biomarker selector

---

### 🧾 Report Details
- View extracted biomarkers
- Inline editing of biomarker values and units
- Save changes directly to backend
- Delete report from details page

---

### 📊 Trends
- Dynamic biomarker selector (data-driven)
- Real chart data from backend
- Time-series visualization using stored reports

---

### ♻️ Demo Reset
- Danger action in header
- Clears all reports, biomarkers, and uploaded files

---

## 🏗 Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recharts

---

## 📁 Project Structure

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

---

## 🚀 Getting Started

Install dependencies:

npm install

Run development server:

npm run dev

Frontend runs on:
http://localhost:3000

---

## 🔌 Backend Dependency

This frontend expects the backend API to run on:
http://localhost:4000

API client:
src/lib/api.ts

---

## 🧠 Product Flow

Upload file → Extract biomarkers → Review draft → Save report → View history → Track trends → Edit report

---

## ⚠️ Limitations

- No authentication
- PDF parsing works only for text-based PDFs
- No OCR for images
- Rule-based extraction
- Simplified insights logic

---

## 🎯 Summary

This frontend delivers a realistic MVP with end-to-end data flow, editable extraction, dynamic trends, and clean UX.
