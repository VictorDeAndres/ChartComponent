// @unico/element-yaxis v0.1.0 
// Copyright 2020 Victor de Andrés

import { axisLeft } from 'd3-axis';
import { verticalScaleLinear } from '@unico/core-scales';
import { GREYPALLETE } from '@unico/core-pallete';
import { defaultMarginValues, defaultContainerValues, defaultAxisValues } from '@unico/core-defaultvalues';

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

function _drawYDomain(container, axis) {
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
                return axisLeft(
                    verticalScaleLinear(
                        axis.numItems - 1,
                        container.height -
                            container.margins.top -
                            container.margins.bottom
                    )
                )
                    .ticks(0)
                    .tickFormat('')
                    .tickSize(_sizeTicks(axis.showDomainLine, type));
            case 'quantitive':
                return axis.labels
                    ? axisLeft(
                          verticalScaleLinear(
                              axis.maxValue,
                              container.height -
                                  container.margins.top -
                                  container.margins.bottom
                          )
                      )
                          .ticks(axis.labels.length - 1)
                          .tickFormat((d, i) =>
                              axis.labels ? axis.labels[i] : ''
                          )
                          .tickSize(_sizeTicks(axis.showDomainLine, type))
                    : axisLeft(
                          verticalScaleLinear(
                              axis.maxValue,
                              container.height -
                                  container.margins.top -
                                  container.margins.bottom
                          )
                      )
                          .ticks(axis.numberTicks)
                          .tickSize(_sizeTicks(axis.showDomainLine, type));
            default:
                throw new Error('Type of ticks its not defined');
        }
    };

    // Draw Y Axis
    container.d3GraphComponent
        .append('g')
        .attr('id', '__chart-component_/y-axis')
        .attr(
            'transform',
            `translate(${container.margins.left}, ${container.margins.top})`
        )
        .style('color', () =>
            axis.color ? axis.color : `var(--neutral5,${GREYPALLETE.neutral5})`
        )
        .call(_typeTicks(axis.typeTick));
}

function _drawYGrid(container, axis) {
    container.d3GraphComponent
        .append('g')
        .attr(
            'transform',
            `translate(${container.margins.left}, ${container.margins.top})`
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
            axisLeft(
                verticalScaleLinear(
                    axis.numItems - 1,
                    container.height -
                        container.margins.top -
                        container.margins.bottom
                )
            )
                .ticks(axis.numberTicks)
                .tickFormat('')
                .tickSize(
                    -container.width +
                        container.margins.left +
                        container.margins.right
                )
        );

    // Remove domain line
    container.d3GraphComponent.call((g) => g.select('.domain').remove());
}

/**
 * Draw Y Axis
 *
 * @param {object} params - Parametres of Y Axis
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
const drawYAxis = (params) => {
    const { container, axis } = defaultValues({ ...params });

    axis.showGrid && _drawYGrid(container, axis);
    _drawYDomain(container, axis);
    !axis.showDomainLine &&
        container.d3GraphComponent.call((g) => g.select('.domain').remove());
};

export { drawYAxis };
