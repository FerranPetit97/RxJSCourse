import { Observable, Subject } from "rxjs";

const numbers$ = new Observable((subscribe) => {
  subscribe.next(Math.round(Math.random() * 100));
});

const numbersRandom$ = new Subject();

const observator1 = {
  next: (number) => {
    console.log(number);
  },
};

const observator2 = {
  next: (number) => {
    console.log(number);
  },
};

numbersRandom$.subscribe(observator1);
numbersRandom$.subscribe(observator2);

numbers$.subscribe(numbersRandom$);

numbersRandom$.next(45);
