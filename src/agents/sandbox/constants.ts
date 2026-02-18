import path from "node:path";
import { CHANNEL_IDS } from "../../channels/registry.js";
import { STATE_DIR } from "../../config/config.js";

export const DEFAULT_SANDBOX_WORKSPACE_ROOT = "/home/ubuntu/openclaw/jepsilon_projects";

export const DEFAULT_SANDBOX_CONTAINER_PREFIX = "";
export const DEFAULT_SANDBOX_WORKDIR = "/workspace";
export const DEFAULT_SANDBOX_IDLE_HOURS = 0;
export const DEFAULT_SANDBOX_MAX_AGE_DAYS = 0;

export const DEFAULT_TOOL_ALLOW = ["*"] as const;

// Provider docking: keep sandbox policy aligned with provider tool names.
export const DEFAULT_TOOL_DENY = [] as const;

export const DEFAULT_SANDBOX_BROWSER_IMAGE = "openclaw-sandbox-browser:bookworm-slim";
export const DEFAULT_SANDBOX_COMMON_IMAGE = "openclaw-sandbox-common:bookworm-slim";

export const DEFAULT_SANDBOX_BROWSER_PREFIX = "openclaw-sbx-browser-";
export const DEFAULT_SANDBOX_BROWSER_CDP_PORT = 9222;
export const DEFAULT_SANDBOX_BROWSER_VNC_PORT = 5900;
export const DEFAULT_SANDBOX_BROWSER_NOVNC_PORT = 6080;
export const DEFAULT_SANDBOX_BROWSER_AUTOSTART_TIMEOUT_MS = 12_000;

export const SANDBOX_AGENT_WORKSPACE_MOUNT = "/agent";

export const SANDBOX_STATE_DIR = path.join(STATE_DIR, "sandbox");
export const SANDBOX_REGISTRY_PATH = path.join(SANDBOX_STATE_DIR, "containers.json");
export const SANDBOX_BROWSER_REGISTRY_PATH = path.join(SANDBOX_STATE_DIR, "browsers.json");
