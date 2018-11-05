<template>
    <div class="basic-example">
        <l-map style="height: 100%; overflow: auto;" :zoom="10" :center="[47.334852, -1.509485]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <Vue2LeafletHeatmap :latlngs="latlngs" :radius="500"></Vue2LeafletHeatmap>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import Vue2LeafletHeatmap from "vue2-leaflet-heatmap";

export default {
  components: {
    LMap,
    LTileLayer,
    Vue2LeafletHeatmap
  },
  data() {
    return {
      latlngs: [
        [47.334852, -1.509485, 0.2],
        [47.342596, -1.328731, 0.3],
        [47.241487, -1.190568, 0.4],
        [47.234787, -1.358337, 0.5]
      ]
    };
  }
};
</script>

<style>
.basic-example {
  width: 100%;
  height: 500px;
}
</style>
