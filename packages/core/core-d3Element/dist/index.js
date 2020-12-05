// @unico/core-d3element v0.1.0 
// Copyright 2020 Victor de Andrés

const d3Element = (d3Container, height, width) => {
    return d3Container
        .append('svg')
        .attr('height', height)
        .attr('width', width);
};

export { d3Element };
