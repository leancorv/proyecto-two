<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>two</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/3279706676.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/register.css">
    <link rel="shortcut icon" href="assets/img/logo/icon-logo.png" type="image/x-icon">
</head>
<body>
    <header class="header">
        <img src="assets/img/logo/logo-two-final.png" alt="logo" class="logo" draggable="false">
    </header>
    <main class="registro-container">
        <div class="top">
            <img src="assets/img/logo/t-complemento-alternative.png" alt="">
            <h2>Regístrate</h2>
            <img src="assets/img/logo/t-complemento.png" alt="">
        </div>

        <form method="POST" action="" class="formulario" id="formulario">
            <!-- Grupo: Usuario -->
            <div class="formulario__grupo" id="grupo__usuario">
                <label for="usuario" class="formulario__label">Usuario</label>
                <div class="formulario__grupo-input">
                    <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder="shrek123">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y guión bajo.</p>
            </div>


            <!-- Grupo: Nombre -->
            <div class="formulario__grupo" id="grupo__nombre">
                <label for="nombre" class="formulario__label">Nombre</label>
                <div class="formulario__grupo-input">
                    <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Jonh Doe">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">El nombre tiene que ser de 1 a 40 dígitos y solo puede contener números, letras y guión bajo.</p>
            </div>


            <!-- Grupo: Contraseña -->
            <div class="formulario__grupo" id="grupo__password">
                <label for="password" class="formulario__label">Contraseña</label>
                <div class="formulario__grupo-input">
                    <input type="password" class="formulario__input" name="password" id="password">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">La contraseña tiene que ser de 4 a 16 digitos</p>
            </div>


            <!-- Grupo: Contraseña 2 -->
            <div class="formulario__grupo" id="grupo__password2">
                <label for="password2" class="formulario__label">Repetir contraseña</label>
                <div class="formulario__grupo-input">
                    <input type="password" class="formulario__input" name="password2" id="password2">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">Ambas contraseñas tienen que ser iguales</p>
            </div>


            <!-- Grupo: Correo Electrónico -->
            <div class="formulario__grupo" id="grupo__correo">
                <label for="correo" class="formulario__label">Correo Electrónico</label>
                <div class="formulario__grupo-input">
                    <input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">El correo solo puede contener letras, números, puntos y guión bajo.</p>
            </div>


            <!-- Grupo: Teléfono -->
            <div class="formulario__grupo" id="grupo__telefono">
                <label for="telefono" class="formulario__label">Teléfono</label>
                <div class="formulario__grupo-input">
                    <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="1123467890">
                    <i class="formulario__validacion-estado fa-solid fa-circle-xmark"></i>
                </div>
                <p class="formulario__input-error">El teléfono solo puede contener números y de 7 a 14 dígitos</p>
            </div>

            <!-- Grupo: Términos y Condiciones -->
            <div class="formulario__grupo" id="grupo__terminos">
                <label class="formulario__label">
                    <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos">
                    Acepto los Términos y Condicones
                </label>
            </div>

            <div class="formulario__mensaje" id="formulario__mensaje">
                <p><i class="fa-solid fa-triangle-exclamation"></i><b>Error:</b>Por favor rellena el formulario correctamente.</p>
            </div>

            <div class="formulario__grupo formulario__grupo-btn-enviar">
                <button type="submit" class="formulario__btn">Enviar</button>
                <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
            </div>
        </form>
        <?php 
        include("php/registro_usuario_db.php");
        ?>    

        <div class="footer-registro-container">
            <p class="new">Ya estás registrado?<a href="login2.html">Inicia sesión ahora</a></p>
            <p class="protect"> Esta pagina esta protegida por Google reCAPTCHA para asegurarnos de que no eres un robot. <a href="#">Leer más.</a></p>
        </div>
        
    </main>
    <footer class="footer">
            <div class="footer-info">
                <p> Preguntas? Llamar <a href="tel:+123123123123">+123123123123(AR)</a></p>
                <ul class="footer-links">
                    <li class="footer-link_item"><a href="#">Preguntas Frecuentes</a></li>
                    <li class="footer-link_item"><a href="#">Centro de ayuda</a></li>
                    <li class="footer-link_item"><a href="#">Términos de uso</a></li>
                    <li class="footer-link_item"><a href="#">Privacidad</a></li>
                    <li class="footer-link_item"><a href="#">Preferencia de Cookies</a></li>
                    <li class="footer-link_item"><a href="#">Información Corporativa</a></li>
                </ul>
                <select name="language" id="language">
                    <option value="es">Español</option>
                    <option value="en">English</option>
                </select>
            </div>
    </footer>

    <script src="js/register.js"></script>
</body>
</html>