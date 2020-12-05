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

export { defaultContainerValues };
