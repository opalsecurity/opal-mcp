# ResourceRemoteInfo

Information that defines the remote resource. This replaces the deprecated remote_id and metadata fields.

## Example Usage

```typescript
import { ResourceRemoteInfo } from "opal-mcp/models/components";

let value: ResourceRemoteInfo = {
  databricksAccountServicePrincipal: {
    applicationId: "00000000-0000-0000-0000-000000000000",
    resourceId: "00000000-0000-0000-0000-000000000000",
  },
  azureSubscription: {
    resourceId: "/subscriptions/00000000-0000-0000-0000-000000000000",
  },
  azureResourceGroup: {
    resourceId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/my-rg",
  },
  azureManagementGroup: {
    resourceId: "/providers/Microsoft.Management/managementGroups/my-mg",
  },
  azureVirtualMachine: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Compute/virtualMachines/vm01",
  },
  azureStorageAccount: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01",
  },
  azureStorageContainer: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Storage/storageAccounts/sa01/blobServices/default/containers/c01",
  },
  azureSqlServer: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01",
  },
  azureSqlDatabase: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/servers/sqldev01/databases/db01",
  },
  azureSqlManagedInstance: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01",
  },
  azureSqlManagedDatabase: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.Sql/managedInstances/mi01/databases/midb01",
  },
  azureUserAssignedManagedIdentity: {
    resourceId:
      "/subscriptions/0000/resourceGroups/rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id01",
  },
  azureEnterpriseApp: {
    resourceId: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  },
  azureEntraIdRole: {
    resourceId: "11111111-2222-3333-4444-555555555555",
  },
  awsOrganizationalUnit: {
    parentId: "ou-1234",
    organizationalUnitId: "ou-1234",
  },
  awsAccount: {
    accountId: "234234234234",
    organizationalUnitId: "ou-1234",
  },
  awsPermissionSet: {
    arn: "arn:aws:sso:::permissionSet/asdf-32139302d201d32/ps-f03323201211e1b9",
    accountId: "234234234234",
  },
  awsIamRole: {
    arn: "arn:aws:iam::179308207300:role/MyRole",
    accountId: "234234234234",
  },
  awsEc2Instance: {
    instanceId: "i-13f1a1e2899f9e93a",
    region: "us-east-2",
    accountId: "234234234234",
  },
  awsRdsCluster: {
    clusterId: "demo-mysql-cluster",
    region: "us-east-2",
    resourceId: "cluster-AOO8V0XUCNU13XLZXQDQRSN0NQ",
    accountId: "234234234234",
    databaseName: "mydatabase",
    engine: "MYSQL",
  },
  awsRdsInstance: {
    instanceId: "demo-mysql-db",
    region: "us-east-2",
    resourceId: "db-AOO8V0XUCNU13XLZXQDQRSN0NQ",
    accountId: "234234234234",
  },
  awsEksCluster: {
    arn: "arn:aws:eks:us-east-2:234234234234:cluster/testcluster",
    accountId: "234234234234",
  },
  customConnector: {
    remoteResourceId: "01fa7402-01d8-103b-8deb-5f3a0ab7884",
    canHaveUsageEvents: false,
  },
  gcpOrganization: {
    organizationId: "organizations/898931321",
  },
  gcpBucket: {
    bucketId: "example-bucket-898931321",
  },
  gcpComputeInstance: {
    instanceId: "example-instance-898931321",
    projectId: "example-project-898931321",
    zone: "us-central1-a",
  },
  gcpBigQueryDataset: {
    projectId: "example-project-898931321",
    datasetId: "example-dataset-898931321",
  },
  gcpBigQueryTable: {
    projectId: "example-project-898931321",
    datasetId: "example-dataset-898931321",
    tableId: "example-table-898931321",
  },
  gcpFolder: {
    folderId: "folder/898931321",
  },
  gcpGkeCluster: {
    clusterName: "example-cluster-898931321",
  },
  gcpProject: {
    projectId: "example-project-898931321",
  },
  gcpSqlInstance: {
    instanceId: "example-sql-898931321",
    projectId: "example-project-898931321",
  },
  gcpServiceAccount: {
    email: "production@project.iam.gserviceaccount.com",
    serviceAccountId: "103561576023829460000",
    projectId: "example-project-898931321",
  },
  googleWorkspaceRole: {
    roleId: "google-workspace-role:01234567890123456",
  },
  githubRepo: {
    repoName: "Opal Security",
  },
  githubOrgRole: {
    roleId: "112233",
  },
  githubOrg: {
    orgName: "Opal Security",
  },
  gitlabProject: {
    projectId: "898931321",
  },
  oktaApp: {
    appId: "a9dfas0f678asdf67867",
  },
  oktaStandardRole: {
    roleType: "ORG_ADMIN",
  },
  oktaCustomRole: {
    roleId: "a9dfas0f678asdf67867",
  },
  snowflakeDatabase: {
    databaseName: "mydatabase",
  },
  snowflakeSchema: {
    databaseName: "mydatabase",
    schemaName: "mycatalogschema",
  },
  snowflakeTable: {
    databaseName: "mydatabase",
    schemaName: "mycatalogschema",
    tableName: "myitemstable",
  },
  ilevelAdvancedRole: {
    roleName: "IT User",
  },
  tailscaleSsh: {
    tagName: "admin",
  },
  pagerdutyRole: {
    roleName: "owner",
  },
  workdayRole: {
    roleId: "123abc456def",
  },
  salesforcePermissionSet: {
    permissionSetId: "0PS5Y090202wOV7WAM",
  },
  salesforceProfile: {
    profileId: "0PS5Y090202wOV7WAM",
    userLicenseId: "1005Y030081Qb5XJHS",
  },
  salesforceRole: {
    roleId: "0PS5Y090202wOV7WAM",
  },
  teleportRole: {
    roleName: "admin_role",
  },
  datastaxAstraRole: {
    roleId: "123e4567-e89b-12d3-a456-426614174000",
  },
  coupaRole: {
    roleId: "999",
  },
  cursorOrganization: {
    orgId: "123e4567-e89b-12d3-a456-426614174000",
  },
  openaiPlatformProject: {
    projectId: "proj_abc",
  },
  openaiPlatformServiceAccount: {
    projectId: "proj_abc",
    serviceAccountId: "svc_acct_abc",
  },
  anthropicWorkspace: {
    workspaceId: "ws-123456",
  },
  oracleFusionRole: {
    roleId: "123e4567-e89b-12d3-a456-426614174000",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `databricksAccountServicePrincipal`                                                                          | [components.DatabricksAccountServicePrincipal](../../models/components/databricksaccountserviceprincipal.md) | :heavy_minus_sign:                                                                                           | Remote info for Databricks account service principal.                                                        |
| `azureSubscription`                                                                                          | [components.AzureSubscription](../../models/components/azuresubscription.md)                                 | :heavy_minus_sign:                                                                                           | Remote info for Azure subscription.                                                                          |
| `azureResourceGroup`                                                                                         | [components.AzureResourceGroup](../../models/components/azureresourcegroup.md)                               | :heavy_minus_sign:                                                                                           | Remote info for Azure resource group.                                                                        |
| `azureManagementGroup`                                                                                       | [components.AzureManagementGroup](../../models/components/azuremanagementgroup.md)                           | :heavy_minus_sign:                                                                                           | Remote info for Azure management group.                                                                      |
| `azureVirtualMachine`                                                                                        | [components.AzureVirtualMachine](../../models/components/azurevirtualmachine.md)                             | :heavy_minus_sign:                                                                                           | Remote info for Azure virtual machine.                                                                       |
| `azureStorageAccount`                                                                                        | [components.AzureStorageAccount](../../models/components/azurestorageaccount.md)                             | :heavy_minus_sign:                                                                                           | Remote info for Azure storage account.                                                                       |
| `azureStorageContainer`                                                                                      | [components.AzureStorageContainer](../../models/components/azurestoragecontainer.md)                         | :heavy_minus_sign:                                                                                           | Remote info for Azure storage container.                                                                     |
| `azureSqlServer`                                                                                             | [components.AzureSqlServer](../../models/components/azuresqlserver.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for Azure SQL server.                                                                            |
| `azureSqlDatabase`                                                                                           | [components.AzureSqlDatabase](../../models/components/azuresqldatabase.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for Azure SQL database.                                                                          |
| `azureSqlManagedInstance`                                                                                    | [components.AzureSqlManagedInstance](../../models/components/azuresqlmanagedinstance.md)                     | :heavy_minus_sign:                                                                                           | Remote info for Azure SQL managed instance.                                                                  |
| `azureSqlManagedDatabase`                                                                                    | [components.AzureSqlManagedDatabase](../../models/components/azuresqlmanageddatabase.md)                     | :heavy_minus_sign:                                                                                           | Remote info for Azure SQL managed database.                                                                  |
| `azureUserAssignedManagedIdentity`                                                                           | [components.AzureUserAssignedManagedIdentity](../../models/components/azureuserassignedmanagedidentity.md)   | :heavy_minus_sign:                                                                                           | Remote info for Azure user assigned managed identity.                                                        |
| `azureEnterpriseApp`                                                                                         | [components.AzureEnterpriseApp](../../models/components/azureenterpriseapp.md)                               | :heavy_minus_sign:                                                                                           | Remote info for Azure Enterprise App.                                                                        |
| `azureEntraIdRole`                                                                                           | [components.AzureEntraIdRole](../../models/components/azureentraidrole.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for Azure Entra ID role.                                                                         |
| `awsOrganizationalUnit`                                                                                      | [components.AwsOrganizationalUnit](../../models/components/awsorganizationalunit.md)                         | :heavy_minus_sign:                                                                                           | Remote info for AWS organizational unit.                                                                     |
| `awsAccount`                                                                                                 | [components.AwsAccount](../../models/components/awsaccount.md)                                               | :heavy_minus_sign:                                                                                           | Remote info for AWS account.                                                                                 |
| `awsPermissionSet`                                                                                           | [components.AwsPermissionSet](../../models/components/awspermissionset.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for AWS Identity Center permission set.                                                          |
| `awsIamRole`                                                                                                 | [components.AwsIamRole](../../models/components/awsiamrole.md)                                               | :heavy_minus_sign:                                                                                           | Remote info for AWS IAM role.                                                                                |
| `awsEc2Instance`                                                                                             | [components.AwsEc2Instance](../../models/components/awsec2instance.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for AWS EC2 instance.                                                                            |
| `awsRdsCluster`                                                                                              | [components.AwsRdsCluster](../../models/components/awsrdscluster.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for AWS RDS cluster.                                                                             |
| `awsRdsInstance`                                                                                             | [components.AwsRdsInstance](../../models/components/awsrdsinstance.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for AWS RDS instance.                                                                            |
| `awsEksCluster`                                                                                              | [components.AwsEksCluster](../../models/components/awsekscluster.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for AWS EKS cluster.                                                                             |
| `customConnector`                                                                                            | [components.CustomConnector](../../models/components/customconnector.md)                                     | :heavy_minus_sign:                                                                                           | Remote info for a custom connector resource.                                                                 |
| `gcpOrganization`                                                                                            | [components.GcpOrganization](../../models/components/gcporganization.md)                                     | :heavy_minus_sign:                                                                                           | Remote info for GCP organization.                                                                            |
| `gcpBucket`                                                                                                  | [components.GcpBucket](../../models/components/gcpbucket.md)                                                 | :heavy_minus_sign:                                                                                           | Remote info for GCP bucket.                                                                                  |
| `gcpComputeInstance`                                                                                         | [components.GcpComputeInstance](../../models/components/gcpcomputeinstance.md)                               | :heavy_minus_sign:                                                                                           | Remote info for GCP compute instance.                                                                        |
| `gcpBigQueryDataset`                                                                                         | [components.GcpBigQueryDataset](../../models/components/gcpbigquerydataset.md)                               | :heavy_minus_sign:                                                                                           | Remote info for GCP BigQuery Dataset.                                                                        |
| `gcpBigQueryTable`                                                                                           | [components.GcpBigQueryTable](../../models/components/gcpbigquerytable.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for GCP BigQuery Table.                                                                          |
| `gcpFolder`                                                                                                  | [components.GcpFolder](../../models/components/gcpfolder.md)                                                 | :heavy_minus_sign:                                                                                           | Remote info for GCP folder.                                                                                  |
| `gcpGkeCluster`                                                                                              | [components.GcpGkeCluster](../../models/components/gcpgkecluster.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for GCP GKE cluster.                                                                             |
| `gcpProject`                                                                                                 | [components.GcpProject](../../models/components/gcpproject.md)                                               | :heavy_minus_sign:                                                                                           | Remote info for GCP project.                                                                                 |
| `gcpSqlInstance`                                                                                             | [components.GcpSqlInstance](../../models/components/gcpsqlinstance.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for GCP SQL instance.                                                                            |
| `gcpServiceAccount`                                                                                          | [components.GcpServiceAccount](../../models/components/gcpserviceaccount.md)                                 | :heavy_minus_sign:                                                                                           | Remote info for a GCP service account.                                                                       |
| `googleWorkspaceRole`                                                                                        | [components.GoogleWorkspaceRole](../../models/components/googleworkspacerole.md)                             | :heavy_minus_sign:                                                                                           | Remote info for GCP workspace role.                                                                          |
| `githubRepo`                                                                                                 | [components.GithubRepo](../../models/components/githubrepo.md)                                               | :heavy_minus_sign:                                                                                           | Remote info for GitHub repository.                                                                           |
| `githubOrgRole`                                                                                              | [components.GithubOrgRole](../../models/components/githuborgrole.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for GitHub organization role.                                                                    |
| `githubOrg`                                                                                                  | [components.GithubOrg](../../models/components/githuborg.md)                                                 | :heavy_minus_sign:                                                                                           | Remote info for GitHub organization.                                                                         |
| `gitlabProject`                                                                                              | [components.GitlabProject](../../models/components/gitlabproject.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for Gitlab project.                                                                              |
| `oktaApp`                                                                                                    | [components.OktaApp](../../models/components/oktaapp.md)                                                     | :heavy_minus_sign:                                                                                           | Remote info for Okta directory app.                                                                          |
| `oktaStandardRole`                                                                                           | [components.OktaStandardRole](../../models/components/oktastandardrole.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for Okta directory standard role.                                                                |
| `oktaCustomRole`                                                                                             | [components.OktaCustomRole](../../models/components/oktacustomrole.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for Okta directory custom role.                                                                  |
| `snowflakeDatabase`                                                                                          | [components.SnowflakeDatabase](../../models/components/snowflakedatabase.md)                                 | :heavy_minus_sign:                                                                                           | Remote info for Snowflake database.                                                                          |
| `snowflakeSchema`                                                                                            | [components.SnowflakeSchema](../../models/components/snowflakeschema.md)                                     | :heavy_minus_sign:                                                                                           | Remote info for Snowflake schema.                                                                            |
| `snowflakeTable`                                                                                             | [components.SnowflakeTable](../../models/components/snowflaketable.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for Snowflake table.                                                                             |
| `ilevelAdvancedRole`                                                                                         | [components.IlevelAdvancedRole](../../models/components/ileveladvancedrole.md)                               | :heavy_minus_sign:                                                                                           | Remote info for iLevel Advanced role.                                                                        |
| `tailscaleSsh`                                                                                               | [components.TailscaleSsh](../../models/components/tailscalessh.md)                                           | :heavy_minus_sign:                                                                                           | Remote info for Tailscale SSH tag.                                                                           |
| `pagerdutyRole`                                                                                              | [components.PagerdutyRole](../../models/components/pagerdutyrole.md)                                         | :heavy_minus_sign:                                                                                           | Remote info for Pagerduty role.                                                                              |
| `workdayRole`                                                                                                | [components.WorkdayRole](../../models/components/workdayrole.md)                                             | :heavy_minus_sign:                                                                                           | Remote info for Workday role.                                                                                |
| `salesforcePermissionSet`                                                                                    | [components.SalesforcePermissionSet](../../models/components/salesforcepermissionset.md)                     | :heavy_minus_sign:                                                                                           | Remote info for Salesforce permission set.                                                                   |
| `salesforceProfile`                                                                                          | [components.SalesforceProfile](../../models/components/salesforceprofile.md)                                 | :heavy_minus_sign:                                                                                           | Remote info for Salesforce profile.                                                                          |
| `salesforceRole`                                                                                             | [components.SalesforceRole](../../models/components/salesforcerole.md)                                       | :heavy_minus_sign:                                                                                           | Remote info for Salesforce role.                                                                             |
| `teleportRole`                                                                                               | [components.TeleportRole](../../models/components/teleportrole.md)                                           | :heavy_minus_sign:                                                                                           | Remote info for Teleport role.                                                                               |
| `datastaxAstraRole`                                                                                          | [components.DatastaxAstraRole](../../models/components/datastaxastrarole.md)                                 | :heavy_minus_sign:                                                                                           | Remote info for an Astra role.                                                                               |
| `coupaRole`                                                                                                  | [components.CoupaRole](../../models/components/couparole.md)                                                 | :heavy_minus_sign:                                                                                           | Remote info for Coupa role.                                                                                  |
| `cursorOrganization`                                                                                         | [components.CursorOrganization](../../models/components/cursororganization.md)                               | :heavy_minus_sign:                                                                                           | Remote info for a Cursor organization.                                                                       |
| `openaiPlatformProject`                                                                                      | [components.OpenaiPlatformProject](../../models/components/openaiplatformproject.md)                         | :heavy_minus_sign:                                                                                           | Remote info for OpenAI Platform project.                                                                     |
| `openaiPlatformServiceAccount`                                                                               | [components.OpenaiPlatformServiceAccount](../../models/components/openaiplatformserviceaccount.md)           | :heavy_minus_sign:                                                                                           | Remote info for OpenAI Platform service account.                                                             |
| `anthropicWorkspace`                                                                                         | [components.AnthropicWorkspace](../../models/components/anthropicworkspace.md)                               | :heavy_minus_sign:                                                                                           | Remote info for Anthropic workspace.                                                                         |
| `oracleFusionRole`                                                                                           | [components.OracleFusionRole](../../models/components/oraclefusionrole.md)                                   | :heavy_minus_sign:                                                                                           | Remote info for Oracle Fusion role.                                                                          |