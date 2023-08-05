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
- All Static methods  ( `Date.now()`, `Date.parse()`) return timestamps(timezone) instead of Date objects.
- The `Date()` constructor can be called with a timestamp as the only argument.

The Date() constructor can be called with two or more arguments, in which case they are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively, in local time.

## Date time string format

The JavaScript specification only specifies one format to be universally supported.

That is,
`YYYY-MM-DDTHH:mm:ss.sssZ`

- `YYYY` is the year, with four digits (`0000` to `9999`).
- `MM` is the month, with two digits (`01` to `12`). Default is `01`.
- `DD` is the day of the month, with two digits (`01` to `31`). Defaults is `01`.
- `T` is a literal character, which indicates the beginning of the time part of the string. The `T` is required when specifying the time part.
- `HH` is the hour, with two digits (`00` to `23`). As a special case, `24:00:00` is allowed, and is interpreted as midnight at the beginning of the next day. Defaults is `00`.
- `mm` is the minute, with two digits (`00` to `59`). Defaults is `00`.
- `ss` is the second, with two digits (`00` to `59`). Defaults is `00`.
- `sss` is the millisecond, with three digits (`000` to `999`). Defaults is `000`.
- `Z` is the timezone offset, which can either be the literal character `Z` (indicating UTC), or `+` or `-` followed by `HH:mm`, the offset in hours and minutes from UTC.

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
console.log(myDate.toDateString());//displays date
console.log(myDate.toTimeString());//displays time and standard
console.log(myDate.toLocaleString());//displays date and time
console.log(myDate.toLocaleDateString());//displays date only
console.log(myDate.toLocaleTimeString());//displays time only
```

## Static Methods

`Date.now()` - Return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.

`Date.parse()` - Return the time difference in milliseconds from, January 1, 1970, till the date we provide.

`Date.UTC()` - Return the number of milliseconds in a Date object since January 1, 1970, 00:00:00, universal time.

## Instance Methods

There are two gropus of `Date` methods. Both the group make use of both local and UTC timestamp.

- get
- set

Let's see some of the `get` methods using local time.

`Date.getDate()` - Returns current date of the month from a given Date object. The return value is in between 1 to 31.

`Date.getDay()` - Returns current day of the week from a given Date object. The return value is in between 0 to 6.

`Date.getMonth()` - Returns current month of the year from a given Date object. The return value is in between 0 to 11.

`Date.getFullYear()` - Returns current month of the year from a given Date object. The return value is in between 0 to 11.

`Date.getHours()` - Returns hours from a given Date object. The return value is in between 0 to 23.

`Date.getMiutes()` - Returns minutes from a given Date object. The return value is in between 0 to 59.

`Date.getSeconds()` - Returns seconds from a given Date object. The return value is in between 0 to 59.

Let's see some of the `set` methods using local time.

`Date.setDate()` - Used to set the date of the month to the date object. Value ranges between 1 to 31.

`Date.setMonth()` - Used to set the Month of the year to the date object. Value ranges between 0 to 11.

`Date.setFullYear()` - Used to set year into date object. It can also be used to set `setMonth()` and `setDate()` as well.

`Date.setHours()` - Used to set the hour value into date object. It can also be used to set `setMinutes()`, `setSeconds()` and `setMilliseconds()`.

## Conclusion

We have covered from creating `date` object and using the inbuilt methods. This will give you a kickstart to learn date and time.

## Resources

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

[Chai aur Code](https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13)

[Dev Dreamer](https://www.youtube.com/watch?v=-H6xNrnFI80&list=PL7TLF4T4Tq2TtNmadzRfxYIB9683uhpbD&index=17)
