# Lifecycle State Machine

## Workflow states

```text
needs_info
  → draft
  → awaiting_funding
  → live
  → in_progress
  → proof_review
  → verified
  → settlement_submitted
  → settled
```

Alternative states include `revision_required`, `cancelled`, `expired`, `refund_pending`, `refunded`, `disputed`, and `needs_review`.

## Required transition rules

- `live → in_progress` requires a successful claim.
- `in_progress → proof_review` requires human evidence.
- `proof_review → verified` requires an explicit verification decision.
- `verified → settlement_submitted` requires settlement eligibility and funded value.
- `settlement_submitted → settled` requires a confirmed payment receipt.
- Transitions must be idempotent and auditable.
