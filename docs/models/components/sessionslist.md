# SessionsList

## Example Usage

```typescript
import { SessionsList } from "opal-mcp/models/components";

let value: SessionsList = {
  next: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
  previous: "cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ",
  results: [
    {
      connectionId: "h0z968412-2451-4bbd-42h4-057l715d917m",
      userId: "29827fb8-f2dd-4e80-9576-28e31e9934ac",
      resourceId: "1b978423-db0a-4037-a4cf-f79c60cb67b3",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
      expirationDate: new Date("2022-01-23T04:56:07Z"),
    },
    {
      connectionId: "6e6b5597-bd36-4f4c-a629-01e3fa791932",
      userId: "b031c922-b84f-4424-9f4f-c49c05871bfe",
      resourceId: "77eb1ab7-2c27-4fc4-afdb-137e1265cddd",
      accessLevel: {
        accessLevelName: "AdminRole",
        accessLevelRemoteId:
          "arn:aws:iam::590304332660:role/AdministratorAccess",
      },
      expirationDate: new Date("2022-03-12T07:22:18Z"),
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor with which to continue pagination if additional result pages exist. | cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw                       |
| `previous`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | The cursor used to obtain the current result page.                             | cj1sZXdwd2VycWVtY29zZnNkc2NzUWxNMEUxTXk0ME16UXpNallsTWtJ                       |
| `results`                                                                      | [components.Session](../../models/components/session.md)[]                     | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |