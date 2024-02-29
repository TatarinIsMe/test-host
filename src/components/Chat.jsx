import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import $ from "jquery";

import styles from "../styles/Chat.module.css";
import Messages from "./Messages";

const Chat = () => {
  
    function sendText(textMes){
        const data = {
            name: 'textMes',
          };
//               $.ajax({
//         // url: 'http://localhost:8888/basic/web/index.php?r=post%2Findex',
//     //    url: 'http://localhost:8888/basic/web/post/ajax',
//         url: 'http://tatarin.site/back/web/post/ajax',
//         type: 'post',
//         dataType: 'json',
//         data: {param1: textMes},
//         success: function(res){
//             console.log('hi');
//         },
//         error: function(er){
//             console.log(er.responseText);
//             setState((_state) => [..._state, {user: "admin", message: er.responseText}])
//         }
// });
      }
    const [state, setState] = useState([{user: "sal", message: "Добрый день,(имя пользователя). Вас приветствует виртуальный помомошник школы Гармония. Рад вас видеть. Чем я могу помочь? Выбирете нужную категорию"}]);
    const [message, setMessage] = useState("");

    const handleChange = ({target: {value}}) => {
        setMessage(value);
      
      };
      
    const handleSubmit = (e) => {
      alert('sdfsd');
       
        e.preventDefault();
      
        if (!message) {
            console.log('end');
            return;};
        console.log('yes');
      
      };
    const OutPut = (e) => {
        // console.log('Pressed');
        e.preventDefault();
      
        if (!message) {
            console.log('end');
            return;};
        setState((_state) => [..._state, {user: "user", message: message }])
        sendText(message);

    }
    return(
<div className={styles.wrap}>
    <div className={styles.messages}>
        <div className={styles.message}>
            <Messages messages={state} name={state} />
        </div>
        <form className={styles.form}>
            <div className={styles.input}>
                <input
                    type="text"
                    name="message"
                    placeholder="Write"
                    value={message}
                    onChange={handleChange} />
            </div>
            <div className={styles.button}>
            {/* <input type="submit" onSubmit={handleSubmit} value="Отправить" /> */}
            <button onClick={OutPut} className={styles.buttonTwo}>Отправить</button>
        </div>
        </form>
        <div className={styles.button}>
            {/* <input type="submit" onSubmit={handleSubmit} value="ОТправить" /> */}
            <button onClick={OutPut} className={styles.buttonTwo}>Отправить</button>
        </div>
    </div>
</div>

    )
}

export default Chat;