# romainblanchot.com

| | |
| --- | --- |
| CI/CD | [![CI](https://github.com/romain-blanchot/romain-porfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/romain-blanchot/romain-porfolio/actions/workflows/ci.yml) [![Release](https://github.com/romain-blanchot/romain-porfolio/actions/workflows/release.yml/badge.svg)](https://github.com/romain-blanchot/romain-porfolio/actions/workflows/release.yml) [![Vercel](https://img.shields.io/badge/Vercel-deployed-000?logo=vercel&logoColor=white)](https://romainblanchot.com) |
| Quality | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=coverage)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) |
| Metrics | [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=bugs)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) [![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=romain-blanchot_romain-porfolio&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=romain-blanchot_romain-porfolio) |
| Meta | [![Next.js 15](https://img.shields.io/badge/Next.js-15-000?logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) [![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/) [![Vitest](https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/) [![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/) [![License - MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) |

Portfolio personnel et site vitrine de **Romain Blanchot** -- ingenieur logiciel freelance.

## Stack technique

- **Framework** -- Next.js 15 (App Router, Turbopack)
- **Langage** -- TypeScript 5
- **UI** -- React 19, Tailwind CSS 3, Shadcn/ui, Framer Motion
- **i18n** -- next-international (FR / EN)
- **Email** -- Resend + React Email
- **Validation** -- Zod + React Hook Form
- **Analytics** -- Vercel Analytics & Speed Insights
- **Tests** -- Vitest, React Testing Library, Playwright, MSW
- **CI/CD** -- GitHub Actions, Vercel, SonarCloud
- **Versioning** -- Release Please (Conventional Commits)

## Structure du projet

```
src/
├── app/[locale]/          # Pages (App Router + i18n)
│   ├── actions/           # Server Actions (newsletter, formulaire projet)
│   ├── page.tsx           # Homepage
│   ├── mes-projets/       # Projets
│   ├── mes-competences/   # Competences
│   ├── mes-services/      # Services
│   ├── a-propos/          # A propos
│   ├── me-contacter/      # Contact
│   └── demarrer-votre-projet/ # Formulaire devis
├── components/            # Composants React
│   ├── ui/                # Shadcn/ui
│   └── email/             # Templates React Email
├── lib/                   # Utilitaires, schemas Zod
└── locales/               # Traductions FR/EN
tests/
├── unit/                  # Tests unitaires (Vitest)
├── integration/           # Tests d'integration (Vitest + MSW)
├── e2e/                   # Tests E2E (Playwright)
└── mocks/                 # MSW handlers
```

## Demarrage rapide

```bash
# Installation
pnpm install

# Developpement
pnpm dev

# Build production
pnpm build

# Tests
pnpm test              # Unit + integration
pnpm test:coverage     # Avec couverture
pnpm test:e2e          # E2E (Playwright)
```

## Variables d'environnement

Copier `.env.example` vers `.env` et renseigner :

```
RESEND_API_KEY=""
```

## License

[MIT](./LICENSE) -- Romain Blanchot
