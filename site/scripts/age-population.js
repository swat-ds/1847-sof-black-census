// Load the Observable runtime and inspector.
import { Runtime, Inspector } from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";

// Your notebook, compiled as an ES module.
import notebook from "https://api.observablehq.com/@kkxix/stacked-bar-chart.js?v=3";

// Load the notebook, observing its cells with a default Inspector
// that simply renders the value of each cell into the provided DOM node.
const div = document.getElementById('age-population')
// new Runtime().module(notebook, Inspector.into(div));

new Runtime().module(notebook, name => {
    if (name === "chart") {
        return new Inspector(document.querySelector("#age-population"));
    }
    if (name === "legend") {
        return new Inspector(document.querySelector('#legend-age-population'));
    }
});