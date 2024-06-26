declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: string;
    MISO_SERVERLESS_PLATFORM?: string;
    MISO_NODE_NAME?: string;
    MISO_OVERLAY_DISCOVERY_NODE_K8S_NAMESPACE?: string;
    MISO_OVERLAY_DISCOVERY_NODE_TYPE?: string;
    MISO_OVERLAY_DISCOVERY_FUNCTION_K8S_NAMESPACE?: string;
    MISO_OVERLAY_DISCOVERY_FUNCTION_TYPE?: string;
    MISO_MIDDLEWARE_REPLICATION_DELAY_MS?: string;
    MISO_OVERLAY_DISCOVERY_NODE_MDNS_SVC_NAME?: string;
    MISO_KUBERNETES_USER_TOKEN?: string;
  }
}
