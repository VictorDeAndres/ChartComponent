import Lines from './../packages/test-elements//lines/src/lines.svelte';

export default {
    title: 'Chart Elements/Lines',
    component: Lines,
    // argTypes: {
    //     seriesData: {
    //         name: 'seriesData',
    //         type: { name: 'array', required: true },
    //         description: 'Data Serie',
    //     },
    //     margins: {
    //         name: 'margins',
    //         table: {
    //             defaultValue: {
    //                 summary: '{ top: 20, bottom: 20, left: 20, right: 20 }',
    //             },
    //         },
    //         description: 'Margins',
    //         control: 'object',
    //     },
    //     color: {
    //         name: 'color',
    //         description: 'Color of axis',
    //         table: {
    //             defaultValue: {
    //                 summary: '#a6a6a6',
    //             },
    //         },
    //         control: 'color',
    //     },
    //     typeTick: {
    //         name: 'typeTick',
    //         description: 'Type of ticks',
    //         table: {
    //             defaultValue: {
    //                 summary: 'quantitive',
    //             },
    //         },
    //         control: {
    //             type: 'select',
    //             options: ['ordinal', 'quantitive'],
    //         },
    //     },
    //     numberTicks: {
    //         name: 'numberTicks',
    //         description: 'Numer of ticks. Depends on the axis scale',
    //         control: 'number',
    //     },
    //     showDomainLine: {
    //         name: 'showDomainLine',
    //         description: 'Indicates if must show the domain line',
    //         defaultValue: true,
    //         control: 'boolean',
    //         table: {
    //             defaultValue: {
    //                 summary: true,
    //             },
    //         },
    //     },
    // },
};

const Template = ({ ...args }) => ({
    Component: Lines,
    props: args,
});

export const Line = Template.bind({});
Line.args = {
    dataSeries: [[74, 154, 89, 400, 240]],
    margins: { top: 20, left: 30 },
};

export const MultipleLines = Template.bind({});
MultipleLines.args = {
    dataSeries: [
        [74, 154, 89, 400, 240],
        [134, 74, 119, 147, 240],
    ],
    margins: { top: 20, left: 30 },
};
