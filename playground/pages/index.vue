<template>
  <div class="min-h-screen">
    <LayoutHeader />
    
    <main class="pt-20">
      <CommonContainer>
        <div class="py-12 space-y-8">
          <div class="text-center space-y-4">
            <CommonTxtTitle>
              Welcome to Nuxt XUI
            </CommonTxtTitle>
            
            <CommonTxtSubtitle>
              A comprehensive Nuxt 3 module with 48+ reusable components
            </CommonTxtSubtitle>
          </div>
          
          <CommonDividerX />
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Feature Cards -->
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-paint-brush" class="w-8 h-8 text-primary-500" />
                <CommonTxtColor class="text-xl font-bold">
                  48+ Components
                </CommonTxtColor>
              </div>
              <CommonTxtText>
                Ready-to-use Layout and Common components built with Nuxt UI
              </CommonTxtText>
            </div>
            
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-moon" class="w-8 h-8 text-primary-500" />
                <CommonTxtColor class="text-xl font-bold">
                  Dark Mode
                </CommonTxtColor>
              </div>
              <CommonTxtText>
                Fully integrated theme switching with system preference detection
              </CommonTxtText>
            </div>
            
            <div class="p-6 border border-primary-500/20 rounded-xl backdrop-blur-sm bg-white/5 dark:bg-black/5">
              <div class="flex items-center gap-3 mb-3">
                <UIcon name="i-heroicons-language" class="w-8 h-8 text-primary-500" />
                <CommonTxtColor class="text-xl font-bold">
                  i18n Ready
                </CommonTxtColor>
              </div>
              <CommonTxtText>
                Multi-language support with English, Spanish, and French included
              </CommonTxtText>
            </div>
          </div>
          
          <CommonDividerX />
          
          <div class="text-center space-y-6">
            <CommonTxtGradient class="text-2xl font-bold">
              Component Examples
            </CommonTxtGradient>
            
            <div class="flex flex-wrap gap-4 justify-center">
              <CommonBtnGradient icon="i-heroicons-rocket-launch-16-solid">
                Gradient Button
              </CommonBtnGradient>
              
              <CommonBtnAccept>Accept</CommonBtnAccept>
              <CommonBtnCancel>Cancel</CommonBtnCancel>
              <CommonBtnAdd />
              <CommonBtnEdit />
              <CommonBtnDelete />
            </div>
            
            <div class="flex justify-center gap-4">
              <CommonLoader />
              <CommonLoadingDots />
            </div>
            
            <div class="max-w-md mx-auto">
              <CommonProgressBar :value="75" />
            </div>
            
            <div class="flex justify-center gap-3">
              <CommonKbd>Ctrl</CommonKbd>
              <CommonKbd>+</CommonKbd>
              <CommonKbd>K</CommonKbd>
            </div>
            
            <div class="flex justify-center">
              <NuxtLink to="/example">
                <CommonBtnGradient icon="i-heroicons-arrow-right-circle">
                  View Login Example
                </CommonBtnGradient>
              </NuxtLink>
            </div>
          </div>
        </div>
      </CommonContainer>
    </main>
    
    <LayoutFooter />
    <CommonBtnScrollTop />
  </div>
</template>

<script setup lang="ts">
const { auth } = useNuxtXuiStore();

// Redirect to example if not authenticated
if (!auth.isAuth) {
  navigateTo('/example');
}
</script>
