<template>
  <div>
    <Form ref="baseForm" :model="formParams">
      <FormItem
        v-for="(item, index) in formParams.items"
        :key="index"
        :label="item.label"
        :prop="'items.' + index + '.value'"
        :rules="{required: item.required, message:item.label+'必填',trigger:'blur'}"
      >
      <Input :type="item.type" v-model="item.value"></Input>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formParams: {
        items: [
          {
            label: "名称",
            required: true,
            value: "title"
          }
        ]
      }
    };
  },
  methods: {
    setFormDataModel(
      items = [
        {
          label: "名称",
          required: true,
          value: "title"
        }
      ]
    ) {
      this.formParams.items = items;
    },
    validate(){
        return this.$refs.baseForm.validate()
    },
    getFormValue(){
      return this.formParams
    }
  }
};
</script>

<style>
</style>
