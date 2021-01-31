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

})();