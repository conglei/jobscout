# joblode plugin

Packages joblode for one-step install in Claude Code: the **joblode MCP server**
(`search_jobs`, `semantic_search`, `rank_jobs`, `get_job` + the interactive results
card) plus a **job-search skill** and a `/job-search` command.

## Install

```
/plugin marketplace add conglei/joblode
/plugin install joblode@joblode
```

## Prerequisites (the bundled MCP server)

The plugin launches `joblode-server stdio`, so before enabling it:

1. Build the binary and put it on your `PATH`:
   `cargo build --release -p joblode-server` → `target/release/joblode-server`.
2. Obtain the dataset and set env (a gitignored `.env` works too):
   - `JOBLODE_PARQUET=/abs/path/to/open-jobs.parquet` (required)
   - `JOBLODE_EMBED_PROVIDER=openai` + `OPENAI_API_KEY` (enables `semantic_search`)
   - `JOBLODE_RANK_PROVIDER=gemini` + `GEMINI_API_KEY` (optional `match`/`pairwise`)
3. For fast semantic search, build the sidecar once: `joblode-server build-sidecar`.

See [`docs/MCP.md`](../../docs/MCP.md) for full configuration and
[`docs/ORCHESTRATION.md`](../../docs/ORCHESTRATION.md) for the workflow.

## Surfaces

- **Claude Code / Cowork** — the plugin bundles everything (MCP server auto-connects,
  skill + command available).
- **claude.ai / Claude Desktop chat** — the plugin system doesn't auto-run a bundled
  MCP server there; add joblode as a **custom connector** manually (see
  [`docs/MCP.md`](../../docs/MCP.md)). The skill's workflow still applies.
