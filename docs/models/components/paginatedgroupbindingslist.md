# PaginatedGroupBindingsList

## Example Usage

```typescript
import { PaginatedGroupBindingsList } from "opal-mcp/models/components";

let value: PaginatedGroupBindingsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWtJ",
  results: [
    {
      groupBindingId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      createdById: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      createdAt: new Date("2022-01-23T04:56:07Z"),
      sourceGroupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
      groups: [
        {
          groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
          groupType: "OKTA_GROUP",
        },
        {
          groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
          groupType: "AWS_SSO_GROUP",
        },
      ],
    },
    {
      groupBindingId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      createdById: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      createdAt: new Date("2022-01-23T04:56:07Z"),
      sourceGroupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
      groups: [
        {
          groupId: "99d0b81d-14be-4cf6-bd27-348b4af1d11b",
          groupType: "AWS_SSO_GROUP",
        },
        {
          groupId: "f454d283-ca87-4a8a-bdbb-df212eca5353",
          groupType: "OKTA_GROUP",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWtJ                                                               |
| `results`                                                                      | [components.GroupBinding](../../models/components/groupbinding.md)[]           | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |