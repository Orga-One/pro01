<template>
	<div>
		<h2>简易加法计算器</h2>
		<div>
			<input type="button" name="" id="" value="-" @click="delHandel"/>
			<span>{{num}}</span>
			<input type="button" value="+"  @click="addHandel"/>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			num(){
				return this.$store.state.count
			}
		},

		methods: {
			addHandel() {
				// 点击时，提交一个mutation 提交addIncrement，改变状态state
				// this.$store.commit("addIncrement", 5)
				//第二种提交mutation的方法如下
				this.$store.commit({
					type: 'addIncrement',
					add: 10
				})

			},
			delHandel(){
				// 传参时 传单个参数 可以直接传，多个参数时，以对象的 形式传参
				// this.$store.commit("delIncrement",{
				// 	m:5
				// })



				//有异步操作的时候 先触发action
				this.$store.dispatch("addAction") // addAction action的名字
			}
		}
	}
</script>
<style>
	
</style>