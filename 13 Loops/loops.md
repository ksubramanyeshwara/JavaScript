# Loops

Loops helps you to execute a block of code frequently until a specific condition is met.

## Category of loops

- Entry Controlled Loop

    Condition is tested before entering the loop. If the condtion is true then only the loop will be executed. Once the condition become false execution will sto.

  - for loop
  - while loop

- Exit Controlled Loop

    Condition is tested at the end of the loop after executing the body of the Loop at least once. In this loop will be executed atleast once irrespictive if condition is true or not. If the condition is met, the Loop will continue to run, once condition become false execution will stop.

  - do...while

## Types of loops

1. for
2. while
3. do...while
4. for...in/for...off

## for loop

For loop used when we know the number of iterations. It has three components

- initialization,
- condition, and
- increment/decrement, all separated by semicolons.

```JS
for (let i = 0; i < 5; i++) {
  console.log(i);
}

/*
    OUTPUT

    0
    1
    2
    3
    4
*/
```

![Function Structure](./for-loop-flow-diagram.webp)

- First counter variable is initialized,
- then counter variable is compared with the condition
- if the condtion is true then loop will be executed and counter varible will be updated
- if the condition is false then control will exit from the loop.

<!-- Nested for loop shold be done -->