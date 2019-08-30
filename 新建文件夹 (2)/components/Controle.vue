<template>
	<div>
		<button @click="handleFilter('all')">{{$t('control.all')}}</button>
        <button @click="handleFilter(1)">{{$t('control.weekend')}}</button>
		<button @click="handleFilter(2)">{{$t('control.holiday')}}</button>
		<button @click="handleFilter(3)">{{$t('control.workingDay')}}</button>
		<el-button @click="handleShow()">{{$t('control.add')}}</el-button>

		<el-dialog
		:title="$t('control.add')"
		:visible.sync="dialogVisible"
		width="300px"
		:before-close="handleClose">
		<el-input v-model="nickname" :placeholder="$t('control.username')"></el-input>
		<span slot="footer" class="dialog-footer">
			<el-button @click="handleClose()">{{$t('control.cancel')}}</el-button>
			<el-button type="primary" @click="handleAdd()">{{$t('control.ok')}}</el-button>
		</span>
		</el-dialog>		
	</div>
</template>

<script type="text/javascript">
import Api from '@/api/index.js'

function getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}

export default {
	name: 'Control',
    data() {
      return {
		dialogVisible: false,
		nickname: ''
      };
    },	
	methods: {
        handleFilter(type) {
            this.$store.commit('list/filter', type)
		},
		handleShow() {
			this.dialogVisible = true
			this.nickname = ''
		},
		handleClose() {
			this.dialogVisible = false
		},
		handleAdd() {
			let data = {
				applicationNumber: getID(6),
				nickname: this.nickname
			}
			Api.addItem(data).then(() => {
				this.dialogVisible = false
				this.$store.dispatch('list/initList')
			})
		}
	}
}
</script>