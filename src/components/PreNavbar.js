import React from 'react'
import "../styles/PreNavbar.css"


const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.95 43.15q-.9.9-2.175.9t-2.175-.9L4.85 24.4q-.5-.5-.675-1.05Q4 22.8 4 22.2V7q0-1.3.85-2.15Q5.7 4 7 4h15.2q.6 0 1.2.175t1.1.675L43.15 23.5q.95.95.95 2.225 0 1.275-.95 2.225ZM25.9 41.1l15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z"/></svg>;

const PreNavbar= () => {
    return (
      <div className='PreNav'>
            <div>
                 <a  href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
                 <a  href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
                 <a  href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
             </div>
             <div>
             <a  href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
                 <a  href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a> <span>|</span>
                 <a  href="https://store.mi.com/in/site/login"> {cartIcon}   CART (0)</a>
               
             </div>   
      </div>
    );
  }
  
  export default PreNavbar;