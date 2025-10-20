<template>
  <div
    :class="{ 'dark': ui.isDark }"
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
  }
});

const codeBlock = ref<HTMLElement | null>(null);

watchEffect(() => {
  if (codeBlock.value) {
    let jsonString = JSON.stringify(props.jsonData, null, 2);
    jsonString = jsonString.trim();
    const highlightedJson = highlight(jsonString, languages.json, 'json');
    codeBlock.value.innerHTML = DOMPurify.sanitize(highlightedJson);
  }
});

</script>

<style>
:root {
  /* Light mode colors */
  --color-comment-light: #9ca3af; /* Gray-400 */
  --color-punctuation-light: #374151; /* Gray-700 */
  --color-property-light: #f97316; /* Orange-500 */
  --color-string-light: #f43f5e; /* Rose-500 */
  --color-number-light: #60a5fa; /* Blue-400 */
  --color-boolean-light: #f472b6; /* Pink-400 */
  --color-null-light: #3b82f6; /* Blue-500 */
  --color-keyword-light: #eab308; /* Yellow-500 */
  --color-function-light: #14b8a6; /* Teal-500 */
  --color-variable-light: #6366f1; /* Indigo-500 */
  /* Dark mode colors */
  --color-comment-dark: #6366f1; /* Indigo-500 */
  --color-punctuation-dark: #d1d5db; /* Gray-400 */
  --color-property-dark: #34d399; /* Green-500 */
  --color-string-dark: #ec4899; /* Pink-500 */
  --color-number-dark: #ef4444; /* Red-500 */
  --color-boolean-dark: #10b981; /* Emerald-500 */
  --color-null-dark: #22c55e; /* Green-500 */
  --color-keyword-dark: #10b981; /* Emerald-500 */
  --color-function-dark: #f43f5e; /* Rose-500 */
  --color-variable-dark: #fbbf24; /* Amber-400 */
}

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

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--color-comment-light);
}

.token.punctuation {
  color: var(--color-punctuation-light);
}

.token.property {
  color: var(--color-property-light);
}

.token.string {
  color: var(--color-string-light);
}

.token.number,
.token.boolean {
  color: var(--color-number-light);
}

.token.null {
  color: var(--color-null-light);
}

.token.operator,
.token.keyword {
  color: var(--color-keyword-light);
}

.token.function {
  color: var(--color-function-light);
}

.token.variable {
  color: var(--color-variable-light);
}

.dark .token.comment,
.dark .token.prolog,
.dark .token.doctype,
.dark .token.cdata {
  color: var(--color-comment-dark);
}

.dark .token.punctuation {
  color: var(--color-punctuation-dark);
}

.dark .token.property {
  color: var(--color-property-dark);
}

.dark .token.string {
  color: var(--color-string-dark);
}

.dark .token.number,
.dark .token.boolean {
  color: var(--color-number-dark);
}

.dark .token.null {
  color: var(--color-null-dark);
}

.dark .token.operator,
.dark .token.keyword {
  color: var(--color-keyword-dark);
}

.dark .token.function {
  color: var(--color-function-dark);
}

.dark .token.variable {
  color: var(--color-variable-dark);
}
</style>
