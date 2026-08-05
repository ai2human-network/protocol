# AIP-0001: Core Human Execution Lifecycle

- Status: Accepted
- Type: Standards Track
- Created: 2026-08-05
- Authors: `@richard7463`
- Replaces: None

## Abstract

Defines the canonical separation between task creation, human claim, evidence submission, verification, settlement submission, and confirmed settlement.

## Motivation

Agent systems frequently collapse creation into completion, logs into proof, or verification into payment. The protocol requires auditable boundaries so integrations cannot overstate execution or funding.

## Specification

The canonical path is:

`draft → awaiting_funding → live → in_progress → proof_review → verified → settlement_submitted → settled`

Controlled no-payout tasks use `fundingState=not_required` and never expose a claimable reward. Paid tasks cannot enter `live` before funding preflight succeeds.

## Backward compatibility

Implementations may expose additional internal states but must map them unambiguously to the canonical states.

## Security considerations

Transitions are authenticated, idempotent, and recorded with actor, reason, timestamp, and relevant evidence identifiers.

