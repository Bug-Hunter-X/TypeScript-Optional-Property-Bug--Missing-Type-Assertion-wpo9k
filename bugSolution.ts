function printCoord(pt: { x: number; y: number }) {
  // Solution 1: Using optional chaining
  console.log("The coordinate's x value is " + (pt.x ?? 'undefined'));
  console.log("The coordinate's y value is " + (pt.y ?? 'undefined'));
}

// Solution 2: Using type assertion (less preferred)
function printCoord2(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoord({});
printCoord2({ x: 3, y: 7 } as { x: number; y: number });