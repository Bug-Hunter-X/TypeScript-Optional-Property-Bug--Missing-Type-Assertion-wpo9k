This repository demonstrates a common yet subtle bug in TypeScript related to optional properties and type checking. The `printCoord` function accepts an object with `x` and `y` properties.  However, if you pass an object missing either property, TypeScript's type system won't throw an error at compile time, leading to runtime issues.  The solution demonstrates how to use type assertions or optional chaining to improve type safety and prevent unexpected behavior.