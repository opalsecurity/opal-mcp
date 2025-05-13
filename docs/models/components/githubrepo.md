# GithubRepo

Remote info for GitHub repository.

## Example Usage

```typescript
import { GithubRepo } from "opal-mcp/models/components";

let value: GithubRepo = {
  repoName: "Opal Security",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~`repoId`~~                                                                                                                                       | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.<br/><br/>The id of the repository. | 898931321                                                                                                                                          |
| `repoName`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | The name of the repository.                                                                                                                        | Opal Security                                                                                                                                      |