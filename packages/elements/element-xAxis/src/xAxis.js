import { axisBottom } from 'd3-axis';
import { horizontalScaleLinear } from '@unico/core-scales';
import { GREYPALLETE } from '@unico/core-pallete';
import { defaultValues } from './defaultValues';

function _drawXDomain(container, axis) {
    const _sizeTicks = (showDomainLine, type) => {
        return showDomainLine ? 6 : type === 'quantitive' ? 6 : 0;
    };

    /**
     * Draw ticks
     *
     * There are two types of ticks.
     * Guide, not draw any value, only draw the ticks.
     * Quantitative, draw values.
     *
     * @param {string} type - Type of axis.
     */
    const _typeTicks = (type) => {
        switch (type) {
            case 'guide':
                return axisBottom(
                    horizontalScaleLinear(
                        axis.numItems - 1,
                        container.width -
                            container.margins.left -
                            container.margins.right
                    )
                )
                    .ticks(0)
                    .tickFormat('')
                    .tickSize(_sizeTicks(axis.showDomainLine));

            case 'quantitive':
                return axis.labels
                    ? axisBottom(
                          horizontalScaleLinear(
                              axis.maxValue,
                              container.width -
                                  container.margins.left -
                                  container.margins.right
                          )
                      )
                          .ticks(axis.labels.length - 1)
                          .tickFormat((d, i) =>
                              axis.labels ? axis.labels[i] : ''
                          )
                          .tickSize(_sizeTicks(axis.showDomainLine))
                    : axisBottom(
                          horizontalScaleLinear(
                              axis.maxValue,
                              container.width -
                                  container.margins.left -
                                  container.margins.right
                          )
                      )
                          .ticks(numberTicks)
                          .tickSize(_sizeTicks(axis.showDomainLine));
            default:
                throw new Error('Type of ticks its not defined');
        }
    };

    // Draw X Axis
    container.d3GraphComponent
        .append('g')
        .attr(
            'transform',
            `translate(${container.margins.left}, ${
                container.height - container.margins.bottom
            })`
        )
        .style('color', () =>
            axis.color
                ? axis.color
                : `var(--neutral5,${
                      axis.color
                          ? axis.color
                          : `var(--neutral5,${GREYPALLETE.neutral5})`
                  })`
        )
        .call(_typeTicks(axis.typeTick));
}

function _drawXGrid(container, axis) {
    container.d3GraphComponent
        .append('g')
        .attr(
            'transform',
            `translate(${container.margins.left}, ${
                container.height - container.margins.bottom
            })`
        )
        .style('color', () =>
            axis.color
                ? axis.color
                : `var(--neutral3,${
                      axis.color
                          ? axis.color
                          : `var(--neutral3,${GREYPALLETE.neutral3})`
                  })`
        )
        .call(
            axisBottom(
                horizontalScaleLinear(
                    axis.numItems - 1,
                    container.width -
                        container.margins.left -
                        container.margins.right
                )
            )
                .ticks(axis.numberTicks)
                .tickFormat('')
                .tickSize(
                    -container.height +
                        container.margins.top +
                        container.margins.bottom
                )
        );

    // Remove domain line
    container.d3GraphComponent.call((g) => g.select('.domain').remove());
}

/**
 * Draw X Axis
 *
 * @param {object} params - Parametres of X Axis
 * @param {object} params.container - Data of vis container
 * @param {object} params.container.d3GraphComponent - D3 object where contain the graph
 * @param {object} params.container.width - Width of container
 * @param {object} params.container.heigh - Height of container
 * @param {object} params.container.margins - Margins of graph
 * @param {object} params.container.margins.top - Top padding of graph
 * @param {object} params.container.margins.bottom - Botom padding of graph
 * @param {object} params.container.margins.right - Right padding of graph
 * @param {object} params.container.margins.left - Left padding of graph
 * @param {object} params.axis - Data axis
 * @param {object} params.axis.numItems - Number of items in data to calculate the space between ticks
 * @param {object} params.axis.color - Color of stick
 * @param {object} params.axis.numberTicks - Number of ticks
 * @param {object} params.axis.labels - Labels of axies
 * @param {object} params.axis.showDomainLine - Show domain line
 */
const drawXAxis = (params) => {
    const { container, axis } = defaultValues({ ...params });

    axis.showGrid && _drawXGrid(container, axis);
    _drawXDomain(container, axis);
    !axis.showDomainLine &&
        container.d3GraphComponent.call((g) => g.select('.domain').remove());
};

export { drawXAxis };
