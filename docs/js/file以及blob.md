## File

File API 提供了浏览器操作计算机中文件的能力

File API 依然以表单中的 file 类型输入框作为基础，即<code><input type='file'/></code>



File API 还提供了一个 FileReader 类型，FileReader类型具有以下四种方法

- readAsText(file[, encoding])    读取纯文本内容，并保存在 result 中，第二个可选参数是表示编码
- readAsDataURL(file)    读取文件并将内容的数据 URL 保存在 result 中
- readAsBinaryString(file)    读取文件并将每个字符的二进制数据都保存在 result 中
- readAsArrayBuffer(file)    读取文件并将文件内容已 ArrayBuffer 的形式保存在 result 中



```js
const fileInput = document.getElementById("file");
fileInput.addEventListener("change", (e) => {
  let files = e.target.files;
  let reader = new FileReader();

  reader.readAsDataURL(files[0]);

  // 读取文件失败
  reader.onerror = (e) => {
    console.log(e);
  };

  // 读取文件中
  reader.onprogress = (e) => {
    console.log(e);
  };

  // 读取文件完成
  reader.onload = () => {
    console.log(reader.result);
  };
});
```

如果文件内容是一张图片，则用 readAsDataURL 读取到的 reader.result 直接可以被 img 标签使用，如果文件内容是文本，则可以使用 readAsText 直接读取内容，看[demo](https://codepen.io/zreal-leo/pen/JjKdQbo)



## Blob

在某种情况下，可能需要读取部分文件而不是整个文件，这时我们就可以使用 Blob 类型，

我们可以使用<code> new Blob(array[, options])</code> 来创建一个新的 Blob 对象

- array是一个由[`ArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`ArrayBufferView`](https://developer.mozilla.org/zh-CN/docs/Web/API/ArrayBufferView), [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob), [`DOMString`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMString) 等对象构成的 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array) ，或者其他类似对象的混合体，它将会被放进 [`Blob`](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)。DOMStrings会被编码为UTF-8。
- options 可以传入 type 类型， 比如 **{ type: 'application/json' }**

```js
const blob = new Blob([files[0]])
// 截取前 32 个字节
let blobSlice = blob.slice(0,32)

reader.readAsText(blobSlice)

```

[查看栗子](https://codepen.io/zreal-leo/pen/MWewNvK?__cf_chl_jschl_tk__=b70ec993a227d3560eefb588e8cf48f56b558f60-1602519724-0-ATl8rVC1j1so9Q0DMcWPkVRte1nIeUJoWYKo1KfJD4rpTGVVPvBT9CxikJu-1JhvTIqaSY0YH50k5n4flkjduHKQ7GWqgI-a346iCzUXTN92gWQjQDhn35sVyTM0j8dNexqWHNF8_JDlbE27jN_m98VTCK9XAfWjTr8_eZwzGuCMcU-1DjdlptXVkIOk3YMu07Pz2yxRCk798JU5Dnc6swH7MWBV5RVPHDGWCuVJc0PAq_QbSowwJzouWGbE3Ig0t6cshW4d9IggdLTP3jsB0cYnOVaPjkMzPI6U9feoFUW4kRpWGoqOyrSs0H5tsPzLNkqKcZ6tcvGfGvICA0Q7T_Q)

