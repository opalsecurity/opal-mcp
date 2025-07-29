# ResourceRemoteInfo

Information that defines the remote resource. This replaces the deprecated remote_id and metadata fields.

## Example Usage

```typescript
import { ResourceRemoteInfo } from "opal-mcp/models/components";

let value: ResourceRemoteInfo = {
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
  pagerdutyRole: {
    roleName: "owner",
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `awsOrganizationalUnit`                                                                  | [components.AwsOrganizationalUnit](../../models/components/awsorganizationalunit.md)     | :heavy_minus_sign:                                                                       | Remote info for AWS organizational unit.                                                 |
| `awsAccount`                                                                             | [components.AwsAccount](../../models/components/awsaccount.md)                           | :heavy_minus_sign:                                                                       | Remote info for AWS account.                                                             |
| `awsPermissionSet`                                                                       | [components.AwsPermissionSet](../../models/components/awspermissionset.md)               | :heavy_minus_sign:                                                                       | Remote info for AWS Identity Center permission set.                                      |
| `awsIamRole`                                                                             | [components.AwsIamRole](../../models/components/awsiamrole.md)                           | :heavy_minus_sign:                                                                       | Remote info for AWS IAM role.                                                            |
| `awsEc2Instance`                                                                         | [components.AwsEc2Instance](../../models/components/awsec2instance.md)                   | :heavy_minus_sign:                                                                       | Remote info for AWS EC2 instance.                                                        |
| `awsRdsInstance`                                                                         | [components.AwsRdsInstance](../../models/components/awsrdsinstance.md)                   | :heavy_minus_sign:                                                                       | Remote info for AWS RDS instance.                                                        |
| `awsEksCluster`                                                                          | [components.AwsEksCluster](../../models/components/awsekscluster.md)                     | :heavy_minus_sign:                                                                       | Remote info for AWS EKS cluster.                                                         |
| `customConnector`                                                                        | [components.CustomConnector](../../models/components/customconnector.md)                 | :heavy_minus_sign:                                                                       | Remote info for a custom connector resource.                                             |
| `gcpOrganization`                                                                        | [components.GcpOrganization](../../models/components/gcporganization.md)                 | :heavy_minus_sign:                                                                       | Remote info for GCP organization.                                                        |
| `gcpBucket`                                                                              | [components.GcpBucket](../../models/components/gcpbucket.md)                             | :heavy_minus_sign:                                                                       | Remote info for GCP bucket.                                                              |
| `gcpComputeInstance`                                                                     | [components.GcpComputeInstance](../../models/components/gcpcomputeinstance.md)           | :heavy_minus_sign:                                                                       | Remote info for GCP compute instance.                                                    |
| `gcpBigQueryDataset`                                                                     | [components.GcpBigQueryDataset](../../models/components/gcpbigquerydataset.md)           | :heavy_minus_sign:                                                                       | Remote info for GCP BigQuery Dataset.                                                    |
| `gcpBigQueryTable`                                                                       | [components.GcpBigQueryTable](../../models/components/gcpbigquerytable.md)               | :heavy_minus_sign:                                                                       | Remote info for GCP BigQuery Table.                                                      |
| `gcpFolder`                                                                              | [components.GcpFolder](../../models/components/gcpfolder.md)                             | :heavy_minus_sign:                                                                       | Remote info for GCP folder.                                                              |
| `gcpGkeCluster`                                                                          | [components.GcpGkeCluster](../../models/components/gcpgkecluster.md)                     | :heavy_minus_sign:                                                                       | Remote info for GCP GKE cluster.                                                         |
| `gcpProject`                                                                             | [components.GcpProject](../../models/components/gcpproject.md)                           | :heavy_minus_sign:                                                                       | Remote info for GCP project.                                                             |
| `gcpSqlInstance`                                                                         | [components.GcpSqlInstance](../../models/components/gcpsqlinstance.md)                   | :heavy_minus_sign:                                                                       | Remote info for GCP SQL instance.                                                        |
| `gcpServiceAccount`                                                                      | [components.GcpServiceAccount](../../models/components/gcpserviceaccount.md)             | :heavy_minus_sign:                                                                       | Remote info for a GCP service account.                                                   |
| `googleWorkspaceRole`                                                                    | [components.GoogleWorkspaceRole](../../models/components/googleworkspacerole.md)         | :heavy_minus_sign:                                                                       | Remote info for GCP workspace role.                                                      |
| `githubRepo`                                                                             | [components.GithubRepo](../../models/components/githubrepo.md)                           | :heavy_minus_sign:                                                                       | Remote info for GitHub repository.                                                       |
| `gitlabProject`                                                                          | [components.GitlabProject](../../models/components/gitlabproject.md)                     | :heavy_minus_sign:                                                                       | Remote info for Gitlab project.                                                          |
| `oktaApp`                                                                                | [components.OktaApp](../../models/components/oktaapp.md)                                 | :heavy_minus_sign:                                                                       | Remote info for Okta directory app.                                                      |
| `oktaStandardRole`                                                                       | [components.OktaStandardRole](../../models/components/oktastandardrole.md)               | :heavy_minus_sign:                                                                       | Remote info for Okta directory standard role.                                            |
| `oktaCustomRole`                                                                         | [components.OktaCustomRole](../../models/components/oktacustomrole.md)                   | :heavy_minus_sign:                                                                       | Remote info for Okta directory custom role.                                              |
| `pagerdutyRole`                                                                          | [components.PagerdutyRole](../../models/components/pagerdutyrole.md)                     | :heavy_minus_sign:                                                                       | Remote info for Pagerduty role.                                                          |
| `salesforcePermissionSet`                                                                | [components.SalesforcePermissionSet](../../models/components/salesforcepermissionset.md) | :heavy_minus_sign:                                                                       | Remote info for Salesforce permission set.                                               |
| `salesforceProfile`                                                                      | [components.SalesforceProfile](../../models/components/salesforceprofile.md)             | :heavy_minus_sign:                                                                       | Remote info for Salesforce profile.                                                      |
| `salesforceRole`                                                                         | [components.SalesforceRole](../../models/components/salesforcerole.md)                   | :heavy_minus_sign:                                                                       | Remote info for Salesforce role.                                                         |
| `teleportRole`                                                                           | [components.TeleportRole](../../models/components/teleportrole.md)                       | :heavy_minus_sign:                                                                       | Remote info for Teleport role.                                                           |