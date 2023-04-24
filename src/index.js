import { from, of, asyncScheduler } from "rxjs";

//asyncScheduler will be deprecated on v8
const fruits$ = from(["apple", "tangerine", "pear", "banana"], asyncScheduler);
const fruitsV2$ = of("apple", "tangerine", "pear", "banana");

fruits$.subscribe(console.log);
fruitsV2$.subscribe(console.log);
