// @unico/core-defaultvalues v0.1.0 
// Copyright 2020 Victor de Andrés

/**
 * Fill margins variables with default values
 *
 * @param {object} margins - Margins received
 * @param {object} margins.top - Top margin received
 * @param {object} margins.bottom - Botom margin received
 * @param {object} margins.right - Right margin received
 * @param {object} margins.left - Left margin received
 *
 * @return {object} margins - Margins
 * @return {object} margins.top - Top margin
 * @return {object} margins.bottom - Bottom margin
 * @return {object} margins.right - Right margin
 * @return {object} margins.left - Left margin
 */
function defaultContainerValues(container) {
    let {
        d3GraphComponent: d3GraphComponent = null,
        height: height = 0,
        width: width = 0,
        margins: margins = null,
    } = { ...container };
    return { d3GraphComponent, height, width, margins };
}

const DEFAULTMARGINS = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
};

/**
 * Fill margins variables with default values
 *
 * @param {object} margins - Margins received
 * @param {object} margins.top - Top margin received
 * @param {object} margins.bottom - Botom margin received
 * @param {object} margins.right - Right margin received
 * @param {object} margins.left - Left margin received
 *
 * @return {object} margins - Margins
 * @return {object} margins.top - Top margin
 * @return {object} margins.bottom - Bottom margin
 * @return {object} margins.right - Right margin
 * @return {object} margins.left - Left margin
 */
function defaultMarginValues(margins) {
    let {
        top: top = DEFAULTMARGINS.top,
        bottom: bottom = DEFAULTMARGINS.bottom,
        left: left = DEFAULTMARGINS.left,
        right: right = DEFAULTMARGINS.right,
    } = { ...margins };
    return { top, bottom, left, right };
}

const DEFAULTXAXIS = {
    typeTick: 'guide',
    color: null,
    showDomainLine: true,
    numberTicks: null,
    labels: null,
    showDomainLine: true,
    showGrid: false,
};

/**
 * Fill margins variables with default values
 *
 * @param {object} params.axis.numItems - Number of items in data to calculate the space between ticks
 * @param {object} params.axis.color - Color of stick
 * @param {object} params.axis.numberTicks - Number of ticks
 * @param {object} params.axis.labels - Labels of axies
 * @param {object} params.axis.showDomainLine - Show domain line
 *
 * @return {object} margins - Margins
 * @return {object} margins.top - Top margin
 * @return {object} margins.bottom - Bottom margin
 * @return {object} margins.right - Right margin
 * @return {object} margins.left - Left margin
 */
function defaultAxisValues(axis, serie) {
    let {
        numItems: numItems = serie.length,
        maxValue: maxValue = serie.length === 0 ? 0 : Math.max(...serie),
        color: color = DEFAULTXAXIS.color,
        typeTick: typeTick = DEFAULTXAXIS.typeTick,
        numberTicks: numberTicks = DEFAULTXAXIS.numberTicks,
        labels: labels = DEFAULTXAXIS.labels,
        showDomainLine: showDomainLine = DEFAULTXAXIS.showDomainLine,
        showGrid: showGrid = DEFAULTXAXIS.showGrid,
    } = { ...axis };

    numberTicks = labels !== null ? labels.length - 1 : numberTicks;

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
}

export { defaultAxisValues, defaultContainerValues, defaultMarginValues };
