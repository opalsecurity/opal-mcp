# GroupAccessLevel

# Access Level Object
### Description
The `GroupAccessLevel` object is used to represent the level of access that a user has to a group or a group has to a group. The "default" access
level is a `GroupAccessLevel` object whose fields are all empty strings.

### Usage Example
View the `GroupAccessLevel` of a group/user or group/group pair to see the level of access granted to the group.

## Example Usage

```typescript
import { GroupAccessLevel } from "opal-mcp/models/components";

let value: GroupAccessLevel = {
  accessLevelName: "Developer",
  accessLevelRemoteId: "20",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `accessLevelName`                                    | *string*                                             | :heavy_check_mark:                                   | The human-readable name of the access level.         | Developer                                            |
| `accessLevelRemoteId`                                | *string*                                             | :heavy_check_mark:                                   | The machine-readable identifier of the access level. | 20                                                   |