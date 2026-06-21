//! jobscout-server — the single binary that will serve the REST/SSE API, the MCP
//! tools (stdio + streamable HTTP), and the MCP App `ui://` resource.
//!
//! Phase 0 is a skeleton. axum + `rmcp` wiring arrives in Phases 2–3; see
//! `docs/DESIGN.md`.

fn main() {
    println!("jobscout-server {} (skeleton)", jobscout_core::version());
}
