<script>
  import { onMount } from "svelte";

  import { select } from "d3-selection";
  import { d3Element } from "@unico/core-d3element";
  import { defaultMarginValues } from "@unico/core-defaultvalues";
  import { drawXAxis } from "@unico/element-xaxis";

  export let seriesData;
  export let margins;
  export let color;
  export let typeTick;
  export let numberTicks;
  export let labels;
  export let showDomainLine;
  export let showGrid;

  let el;
  let width;
  let height;

  onMount(() => {
    // const numItems = seriesData.length;
    const d3GraphComponent = d3Element(select(el), height, width);

    drawXAxis({
      container: {
        d3GraphComponent,
        height,
        width,
        margins
      },
      axis: {
        color,
        typeTick,
        numberTicks,
        labels,
        showDomainLine,
        showGrid
      },
      serie: seriesData
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
