<template>
	<div>
		<v-data-table :headers="headers" @click:row="Redirec = true, redirecionar()" :items="Transcripciones"
			item-key="name" class="elevation-1" :search="search"
			:footer-props="{ 'items-per-page-text': elementPerPage, }">
			<!-- :custom-filter="filterOnlyCapsText" -->
			<template v-slot:top>
				<v-text-field v-model="search" :label="[[Mlist5]]" class="mx-4"></v-text-field>
			</template>
			<template body append>
				<tr>
					<td></td>
					<td colspan="4"></td>
				</tr>
			</template>
			<template v-slot:[`footer.page-text`]="{
				pageStart,
				pageStop
			}">
				{{ getTextCountElementPerPage(pageStart, pageStop) }}
			</template>
		</v-data-table>
		<div class="text-center">
			<v-dialog v-model="Redirec" hide-overlay persistent width="300">
				<v-card color="primary" dark>
					<v-card-text>
						{{ Mlist6 }}
						<v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
					</v-card-text>
				</v-card>
			</v-dialog>
		</div>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EditView from "@/views/Inicio/EditView.vue"
import Util from '@/utils/Util';
import axios from "axios";
import { ITtanscrit } from '@/model/ListView/Variables';
@Component({
	name: 'ListView',
})
export default class ListView extends Vue {
	public elementPerPage = this.$t("List.elementPerPage");
	public countElementPage = this.$t("List.countElementPage");
	public Mlist5 = this.$t("List.Mlist5");
	public Mlist6 = this.$t("List.Mlist6");

	public Transcripciones: Array<ITtanscrit> = [];
	public Redirec = false;
	public search = false;
	public Enviar = null; /* "FALRESP_20220910-125556_56953670812_485_175459783-all.mp3" */
	public ValorResibido = null;
	mounted(): void {
		this.getData();
	}
	Variable(value) {
		this.ValorResibido = value;
	}
	data() {
		return {
			search: '',
			dialog: false,
			Transcripciones: [],

			headers: [
				{ text: this.$t("List.Mlist1") as string, value: 'AudioNombre' },
				{ text: this.$t("List.Mlist2") as string, value: 'Confidence' },
				{ text: this.$t("List.Mlist3") as string, value: 'Campania' },
				{ text: this.$t("List.Mlist4") as string, value: 'Cliente' }
			]
		}
	}
	filterOnlyCapsText(value, search, item) {
		return value != null &&
			search != null &&
			typeof value == 'number' &&
			value.toString().toLocaleUpperCase().indexOf(search) !== -1
	}
	redirecionar() {
		setTimeout(() => (this.Redirec = false, this.$router.push('edit')), 3000)
	}
	async getData() {
		let headersList = {
			"Accept": "*/*",
			"User-Agent": "Thunder Client (https://www.thunderclient.com)",
			"Content-Type": "application/json",
			"Authorization": "Basic dXN1YXJpbzE6dXN1YXJpbzE="
		}
		let reqOptions = {
			url: "http://localhost:9090/Transcripciones",
			method: "GET",
			headers: headersList,
		}
		let response = await axios.request(reqOptions);
		this.Transcripciones = JSON.parse(response.data)
		console.log(this.elementPerPage)
	}
	public getTextCountElementPerPage(
		to: number,
		end: number
	): string {
		let text = Util.replaceTextWith(
			this.countElementPage as string,
			'$1',
			to.toString()
		);
		text = Util.replaceTextWith(
			text,
			'$2',
			end.toString()
		);
		return text;
	}

}
</script>
<style>
.body {
	background-color: #c0e9d5;
}
</style>
  



