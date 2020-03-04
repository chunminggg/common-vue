<template>
  <div>
    <basic-table ref="basicTable">
      <div slot="search">
        <Card title="数据筛选">
          <a slot="extra" @click="clearSearchValue">清空</a>
          <Row :gutter="24">
            <Col span="4">
              <Input v-model="searParams.text" placeholder="请输入关键词"/>
            </Col>
            <Col span="4">
              <Input v-model="searParams.productNumber" placeholder="请输入产品编号"/>
            </Col>
            <Col span="4">
              <Input v-model="searParams.startDate" placeholder="请选择开始日期"/>
            </Col>
            <Col span="2">
              <Button @click="searchData" type="primary">搜索</Button>
            </Col>
          </Row>
        </Card>
      </div>
    </basic-table>
  </div>
</template>

<script>
import basicTable from "@/components/basic/basicTable";
import { mockTableColumns, mockTableData } from "@/libs/mock";
export default {
  components: {
    basicTable
  },
  mounted() {
    this.setTableOptions();
  },
  data() {
    return {
      searParams: {
        text: "",
        productNumber: "",
        startDate: ""
      }
    };
  },
  methods: {
    clearSearchValue() {
      this.searParams = {
        text: "",
        productNumber: "",
        startDate: ""
      };
    this.$refs.basicTable.searchData(this.searParams);
    },
    searchData() {
      this.$refs.basicTable.searchData(this.searParams);
    },
    setTableOptions() {
      //   初始化表格
      let tableOptions = mockTableColumns;
      let getTableData = () => {
        return {
          data: mockTableData,
          count: 100
        };
      };
      this.$refs.basicTable.initTableOptions(tableOptions, getTableData);
    }
  }
};
</script>

<style>
</style>
