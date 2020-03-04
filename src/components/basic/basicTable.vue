<template>
  <div>
    <!-- 头部搜索 -->
    <section>
         <slot name="search"></slot>
    
    </section>
    <section class="page-body" v-show="isShowActionBar">
      <slot name="action"></slot>
    </section>
    <!-- 表格主体 -->
    <section class="page-body">
      <Table :loading="loading" :data="data" :columns="columns"></Table>
    </section>

    <!-- 底部分页 -->
    <section class="page-footer">
      <Page
        :total="totalCount"
        show-total
        show-sizer
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowActionBar: true,
      isShowSearchBar: true,
      loading: false,
      data: [],
      requestTableData:null,
      columns: [
        {
          title: "名称",
          key: "title"
        }
      ],
      totalCount: 1,
      params: {
        pageSize: 10,
        pageIndex: 1
      }
    };
  },
  methods: {
    initTableOptions(columnOptions= [{
        title:'tilename',
        key:'title'
    }],requestTableData){  
        this.requestTableData = requestTableData;
        this.columns = columnOptions
        this.getData()
    },
    async getData() {
        let data = await this.requestTableData()
        this.data = data.data
        this.totalCount = data.count
    },
    pageChange(pageIndex) {
      this.params.pageIndex = pageIndex;
      this.getData();
    },
    pageSizeChange(pageSize) {
      this.params.pageSize = pageSize;
      this.getData();
    },
    searchData(searchParams = {

    }){
        this.params = {
            ...this.params,
            ...searchParams
        }
        this.getData()
    },
  }
};
</script>

<style lang="less" scoped>
.page-body {
  margin-top: 10px;
}
.page-footer {
  margin-top: 10px;
}
</style>
