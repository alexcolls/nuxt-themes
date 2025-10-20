export const useAppStore = defineStore('nuxt-themes.app', {
  persist: true,
  state: () => ({
    selectedDocType: '',
    selectedDocTypeId: '',
    selectedAiResponseId: '',
    selectedAiEngine: 0,
    selectedAiEngineName: 'GPT-4o',
    isAiProcessing: false,
    isMenuOpen: false,
    chatMenuPosition: 30,
    chatPages: {} as ChatPages,
    modal: {
      isUploadDoc: false,
      isAddDocType: false,
      isEditDocType: false,
      isDeleteDocType: false,
      isDeleteResult: false,
      isAddSample: false
    },
    selectedResultId: '',
    selectedDocId: '',
    addSampleJson: '',
    isUppyLoading: false,
    refreshDocTypes: async () => {},
    refreshChat: async () => {},
    scrollToTop: () => {}
  })
});

export default useAppStore;
