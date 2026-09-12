# GroupRemoteInfo

Information that defines the remote group. This replaces the deprecated remote_id and metadata fields. If remote_info is provided, a group will be imported into Opal. For group types that support group creation through Opal, a new group will be created if remote_info is not provided.

## Example Usage

```typescript
import { GroupRemoteInfo } from "opal-mcp/models/components";

let value: GroupRemoteInfo = {
  activeDirectoryGroup: {
    groupId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
  },
  tailscaleGroup: {
    groupId: "898931321",
  },
  twingateGroup: {
    groupId: "R3JvdXA6MTIzNA==",
  },
  twingateGroupSynced: {
    groupId: "R3JvdXA6MTIzNA==",
  },
  awsSsoGroup: {
    groupId: "898931321",
  },
  databricksAccountGroup: {
    groupId: "898931321",
  },
  connectorGroup: {
    groupId: "898931321",
  },
  githubTeam: {
    teamSlug: "opal-security",
  },
  githubEnterpriseTeam: {
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
  oktaGroupRule: {
    ruleId: "0pr3f7zMZZHPgUoWO0g4",
  },
  workdayUserSecurityGroup: {
    groupId: "123abc456def",
  },
  pagerdutyOnCallSchedule: {
    scheduleId: "PNZNINN",
  },
  incidentioOnCallSchedule: {
    scheduleId: "01HZ8XQM9ZQX8RKMZQ8ZQX8RK",
  },
  rootlyOnCallSchedule: {
    scheduleId: "01HZ8XQM9ZQX8RKMZQ8ZQX8RK",
  },
  devinGroup: {
    groupName: "devin-group-01",
  },
  clickhouseRole: {
    roleId: "my_clickhouse_role",
  },
  grafanaTeam: {
    teamId: "2323",
  },
  zendeskGroup: {
    groupId: "12345",
  },
  slackUserGroup: {
    groupId: "S0614TZR7",
  },
  zendeskOrganization: {
    organizationId: "67890",
  },
  hubspotTeam: {
    teamId: "12345",
  },
  tableauGroup: {
    groupId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  confluenceGroup: {
    groupId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  jiraGroup: {
    groupId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  },
  docusignGroup: {
    groupId: "12345",
  },
  zoomGroup: {
    groupId: "SoBVexyrQjqCkcxjpBWi6w",
  },
  docusignSigningGroup: {
    signingGroupId: "12345",
  },
  linearTeam: {
    teamId: "8caed98e-1234-5678-9abc-def012345678",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `activeDirectoryGroup`                                                                     | [components.ActiveDirectoryGroup](../../models/components/activedirectorygroup.md)         | :heavy_minus_sign:                                                                         | Remote info for Active Directory group.                                                    |
| `tailscaleGroup`                                                                           | [components.TailscaleGroup](../../models/components/tailscalegroup.md)                     | :heavy_minus_sign:                                                                         | Remote info for Tailscale group.                                                           |
| `twingateGroup`                                                                            | [components.TwingateGroup](../../models/components/twingategroup.md)                       | :heavy_minus_sign:                                                                         | Remote info for Twingate group.                                                            |
| `twingateGroupSynced`                                                                      | [components.TwingateGroupSynced](../../models/components/twingategroupsynced.md)           | :heavy_minus_sign:                                                                         | Remote info for Twingate synced group.                                                     |
| `awsSsoGroup`                                                                              | [components.AwsSsoGroup](../../models/components/awsssogroup.md)                           | :heavy_minus_sign:                                                                         | Remote info for AWS SSO group.                                                             |
| `databricksAccountGroup`                                                                   | [components.DatabricksAccountGroup](../../models/components/databricksaccountgroup.md)     | :heavy_minus_sign:                                                                         | Remote info for Databricks account group.                                                  |
| `connectorGroup`                                                                           | [components.ConnectorGroup](../../models/components/connectorgroup.md)                     | :heavy_minus_sign:                                                                         | Remote info for Connector group.                                                           |
| `githubTeam`                                                                               | [components.GithubTeam](../../models/components/githubteam.md)                             | :heavy_minus_sign:                                                                         | Remote info for GitHub team.                                                               |
| `githubEnterpriseTeam`                                                                     | [components.GithubEnterpriseTeam](../../models/components/githubenterpriseteam.md)         | :heavy_minus_sign:                                                                         | Remote info for GitHub Enterprise team.                                                    |
| `gitlabGroup`                                                                              | [components.GitlabGroup](../../models/components/gitlabgroup.md)                           | :heavy_minus_sign:                                                                         | Remote info for Gitlab group.                                                              |
| `googleGroup`                                                                              | [components.GoogleGroup](../../models/components/googlegroup.md)                           | :heavy_minus_sign:                                                                         | Remote info for Google group.                                                              |
| `ldapGroup`                                                                                | [components.LdapGroup](../../models/components/ldapgroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for LDAP group.                                                                |
| `oktaGroup`                                                                                | [components.OktaGroup](../../models/components/oktagroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for Okta Directory group.                                                      |
| `duoGroup`                                                                                 | [components.DuoGroup](../../models/components/duogroup.md)                                 | :heavy_minus_sign:                                                                         | Remote info for Duo Security group.                                                        |
| `azureAdSecurityGroup`                                                                     | [components.AzureAdSecurityGroup](../../models/components/azureadsecuritygroup.md)         | :heavy_minus_sign:                                                                         | Remote info for Microsoft Entra ID Security group.                                         |
| `azureAdMicrosoft365Group`                                                                 | [components.AzureAdMicrosoft365Group](../../models/components/azureadmicrosoft365group.md) | :heavy_minus_sign:                                                                         | Remote info for Microsoft Entra ID Microsoft 365 group.                                    |
| `snowflakeRole`                                                                            | [components.SnowflakeRole](../../models/components/snowflakerole.md)                       | :heavy_minus_sign:                                                                         | Remote info for Snowflake role.                                                            |
| `oktaGroupRule`                                                                            | [components.OktaGroupRule](../../models/components/oktagrouprule.md)                       | :heavy_minus_sign:                                                                         | Remote info for Okta Directory group rule.                                                 |
| `workdayUserSecurityGroup`                                                                 | [components.WorkdayUserSecurityGroup](../../models/components/workdayusersecuritygroup.md) | :heavy_minus_sign:                                                                         | Remote info for Workday User Security group.                                               |
| `pagerdutyOnCallSchedule`                                                                  | [components.PagerdutyOnCallSchedule](../../models/components/pagerdutyoncallschedule.md)   | :heavy_minus_sign:                                                                         | Remote info for PagerDuty on-call schedule group.                                          |
| `incidentioOnCallSchedule`                                                                 | [components.IncidentioOnCallSchedule](../../models/components/incidentiooncallschedule.md) | :heavy_minus_sign:                                                                         | Remote info for Incident.io on-call schedule group.                                        |
| `rootlyOnCallSchedule`                                                                     | [components.RootlyOnCallSchedule](../../models/components/rootlyoncallschedule.md)         | :heavy_minus_sign:                                                                         | Remote info for Rootly on-call schedule group.                                             |
| `devinGroup`                                                                               | [components.DevinGroup](../../models/components/devingroup.md)                             | :heavy_minus_sign:                                                                         | Remote info for Devin group.                                                               |
| `clickhouseRole`                                                                           | [components.ClickhouseRole](../../models/components/clickhouserole.md)                     | :heavy_minus_sign:                                                                         | Remote info for ClickHouse role.                                                           |
| `grafanaTeam`                                                                              | [components.GrafanaTeam](../../models/components/grafanateam.md)                           | :heavy_minus_sign:                                                                         | Remote info for Grafana team.                                                              |
| `zendeskGroup`                                                                             | [components.ZendeskGroup](../../models/components/zendeskgroup.md)                         | :heavy_minus_sign:                                                                         | Remote info for Zendesk group.                                                             |
| `slackUserGroup`                                                                           | [components.SlackUserGroup](../../models/components/slackusergroup.md)                     | :heavy_minus_sign:                                                                         | Remote info for Slack user group.                                                          |
| `zendeskOrganization`                                                                      | [components.ZendeskOrganization](../../models/components/zendeskorganization.md)           | :heavy_minus_sign:                                                                         | Remote info for Zendesk organization.                                                      |
| `hubspotTeam`                                                                              | [components.HubspotTeam](../../models/components/hubspotteam.md)                           | :heavy_minus_sign:                                                                         | Remote info for HubSpot team.                                                              |
| `tableauGroup`                                                                             | [components.TableauGroup](../../models/components/tableaugroup.md)                         | :heavy_minus_sign:                                                                         | Remote info for Tableau group.                                                             |
| `confluenceGroup`                                                                          | [components.ConfluenceGroup](../../models/components/confluencegroup.md)                   | :heavy_minus_sign:                                                                         | Remote info for Confluence group.                                                          |
| `jiraGroup`                                                                                | [components.JiraGroup](../../models/components/jiragroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for Jira group.                                                                |
| `docusignGroup`                                                                            | [components.DocusignGroup](../../models/components/docusigngroup.md)                       | :heavy_minus_sign:                                                                         | Remote info for Docusign group.                                                            |
| `zoomGroup`                                                                                | [components.ZoomGroup](../../models/components/zoomgroup.md)                               | :heavy_minus_sign:                                                                         | Remote info for Zoom group.                                                                |
| `docusignSigningGroup`                                                                     | [components.DocusignSigningGroup](../../models/components/docusignsigninggroup.md)         | :heavy_minus_sign:                                                                         | Remote info for Docusign signing group.                                                    |
| `linearTeam`                                                                               | [components.LinearTeam](../../models/components/linearteam.md)                             | :heavy_minus_sign:                                                                         | Remote info for Linear team.                                                               |