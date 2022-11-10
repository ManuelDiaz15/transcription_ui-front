<template>
  <div>
    <Lista />
  </div>
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { internet } from '@/utils/Internet';
	import { AxiosResponse } from 'axios';
	import Util from '@/utils/Util';
	import DataTable from '@/components/util/DataTable.vue';
	import Lista from '@/components/util/Lista.vue';
	@Component({
		name: 'ListView',
		components: {
			DataTable,
			Lista
		}
	})
	export default class ListView extends Vue {

	}
</script>