import { interval, timer } from "rxjs";

const sequenceNumbers$ = interval(200);
const delayedTimer$ = timer(5000);

sequenceNumbers$.subscribe(console.log);
delayedTimer$.subscribe(console.log);
