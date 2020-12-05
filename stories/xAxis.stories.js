import XAxisOrdinal from './../packages/test-elements/xAxis/src/xAxisOrdinal.svelte';

export default {
    title: 'Chart Elements/Axis',
    component: XAxisOrdinal,
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
            control: 'boolean',
            default: true,
            table: {
                defaultValue: {
                    summary: true,
                },
            },
        },
        showGrid: {
            name: 'showGrid',
            description: 'Indicates if must show grid lines',
            control: 'boolean',
            default: false,
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
    },
};

const Template = ({ ...args }) => ({
    Component: XAxisOrdinal,
    props: args,
});

export const GuideHorizontal = Template.bind({});
GuideHorizontal.args = {
    typeTick: 'guide',
};

export const HorizontalWithCustomLabels = Template.bind({});
HorizontalWithCustomLabels.args = {
    seriesData: [74, 154, 89, 400, 240],
    typeTick: 'quantitive',
    labels: ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Eco'],
};
