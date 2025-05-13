# GithubTeam

Remote info for GitHub team.

## Example Usage

```typescript
import { GithubTeam } from "opal-mcp/models/components";

let value: GithubTeam = {
  teamSlug: "opal-security",
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`teamId`~~                                                                                                                                        | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The id of the GitHub team. | 898931321                                                                                                                                           |
| `teamSlug`                                                                                                                                          | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The slug of the GitHub team.                                                                                                                        | opal-security                                                                                                                                       |