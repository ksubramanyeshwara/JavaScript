# Date and Time

Date and Time is displayed in a format where human can understand. JavaScript understands date based upon timestamp.Timestamp specified as milliseconds elapsed since January 1st 1970 (unix time).

To start using the date object we need to create or instantiate new date object.  
We can do it in 4 different ways.

1st way is used to show current date and time. Other 3 way allows to work with specific date and times.

## Method 1

```JS
let myDate = new Date();
console.log(myDate);//displays date, time and standard.
```

## Method 2

```JS
let milliseconds = new Date(92347687467);//Number of milliseconds elapsed since January 1st 1970.
console.log(milliseconds.getFullYear());
```

## Method 3

```JS
let currentDate = new Date(2023, 1, 12, 5, 3, 5, 5);// helps to display perticular year, month, date, time, minute, seconds and milliseconds.
console.log(currentDate.toLocaleString());
```

## Method 4

```JS
let dateTimeString = new Date("Jan 22 2023");
console.log(dateTimeString)
let dateTimeString1 = new Date("Jan 22 2023 07:02:05");
console.log(dateTimeString1)
```

## various methods that allow you to interact with the timestamp stored in the date

- Interact wth timestamp directly using `getTime()` and `setTime()` methods.
- All Static methods  ( `Date.now()`, `Date.parse()`) return timestamps instead of Date objects.
- The `Date()` constructor can be called with a timestamp as the only argument.

The Date() constructor can be called with two or more arguments, in which case they are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively, in local time.

The JavaScript specification only specifies one format to be universally supported.

That is,
`YYYY-MM-DDTHH:mm:ss.sssZ`

Various components can be omitted, so the following are all valid.

- Date-only form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Date-time form: one of the above date-only forms, followed by T, followed by `HH:mm`, `HH:mm:ss`, or `HH:mm:ss.sss`.

For example, `"2011-10-10"` (date-only form), `"2011-10-10T14:48:00"` (date-time form), or `"2011-10-10T14:48:00.000+09:00"` (date-time form with milliseconds and time zone) are all valid date time strings.

## Other ways to format a date

- `toISOString()` returns a string in the format `1970-01-01T00:00:00.000Z`
- `toJSON()` calls `toISOString()` and returns the result.
- `toString()` returns a string in the format `Thu Jan 01 1970 00:00:00 GMT+0000`(Coordinated Universal Time).
- `toDateString()` return the date parts of the string.
- `toTimeString()` returns the time parts of the string.
- `toLocaleDateString()`, `toLocaleTimeString()`, and `toLocaleString()` use locale-specific date and time formats, usually provided by the Intl API.

```JS
console.log(myDate.toString());//use toString() method on VSCode only
console.log(myDate.toDateString());//displays date
console.log(myDate.toTimeString());//displays time and standard
console.log(myDate.toLocaleString());//displays date and time
console.log(myDate.toLocaleDateString());//displays date only
console.log(myDate.toLocaleTimeString());//displays time only
```
