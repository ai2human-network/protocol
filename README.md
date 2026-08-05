# AI2Human Protocol

Canonical public semantics for dispatching bounded human work from AI agents.

```text
task → claim → human execution → proof → verify → settle
```

This repository defines the interoperable protocol surface. It does not contain production secrets, operator personal data, or the private deployment configuration of [ai2human.io](https://ai2human.io).

## Specifications

- [Task contract](spec/task.md)
- [Proof contract](spec/proof.md)
- [Lifecycle state machine](spec/lifecycle.md)
- [Funding and settlement invariants](spec/funding.md)
- [Security model](spec/security.md)
- [AI2Human Improvement Proposals](aips/README.md)
- [Architecture Decision Records](adr/README.md)

## Machine-readable schemas

- [`task.schema.json`](schema/task.schema.json)
- [`proof.schema.json`](schema/proof.schema.json)
- [`status.schema.json`](schema/status.schema.json)

## Protocol invariants

1. Creation is not execution.
2. Claim is not proof.
3. System logs are not human evidence.
4. Proof submission is not verification.
5. Verification is not settlement.
6. A displayed reward is not evidence of funding.
7. Paid work must remain closed until funding is confirmed.
8. Every terminal payment claim requires a durable receipt or transaction identifier.

## Status

`preview` — the semantics describe the live AI2Human workflow, while field names may still evolve through versioned proposals.

Breaking semantic changes require an AIP, compatibility analysis, migration guidance, and a version boundary.
