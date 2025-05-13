# Condition

# Condition Object
### Description
The `Condition` object is used to represent a condition.

### Usage Example
Used to match request configurations to users in `RequestConfiguration`

## Example Usage

```typescript
import { Condition } from "opal-mcp/models/components";

let value: Condition = {
  groupIds: [
    "1b978423-db0a-4037-a4cf-f79c60cb67b3",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `groupIds`                                               | *string*[]                                               | :heavy_minus_sign:                                       | The list of group IDs to match.                          | [<br/>"1b978423-db0a-4037-a4cf-f79c60cb67b3"<br/>]       |
| `roleRemoteIds`                                          | *string*[]                                               | :heavy_minus_sign:                                       | The list of role remote IDs to match.                    | [<br/>"arn:aws:iam::590304332660:role/AdministratorAccess"<br/>] |