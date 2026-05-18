export interface Env {
  ORIGIN: string
  AGENT_NAME: string
  SIGNING_KEY: string // Ed25519 private key (JWK JSON), set as a secret
  WEBAUTHN_KV: KVNamespace
  AGENT_LOGO_URI?: string
  EVENTS_QUEUE: Queue // bound to aauth-events queue; consumed by aauth-shipper
}

export interface AgentTokenPayload {
  iss: string
  dwk: string
  sub: string
  jti: string
  cnf: { jwk: JsonWebKey }
  iat: number
  exp: number
  ps?: string
}
