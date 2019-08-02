import {Component, Input, Output, EventEmitter} from '@angular/core';
import { IEvent } from './shared';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html'
})
export class EventThumbnailComponent {
    @Input() event:IEvent;

    logFoo() {
        console.log('foo');
    }
}