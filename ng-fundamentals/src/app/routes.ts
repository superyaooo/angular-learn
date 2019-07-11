import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

export const appRoutes = [
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {patj: '', redirectTo: '/events', pathMatch: 'full'}
]