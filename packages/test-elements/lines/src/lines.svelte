<script>
  import { onMount } from "svelte";

  import { select } from "d3-selection";
  import { d3Element } from "@unico/core-d3element";
  import { CHARTPALLETE } from "@unico/core-pallete";
  import { defaultMarginValues } from "@unico/core-defaultvalues";
  import { drawLine } from "@unico/element-lines";

  export let dataSeries;
  export let margins;
  // export let color;
  // export let typeTick;
  // export let numberTicks;
  // export let showDomainLine;

  let el;
  let width;
  let height;

  onMount(() => {
    const { top, bottom, left, right } = {
      ...defaultMarginValues(margins)
    };
    const d3GraphComponent = d3Element(select(el), height, width);

    const container = {
      d3GraphComponent,
      height,
      width,
      margins: { top, bottom, left, right }
    };

    // Draw line
    dataSeries.forEach((serie, idx) => {
      drawLine({
        container,
        dataLine: {
          data: {
            serie: serie,
            numItems: serie.length
          },
          format: {
            stroke: 1,
            color: CHARTPALLETE[`chart${idx + 1}`],
            type: "curveLinear"
          },
          scale: {
            maxValue: 500
          }
        }
      });
    });
  });
</script>

<style>
  #__graph_container {
    display: block;
    height: 100%;
    width: 100%;
  }
</style>

<div
  id="__graph_container"
  bind:this={el}
  bind:clientWidth={width}
  bind:clientHeight={height} />
