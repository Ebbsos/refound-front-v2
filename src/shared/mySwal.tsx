// src/utils/alerts.ts
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const MySwal = withReactContent(Swal);

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    (toast.parentElement as HTMLElement).style.zIndex = "20000";
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export function toastSuccess(title: string) {
  return Toast.fire({ icon: "success", title, allowOutsideClick: true, allowEscapeKey: true });
}

export function toastError(title: string) {
  return Toast.fire({ icon: "error", title, allowOutsideClick: true, allowEscapeKey: true });
}

export function alertError(title: string, text?: string) {
  return Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "Entendido",
  });
}

export function alertErrorW(title: string, text?: string) {
  return Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: false,
     timer: 1000    
  });
}

export function alertSuccess(title: string, text?: string) {
  return Swal.fire({
    icon: "success",
    title,
    text,
    confirmButtonText: "OK",
  });
}

export const confirmDelete = (options: {
  title: string;
  text: string;
}) => {
  return Swal.fire({
    icon: "warning",
    title: options.title,
    text: options.text,
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d32f2f",
    reverseButtons: true,

    // 🔥 CLAVE
    didOpen: () => {
      const container = Swal.getContainer();
      if (container) {
        container.style.zIndex = "2000";
      }
    },
  }).then((r) => r.isConfirmed);
};



function forceZIndex() {
  const container = Swal.getContainer();
  if (container) container.style.zIndex = "20000";
}

export async function confirmAction(options: {
  title: string;
  text?: string;
  confirmText?: string;
}) {
  const result = await Swal.fire({
    icon: "question",
    title: options.title,
    text: options.text,
    showCancelButton: true,
    confirmButtonText: options.confirmText ?? "Confirmar",
    cancelButtonText: "Cancelar",
    didOpen: forceZIndex

  });

  return result.isConfirmed;
}


export const onBeforeGetContent = async () => {
  MySwal.fire("Imprimiendo ticket...");
  MySwal.showLoading();
  await new Promise((r) => setTimeout(r, 50));
};

export const onAfterPrint = () => {
  MySwal.close();
};