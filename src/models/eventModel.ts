import type dateModel from './dateModel';

type eventModel = {
    title: string,
    description: string,
    important: boolean,
    start: dateModel,
    end: dateModel,
    id: string,
}

export default eventModel;