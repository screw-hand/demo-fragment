(function () {

  // File对象
  let hwFile = new File(['Hello World!'], 'hello-world.txt', { type: 'text/plain' })
  console.log(hwFile)

  const newFileBtn = document.querySelector('#new-file')
  newFileBtn.onclick = function () {
    // 创建文件
    let file = new File(['Hello World!'], 'hello-world.txt', { type: 'text/plain' })
    console.log(hwFile)

    // 下载文件
    // window.open(URL.createObjectURL(file))
    const aLink = document.createElement('a')
    aLink.setAttribute('href', URL.createObjectURL(file))
    aLink.setAttribute('download', file.name)
    document.body.append(aLink)
    aLink.click()
    document.body.removeChild(aLink)
  }

  const downloadNewFileLink = document.querySelector('#download-new-file')
  downloadNewFileLink.setAttribute('href', URL.createObjectURL(hwFile))
  aLink.setAttribute('download', hwFile.name)

})();
