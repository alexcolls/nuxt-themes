<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background video (optional) -->
    <LayoutBgVideo v-if="ui.showVideo && ui.videoURL" />
    
    <!-- Animated background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-gray-900/50 to-primary-900/20" />
    
    <!-- Login form -->
    <div class="relative z-10">
      <AuthLogin :on-login="handleLogin" />
    </div>
    
    <!-- Cursor light effect (optional) -->
    <CommonCursorLight v-if="ui.flashlight" />
  </div>
</template>

<script setup lang="ts">
const { ui, auth } = useNuxtXuiStore();

// Check if already authenticated
if (auth.isAuth) {
  navigateTo('/');
}

// Demo login handler
const handleLogin = async (user: string, pass: string): Promise<boolean> => {
  // In a real app, you would make an API call here
  // For demo purposes, we'll accept any credentials longer than minimum length
  if (user.length > 3 && pass.length > 8) {
    auth.isAuth = true;
    auth.user = { name: user };
    
    // Navigate to home after successful login
    setTimeout(() => {
      navigateTo('/');
    }, 2000);
    
    return true;
  }
  
  return false;
};
</script>
