# Contributing

Thanks for your interest! A few conventions keep this repo clean.

## Setup

```bash
flox activate    # Rust, Node, pnpm, DuckDB
pnpm install
```

## Before you push

CI gates on these, so run them locally first:

```bash
cargo fmt --all --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace
pnpm turbo run lint typecheck test build
```

## Conventions

- **Test-driven.** New behavior starts with a failing test, then the implementation. Keep `cargo test`
  and `pnpm turbo run test` green on `main`.
- **Small, focused PRs**, each mapping to a phase or sub-task in [`docs/DESIGN.md`](docs/DESIGN.md).
- Conventional-commit-style messages (`feat:`, `fix:`, `chore:`, `docs:`…) are appreciated.
