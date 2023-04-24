import { map, reduce, filter } from "rxjs/operators";
import { from } from "rxjs";

const numbersMap$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
  map((number) => number * 2),
  map((number) => number ** 2)
);
const numbersReduce$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
  reduce((acc, val) => acc + val, 10)
);
const numbersFitler$ = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
  filter((number) => number > 4)
);
numbersMap$.subscribe((data) => console.log("Map: ", data));
numbersReduce$.subscribe((data) => console.log("Reduce: ", data));
numbersFitler$.subscribe((data) => console.log("Filter: ", data));
