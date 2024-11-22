# [].map, [].reduce, and [].filter

## [].map()

It is higher order array method, it creates a new array by applying a callback function to each element of the original array.

It will not modify the original array insted it returns the new array with modified elements.

```JS
array.map(callbackfunction(currentValue, index, array));
```

- `array` is the array you want to transform.
- `callbackFunction` is the function you want to apply to each element of the array.
- `currentValue` is the current element being processed.
- `index` is the index of the current element.
- `array` is the original array.

## [].filter()

It is higher order array method, it creates a new array with all the elements that pass the condition.

It will not modify the original array. It always returns a new array, even if no elements pass the condition.

```JS
array.filter(callbackFunction(currentValue, index, array))
```

- `array` is the array you want to filter.
- `callbackFunction` is the function that tests each element of the array. Returns `true` or `false`.
  - `true` means element will be included in the new array, `false` means element will not be included in the new array.
- `currentValue` is the current element being processed.
- `index` is the index of the current element.
- `array` is the original array.

## [].reduce()

It is higher order array method, used to process each element of the array and reduce it to a single value.

```JS
arr.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
```

- `arr` is the array you want to reduce.
- `callbackFunction` is the function you want to apply to each element of the array to reduce it to a single output value.
- `accumulator` is the accumulated value returned in the previous iteration.
- `currentValue` is the current element being processed.
- `index` is the index of the current element.
- `array` is the original array.
- `initialValue` is the initial value of the accumulator (optional).