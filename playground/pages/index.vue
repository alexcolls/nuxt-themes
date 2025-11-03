<template>
  <div class="min-h-screen">
    <UxLayoutHeader />
    
    <main class="pt-20">
      <UxCommonContainer>
        <div class="py-12 space-y-8">
          <div class="text-center space-y-4">
            <UxCommonTxtTitle>
              Welcome to Nuxt XUI
            </UxCommonTxtTitle>
            
            <UxCommonTxtSubtitle>
              A comprehensive Nuxt 3 module with 48+ reusable components
            </UxCommonTxtSubtitle>
          </div>
          
          <UxCommonDividerX />
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Feature Cards -->
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-paint-brush" class="w-8 h-8 text-primary-500" />
                <UxCommonTxtColor class="text-xl font-bold">
                  48+ Components
                </UxCommonTxtColor>
              </div>
              <UxCommonTxtText>
                Ready-to-use Layout and Common components built with Nuxt UI
              </UxCommonTxtText>
            </div>
            
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-moon" class="w-8 h-8 text-primary-500" />
                <UxCommonTxtColor class="text-xl font-bold">
                  Dark Mode
                </UxCommonTxtColor>
              </div>
              <UxCommonTxtText>
                Fully integrated theme switching with system preference detection
              </UxCommonTxtText>
            </div>
            
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-language" class="w-8 h-8 text-primary-500" />
                <UxCommonTxtColor class="text-xl font-bold">
                  i18n Ready
                </UxCommonTxtColor>
              </div>
              <UxCommonTxtText>
                Multi-language support with English, Spanish, and French included
              </UxCommonTxtText>
            </div>
          </div>
          
          <UxCommonDividerX />
          
          <div class="text-center space-y-6">
            <UxCommonTxtGradient class="text-2xl font-bold">
              Component Examples
            </UxCommonTxtGradient>
            
            <div class="flex flex-wrap gap-4 justify-center">
              <UxCommonBtnGradient icon="i-heroicons-rocket-launch-16-solid">
                Gradient Button
              </UxCommonBtnGradient>
              
              <UxCommonBtnAccept>Accept</UxCommonBtnAccept>
              <UxCommonBtnCancel>Cancel</UxCommonBtnCancel>
              <UxCommonBtnAdd />
              <UxCommonBtnEdit />
              <UxCommonBtnDelete />
            </div>
            
            <div class="flex justify-center gap-4">
              <UxCommonLoader />
              <UxCommonLoadingDots />
            </div>
            
            <div class="max-w-md mx-auto">
              <UxCommonProgressBar :value="75" />
            </div>
            
            <div class="flex justify-center gap-3">
              <UxCommonKbd>Ctrl</UxCommonKbd>
              <UxCommonKbd>+</UxCommonKbd>
              <UxCommonKbd>K</UxCommonKbd>
            </div>
            
            <div class="flex justify-center">
              <NuxtLink to="/example">
                <UxCommonBtnGradient icon="i-heroicons-arrow-right-circle">
                  View Login Example
                </UxCommonBtnGradient>
              </NuxtLink>
            </div>
          </div>
        </div>
      </UxCommonContainer>
    </main>
    
    <UxLayoutFooter />
    <UxCommonBtnScrollTop />
  </div>
</template>

<script setup lang="ts">
const { auth } = useNuxtUxStore();

// Redirect to example if not authenticated
if (!auth.isAuth) {
  navigateTo('/example');
}
</script>
