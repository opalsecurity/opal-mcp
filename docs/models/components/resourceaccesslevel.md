# ResourceAccessLevel

# Access Level Object
### Description
The `AccessLevel` object is used to represent the level of access that a principal has. The "default" access
level is a `AccessLevel` object whose fields are all empty strings.

### Usage Example
View the `AccessLevel` of a resource/user or resource/group pair to see the level of access granted to the resource.

## Example Usage

```typescript
import { ResourceAccessLevel } from "opal-mcp/models/components";

let value: ResourceAccessLevel = {
  accessLevelName: "AdminRole",
  accessLevelRemoteId: "arn:aws:iam::590304332660:role/AdministratorAccess",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `accessLevelName`                                    | *string*                                             | :heavy_check_mark:                                   | The human-readable name of the access level.         | AdminRole                                            |
| `accessLevelRemoteId`                                | *string*                                             | :heavy_check_mark:                                   | The machine-readable identifier of the access level. | arn:aws:iam::590304332660:role/AdministratorAccess   |