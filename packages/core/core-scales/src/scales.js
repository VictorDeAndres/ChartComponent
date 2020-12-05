import { scaleLinear, scaleBand } from 'd3-scale';

const verticalScaleLinear = (maxDomain, height) =>
    scaleLinear().domain([0, maxDomain]).range([height, 0]);

const horizontalScaleLinear = (maxDomain, width) =>
    scaleLinear().domain([0, maxDomain]).range([0, width]);

const horizontalScaleBand = (label, width) =>
    scaleBand().domain(label).range([0, width]);

export { verticalScaleLinear, horizontalScaleLinear, horizontalScaleBand };
