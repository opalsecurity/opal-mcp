# GroupRemoteInfo

Information that defines the remote group. This replaces the deprecated remote_id and metadata fields.

## Example Usage

```typescript
import { GroupRemoteInfo } from "opal-mcp/models/components";

let value: GroupRemoteInfo = {
  activeDirectoryGroup: {
    groupId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
  githubTeam: {
    teamSlug: "opal-security",
  },
  gitlabGroup: {
    groupId: "898931321",
  },
  googleGroup: {
    groupId: "1y6w882181n7sg",
  },
  ldapGroup: {
    groupId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
  oktaGroup: {
    groupId: "00gjs33pe8rtmRrp3rd6",
  },
  duoGroup: {
    groupId: "DSRD8W89B9DNDBY4RHAC",
  },
  azureAdSecurityGroup: {
    groupId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
  azureAdMicrosoft365Group: {
    groupId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
  snowflakeRole: {
    roleId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `activeDirectoryGroup`                                                                     | [components.ActiveDirectoryGroup](../../models/components/activedirectorygroup.md)         | :heavy_minus_sign:                                                                         | Remote info for Active Directory group.                                                    |
| `githubTeam`                                                                               | [components.GithubTeam](../../models/components/githubteam.md)                             | :heavy_minus_sign:                                                                         | Remote info for GitHub team.                                                               |
| `gitlabGroup`                                                                              | [components.GitlabGroup](../../models/components/gitlabgroup.md)                           | :heavy_minus_sign:                                                                         | Remote info for Gitlab group.                                                              |
| `googleGroup`                                                                              | [components.GoogleGroup](../../models/components/googlegroup.md)                           | :heavy_minus_sign:                                                                         | Remote info for Google group.                                                              |
| `ldapGroup`                                                                                | [components.LdapGroup](../../models/components/ldapgroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for LDAP group.                                                                |
| `oktaGroup`                                                                                | [components.OktaGroup](../../models/components/oktagroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for Okta Directory group.                                                      |
| `duoGroup`                                                                                 | [components.DuoGroup](../../models/components/duogroup.md)                                 | :heavy_minus_sign:                                                                         | Remote info for Duo Security group.                                                        |
| `azureAdSecurityGroup`                                                                     | [components.AzureAdSecurityGroup](../../models/components/azureadsecuritygroup.md)         | :heavy_minus_sign:                                                                         | Remote info for Microsoft Entra ID Security group.                                         |
| `azureAdMicrosoft365Group`                                                                 | [components.AzureAdMicrosoft365Group](../../models/components/azureadmicrosoft365group.md) | :heavy_minus_sign:                                                                         | Remote info for Microsoft Entra ID Microsoft 365 group.                                    |
| `snowflakeRole`                                                                            | [components.SnowflakeRole](../../models/components/snowflakerole.md)                       | :heavy_minus_sign:                                                                         | Remote info for Snowflake role.                                                            |