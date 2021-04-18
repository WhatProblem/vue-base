<template>
  <div class="home">
    <el-button type="primary" size="medium" @click="showDialog">按钮</el-button>
  </div>

  <el-dialog title="收货地址" v-model="visible">
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="visible = false" >确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { ref, reactive, Ref } from 'vue'
export default {
	name: 'TS',

	// setup(props, {emit, slots, attrs}) {
	setup() {
		let visible: Ref<boolean> = ref(false)
		const showDialog = () =>{
			console.log(visible)
			visible.value = true
		}

		return {
			showDialog,
			visible,
			formLabelWidth: ref('120px'),
			form: reactive({
				name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
			})
		}
	}
}
</script>