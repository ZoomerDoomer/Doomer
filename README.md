# Krypto Portfoliotracker

Ein produktionsreifes Next.js-Projekt, das Privatanleger:innen beim Überwachen ihres Krypto-Portfolios unterstützt. Dieser Monorepo-Startpunkt bündelt Tooling, Architekturgrundlagen und gemeinschaftliche Richtlinien, um eine sichere, DSGVO-konforme Anwendung in kurzer Zeit aufzubauen.

## Zielsetzung & Kernfunktionen
- Portfolio- und Performance-Übersicht in EUR inkl. präziser FX-Bewertungen
- Import von Transaktionen (CSV, Exchanges, On-Chain Wallets)
- FIFO-PnL-Berechnung mit Gebühren- und Transferhandling
- Read-only Anbindungen an Börsen (CCXT) und EVM-Wallets (viem)
- Visualisierungen für NAV, PnL, Allokation und Cashflows
- Sicheres Login mit Passkeys, E-Mail und OAuth-Anbietern
- Operative Transparenz via OpenTelemetry und Sentry

## Architekturüberblick
- **Frontend**: Next.js App Router, React 18/19, TailwindCSS, shadcn/ui
- **State & Forms**: TanStack Query v5, React Hook Form, Zod
- **Backend**: Route Handlers & Server Actions, Prisma/PostgreSQL, Upstash Redis
- **Integrationen**: CoinGecko, CCXT, viem (EVM), optionale Solana-Unterstützung
- **Observability**: OpenTelemetry-Pipelines, Sentry Release Health
- **Security**: Strikte CSP, sichere Cookies, verschlüsselte API-Keys, Key-Rotation

Weitere Details zu einzelnen Schichten werden in späteren PRs konkretisiert.

## Projektstruktur
```
app/
components/
lib/
  adapters/
  csv/
  fx/
  pnl/
  pricing/
server/
scripts/
tests/
```

## Lokales Setup
1. **Voraussetzungen**
   - Node.js (LTS, ≥18)
   - pnpm (≥8)
   - PostgreSQL & Redis (lokal oder via Docker) – werden in späteren Tasks konkretisiert
2. **Repository klonen**
   ```bash
   git clone <repo-url>
   cd Doomer
   pnpm install
   ```
3. **Umgebungsvariablen vorbereiten**
   - `.env.example` folgt in einer späteren Iteration.

## Qualitätssicherung
- Einheitliche Formatierung über Biome & Prettier
- Statisches Linting mit ESLint
- Tests (Vitest, React Testing Library, Playwright) folgen in späteren Tasks

## Contribution
Siehe [Code of Conduct](./CODE_OF_CONDUCT.md) für Erwartungen an die Zusammenarbeit. Pull Requests nutzen Conventional Commits, haben eine klare Beschreibung und dokumentieren Tests & Screenshots.

## Lizenz
Veröffentlicht unter der [MIT-Lizenz](./LICENSE).
