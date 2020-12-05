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

export { defaultMarginValues };
