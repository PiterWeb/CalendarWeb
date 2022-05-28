import type eventModel from './eventModel';

type calendarModel = {
    userId: string;
    events: eventModel[];
}

export default calendarModel;