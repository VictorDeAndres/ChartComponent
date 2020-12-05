import { drawLine } from '@unico/element-lines';
import { CHARTPALLETE } from '@unico/core-pallete';
const graphDrawLines = (container, series) => {
    const format = {
        stroke: 1,
        type: 'curveLinear',
    };

    const scele = {
        maxValue: 500,
    };
    series.forEach((serie, idx) => {
        // Loading default values
        const dataLine = {};
        dataLine.data = { serie: serie, numItems: serie.length };
        format.color = CHARTPALLETE[`chart${idx + 1}`];
        dataLine.format = format;

        dataLine.scale = scele;

        drawLine({
            container,
            dataLine,
        });
    });
};

export { graphDrawLines };
