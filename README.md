# Sass環境安裝
不要做重複的工作，重複的工作讓機器做
<br>
<br>
## Install node.js

Install  [ Node.js ](https://nodejs.org/en/)

#### If you use Node.js, you can also install Sass using npm 


**1. Windows user**  
     Open your  "終端機"  CMD

```
npm install -g sass
```

  輸入 ` sass --version`  看是否有灌成功  
  如果有成功 會 return  `Sass`  版本

  
**2. Mac user**

Open the Mac's  Terminal.app / 終端機

```  
sudo npm install -g sass
```

  輸入 ` sass --version`  看是否有灌成功  
  如果有成功 會 return  `Sass`  版本


# sass 與 scss 差異

- 副檔名不同，寫法都不同，兩者不能兼容
- scss 可以兼容css的寫法
<br> 


# sass 資源
[Sass online 工具](http://www.sassmeister.com/)
[Sass 英文官網](http://www.sassmeister.com/)
[Sass 中文官網](https://sass.bootcss.com/)
<br>
<br> 

# VsCode  必安裝套件
[Live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
<br> 
<br> 

### Vscode setting
```json
"liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css/"
        }
    ],
```
<br> 
<br> 