<script>
  import { onMount } from "svelte";

  import { select } from "d3-selection";
  import { d3Element } from "@unico/core-d3element";
  import { defaultMarginValues } from "@unico/core-defaultvalues";
  import { drawYAxis } from "@unico/element-yaxis";

  export let seriesData;
  export let margins;
  export let color;
  export let typeTick;
  export let numberTicks;
  export let showDomainLine;
  export let showGrid;

  let el;
  let width;
  let height;

  onMount(() => {
    const d3GraphComponent = d3Element(select(el), height, width);

    drawYAxis({
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
