# Frontend

#### Web Public Area Frontend List
- [Home_Page_TR](https://orcunkilicaslan.github.io/ICRYPEX_LP_Fintech_BAU/html/Home_Page_TR.html)
- [Home_Page_EN](https://orcunkilicaslan.github.io/ICRYPEX_LP_Fintech_BAU/html/Home_Page_EN.html)
- [Form_Result_Success](https://orcunkilicaslan.github.io/ICRYPEX_LP_Fintech_BAU/html/Form_Result_Success.html)
- [Form_Result_Error](https://orcunkilicaslan.github.io/ICRYPEX_LP_Fintech_BAU/html/Form_Result_Error.html)
   

# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/ICRYPEX_LP_Fintech_BAU.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  


Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build --production

Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  