/* eslint-disable max-len */
export default {
  title: 'INNOCV Smart Doc AI',
  description: '',
  header: {},
  footer: {
    copyright: '© INNOCV Smart Doc AI. Todos los derechos reservados.'
  },
  name: 'Nombre',
  addName: 'Agregar nombre del nuevo tipo de documento',
  prompt: 'Prompt',
  addPrompt: 'Agregar la solicitud para el nuevo tipo de documento',
  processPageByPage: 'Procesar ficheros página a página',
  processSinglePage: 'Procesar ficheros como una sola página',
  samples: 'Muestras',
  sample: 'Muestra',
  optionalSamples: 'Opcional. Agregar un archivo de muestra',
  upload: 'Subir documentos',
  loading: 'Cargando',
  login: 'Iniciar sesión',
  logout: 'Cerrar sesión',
  user: 'Nombre de usuario',
  pass: 'Contraseña',
  processQueue: 'Procesando la cola',
  docType: 'Tipo de documento',
  newType: 'Nuevo tipo de documento',
  noSelected: 'No se ha seleccionado ningún tipo de documento',
  addDocType: 'Crear nuevo tipo de documento',
  editDocType: 'Editar tipo de documento',
  confirmDelete: 'Por favor, confirme la eliminación del tipo de documento.',
  deleteDescription: 'ADVERTENCIA: Esta acción es irreversible, perderá todo el historial del documento.',
  uploadAndProcess: 'Subir y procesar archivo(s)',
  emptyChat: 'Este chat está vacío. Sube al menos un archivo para iniciar este chat.',
  selectDoc: 'Selecciona un tipo de documento',
  docNoSelected: 'No se ha seleccionado ningún tipo de documento. Por favor, seleccione un tipo de documento primero.',
  expResponse: 'Respuesta esperada',
  addResponse: 'Agregue la respuesta deseada para cada documento',
  deleteResponse: 'Eliminar respuesta',
  confirmDeleteResult: 'Por favor, confirme la eliminación del mensaje.',
  addSample: 'Agregar muestra',
  addNewSample: 'Agregar nueva muestra',
  errorProcessing: 'Error al procesar el archivo',
  datetime: 'Fecha y hora',
  engine: 'Motor',
  tokens: 'Tokens',
  responseIn: 'Respuesta en',
  system: 'Sistema',
  enterAValidVideoURL: 'Ingrese una url de video válida',
  showOptions: 'Mostrar opciones',
  showVideo: 'Activar video',
  videoURL: 'URL del video',
  videoOpacity: 'Opacidad del video',
  flashlight: 'Linterna',
  unauthorized: 'No autorizado',
  volume: 'Volumen',
  volumeFX: 'Volumen de FX',
  volumeVideo: 'Volumen del video',
  aiIsProcessingTheFile: 'está procesando el fichero',
  extension: 'Extensión',
  status: 'Estado',
  btn: {
    go: 'IR',
    accept: 'Aceptar',
    submit: 'Enviar',
    send: 'Enviar',
    upload: 'Subir',
    edit: 'Editar',
    duplicate: 'Duplicar',
    copy: 'Copiar',
    delete: 'Eliminar',
    deleted: 'Eliminado',
    cancel: 'Cancelar',
    add: 'Añadir',
    rmv: 'Quitar',
    back: 'Atrás',
    next: 'Siguiente',
    prev: 'Anterior',
    search: 'Buscar',
    clear: 'Limpiar',
    save: 'Guardar'
  },
  toast: {
    login: {
      success: {
        title: 'Inicio de sesión exitoso',
        desc: 'Ha iniciado sesión correctamente'
      },
      error: {
        title: 'Error de inicio de sesión',
        desc: 'Ocurrió un error durante el inicio de sesión'
      },
      unauthorized: {
        title: 'Error al iniciar sesión',
        desc: 'Los credendiacles introducidoes no son válidos'
      }
    },
    logout: {
      success: {
        title: 'Cierre de sesión exitoso',
        desc: 'Ha cerrado sesión correctamente'
      },
      error: {
        title: 'Error de cierre de sesión',
        desc: 'Ocurrió un error durante el cierre de sesión'
      }
    },
    addType: {
      success: {
        title: 'Tipo de documento agregado exitosamente',
        desc: 'El tipo de documento se agregó correctamente'
      },
      error: {
        title: 'Error al agregar tipo de documento',
        desc: 'Ocurrió un error al agregar el tipo de documento'
      }
    },
    editType: {
      success: {
        title: 'Tipo de documento editado exitosamente',
        desc: 'El tipo de documento se editó correctamente'
      },
      error: {
        title: 'Error al editar tipo de documento',
        desc: 'Ocurrió un error al editar el tipo de documento'
      }
    },
    duplicateType: {
      success: {
        title: 'Tipo de documento duplicado',
        desc: 'El tipo de documento se duplicó correctamente'
      },
      error: {
        title: 'Error al duplicar tipo de documento',
        desc: 'Ocurrió un error al duplicar el tipo de documento'
      }
    },
    deleteType: {
      success: {
        title: 'Tipo de documento eliminado exitosamente',
        desc: 'El tipo de documento se eliminó correctamente'
      },
      error: {
        title: 'Error al eliminar tipo de documento',
        desc: 'Ocurrió un error al eliminar el tipo de documento'
      }
    },
    downloadFile: {
      success: {
        title: 'Archivo descargado exitosamente',
        desc: 'El archivo se descargó correctamente'
      },
      error: {
        title: 'Error al descargar archivo',
        desc: 'Ocurrió un error al descargar el archivo'
      }
    },
    uploadFile: {
      success: {
        title: 'Archivo subido exitosamente',
        desc: 'El archivo se subió con éxito y la IA lo está procesando'
      },
      error: {
        title: 'Error al subir archivo',
        desc: 'Ocurrió un error al subir el archivo'
      },
      missing: {
        title: 'Archivo faltante',
        desc: 'No se seleccionó ningún archivo para subir'
      },
      errorProcessing: {
        title: 'Error al procesar archivo',
        desc: 'Ocurrió un error al procesar el archivo subido'
      }
    },
    deleteResult: {
      success: {
        title: 'Mensaje eliminado',
        desc: 'El mensaje se eliminó correctamente'
      },
      error: {
        title: 'Error al eliminar mensaje',
        desc: 'Ocurrió un error al eliminar el mensaje'
      }
    },
    editResult: {
      success: {
        title: 'Mensaje editado',
        desc: 'El mensaje se editó correctamente'
      },
      error: {
        title: 'Error al editar mensaje',
        desc: 'Ocurrió un error al editar el mensaje'
      }
    },
    simple: {
      copy: {
        success: {
          title: 'Copiado al portapapeles',
          desc: 'Texto copiado al portapapeles correctamente'
        },
        error: {
          title: 'Error al copiar',
          desc: 'Ocurrió un error al copiar el texto al portapapeles'
        }
      }
    }
  },
  error: {
    back: 'Volver al inicio',
    video: 'Tu navegador no soporta la etiqueta de video.',
    loadingImage: 'No se pudo cargar la imagen',
    404: {
      title: 'Página no encontrada',
      desc: 'La página que estás buscando no existe.'
    }
  }
};
