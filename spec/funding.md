# Funding and Settlement

## Funding modes

### `funded`

A reward is proposed, but the task remains closed until escrow or PrizePool funding is recorded and preflight checks pass.

### `test_no_payout`

A controlled task may execute without payment. Interfaces must state that no payout is available and must not expose a reward claim.

## Invariants

- Reward metadata is not funding evidence.
- Funding evidence identifies network, asset, amount, recipient contract or escrow, and transaction status.
- Verification does not guarantee payment until settlement succeeds.
- Refund and expiry paths preserve an auditable terminal state.
