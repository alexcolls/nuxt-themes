import { ref, computed, type Ref } from 'vue'

export interface GlassWindowPosition {
  x: number
  y: number
}

export interface GlassWindowSize {
  width: number
  height: number
}

export interface GlassWindowTab {
  id: string
  title: string
  icon?: string
  badge?: number | string
  disabled?: boolean
}

export interface GlassWindowConfig {
  title: string
  icon?: string
  defaultPosition?: GlassWindowPosition
  defaultSize?: GlassWindowSize
  minSize?: GlassWindowSize
  maxSize?: GlassWindowSize
  resizable?: boolean
  draggable?: boolean
  persistent?: boolean
  defaultOpen?: boolean
  blurAmount?: 'sm' | 'md' | 'lg' | 'xl'
  opacity?: number
}

export interface DragState {
  isDragging: boolean
  offsetX: number
  offsetY: number
  startX: number
  startY: number
}

export interface ResizeState {
  isResizing: boolean
  direction: ResizeDirection | null
  startX: number
  startY: number
  startWidth: number
  startHeight: number
}

export type ResizeDirection = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

export function useGlassWindow(config: GlassWindowConfig, storageKey?: string) {
  const isOpen = ref(config.defaultOpen ?? false)
  const position = ref<GlassWindowPosition>(
    config.defaultPosition ?? { x: 0, y: 0 }
  )
  const size = ref<GlassWindowSize>(
    config.defaultSize ?? { width: 600, height: 400 }
  )
  const isMaximized = ref(false)
  const isMinimized = ref(false)
  const dragState = ref<DragState>({
    isDragging: false,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
  })
  const resizeState = ref<ResizeState>({
    isResizing: false,
    direction: null,
    startX: 0,
    startY: 0,
    startWidth: 0,
    startHeight: 0,
  })

  // Computed properties
  const blurClass = computed(() => {
    const blurMap = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl',
    }
    return blurMap[config.blurAmount ?? 'md']
  })

  const transformStyle = computed(() => {
    if (isMaximized.value) {
      return 'translate(0, 0)'
    }
    return `translate(${position.value.x}px, ${position.value.y}px)`
  })

  const sizeStyle = computed(() => {
    if (isMaximized.value) {
      return {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
      }
    }
    return {
      width: `${size.value.width}px`,
      height: `${size.value.height}px`,
      maxWidth: config.maxSize ? `${config.maxSize.width}px` : undefined,
      maxHeight: config.maxSize ? `${config.maxSize.height}px` : undefined,
      minWidth: config.minSize ? `${config.minSize.width}px` : '300px',
      minHeight: config.minSize ? `${config.minSize.height}px` : '200px',
    }
  })

  // Actions
  function toggle() {
    isOpen.value = !isOpen.value
    saveState()
  }

  function open() {
    isOpen.value = true
    isMinimized.value = false
    saveState()
  }

  function close() {
    isOpen.value = false
    saveState()
  }

  function maximize() {
    isMaximized.value = !isMaximized.value
    saveState()
  }

  function minimize() {
    isMinimized.value = !isMinimized.value
    saveState()
  }

  function setPosition(newPosition: GlassWindowPosition) {
    position.value = constrainPosition(newPosition)
    saveState()
  }

  function setSize(newSize: GlassWindowSize) {
    size.value = constrainSize(newSize)
    saveState()
  }

  function resetPosition() {
    if (config.defaultPosition) {
      position.value = { ...config.defaultPosition }
      saveState()
    }
  }

  function resetSize() {
    if (config.defaultSize) {
      size.value = { ...config.defaultSize }
      saveState()
    }
  }

  function constrainPosition(pos: GlassWindowPosition): GlassWindowPosition {
    const maxX = window.innerWidth - size.value.width
    const maxY = window.innerHeight - size.value.height
    return {
      x: Math.max(0, Math.min(pos.x, maxX)),
      y: Math.max(0, Math.min(pos.y, maxY)),
    }
  }

  function constrainSize(newSize: GlassWindowSize): GlassWindowSize {
    const constrained = { ...newSize }

    if (config.minSize) {
      constrained.width = Math.max(constrained.width, config.minSize.width)
      constrained.height = Math.max(constrained.height, config.minSize.height)
    }

    if (config.maxSize) {
      constrained.width = Math.min(constrained.width, config.maxSize.width)
      constrained.height = Math.min(constrained.height, config.maxSize.height)
    }

    return constrained
  }

  function saveState() {
    if (!config.persistent || !storageKey) return

    const state = {
      isOpen: isOpen.value,
      position: position.value,
      size: size.value,
      isMaximized: isMaximized.value,
      isMinimized: isMinimized.value,
    }

    localStorage.setItem(storageKey, JSON.stringify(state))
  }

  function loadState() {
    if (!config.persistent || !storageKey) return

    const saved = localStorage.getItem(storageKey)
    if (!saved) return

    try {
      const state = JSON.parse(saved)
      isOpen.value = state.isOpen ?? isOpen.value
      position.value = state.position ?? position.value
      size.value = state.size ?? size.value
      isMaximized.value = state.isMaximized ?? isMaximized.value
      isMinimized.value = state.isMinimized ?? isMinimized.value
    } catch (e) {
      console.warn('Failed to load GlassWindow state:', e)
    }
  }

  return {
    // State
    isOpen,
    position,
    size,
    isMaximized,
    isMinimized,
    dragState,
    resizeState,

    // Computed
    blurClass,
    transformStyle,
    sizeStyle,

    // Actions
    toggle,
    open,
    close,
    maximize,
    minimize,
    setPosition,
    setSize,
    resetPosition,
    resetSize,
    saveState,
    loadState,
    constrainPosition,
    constrainSize,
  }
}
