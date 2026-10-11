# StringMatchType

How to match a string value against entity names. REGEX matches the value as a case-insensitive regular expression.

## Example Usage

```typescript
import { StringMatchType } from "opal-mcp/models/components";

let value: StringMatchType = "ENDS_WITH";
```

## Values

```typescript
"CONTAINS" | "EQUALS" | "STARTS_WITH" | "ENDS_WITH" | "REGEX"
```