import rest from '../../../misc/rest'

export async function getIntervals(applicationId, urls, begin, end, limit) {
    let payload = {"urls":urls, "begin":begin.getTime(), "end":end.getTime(), "limit":limit};
    const result = await rest('timeLineVisualizer/getIntervals/' + applicationId, payload);
    return result.data.intervals;
}

export async function getInstants(applicationId, urls, begin, end, limit) {
    let payload = {"urls":urls, "begin":begin.getTime(), "end":end.getTime(), "limit":limit};
    const result = await rest('timeLineVisualizer/getInstants/' + applicationId, payload);
    return result.data.instants;
}

export async function getThingsWIntervals(applicationId, things, thingTypes, connections, limit) {
    let payload = {"things":things, "thingTypes":thingTypes, "connections":connections, "limit":limit};
    const result = await rest('timeLineVisualizer/getThingsWIntervals/' + applicationId, payload);
    return result.data.thingsWithIntervals;
}
export async function getThingsWInstants(applicationId, things, thingTypes, connections, limit) {
    let payload = {"things":things, "thingTypes":thingTypes, "connections":connections, "limit":limit};
    const result = await rest('timeLineVisualizer/getThingsWInstants/' + applicationId, payload);
    return result.data.thingsWithInstants;
}
export async function getThingsWThingsWIntervals(applicationId, things, thingTypes, connections, limit) {
    let payload = {"things": things, "thingTypes":thingTypes, "connections": connections, "limit": limit};
    const result = await rest('timeLineVisualizer/getThingsWThingsWIntervals/' + applicationId, payload);
    return result.data.thingsWithThingsWithIntervals;
}
export async function getThingsWThingsWInstants(applicationId, things, thingTypes, connections, limit) {
    let payload = {"things": things, "thingTypes":thingTypes, "connections": connections, "limit": limit};
    const result = await rest('timeLineVisualizer/getThingsWThingsWInstants/' + applicationId, payload);
    return result.data.thingsWithThingsWithInstants;
}

export async function getIntervalsCount(applicationId, urls, begin, end) {
    let payload = {"urls":urls, "begin":begin.getTime(), "end":end.getTime(), "limit": -1};
    const result = await rest('timeLineVisualizer/getIntervals/count/' + applicationId, payload);
    return result.data.count.value;
}

export async function getInstantsCount(applicationId, urls, begin, end) {
    let payload = {"urls":urls, "begin":begin.getTime(), "end":end.getTime(), "limit": -1};
    const result = await rest('timeLineVisualizer/getInstants/count/' + applicationId, payload);
    return result.data.count.value;
}

export async function getThingsWIntervalsCount(applicationId, things, thingTypes, connections) {
    let payload = {"things":things, "thingTypes":thingTypes, "connections":connections, "limit": -1};
    const result = await rest('timeLineVisualizer/getThingsWIntervals/count/' + applicationId, payload);
    return result.data.count.value;
}
export async function getThingsWInstantsCount(applicationId, things, thingTypes, connections) {
    let payload = {"things":things, "thingTypes":thingTypes, "connections":connections, "limit": -1};
    const result = await rest('timeLineVisualizer/getThingsWInstants/count/' + applicationId, payload);
    return result.data.count.value;
}
export async function getThingsWThingsWIntervalsCount(applicationId, things, thingTypes, connections) {
    let payload = {"things": things, "thingTypes":thingTypes, "connections": connections, "limit": -1};
    const result = await rest('timeLineVisualizer/getThingsWThingsWIntervals/count/' + applicationId, payload);
    return result.data.count.value;
}
export async function getThingsWThingsWInstantsCount(applicationId, things, thingTypes, connections) {
    let payload = {"things": things, "thingTypes":thingTypes, "connections": connections, "limit": -1};
    const result = await rest('timeLineVisualizer/getThingsWThingsWInstants/count/' + applicationId, payload);
    return result.data.count.value;
}