# Security Model

Security-sensitive surfaces include authentication, task ownership, proof integrity, operator privacy, funding, verification, settlement, refunds, and idempotency.

Implementations should:

- authenticate every mutating request;
- bind claims and proof to a stable user identity;
- reject replayed side effects through idempotency keys;
- validate funding onchain or through the declared escrow system;
- keep private keys and API keys outside task records and logs;
- separate requester-controlled text from trusted verification decisions;
- fail closed when identity, proof, or funding cannot be verified.
