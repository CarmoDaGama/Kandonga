# Kandonga

**Turning informal economic activity into real financial data — creating visibility, trust and access to the credit system.**

**1st place — LISPA Hack (72h hackathon), [MONTH/YEAR]** · built by team **Kwata**
Live demo: [kandonga.vercel.app](https://kandonga.vercel.app)

---

## The problem

In Angola, most micro and small businesses operate informally. They sell daily, they have real revenue and real inventory — but none of it is recorded anywhere a bank can read. With no transaction history, they are invisible to the credit system, and the cost of that invisibility is that they cannot borrow to grow.

## The approach

Kandonga gives the business a reason to record its activity — a free, offline-first point-of-sale app it actually wants to use — and turns the resulting transaction stream into a credit profile that a lender can evaluate.

Two applications on one shared data layer:

| | |
|---|---|
| **Mobile (Flutter)** | Offline-first POS for the merchant: product catalog, barcode scanning, cart and checkout, Bluetooth thermal receipt printing, local accounting, marketplace, and a credit-score view derived from recorded sales. |
| **Web admin (React)** | Back-office for the credit operator: entity registration and approval, transaction review, credit request evaluation, and an activity log. |

Every sale the merchant rings up becomes a data point. Over time that history is what replaces the collateral and paperwork they don't have.

---

## Architecture

```
Kandonga/
├── mobile/          Flutter app — merchant POS + credit profile
│   └── lib/
│       ├── core/        DI (get_it), theme, error handling, Firebase service
│       └── features/    auth · billing · product · shop · accounting
│                        marketplace · settings
└── src/             React + Vite web admin — credit operator back-office
```

**Mobile** follows feature-first Clean Architecture: each feature is split into `domain` (entities, repository contracts, use cases), `data` (models, repository implementations) and `presentation` (BLoC, pages). Errors are modelled as `Either<Failure, T>` with `fpdart` rather than thrown exceptions. State is `flutter_bloc`; navigation is `go_router`; local persistence is `Hive`, which is what makes the app usable with no connectivity — the merchant's stall does not have reliable internet, so the POS must work without it and reconcile later.

**Shared data layer** is Cloud Firestore: `businesses`, `transactions` and `loan_requests` are written by the mobile app and read and acted on by the web admin.

### Stack

| Layer | Technology |
|---|---|
| Mobile | Flutter 3.1+, flutter_bloc, get_it, go_router, fpdart, Hive |
| Hardware | `mobile_scanner` (barcode/QR), `print_bluetooth_thermal` (receipts) |
| Web admin | React 19, Vite |
| Data | Cloud Firestore (Firebase) |
| Docs & export | `pdf`, `share_plus` |

---

## Team — Kwata

Kandonga was built in 72 hours by team Kwata and took **1st place** at LISPA Hack, the innovation hackathon of Angola's payment-system innovation lab.

| Member | Role |
|---|---|
| **Carmo Da Gama** | Full-stack, with primary focus on the backend: Firestore data model, repository/use-case layer, credit-score logic, and the mobile↔web-admin integration |
| *[teammate]* | *[role]* |
| *[teammate]* | *[role]* |

> The code was consolidated into this repository after the event, so the commit history here does not reflect the 72-hour timeline or the individual contributions of each team member.

---

## Running it

**Mobile**

```bash
cd mobile
flutter pub get
dart run build_runner build --delete-conflicting-outputs
flutter run
```

**Web admin**

```bash
npm install
npm run dev
```

Both require a Firebase project; add your own `firebase_options.dart` (mobile) and web config.

---

## Status

Hackathon prototype, not production software. Known limitations, stated plainly:

- **Firestore security rules are fully open** (`allow read, write: if true`) — this was acceptable for a 72-hour demo and is not acceptable for anything else. Authentication-scoped rules are the first thing that would need to change.
- The credit score is a demonstration heuristic over recorded transactions, not a validated risk model.
- No server-side API: clients talk to Firestore directly.

## License

MIT — see [LICENSE](LICENSE).
