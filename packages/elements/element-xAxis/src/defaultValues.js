import {
    defaultContainerValues,
    defaultMarginValues,
    defaultAxisValues,
} from '@unico/core-defaultvalues';

const defaultMargins = (margins) => {
    const { top, bottom, left, right } = {
        ...defaultMarginValues(margins),
    };
    return {
        top,
        bottom,
        left,
        right,
    };
};

const defaultContainer = (container) => {
    const { d3GraphComponent, height, width, margins } = {
        ...defaultContainerValues(container),
    };
    return {
        d3GraphComponent,
        height,
        width,
        margins: defaultMargins(margins),
    };
};

const defaultAxis = (axis, serie) => {
    const {
        numItems,
        maxValue,
        color,
        typeTick,
        numberTicks,
        labels,
        showDomainLine,
        showGrid,
    } = {
        ...defaultAxisValues(axis, serie),
    };

    return {
        numItems,
        maxValue,
        color,
        typeTick,
        numberTicks,
        labels,
        showDomainLine,
        showGrid,
    };
};

const defaultValues = ({ container, axis, serie = [] }) => {
    return {
        container: defaultContainer(container),
        axis: defaultAxis(axis, serie),
    };
};

export { defaultValues };
