import { horizontalScaleLinear, verticalScaleLinear } from '@unico/core-scales';

import {
    line,
    curveLinear,
    curveMonotoneX,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape';

// container: {
//     d3GraphComponent,
//     height,
//     width,
//     margins: { top, bottom, left, right },
//   },
//   line: {
//     data: {
//         serie,
//         numItems
//     },
//     format: {
//       stroke: 1,
//       color: red,
//       type: 0,
//     },
//     scale: {
//       maxValue
//     }
//   }

//  {
//       type,
//       data,
//       maxValue,
//       numItems,
//       colors: colors[idx],
//       stroke
//     });

const drawLine = (params) => {
    const { container, dataLine } = { ...params };

    /**
     * Convert horizontal values to graph scale
     *
     * @param {number} numItem - Number of items to represent
     * @param {number} width - Width of graph
     */
    const xScale = horizontalScaleLinear(
        dataLine.data.numItems - 1,
        container.width - container.margins.right - container.margins.left
    );

    /**
     * Convert vertical values to graph scale
     *
     * @param {number} height - Height of grahp
     * @param {number} maxValue - Max value to represent
     */

    const yScale = verticalScaleLinear(
        dataLine.scale.maxValue,
        container.height - container.margins.top - container.margins.bottom
    );

    let typeCurve;
    switch (dataLine.format.type) {
        case 'curveLinear':
            typeCurve = curveLinear;
            break;
        case 'curveMonotoneX':
            typeCurve = curveMonotoneX;
            break;
        case 'curveNatural':
            typeCurve = curveNatural;
            break;
        case 'curveStep':
            typeCurve = curveStep;
            break;
        case 'curveStepAfter':
            typeCurve = curveStepAfter;
            break;
        case 'curveStepBefore':
            typeCurve = curveStepBefore;
            break;
        default:
            typeCurve = curveLinear;
            break;
    }

    const graphLine = line()
        .x((d, i) => xScale(i))
        .y((d) => yScale(d))
        .curve(typeCurve);

    // Draw Line
    container.d3GraphComponent
        .append('path')
        .attr(
            'transform',
            `translate(${container.margins.left}, ${container.margins.top})`
        )
        .datum(dataLine.data.serie)
        .style('stroke', dataLine.format.color)
        .style('stroke-width', dataLine.format.stroke)
        .style('fill', 'none')
        .attr('d', graphLine);
};

export { drawLine };
