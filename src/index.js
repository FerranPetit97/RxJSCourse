import { fromEvent } from "rxjs";
import {
  debounceTime,
  auditTime,
  throttleTime,
  sampleTime,
} from "rxjs/operators";

const debounceOnCLick$ = fromEvent(document, "click").pipe(debounceTime(1000));
const auditOnCLick$ = fromEvent(document, "click").pipe(auditTime(1000));
const throttleOnCLick$ = fromEvent(document, "click").pipe(throttleTime(1000));
const sampleOnCLick$ = fromEvent(document, "click").pipe(sampleTime(4000));

debounceOnCLick$.subscribe((data) => console.log("Debounce: ", data));
auditOnCLick$.subscribe((data) => console.log("Audit: ", data));
throttleOnCLick$.subscribe((data) => console.log("Throttle: ", data));
sampleOnCLick$.subscribe((data) => console.log("Sample: ", data));
