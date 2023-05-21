import { of } from "rxjs";
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from "rxjs/operators";

const repeatedNumbers$ = of(1, 2, 3, 4, 3, 2, 2, 2, 3).pipe(distinct());
const repeatedUntilChangeNumbers$ = of(1, 2, 3, 4, 3, 2, 2, 2, 3).pipe(
  distinctUntilChanged()
);
const repeatedUntilKeyChangeNumbers$ = of(
  { k: 1 },
  { k: 2 },
  { k: 3 },
  { k: 4 },
  { k: 3 },
  { k: 2 },
  { k: 2 },
  { k: 2 },
  { k: 2 }
).pipe(distinctUntilKeyChanged("k"));

repeatedNumbers$.subscribe((data) => console.log("Distinct: ", data));
repeatedUntilChangeNumbers$.subscribe((data) =>
  console.log("DistinctUntilChange: ", data)
);
repeatedUntilKeyChangeNumbers$.subscribe((data) =>
  console.log("DistinctUntilKeyChange: ", data)
);
