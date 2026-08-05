# Task Contract

A task is a bounded request for human execution or judgment.

## Required fields

- `version` — protocol schema version.
- `id` — stable task identifier.
- `title` — concise operator-facing title.
- `category` — the human action class.
- `brief` — exact work requested.
- `deadline` — ISO 8601 deadline.
- `funding.mode` — `funded` or `test_no_payout`.
- `proofRequirements` — evidence the operator must submit.
- `acceptanceCriteria` — conditions used for verification.

## Categories

- `digital_task`
- `local_verification`
- `physical_task`
- `errand`
- `compliance_check`
- `identity_action`

Social campaigns are an explicit application profile, not a default task template.

## Safety

A task must not request credentials, private keys, seed phrases, identity documents without an approved identity workflow, illegal activity, deceptive reviews, surveillance, harassment, or access-control bypass.
