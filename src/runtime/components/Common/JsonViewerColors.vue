<template>
  <div
    :class="{ dark: ui.isDark }"
    :style="primaryStyle"
    class="relative p-4 bg-white dark:bg-gray-900 rounded"
  >
    <pre class="text-left text-sm json-pre break-all">
      <code ref="codeBlock" class="-mt-3 -mb-7" />
    </pre>
  </div>
</template>

<script setup lang="ts">
import DOMPurify from 'dompurify';
import { highlight, languages } from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-json';

const { ui } = useStore();

const props = defineProps({
  jsonData: {
    type: Object,
    required: true
  },
  stringData: {
    type: String,
    required: false
  }
});

const codeBlock = ref<HTMLElement | null>(null);

watchEffect(() => {
  if (codeBlock.value) {
    const jsonString = JSON.stringify(props.jsonData, null, 2).trim();
    const highlightedJson = highlight(jsonString, languages.json, 'json');
    codeBlock.value.innerHTML = DOMPurify.sanitize(highlightedJson);
  }
});

const primaryColors: Record<string, string> = {
  orange: '#F97316',
  red: '#EF4444',
  rose: '#F43F5E',
  pink: '#EC4899',
  fuchsia: '#D946EF',
  purple: '#8B5CF6',
  violet: '#7C3AED',
  indigo: '#6366F1',
  sky: '#0EA5E9',
  cyan: '#06B6D4',
  teal: '#14B8A6',
  emerald: '#10B981',
  green: '#22C55E',
  lime: '#84CC16',
  amber: '#F59E0B',
  stone: '#78716C',
  neutral: '#737373',
  zinc: '#71717A',
  cool: '#64748B',
  slate: '#64748B'
};

const primaryStyle = computed(() => {
  return {
    '--primary-color': primaryColors[ui.primary] || primaryColors.orange,
    '--value-color': ui.isDark
      ? 'rgba(255,255,255,0.9)'
      : 'rgba(0,0,0,0.9)'
  };
});

</script>

<style>

.json-pre {
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
}

.json-pre code {
  display: block;
  padding-left: 0;
  white-space: pre-wrap;
}

.token.property {
  color: var(--primary-color);
}

.token.string,
.token.number,
.token.boolean,
.token.null {
  color: var(--value-color);
}

</style>
