<script>
  import { onMount } from "svelte";

  import { select } from "d3-selection";
  import { d3Element } from "@unico/core-d3element";
  import { defaultMarginValues } from "@unico/core-defaultvalues";

  import { drawXAxis } from "@unico/element-xaxis";
  import { drawYAxis } from "@unico/element-yaxis";
  import { graphDrawLines } from "./drawLines";

  export let dataSeries;
  export let margins;
  export let xAxis;
  export let yAxis;

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

    // Draw Plot
    drawXAxis({ container, axis: xAxis });
    drawYAxis({ container, axis: yAxis, serie: dataSeries[0] });
    graphDrawLines(container, dataSeries);
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
