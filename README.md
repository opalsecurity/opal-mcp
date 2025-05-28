# opal-mcp

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *opal-mcp* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=opal-mcp&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Opal API: The Opal API is a RESTful API that allows you to interact with the Opal Security platform programmatically.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [opal-mcp](#opal-mcp)
  * [Model Context Protocol (MCP) Server](#model-context-protocol-mcp-server)
    * [Generating an API Key](#generating-an-api-key)
    * [Environment Variables](#environment-variables)
    * [Instillation](#instillation)
    * [Troubleshooting MCP](#troubleshooting-mcp)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
  * [Contributing](#contributing)

<!-- End Table of Contents [toc] -->

<!-- Start Running MCP [run-mcp] -->


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

⚠️ **WARNING**: Node.js v20 or greater is required to run the MCP server from npm.

### Generating an API Key

To authenticate with the Opal API, you'll need to generate an API token:

1. Log in to the Opal dashboard as an Admin
2. Navigate to the **Settings** page
3. Select the API Tokens section
4. Click "Generate new token"
5. Choose the appropriate access level:
   - **Read-only**: For applications that only need to view resources
   - **Full-access**: For applications that need to create or modify resources
6. Set an expiration date (optional but recommended for security)
7. Add a descriptive label to identify the token's purpose
8. Save the token securely - it will only be displayed once

If a token is compromised, you can revoke it at any time from the Opal Admin page.

For more information, see the [Opal API Authentication Documentation](https://docs.opal.dev/reference/authentication).

### Environment Variables

The following environment variables can be used to configure the SDK and MCP server:

| Variable Name | Description | Default |
|--------------|-------------|---------|
| `API_TOKEN` | The API token for MCP server authentication | Required for MCP server |
| `PORT` | The port number for the MCP server | `32000` |
| `SERVER_URL` | The base URL for the Opal API | `https://api.opal.dev/v1` |
| `LOG_LEVEL` | Logging level for the MCP server | `info` |

### Instillation
The library can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add opal-mcp
```

### PNPM

```bash
pnpm add opal-mcp
```

### Bun

```bash
bun add opal-mcp
```

### Yarn

```bash
yarn add opal-mcp zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "OpalMcp": {
      "command": "npx",
      "args": [
        "-y", "--package", "opal-mcp",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "OpalMcp": {
      "command": "npx",
      "args": [
        "-y", "--package", "opal-mcp",
        "--",
        "mcp", "start",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/opalsecurity/opal-mcp/releases/download/v0.0.6/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package opal-mcp -- mcp start --help
```

### Running the MCP Server with Docker

The SDK includes a Dockerfile and docker-compose.yaml for easy containerization and deployment.

#### Using docker-compose

1. Create a `.env` file with your configuration:
   ```
   BEARER_AUTH=your_api_key_here
   PORT=32000
   SERVER_URL=https://api.opal.dev/v1
   LOG_LEVEL=info
   ```

2. Run the server using docker-compose:
   ```bash
   docker-compose up -d
   ```

3. Configure your MCP client to connect to the server by adding the following to your configuration file:
   ```json
   {
     "mcpServers": {
       "opal-mcp": {
         "url": "http://localhost:32000/sse",
         "env": {
           "API_KEY": "your_api_key_here"
         }
       }
     }
   }
   ```

#### Building and running manually

You can also build and run the Docker image directly:

```bash
# Build the image
docker build -t opal-mcp-server .

# Run the container
docker run -p 32000:32000 -e BEARER_AUTH=your_api_key_here opal-mcp-server
```

### Troubleshooting MCP

Here are some common issues you might encounter when using the MCP server and how to resolve them:

#### Connection Issues
- **Server Not Starting**
  - Verify Node.js version is v20 or greater
  - Check if port 32000 is already in use
  - Ensure you have proper permissions to run the server
  - Try running with `LOG_LEVEL=debug` for more detailed output

- **Authentication Failures**
  - Verify your API token is valid and not expired
  - Check if the token has the correct permissions
  - Ensure the token is properly set in the environment variables
  - Confirm the `SERVER_URL` points to the correct environment

#### Performance Issues
- **Slow Response Times**
  - Check network connectivity to the Opal API
  - Be aware of the token limit for the model you are using and the number of paginated results
  - **Unlikely**. Verify you're not hitting rate limits [Opal API Rate Limits](https://docs.opal.dev/reference/opal-api-rate-limits)

#### Integration Issues
- **Cursor/Claude Not Connecting**
  - Verify your `mcp.json` configuration is correct
  - Ensure the MCP server is running before starting Cursor/Claude
  - Check if the bearer auth token is properly formatted
  - Confirm the SSE endpoint URL is accessible
  - Ensure only one Cursor/Claude window is open

#### Common Error Messages
- `Error: listen EADDRINUSE: address already in use :::32000`
  - Another process is using port 32000
  - Either stop the other process or change the PORT environment variable

- `Error: Invalid bearer auth token`
  - The provided API token is invalid or malformed
  - Generate a new token from the Opal dashboard

- `Error: Node.js version must be >= 20.0.0`
  - Update your Node.js installation to version 20 or greater

For additional help, you can:
- Set `LOG_LEVEL=debug` for more detailed logs
- Check the [Opal API Documentation](https://docs.opal.dev)
- File an issue on the GitHub repository
<!-- End  Running MCP [run-mcp] -->

<!-- No SDK Installation [installation] -->

<!-- No Requirements [requirements] -->

<!-- No SDK Example Usage [usage] -->

<!-- No Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accessRules](docs/sdks/accessrules/README.md)

* [createAccessRule](docs/sdks/accessrules/README.md#createaccessrule) - Creates a new access rule config for the given group_id.
* [getAccessRule](docs/sdks/accessrules/README.md#getaccessrule) - Returns a list of access rule config given the group_id of the access rule.
* [updateAccessRule](docs/sdks/accessrules/README.md#updateaccessrule) - Updates the access rule config for the given group_id.

### [apps](docs/sdks/apps/README.md)

* [getApps](docs/sdks/apps/README.md#getapps) - Returns a list of `App` objects.
* [getApp](docs/sdks/apps/README.md#getapp) - Returns an `App` object.
* [getSyncErrors](docs/sdks/apps/README.md#getsyncerrors) - Returns a list of recent sync errors that have occurred since the last successful sync.

### [bundles](docs/sdks/bundles/README.md)

* [getBundles](docs/sdks/bundles/README.md#getbundles) - Returns a list of `Bundle` objects.
* [createBundle](docs/sdks/bundles/README.md#createbundle) - Creates a bundle.
* [getBundle](docs/sdks/bundles/README.md#getbundle) - Returns a `Bundle` object.
* [deleteBundle](docs/sdks/bundles/README.md#deletebundle) - Deletes a bundle.
* [updateBundle](docs/sdks/bundles/README.md#updatebundle) - Updates a bundle.
* [getBundleResources](docs/sdks/bundles/README.md#getbundleresources) - Returns a list of `Resource` objects in a given bundle.
* [addBundleResource](docs/sdks/bundles/README.md#addbundleresource) - Adds a resource to a bundle.
* [removeBundleResource](docs/sdks/bundles/README.md#removebundleresource) - Removes a resource from a bundle.
* [getBundleGroups](docs/sdks/bundles/README.md#getbundlegroups) - Returns a list of `Group` objects in a given bundle.
* [addBundleGroup](docs/sdks/bundles/README.md#addbundlegroup) - Adds a group to a bundle.
* [removeBundleGroup](docs/sdks/bundles/README.md#removebundlegroup) - Removes a group from a bundle.
* [getBundleVisibility](docs/sdks/bundles/README.md#getbundlevisibility) - Gets the visibility of the bundle.
* [setBundleVisibility](docs/sdks/bundles/README.md#setbundlevisibility) - Sets the visibility of the bundle.

### [configurationTemplates](docs/sdks/configurationtemplates/README.md)

* [getConfigurationTemplates](docs/sdks/configurationtemplates/README.md#getconfigurationtemplates) - Returns a list of `ConfigurationTemplate` objects.
* [createConfigurationTemplate](docs/sdks/configurationtemplates/README.md#createconfigurationtemplate) - Creates a configuration template.
* [updateConfigurationTemplate](docs/sdks/configurationtemplates/README.md#updateconfigurationtemplate) - Update a configuration template.
* [deleteConfigurationTemplate](docs/sdks/configurationtemplates/README.md#deleteconfigurationtemplate) - Deletes a configuration template.

### [events](docs/sdks/events/README.md)

* [events](docs/sdks/events/README.md#events) - Returns a list of `Event` objects.

### [groupBindings](docs/sdks/groupbindings/README.md)

* [getGroupBindings](docs/sdks/groupbindings/README.md#getgroupbindings) - Returns a list of `GroupBinding` objects.
* [createGroupBinding](docs/sdks/groupbindings/README.md#creategroupbinding) - Creates a group binding.
* [updateGroupBindings](docs/sdks/groupbindings/README.md#updategroupbindings) - Bulk updates a list of group bindings.
* [getGroupBinding](docs/sdks/groupbindings/README.md#getgroupbinding) - Returns a `GroupBinding` object.
* [deleteGroupBinding](docs/sdks/groupbindings/README.md#deletegroupbinding) - Deletes a group binding.

### [groups](docs/sdks/groups/README.md)

* [getGroups](docs/sdks/groups/README.md#getgroups) - Returns a list of groups for your organization.
* [updateGroups](docs/sdks/groups/README.md#updategroups) - Bulk updates a list of groups.
* [createGroup](docs/sdks/groups/README.md#creategroup) - Creates an Opal group or [imports a remote group](https://docs.opal.dev/reference/end-system-objects).
* [getGroup](docs/sdks/groups/README.md#getgroup) - Returns a `Group` object.
* [deleteGroup](docs/sdks/groups/README.md#deletegroup) - Deletes a group.
* [getGroupMessageChannels](docs/sdks/groups/README.md#getgroupmessagechannels) - Gets the list of audit and reviewer message channels attached to a group.
* [setGroupMessageChannels](docs/sdks/groups/README.md#setgroupmessagechannels) - Sets the list of audit message channels attached to a group.
* [getGroupOnCallSchedules](docs/sdks/groups/README.md#getgrouponcallschedules) - Gets the list of on call schedules attached to a group.
* [setGroupOnCallSchedules](docs/sdks/groups/README.md#setgrouponcallschedules) - Sets the list of on call schedules attached to a group.
* [getGroupResources](docs/sdks/groups/README.md#getgroupresources) - Gets the list of resources that the group gives access to.
* [setGroupResources](docs/sdks/groups/README.md#setgroupresources) - Sets the list of resources that the group gives access to.
* [getGroupContainingGroups](docs/sdks/groups/README.md#getgroupcontaininggroups) - Gets the list of groups that the group gives access to.
* [addGroupContainingGroup](docs/sdks/groups/README.md#addgroupcontaininggroup) - Creates a new containing group.
* [getGroupContainingGroup](docs/sdks/groups/README.md#getgroupcontaininggroup) - Gets a specific containing group for a group.
* [removeGroupContainingGroup](docs/sdks/groups/README.md#removegroupcontaininggroup) - Removes a containing group from a group.
* [addGroupResource](docs/sdks/groups/README.md#addgroupresource) - Adds a resource to a group.
* [getGroupVisibility](docs/sdks/groups/README.md#getgroupvisibility) - Gets the visibility of this group.
* [setGroupVisibility](docs/sdks/groups/README.md#setgroupvisibility) - Sets the visibility of this group.
* [~~getGroupReviewers~~](docs/sdks/groups/README.md#getgroupreviewers) - Gets the list of owner IDs of the reviewers for a group. :warning: **Deprecated**
* [~~setGroupReviewers~~](docs/sdks/groups/README.md#setgroupreviewers) - Sets the list of reviewers for a group. :warning: **Deprecated**
* [~~getGroupReviewerStages~~](docs/sdks/groups/README.md#getgroupreviewerstages) - Gets the list of reviewer stages for a group. :warning: **Deprecated**
* [~~setGroupReviewerStages~~](docs/sdks/groups/README.md#setgroupreviewerstages) - Sets the list of reviewer stages for a group. :warning: **Deprecated**
* [getGroupTags](docs/sdks/groups/README.md#getgrouptags) - Returns all tags applied to the group.
* [getGroupUsers](docs/sdks/groups/README.md#getgroupusers) - Gets the list of users for this group.
* [updateGroupUser](docs/sdks/groups/README.md#updategroupuser) - Updates a user's access level or duration in this group.
* [addGroupUser](docs/sdks/groups/README.md#addgroupuser) - Adds a user to this group.
* [deleteGroupUser](docs/sdks/groups/README.md#deletegroupuser) - Removes a user's access from this group.

### [idpGroupMappings](docs/sdks/idpgroupmappings/README.md)

* [getIdpGroupMappings](docs/sdks/idpgroupmappings/README.md#getidpgroupmappings) - Returns the configured set of available `IdpGroupMapping` objects for an Okta app.
* [updateIdpGroupMappings](docs/sdks/idpgroupmappings/README.md#updateidpgroupmappings) - Updates the list of available `IdpGroupMapping` objects for an Okta app.
* [deleteIdpGroupMappings](docs/sdks/idpgroupmappings/README.md#deleteidpgroupmappings) - Deletes an `IdpGroupMapping` object.

### [messageChannels](docs/sdks/messagechannels/README.md)

* [getMessageChannels](docs/sdks/messagechannels/README.md#getmessagechannels) - Returns a list of `MessageChannel` objects.
* [createMessageChannel](docs/sdks/messagechannels/README.md#createmessagechannel) - Creates a `MessageChannel` objects.
* [getMessageChannel](docs/sdks/messagechannels/README.md#getmessagechannel) - Gets a `MessageChannel` object.

### [nonHumanIdentities](docs/sdks/nonhumanidentities/README.md)

* [getNhis](docs/sdks/nonhumanidentities/README.md#getnhis) - Returns a list of non-human identities for your organization.

### [onCallSchedules](docs/sdks/oncallschedules/README.md)

* [getOnCallSchedules](docs/sdks/oncallschedules/README.md#getoncallschedules) - Returns a list of `OnCallSchedule` objects.
* [createOnCallSchedule](docs/sdks/oncallschedules/README.md#createoncallschedule) - Creates a `OnCallSchedule` objects.
* [getOnCallSchedule](docs/sdks/oncallschedules/README.md#getoncallschedule) - Gets a `OnCallSchedule` object.


### [owners](docs/sdks/owners/README.md)

* [getOwners](docs/sdks/owners/README.md#getowners) - Returns a list of `Owner` objects.
* [createOwner](docs/sdks/owners/README.md#createowner) - Creates an owner.
* [updateOwners](docs/sdks/owners/README.md#updateowners) - Bulk updates a list of owners.
* [getOwner](docs/sdks/owners/README.md#getowner) - Returns an `Owner` object.
* [deleteOwner](docs/sdks/owners/README.md#deleteowner) - Deletes an owner.
* [getOwnerFromName](docs/sdks/owners/README.md#getownerfromname) - Returns an `Owner` object. Does not support owners with `/` in their name, use /owners?name=... instead.
* [getOwnerUsers](docs/sdks/owners/README.md#getownerusers) - Gets the list of users for this owner, in escalation priority order if applicable.
* [setOwnerUsers](docs/sdks/owners/README.md#setownerusers) - Sets the list of users for this owner. If escalation is enabled, the order of this list is the escalation priority order of the users. If the owner has a source group, adding or removing users from this list won't be possible.

### [requests](docs/sdks/requests/README.md)

* [getRequests](docs/sdks/requests/README.md#getrequests) - Returns a list of requests for your organization that is visible by the admin.
* [createRequest](docs/sdks/requests/README.md#createrequest) - Create an access request
* [getRequestsRelay](docs/sdks/requests/README.md#getrequestsrelay) - Returns a paginated list of requests using Relay-style cursor pagination.
* [approveRequest](docs/sdks/requests/README.md#approverequest) - Approve an access request

### [resources](docs/sdks/resources/README.md)

* [getResources](docs/sdks/resources/README.md#getresources) - Returns a list of resources for your organization.
* [updateResources](docs/sdks/resources/README.md#updateresources) - Bulk updates a list of resources.
* [createResource](docs/sdks/resources/README.md#createresource) - Creates a resource. See [here](https://docs.opal.dev/reference/end-system-objects) for details about importing resources.
* [getResource](docs/sdks/resources/README.md#getresource) - Retrieves a resource.
* [deleteResource](docs/sdks/resources/README.md#deleteresource) - Deletes a resource.
* [getResourceMessageChannels](docs/sdks/resources/README.md#getresourcemessagechannels) - Gets the list of audit message channels attached to a resource.
* [setResourceMessageChannels](docs/sdks/resources/README.md#setresourcemessagechannels) - Sets the list of audit message channels attached to a resource.
* [getResourceVisibility](docs/sdks/resources/README.md#getresourcevisibility) - Gets the visibility of this resource.
* [setResourceVisibility](docs/sdks/resources/README.md#setresourcevisibility) - Sets the visibility of this resource.
* [getResourceReviewers](docs/sdks/resources/README.md#getresourcereviewers) - Gets the list of owner IDs of the reviewers for a resource.
* [setResourceReviewers](docs/sdks/resources/README.md#setresourcereviewers) - Sets the list of reviewers for a resource.
* [getResourceReviewerStages](docs/sdks/resources/README.md#getresourcereviewerstages) - Gets the list reviewer stages for a resource.
* [setResourceReviewerStages](docs/sdks/resources/README.md#setresourcereviewerstages) - Sets the list of reviewer stages for a resource.
* [getResourceNhis](docs/sdks/resources/README.md#getresourcenhis) - Gets the list of non-human identities with access to this resource.
* [getResourceUsers](docs/sdks/resources/README.md#getresourceusers) - Gets the list of users for this resource.
* [addResourceNhi](docs/sdks/resources/README.md#addresourcenhi) - Gives a non-human identity access to this resource.
* [deleteResourceNhi](docs/sdks/resources/README.md#deleteresourcenhi) - Removes a non-human identity's direct access from this resource.
* [addResourceUser](docs/sdks/resources/README.md#addresourceuser) - Adds a user to this resource.
* [updateResourceUser](docs/sdks/resources/README.md#updateresourceuser) - Updates a user's access level or duration on this resource.
* [deleteResourceUser](docs/sdks/resources/README.md#deleteresourceuser) - Removes a user's direct access from this resource.
* [getResourceUser](docs/sdks/resources/README.md#getresourceuser) - Returns information about a specific user's access to a resource.
* [~~resourceUserAccessStatusRetrieve~~](docs/sdks/resources/README.md#resourceuseraccessstatusretrieve) - Get user's access status to a resource. :warning: **Deprecated**
* [getResourceTags](docs/sdks/resources/README.md#getresourcetags) - Returns all tags applied to the resource.

### [sessions](docs/sdks/sessions/README.md)

* [sessions](docs/sdks/sessions/README.md#sessions) - Returns a list of `Session` objects.

### [tags](docs/sdks/tags/README.md)

* [getTagByID](docs/sdks/tags/README.md#gettagbyid) - UNSTABLE. May be removed at any time. Gets a tag with the given id.
* [deleteTagByID](docs/sdks/tags/README.md#deletetagbyid) - UNSTABLE. May be removed at any time. Deletes a tag with the given id.
* [getTag](docs/sdks/tags/README.md#gettag) - Gets a tag with the given key and value.
* [createTag](docs/sdks/tags/README.md#createtag) - Creates a tag with the given key and value.
* [getTags](docs/sdks/tags/README.md#gettags) - Returns a list of tags created by your organization.
* [addUserTag](docs/sdks/tags/README.md#addusertag) - Applies a tag to a user.
* [removeUserTag](docs/sdks/tags/README.md#removeusertag) - Removes a tag from a user.
* [addGroupTag](docs/sdks/tags/README.md#addgrouptag) - Applies a tag to a group.
* [removeGroupTag](docs/sdks/tags/README.md#removegrouptag) - Removes a tag from a group.
* [addResourceTag](docs/sdks/tags/README.md#addresourcetag) - Applies a tag to a resource.
* [removeResourceTag](docs/sdks/tags/README.md#removeresourcetag) - Removes a tag from a resource.

### [uars](docs/sdks/uars/README.md)

* [getUARs](docs/sdks/uars/README.md#getuars) - Returns a list of `UAR` objects.
* [createUar](docs/sdks/uars/README.md#createuar) - Starts a User Access Review.
* [getUar](docs/sdks/uars/README.md#getuar) - Retrieves a specific UAR.

### [users](docs/sdks/users/README.md)

* [user](docs/sdks/users/README.md#user) - Retrieves detailed user information from Opal. This endpoint is designed to fetch user details by
either user ID (UUID) or email address. The endpoint follows a strict precedence rule where
user_id takes priority over email if both are provided.

Key Implementation Notes:
- Exactly one identifier (user_id OR email) must be provided
- Returns a complete User object with all associated metadata
- Suitable for user verification and profile data retrieval
- Recommended for MCP user synchronization workflows

Authentication:
- Requires valid API authentication
- Respects standard Opal authorization rules

* [getUsers](docs/sdks/users/README.md#getusers) - Returns a list of users for your organization.
* [getUserTags](docs/sdks/users/README.md#getusertags) - Returns all tags applied to the user.

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- No Standalone functions [standalone-funcs] -->

<!-- No Retries [retries] -->

<!-- No Error Handling [errors] -->

<!-- No Server Selection [server] -->

<!-- No Custom HTTP Client [http-client] -->

<!-- No Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=opal-mcp&utm_campaign=typescript)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.
