# Newday Tech Challenge
Task:
https://github.com/davidwhitney/CodeDojos/tree/master/Diamond%20Kata#origin

## Task

Given a character from the alphabet, print a diamond of its output with that character being the midpoint of the diamond.

Examples

> input: A
  ```
  A
  ```

> input: B
```
   _ A _ 
   B _ B
   _ A _
```

> input: C

```
  _ _ A _ _
  _ B _ B _
  C _ _ _ C
  _ B _ B _
  _ _ A _ _
```

## Get Started
To render the diamond, choose an alphabet and run the script below.
```bash
npm start {character}
```

`{character}` is the chosen alphabet, which ranges from A-Z and a-z.

Example

```bash
npm start C
```
Output:
```
_ _ A _ _
_ B _ B _
C _ _ _ C
_ B _ B _
_ _ A _ _
```

## Tests
To run tests, run the script below.
```bash
npm test
```
