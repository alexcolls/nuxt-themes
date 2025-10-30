<template>
  <div
    class="w-96 sm:w-[520px] space-y-6 border
      backdrop-filter backdrop-blur-xl rounded-2xl border-primary-500
      transition-all duration-500 !bg-gray-200/20 dark:!bg-gray-800/20
      shadow-lg shadow-primary-700/40 dark:shadow-primary-300/40
      rounded-tl-none rounded-br-none px-8 sm:px-12"
    :style="{ height: panelHeight }"
    @mouseenter="handleHover(true)"
    @mouseleave="handleHover(false)"
  >
    <transition name="fade-scale" mode="out-in">
      <div v-if="isError" key="error" class="w-full text-center pt-6">
        <UIcon
          name="i-heroicons-lock-closed-solid"
          class="h-16 w-16 text-red-500 animate-pulse"
        />
      </div>
      <div v-else-if="isLogin" key="success" class="w-full text-center pt-6">
        <UIcon
          name="i-heroicons-lock-open-solid"
          class="h-16 w-16 text-green-500 animate-pulse"
        />
      </div>
      <div v-else key="login">
        <CommonTxtColor
          class="text-center text-primary-800 dark:text-primary-200
            mt-10 uppercase tracking-widest"
        >
          {{ $t('login') }}
        </CommonTxtColor>
      </div>
    </transition>
    <transition name="fade">
      <UForm
        v-if="isHovered"
        :state="state"
        class="space-y-4 pt-4"
        @submit="onSubmit"
      >
        <UFormGroup
          :label="$t('user')"
          :ui="{ label: { base: '!text-black dark:!text-white' } }"
        >
          <UInput
            v-model="state.user"
            variant="none"
            required
            autocomplete="username"
            class="border border-primary rounded-md text-primary-500
              transition-all duration-500"
            icon="i-heroicons-user"
            :ui="{
              icon: { base: '!text-primary-500' },
              base: '!bg-white/80 dark:!bg-black/80'
            }"
          />
        </UFormGroup>
        <transition name="fade">
          <UFormGroup
            v-if="validUsername"
            :label="$t('pass')"
            :ui="{ label: { base: '!text-black dark:!text-white' } }"
          >
            <UInput
              v-model="state.pass"
              variant="none"
              type="password"
              required
              autocomplete="current-password"
              class="border border-primary rounded-md text-primary-500
                transition-all duration-500"
              icon="i-heroicons-key"
              :ui="{
                icon: { base: '!text-primary-500' },
                base: '!bg-white/80 dark:!bg-black/80'
              }"
            />
          </UFormGroup>
        </transition>
        <transition name="fade">
          <div
            v-if="validUsername && validPassword"
            class="flex justify-center pt-6"
          >
            <CommonBtnGradient
              type="submit"
              class="group px-12 pr-14 py-2 transition-all duration-300
                ease-in-out rounded-full hover:shadow-lg shadow-white"
              icon="i-heroicons-rocket-launch-16-solid"
            >
              {{ $t('btn.go') }}
            </CommonBtnGradient>
          </div>
        </transition>
      </UForm>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  onLogin?: (user: string, pass: string) => Promise<boolean>;
}>();

const { ui } = useNuxtUxStore();

const state = reactive({
  user: '',
  pass: ''
});

const isHovered = ref(false);
const isHoveredAllowed = ref(true);

const handleHover = (hovering: boolean) => {
  if (hovering && isHoveredAllowed.value) {
    isHovered.value = hovering;
  } else {
    isHovered.value = false;
  }
};

const validUsername = computed(() => state.user.length > 3);
const validPassword = computed(() => state.pass.length > 8);

const panelHeight = computed(() => {
  if (!isHovered.value) {
    return '120px';
  }
  if (validUsername.value) {
    return validPassword.value ? '360px' : '280px';
  }
  return '220px';
});

const loginTime = 2000;
const errorTime = 5000;
const isError = ref(false);

const startError = () => {
  isError.value = true;
  isHovered.value = false;
  isHoveredAllowed.value = false;
};

const endError = async () => {
  await new Promise(resolve => setTimeout(resolve, errorTime));
  isError.value = false;
  isHoveredAllowed.value = true;
};

const isLogin = ref(false);

const onSubmit = async () => {
  if (props.onLogin) {
    try {
      const success = await props.onLogin(state.user, state.pass);
      if (success) {
        isLogin.value = true;
        isHovered.value = false;
        isHoveredAllowed.value = false;
        await new Promise(resolve => setTimeout(resolve, loginTime));
        isLogin.value = false;
      } else {
        startError();
        await endError();
      }
    } catch (err) {
      startError();
      await endError();
    }
  } else {
    // Demo mode - always succeed
    isLogin.value = true;
    isHovered.value = false;
    isHoveredAllowed.value = false;
    await new Promise(resolve => setTimeout(resolve, loginTime));
    isLogin.value = false;
    navigateTo('/');
  }
};
</script>

<style scoped>
div {
  transition: height 0.5s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
