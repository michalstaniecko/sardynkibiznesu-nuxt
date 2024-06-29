<script setup lang="ts">
import { useSettingsStore } from "~/stores/settings";

const { settings } = useSettingsStore();
</script>

<template>
  <div class="bg-gray-800 text-white">
    <div
      class="max-w-screen-xxl mx-auto px-5 py-10 grid md:grid-col-3 lg:grid-cols-5 gap-5"
    >
      <div class="md:col-span-3 lg:col-span-2" v-html="settings?.footer" />
      <div>
        <NuxtLink to="/start/"><strong>Sklep:</strong></NuxtLink>
        <ul>
          <li>
            <NuxtLink to="/regulamin-sklepu/" rel="nofollow"
              >Regulamin sklepu i strony www</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/pakietrodo/" rel="nofollow"
              >Pakiet RODO dla małej firmy</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/umowy/" rel="nofollow"
              >Wzory umów dla małej firmy</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="">
        <strong>Darmowe materiały:</strong>
        <ul>
          <li>
            <NuxtLink
              href="/polityka-prywatnosci-dla-strony-bloga-pobierz-wzor/"
              rel="nofollow"
              >Darmowa polityka prywatności</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/zapis-na-newsletter/" rel="nofollow"
              >Newsletter</NuxtLink
            >
          </li>
          <li>
            <NuxtLink href="/kalkulator-vat/" rel="nofollow"
              >Kalkulator VAT</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="/kalkulator-b2b-wyceny-uslugi-i-stawki-godzinowej/"
              rel="nofollow"
              >Kalkulator B2B wyceny usług i stawki godzinowej</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              href="/kalkulator-podatkowy-dla-jednoosobowej-dzialalnosci-gospodarczej-arkusz-kalkulacyjny-online/"
              rel="nofollow"
              >Kalkulator podatkowy dla małych firm</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="">
        <strong>O nas:</strong>
        <ul>
          <li>
            <NuxtLink href="/kontakt/" rel="nofollow">Kontakt</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/blogu/" rel="nofollow">O blogu</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/tu-zacznij/" rel="nofollow">Tu zacznij</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
