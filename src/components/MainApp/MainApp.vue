<template>
    <div>
        <button class="button" @click="fetchData">Get Data</button>
        <DivTable :loading-data="loading" :table-data="tableData"/>
    </div>
</template>

<script>
  import simulateAsyncReq from "../../plugins/getDataFunc";
  import DivTable from "../../common/DivTable/DivTable";
  import {payload} from '../../mocData'
  import createValidDatastack from "../../utils/createValidDataStack";

  export default {
    name: "MainApp",
    data () {
      return {
        loading: false,
        tableData: []
      };
    },
    components: {
      DivTable
    },
    methods: {
      async fetchData () {
        try {
          this.loading = true;
          this.tableData = [];
          const res = await simulateAsyncReq(payload);
          this.tableData = createValidDatastack(res);
          console.log('success');
        } catch (e) {
          console.log('error');
          console.error(e);
        } finally {
          this.loading = false;
        }
      }
    }
  }
</script>

<style scoped>
.button {
    width: 165px;
    height: 36px;
    background-color: #e7e7e7;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
    font-size: 15px;
    font-weight: 700;
    color: #474747;
    margin: 2rem auto;
    cursor: pointer;
}
</style>
