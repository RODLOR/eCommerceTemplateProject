const Form = () => {
    return (
        <form id="form" class="topBefore">
          <input id="name" type="text" placeholder="Escribe tu nombre"/>
          <input id="email" type="text" placeholder="Escribe tu e-mail"/>
          <input id="tel" type="tel" placeholder="Escribe tu teléfono (Opcional)"/>
          <textarea id="message" type="text" placeholder="Escribe tu mensaje"></textarea>
          <input id="submit" type="submit" value="ENVIAR MENSAJE"/>
        </form>
    )
}

export default Form;