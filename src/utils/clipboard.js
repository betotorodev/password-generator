export const copyClipboard = ({ password }) => {
  navigator.clipboard.writeText(password)
  import('https://cdn.skypack.dev/wc-toast').then(({ toast }) =>
    toast('Copied', {
      duration: 2000,
      icon: {
        type: 'success'
      }
    })
  )
}