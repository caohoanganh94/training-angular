import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        // position: 'absolute',
        // left: 0,
        // width: '100%',
        // opacity: 0,
      }),
    ], { optional: true }),
    query(':enter', [
      // animate('500ms ease', style({ opacity: 1 })),
    ], { optional: true })
  ]),
]);
