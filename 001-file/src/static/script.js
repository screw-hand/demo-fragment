(function () {
  // 下载文件
  function downloadFile(fileName, file) {
    const isBlob = file instanceof Blob
    const href = isBlob ? URL.createObjectURL(file) : file

    const aLink = document.createElement('a')
    aLink.setAttribute('href', href)
    aLink.setAttribute('download', fileName)
    document.body.append(aLink)
    aLink.click()
    document.body.removeChild(aLink)
  }

  const newFileBtn = document.querySelector('#new-file')
  newFileBtn.onclick = function () {
    // 创建文件
    const file = new File([JSON.stringify({ hello: "world" })], 'hello-world.json', { type: 'application/json' })
    console.log(file)

    downloadFile(file.name, file)
  }

  const blobBtn = document.querySelector('#blob')
  blobBtn.onclick = function () {
    const blob = new Blob([JSON.stringify({ hello: "world" })], { type: 'application/json' })
    console.log(blob)
    blob.text().then(x => console.log(x))

    downloadFile('hello-world.json', blob)
  }

  const dataURLBtn = document.querySelector('#data-url')
  dataURLBtn.onclick = function () {
    const dataURL = `data:application/json,${JSON.stringify({ "hello": "world" })}`
    console.log(dataURL)

    downloadFile('hello-world.json', dataURL)
  }

  const downloadApiBtn = document.querySelector('#download-api-btn')
  downloadApiBtn.onclick = function () {
    const fileName = document.querySelector('#file-name').value
    const type = document.querySelector('#download-type').value

    fetch(`/api/file/download?fileName=${fileName}&type=${type}`)
      .then(async response => {
        if (type === 'file') {
          let blob = await response.blob()
          downloadFile(fileName, blob)
          // 也可以使用window.open
          // window.open(`/api/file/download?fileName=${fileName}&type=${type}`, '_blank')
          return
        }

        let json = await response.json()

        if (json && json.code === 1) {
          const data = json.data
          if (type === 'content') {
            const blob = new Blob([data.toString()])
            downloadFile(fileName, blob)
          } else if (type === 'base64') {
            downloadFile(fileName, data)
          } else if (type === 'path') {
            window.open(data, '_blank')
          }
        }
      })
  }

})();