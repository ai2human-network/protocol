# Proof Contract

Proof is human-submitted evidence associated with a claimed task.

## Evidence kinds

- image
- video
- link
- text
- receipt
- signature
- timestamp
- location observation

Each artifact should include provenance metadata where available: capture time, MIME type, hash, source URL, and task association.

## Separation of concerns

- System execution logs may explain why a task was dispatched, but are not human proof.
- An uploaded artifact is submitted proof, not verified proof.
- Verification records a decision, rules evaluated, and reasons.
- Settlement records payment execution separately from verification.
