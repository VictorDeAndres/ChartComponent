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

export { defaultAxisValues };
