<template>
    <div class="table">
        <div class="table-headers">
            <div v-for="header in headers" :key="header" class="table-header">
                <p class="table-header-text">{{header}}</p>
            </div>
        </div>
        <div v-if="loadingData" class="message-height">Loading...</div>
        <div v-else-if="!tableData.length" class="message-height">No data</div>
        <div v-else class="table-content">
            <div v-for="data in tableData" :key="data.stocks" class="table-content-row">
                <div class="table-content-cell"> {{ data.stock }} </div>
                <div class="table-content-cell"> {{ data.current }} </div>
                <div class="table-content-cell" :class="{ positive: data.change >= 0, negative: data.change < 0 }"> {{getChangeString(data.change) }} </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DivTable",
    props: {
      headers: {
        type: Array,
        default: () => ['Stock', 'Current', 'Change']
      },
      tableData: {
        type: Array
      },
      loadingData: {
        type:Boolean
      }
    },
    methods: {
      getChangeString (change) {
        return change < 0 ? change : `+${change}`
      }
    }
  }
</script>

<style scoped>
    .table {
        width: 50%;
        max-width: 500px;
        border-right: 1px solid #d7d7d7;
        border-left: 1px solid #d7d7d7;
        margin: 0 auto;
    }
    .table-headers {
        display: flex;
        background-color: #e7e7e7;
        height: 35px;
        justify-content: space-between;
        padding: 0 1.5rem;
    }
    .table-header-text {
        line-height: 35px;
        font-size: 15px;
        font-weight: 700;
        color: #474747;
    }
    .table-content-row {
        display: flex;
        height: 35px;
        justify-content: space-between;
        padding: 0 1.5rem;
        border-bottom: 1px solid #d7d7d7;
    }
    .table-content-cell {
        line-height: 35px;
    }
    .message-height {
        line-height: 35px;
        border-bottom: 1px solid #d7d7d7;
    }
    .positive {
        color: green;
    }
    .negative {
        color: red;
    }
    @media (max-width: 768px) {
        .table {
            width: 90%;
        }
    }

</style>
