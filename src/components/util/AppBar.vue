<template>
	<v-app-bar color="" app>
		<div class="text-center">
		</div>
		<template >
				<v-div >
				<v-avatar :size=35>
					<img  src="@/assets/global.png"/>
				</v-avatar>
				<select
				class="mx-2"
				v-model="$i18n.locale"
				@change="updateLanguage($event.target.value)"
				variant="info">mdi-chevron-down
				<option
				hide-details
				v-for="(o, i) in locales_array"
				:key="i"
				:value="o.value"
				:selected="o.value === locale_default"
				> {{ o.caption }}
				</option>
				</select>
				</v-div>
				<v-spacer></v-spacer>
				<v-list>
					<v-list-item @click="listenLogout"> 
					<v-list-item-title class="btn btn-info btn-lg"> 
						{{ Mnavig4 }}
					</v-list-item-title>
					</v-list-item>
				</v-list>
			</template>
	</v-app-bar>
	</template>
	<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { LOCALES, Locales } from "@/locales/i18n";
	import defaultLocale from "@/i18n";
	@Component({
		name: 'AppBar',
	})
	
	export default class AppBar extends Vue {
		public Mnavig4 = this.$t("Navig.Mnavig4");
		public locales_array = LOCALES;
		public locale_default = defaultLocale;
		public updateLanguage(lang: Locales) {
			console.log("cambiando idioma a ", lang);
			this.$emit('changeEvent', lang);
		}
		public listenLogout() {
				this.$keycloak.logout() 
			}

	}
	</script>