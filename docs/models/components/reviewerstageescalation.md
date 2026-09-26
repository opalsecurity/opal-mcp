# ReviewerStageEscalation

Escalation for a reviewer stage. When set, the request advances to the
reviewers named here if nobody responds within delay_minutes. Timely
approval by any of the stage's own reviewers resolves the stage without
escalating.

owner_ids and user_ids name only who to escalate to; the stage's own
reviewers are added automatically and must not be repeated here. A
stage with owner_ids [X] escalating to Y sets escalation.owner_ids to
[Y], and reviewing after escalation is then open to both X and Y.

Because the stage's reviewers are unioned in rather than copied,
removing someone from the stage also removes them from the escalation.
At least one owner or user named here must not already be a reviewer
of the stage.

## Example Usage

```typescript
import { ReviewerStageEscalation } from "opal-mcp/models/components";

let value: ReviewerStageEscalation = {
  delayMinutes: 60,
  ownerIds: [
    "7870617d-e72a-47f5-a84c-693817ab4569",
  ],
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `delayMinutes`                                                                                                    | *number*                                                                                                          | :heavy_check_mark:                                                                                                | How long to wait for a response before escalating, in minutes. Between 1 and 1440 (24 hours).                     | 60                                                                                                                |
| `ownerIds`                                                                                                        | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | The owners to escalate to. The stage's own owner_ids are added automatically and must not be repeated here.       |                                                                                                                   |
| `userIds`                                                                                                         | *string*[]                                                                                                        | :heavy_minus_sign:                                                                                                | The users to escalate to. The stage's own service_user_ids are added automatically and must not be repeated here. |                                                                                                                   |