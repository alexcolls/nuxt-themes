<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <LayoutHeader />
    
    <main class="pt-16 pb-14">
      <CommonContainer class="py-8">
        <div class="space-y-8">
          <!-- Hero Section -->
          <div class="text-center space-y-4">
            <CommonTxtTitle>
              Nuxt Themes Module
            </CommonTxtTitle>
            <CommonTxtSubtitle>
              A comprehensive collection of reusable Layout and Common components
            </CommonTxtSubtitle>
          </div>

          <!-- Buttons Demo -->
          <div class="space-y-4">
            <CommonTxtText class="text-lg font-semibold">
              Button Components
            </CommonTxtText>
            <div class="flex flex-wrap gap-4">
              <CommonBtnGradient>
                Gradient Button
              </CommonBtnGradient>
              <CommonBtnAccept />
              <CommonBtnCancel />
              <CommonBtnAdd />
              <CommonBtnEdit />
              <CommonBtnDelete />
              <CommonBtnUpload />
              <CommonBtnReload />
              <CommonBtnSubmit />
            </div>
          </div>

          <!-- Loaders Demo -->
          <div class="space-y-4">
            <CommonTxtText class="text-lg font-semibold">
              Loader Components
            </CommonTxtText>
            <div class="flex flex-wrap gap-4 items-center">
              <CommonLoader />
              <CommonLoaderSimple />
              <CommonLoadingDots />
              <CommonAiLoader />
            </div>
          </div>

          <!-- Text Components -->
          <div class="space-y-4">
            <CommonTxtText class="text-lg font-semibold">
              Text Components
            </CommonTxtText>
            <div class="space-y-2">
              <CommonTxtGradient>
                Gradient Text Example
              </CommonTxtGradient>
              <CommonTxtColor color="primary">
                Colored Text Example
              </CommonTxtColor>
            </div>
          </div>

          <!-- Dividers -->
          <div class="space-y-4">
            <CommonTxtText class="text-lg font-semibold">
              Dividers
            </CommonTxtText>
            <CommonDividerX />
            <CommonDividerY class="h-12" />
          </div>

          <!-- Progress Bar -->
          <div class="space-y-4">
            <CommonTxtText class="text-lg font-semibold">
              Progress Bar
            </CommonTxtText>
            <CommonProgressBar :progress="65" />
          </div>
        </div>
      </CommonContainer>
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Demo page for the Nuxt Themes module
</script>
