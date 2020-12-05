import YAxisOrdinal from './../packages/test-elements/yAxis/src/yAxisOrdinal.svelte';

export default {
    title: 'Chart Elements/Axis',
    component: YAxisOrdinal,
    argTypes: {
        seriesData: {
            name: 'seriesData',
            type: { name: 'array' },
            description: 'Data Serie',
        },
        margins: {
            name: 'margins',
            table: {
                defaultValue: {
                    summary: '{ top: 20, bottom: 20, left: 20, right: 20 }',
                },
            },
            description: 'Margins',
            control: 'object',
        },
        color: {
            name: 'color',
            description: 'Color of axis',
            table: {
                defaultValue: {
                    summary: '#a6a6a6',
                },
            },
            control: 'color',
        },
        labels: {
            name: 'seriesData',
            type: { name: 'array' },
            description: 'Axis Labels',
        },
        typeTick: {
            name: 'typeTick',
            description: 'Type of ticks',
            table: {
                defaultValue: {
                    summary: 'quantitive',
                },
            },
            control: {
                type: 'select',
                options: ['guide', 'quantitive'],
            },
        },
        numberTicks: {
            name: 'numberTicks',
            description: 'Numer of ticks. Depends on the axis scale',
            control: 'number',
        },
        showDomainLine: {
            name: 'showDomainLine',
            description: 'Indicates if must show the domain line',
            default: true,
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: true,
                },
            },
        },
        showGrid: {
            name: 'showGrid',
            description: 'Indicates if must show grid lines',
            default: false,
            control: 'boolean',
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: YAxisOrdinal,
    props: args,
});

export const QuantitiveVertical = Template.bind({});
QuantitiveVertical.args = {
    seriesData: [74, 154, 89, 400, 240],
    margins: { top: 20, left: 30 },
    typeTick: 'quantitive',
    showGrid: true,
};

export const QuantitiveVerticalOnlyValues = Template.bind({});
QuantitiveVerticalOnlyValues.args = {
    seriesData: [74, 154, 89, 400, 240],
    margins: { top: 20, left: 30 },
    typeTick: 'quantitive',
    showDomainLine: false,
};
