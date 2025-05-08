# Assignment1

## Files Included

- `index.ts`: Contains all the TypeScript code 
- `README.md`: Assignment Tasks and Blog1 and Blog2.

## How to Run

1. Make sure you have [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/) installed globally.
2. Clone the repository:
   
```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
````

1. Compile the TypeScript file:

```bash
   tsc index.ts
```
4. Run the compiled JavaScript:
   
```bash
   node index.js
```

# Blog-1: Interfaces vs Types in TypeScript: Key Differences

TypeScript, a superset of JavaScript, provides robust tools for defining the shape of data: **interfaces** and **types**. While both are used to describe object structures and enforce type safety, they have distinct characteristics that make them suitable for different scenarios. This blog explores the key differences between interfaces and types in TypeScript, helping developers choose the right tool for their needs.

## 1. Syntax and Declaration

**Interfaces** use the `interface` keyword and are primarily designed to define the shape of objects. They have a clean, object-oriented syntax:

```ts
interface User {
  name: string;
  age: number;
}
```

**Types** use the `type` keyword and are more flexible, allowing you to define not only objects but also unions, intersections, and primitive types:

```ts
type User = {
  name: string;
  age: number;
} | string;
```

**Key Difference**: Interfaces are limited to describing object-like structures, while types can represent a broader range of constructs, including unions and primitives.

## 2. Extending and Merging

**Interfaces** support **declaration merging**, meaning you can redefine an interface with the same name, and TypeScript will combine the definitions:

```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
// Combined: { name: string; age: number; }
```

Interfaces can also be extended using the `extends` keyword:

```ts
interface Admin extends User {
  role: string;
}
```

**Types** do **not** support declaration merging. However, they can be extended using **intersection types** (`&`):

```ts
type User = {
  name: string;
};
type Admin = User & {
  role: string;
};
```

**Key Difference**: Interfaces are more flexible for declaration merging, while types rely on intersections, which can sometimes lead to more complex type computations.

## 3. Use Cases and Flexibility

**Interfaces** are ideal for defining contracts, especially for objects, classes, or APIs. They are commonly used when you expect to extend or merge types later:

```ts
interface Printable {
  print(): void;
}
class Document implements Printable {
  print() {
    console.log("Printing...");
  }
}
```

**Types** are more versatile and can describe complex scenarios:

```ts
type ID = string | number;
type Status = "success" | "error" | "loading";
```

**Key Difference**: Use interfaces for object-oriented contracts and extensibility; use types for complex, flexible type definitions.

## 4. Performance Considerations

While the performance difference is often negligible, **interfaces** can be slightly more efficient in TypeScript’s type-checking process because they are cached internally. **Types**, especially those involving complex unions or intersections, may require more computation during type resolution.

**Key Difference**: Interfaces may offer a slight performance edge in large projects with heavy type-checking.

## 5. Community and Convention

In many TypeScript projects, **interfaces** are preferred for defining object shapes due to their cleaner syntax and declaration merging capabilities. However, **types** are often used when working with utilities, unions, or advanced type logic, as they align better with functional programming paradigms.

**Key Difference**: Interfaces are more common in object-oriented codebases, while types are favored in functional or utility-heavy code.

---

## When to Use Which?

### Use **Interfaces** when:

* Defining object shapes for classes or APIs.
* You need declaration merging (e.g., extending external libraries).
* Working in an object-oriented codebase.

### Use **Types** when:

* Defining unions, intersections, or primitive types.
* Working with complex type logic or utilities.
* You need flexibility beyond object shapes.

---

## Conclusion

Both **interfaces** and **types** are powerful tools in TypeScript, and understanding their differences allows developers to write more maintainable and type-safe code. Interfaces shine in scenarios requiring extensibility and object-oriented design, while types offer unmatched flexibility for complex type definitions. By choosing the right tool based on your project’s needs, you can leverage TypeScript’s full potential to build robust applications.



# Blog 2: Understanding any, unknown, and never in TypeScript

## Introduction

TypeScript’s type system helps catch errors before runtime. But sometimes, you need flexibility—or strictness. That’s where `any`, `unknown`, and `never` come in.

This guide explains when and why to use each.

## 1. `any` – The Escape Hatch

### What It Does

Opts out of type checking (like plain JavaScript).

**Use sparingly**—it defeats TypeScript’s safety.

```ts
let data: any = "hello";
data = 42; // No error
data.toUpperCase(); // No error (but crashes at runtime!)
```

### When to Use:

* Migrating JS to TS gradually.
* Working with dynamic data (e.g., third-party APIs).

**Risk**: Loses all type safety.

## 2. `unknown` – The Safe Alternative

### What It Does

Forces type checking before use (unlike `any`).

Safer for dynamic data (e.g., JSON parsing).

```ts
let userInput: unknown = fetchExternalData();
// userInput.toUpperCase(); ❌ Error: Must narrow type first

if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // ✅ Safe
}
```

### When to Use:

* Parsing unknown data (APIs, user input).
* Replacing `any` for better safety.

**Key Benefit**: Ensures runtime checks before operations.

## 3. `never` – The Unreachable Type

### What It Does

Represents code that should never run (e.g., errors, infinite loops).

Helps with exhaustive type checking.

```ts
function crashApp(message: string): never {
  throw new Error(message); // Function never returns
}

type Status = "success" | "error";
function handleStatus(status: Status) {
  switch (status) {
    case "success": return "Done!";
    case "error": return "Failed!";
    default: 
      const exhaustiveCheck: never = status; // Ensures all cases are handled
      return exhaustiveCheck;
  }
}
```

### When to Use:

* Functions that never return (e.g., throw).
* Ensuring all cases are handled in a `switch`.

## Comparison Table

| Type      | Purpose                      | Safety | Example Use Case           |
| --------- | ---------------------------- | ------ | -------------------------- |
| `any`     | Opt-out of type checking     | ❌ None | Legacy JS migration        |
| `unknown` | Force type checks before use | ✅ High | Parsing JSON/API responses |
| `never`   | Mark unreachable code        | ✅ Full | Exhaustive checks, errors  |

## Conclusion

* **Avoid `any`**—it removes TypeScript’s benefits.
* **Prefer `unknown`** for dynamic data.
* **Use `never`** for impossible states and strict checks.

Stay tuned for the next blog in this series!
