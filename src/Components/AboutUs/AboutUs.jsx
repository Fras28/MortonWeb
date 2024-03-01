import React from "react";
import "./AboutUs.css";
import "animate.css";
import "aos/dist/aos.css";

export const AboutUs = () => {
  return (
    <div>
      <div className="aboutUs spikes">
        <h1>Porque Morton Soluciones ?</h1>

        <p className="">
          ¿Queres mejorar la experiencia en tu comercio? Con nuestra App,
          es posible.
        </p>

        <p>
          Hemos creado una herramienta diseñada para mejorar la atención al
          cliente y agilizando procesos. ¿Cómo lo logramos? Ofreciendo la opción
          de ver la carta, realizar pedidos y pagos directamente desde la App.
          Tus clientes podrán tomar decisiones más rápidas y cómodas, sin
          esperar a un mesero. 
        </p>

        <p>
          Al reducir el tiempo que los clientes que ocupan una mesa sin consumir,
          podrás aumentar la rotación y en consecuencia, las ganancias de tu
          negocio.
        </p>

        <p>
          ¡No esperes más! Conviértete en el dueño de un negocio moderno y
          eficiente gracias a nuestra App.
        </p>
        <h2>Facilidad de Navegación:</h2>
    <p>Un catálogo digital organizado de manera clara y sencilla, facilitando la búsqueda de productos.</p>

    <h2>Pedidos a Través de WhatsApp:</h2>
    <p>Los clientes podrán realizar pedidos directamente desde el catálogo a través de WhatsApp con solo unos pocos clics en un formato de simple legibilidad.</p>

    <h2>Interacción Personalizada:</h2>
    <p>Esta herramienta permitirá a tus clientes enviarte pedidos detallados y personalizados de manera más eficiente.</p>

    <h2>Aumento de las Ventas:</h2>
    <p>Al proporcionar una forma fácil y accesible para que los clientes realicen pedidos, puedes experimentar un aumento en las ventas y en la fidelización de clientes.</p>

    <h2>Lista de Precios Actualizada:</h2>
    <p>Mantén a tus clientes informados sobre los precios de tus productos de manera constante y sin esfuerzo.</p>

    <h2>¿Te gustaría probarlo?</h2>
    <p>Aquí abajo te dejo nuestra <strong>DEMO</strong>. ¡Déjame saber si estás interesado y estaré encantado de ayudarte a llevar tu [Tipo de Negocio] al siguiente nivel!</p>
    <a href="https://catalogo-digital-morton.vercel.app/" target="_blank">Demo Catálogo Digital</a>

        {/* <ul>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 724 724"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M720 633.417L650 563.417C646.661 560.083 641.646 559.083 637.286 560.891C632.927 562.698 630.083 566.948 630.083 571.667V595H505.599C535.261 563.031 557.364 524.812 570.287 483.161C583.209 441.516 586.621 397.495 580.266 354.355C582.808 353.073 585.402 351.928 587.886 350.516L600.719 363.349C605.277 367.902 612.662 367.902 617.214 363.349L666.741 313.833C671.298 309.276 671.298 301.891 666.741 297.339L653.907 284.505C661.001 272.068 666.527 258.797 670.355 245H688.418C691.512 245 694.481 243.771 696.668 241.583C698.856 239.396 700.085 236.427 700.085 233.333V163.333C700.085 160.24 698.856 157.271 696.668 155.083C694.481 152.896 691.512 151.667 688.418 151.667H670.355C666.538 137.864 661.017 124.593 653.934 112.151L666.767 99.3173C671.32 94.76 671.32 87.3747 666.767 82.8227L617.251 33.344C612.694 28.7867 605.309 28.7867 600.757 33.344L587.923 46.1773C575.486 39.0836 562.215 33.5576 548.418 29.7293V11.6667C548.418 8.57293 547.189 5.60413 545.001 3.41667C542.814 1.2292 539.845 0 536.751 0H466.751C460.309 0 455.085 5.224 455.085 11.6667V29.7293C441.282 33.5471 428.011 39.0679 415.569 46.1507L402.735 33.3173C398.178 28.7652 390.793 28.7652 386.241 33.3173L336.762 82.8333C332.205 87.3907 332.205 94.776 336.762 99.328L347.903 110.469V110.474C294.517 99.9843 239.267 104.635 188.383 123.901C137.503 143.166 93.0281 176.275 59.9814 219.494C26.9348 262.707 6.6321 314.306 1.36676 368.454C-3.89364 422.605 6.09596 477.147 30.2054 525.907C54.3148 574.678 91.5854 615.735 137.799 644.438C184.017 673.135 237.34 688.339 291.745 688.323H630.079V711.657C630.079 716.375 632.923 720.625 637.282 722.433C641.641 724.24 646.657 723.24 649.995 719.907L719.995 649.907C724.548 645.349 724.548 637.964 719.995 633.407L720 633.417ZM470.16 148.243L485.248 163.326L477.013 171.56H477.008C462.186 159.341 446.191 148.618 429.259 139.539C445.358 119.627 468.952 107.232 494.483 105.263C520.014 103.299 545.228 111.94 564.18 129.154C562.878 128.628 561.482 128.346 560.076 128.325H478.409C473.691 128.325 469.441 131.169 467.633 135.529C465.826 139.888 466.826 144.903 470.159 148.242L470.16 148.243ZM509.988 155.082L506.571 151.66H548.41V193.499L544.993 190.082V190.077C540.436 185.525 533.051 185.525 528.493 190.077L512.357 206.213C506.654 199.603 500.67 193.26 494.388 187.186L509.987 171.577H509.992C514.544 167.019 514.544 159.634 509.992 155.077L509.988 155.082ZM536.743 214.822L551.825 229.904V229.91C555.164 233.243 560.179 234.243 564.539 232.436C568.898 230.628 571.742 226.378 571.742 221.66V139.993C571.721 138.587 571.44 137.191 570.914 135.889C588.747 155.534 597.351 181.858 594.559 208.243C591.767 234.634 577.846 258.577 556.294 274.055C548.184 256.629 538.376 240.05 527.012 224.555L536.743 214.822ZM372.529 102.098L361.503 91.0821L394.509 58.0768L405.524 69.1028L405.519 69.108C409.399 72.9935 415.462 73.6496 420.082 70.6809C435.123 60.9935 451.77 54.0716 469.243 50.2436C474.602 49.0665 478.415 44.3269 478.415 38.8425V23.3265H525.081V38.8425C525.081 44.3269 528.894 49.0665 534.253 50.2436C551.727 54.0717 568.373 60.9936 583.415 70.6809C588.034 73.6497 594.097 72.9935 597.977 69.108L608.993 58.082L641.998 91.0874L630.972 102.103L630.967 102.098C627.082 105.978 626.425 112.04 629.394 116.66C639.082 131.702 646.003 148.348 649.831 165.822C651.008 171.181 655.748 174.994 661.233 174.994H676.748V221.66H661.233C655.748 221.66 651.008 225.473 649.831 230.832C646.003 248.305 639.081 264.952 629.394 279.993C626.425 284.613 627.082 290.676 630.967 294.556L641.993 305.572L608.988 338.577L597.972 327.551L597.977 327.546C594.097 323.66 588.035 323.004 583.415 325.973C580.904 327.582 578.326 329.041 575.738 330.489C573.024 318.723 569.576 307.145 565.415 295.811C594.393 276.978 613.519 246.243 617.612 211.921C621.701 177.598 610.341 143.227 586.601 118.109C562.861 92.9832 529.189 79.7019 494.689 81.8485C460.189 83.9996 428.424 101.354 407.981 129.223C396.914 124.4 385.549 120.27 373.96 116.869L374.09 116.661C377.059 112.046 376.408 105.984 372.528 102.098L372.529 102.098ZM653.409 683.498V676.659C653.409 673.566 652.18 670.597 649.993 668.409C647.805 666.222 644.836 664.993 641.743 664.993H291.743C229.128 664.993 168.488 643.097 120.316 603.091C72.1438 563.091 39.4772 507.503 27.9772 445.945C16.472 384.398 26.8574 320.762 57.3318 266.065C87.8052 211.367 136.447 169.043 194.825 146.429C253.216 123.819 317.675 122.335 377.039 142.241C436.408 162.142 486.945 202.184 519.892 255.424C552.839 308.664 566.146 371.752 557.485 433.77C548.824 495.781 518.751 552.812 472.469 594.984H390.125C438.656 570.729 476.579 529.484 496.677 479.093C516.781 428.702 517.661 372.681 499.151 321.68C480.641 270.685 444.037 228.268 396.291 202.502C348.546 176.732 292.999 169.414 240.211 181.929C187.419 194.45 141.075 225.929 109.982 270.393C78.8938 314.857 65.2325 369.19 71.5912 423.073C77.9505 476.953 103.894 526.614 144.482 562.606C185.07 598.606 237.477 618.434 291.722 618.314H641.722C644.816 618.314 647.784 617.085 649.972 614.898C652.159 612.71 653.389 609.741 653.389 606.648V599.809L695.227 641.648L653.409 683.498ZM291.743 594.992C239.144 594.992 188.696 574.096 151.502 536.904C114.309 499.707 93.4145 449.259 93.4145 396.664C93.4145 344.07 114.31 293.618 151.502 256.424C188.7 219.231 239.148 198.336 291.743 198.336C344.337 198.336 394.789 219.232 431.983 256.424C469.176 293.622 490.071 344.07 490.071 396.664C490.013 449.248 469.097 499.659 431.915 536.838C394.732 574.02 344.321 594.936 291.741 594.994L291.743 594.992Z"
                fill="black"
              />
              <path
                d="M291.747 221.67C245.335 221.67 200.82 240.107 168.001 272.925C135.184 305.742 116.747 350.258 116.747 396.67C116.747 443.082 135.184 487.597 168.001 520.415C200.819 553.233 245.335 571.67 291.747 571.67C338.159 571.67 382.673 553.233 415.492 520.415C448.309 487.598 466.747 443.082 466.747 396.67C466.695 350.274 448.241 305.79 415.435 272.982C382.628 240.174 338.143 221.722 291.747 221.67V221.67ZM303.413 547.737V513.33H280.08V547.737C244.044 544.924 210.195 529.33 184.637 503.773C159.08 478.215 143.487 444.366 140.673 408.33H175.08V384.997H140.673C143.486 348.961 159.08 315.111 184.637 289.554C210.195 263.997 244.044 248.403 280.08 245.59V279.997H303.413V245.59C354.684 249.47 400.487 279.085 425.064 324.241C449.643 369.402 449.643 423.943 425.064 469.107C400.485 514.269 354.684 543.883 303.413 547.758V547.737Z"
                fill="black"
              />
              <path
                d="M426.56 386.963L391.56 363.63C389.643 362.359 387.388 361.677 385.086 361.671H377.971C367.055 334.687 344.174 314.343 316.102 306.655C288.029 298.963 257.977 304.812 234.837 322.467C211.697 340.123 198.113 367.561 198.113 396.67C198.113 425.779 211.697 453.217 234.837 470.873C257.977 488.529 288.03 494.378 316.102 486.685C344.175 478.997 367.055 458.654 377.971 431.669H385.086C387.388 431.664 389.643 430.981 391.56 429.71L426.56 406.377C429.805 404.21 431.758 400.57 431.758 396.669C431.758 392.768 429.805 389.127 426.56 386.96V386.963ZM291.746 466.671C275.273 466.734 259.309 460.989 246.653 450.437C234.002 439.89 225.476 425.218 222.57 409.005C219.669 392.791 222.581 376.073 230.789 361.791C238.997 347.51 251.983 336.578 267.451 330.927C282.924 325.271 299.893 325.255 315.377 330.88C330.856 336.5 343.861 347.407 352.101 361.672H322.617C313.586 353.709 301.831 349.542 289.8 350.047C277.774 350.547 266.404 355.683 258.071 364.37C249.737 373.057 245.086 384.63 245.086 396.673C245.086 408.715 249.737 420.287 258.071 428.975C266.404 437.663 277.773 442.798 289.8 443.298C301.831 443.803 313.587 439.636 322.617 431.673H352.101C339.596 453.2 316.643 466.512 291.747 466.673L291.746 466.671ZM381.58 408.338H317.834C314.517 408.338 311.355 409.749 309.142 412.223C304.918 416.947 298.949 419.754 292.615 419.989C286.281 420.223 280.12 417.874 275.558 413.473C270.99 409.077 268.412 403.01 268.412 396.671C268.412 390.332 270.99 384.264 275.558 379.868C280.12 375.467 286.282 373.118 292.615 373.352C298.948 373.587 304.917 376.394 309.142 381.118C311.355 383.592 314.517 385.003 317.834 385.003H381.58L399.08 396.67L381.58 408.338Z"
                fill="black"
              />
              <path
                d="M583.413 501.67H676.747V525.003H583.413V501.67Z"
                fill="black"
              />
              <path
                d="M618.413 455.003H711.747V478.337H618.413V455.003Z"
                fill="black"
              />
            </svg>
            Mayor rotacion de clientes{" "}
          </li>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 724 724"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M697.667 146.68C666.109 93.8987 609.797 60.8827 548.333 59.1067V12.336C548.333 7.72666 545.62 3.55479 541.411 1.67972C537.203 -0.195345 532.286 0.585974 528.859 3.66932L494.666 34.3987C445.609 7.89332 389.754 -3.36135 334.266 2.08665C278.777 7.52932 226.173 29.4253 183.199 64.9613C140.23 100.497 108.855 148.055 93.09 201.535C77.3247 255.019 77.8967 311.993 94.7255 365.148C62.0695 338.867 43.0375 299.241 42.9335 257.325V245.659C42.9022 240.331 39.2616 235.7 34.0897 234.409C28.9231 233.117 23.5324 235.497 21.0012 240.185C-8.4468 295.059 -6.6708 361.419 25.6679 414.638C57.2252 467.414 113.537 500.435 175.001 502.211V548.993C175.001 553.602 177.715 557.774 181.923 559.649C186.131 561.524 191.048 560.743 194.475 557.659L228.669 526.93C266.059 547.113 307.549 558.514 350.002 560.274V608.211C313.814 609.727 278.414 619.269 246.366 636.143L122.839 702.023C118.105 704.539 115.699 709.956 116.995 715.159C118.298 720.357 122.975 724.003 128.334 723.992H595.001C600.35 723.992 605.016 720.351 606.313 715.159C607.615 709.966 605.214 704.56 600.495 702.034L476.959 636.143C444.918 619.263 409.522 609.722 373.334 608.211V560.378C430.845 557.997 486.225 537.946 531.934 502.951C577.637 467.962 611.44 419.727 628.737 364.831C646.04 309.935 645.992 251.034 628.607 196.164C661.263 222.446 680.3 262.076 680.399 303.998V315.664C680.388 321.029 684.039 325.706 689.242 327.003C694.451 328.3 699.867 325.878 702.378 321.138C731.82 266.253 730.028 199.888 697.675 146.672L697.667 146.68ZM412.707 126.435L500.123 196.377L467.587 209.398C465.493 210.231 463.259 210.659 461.009 210.659H454.998C448.555 210.659 443.331 205.435 443.331 198.992C443.331 186.612 438.415 174.741 429.665 165.992C420.91 157.242 409.039 152.325 396.665 152.325C390.477 152.325 384.54 149.867 380.165 145.492C375.79 141.112 373.331 135.179 373.331 128.992V24.3772C409.123 25.9553 444.186 35.0127 476.269 50.9652L412.195 108.659L412.19 108.653C409.649 110.945 408.237 114.242 408.336 117.664C408.435 121.086 410.034 124.294 412.706 126.435L412.707 126.435ZM242.373 53.4973L283.628 119.508C291.503 132.117 293.701 147.461 289.68 161.779C285.659 176.091 275.789 188.049 262.497 194.711C250.206 200.81 239.861 210.227 232.648 221.899C225.429 233.571 221.627 247.035 221.664 260.753C221.659 266.035 219.56 271.097 215.825 274.832C212.091 278.566 207.028 280.665 201.747 280.671H104.997C105.034 233.884 117.851 187.993 142.065 147.957C166.279 107.921 200.967 75.2599 242.383 53.4985L242.373 53.4973ZM198.332 490.671C198.332 487.577 197.103 484.608 194.915 482.421C192.728 480.233 189.759 479.004 186.665 479.004H181.566C125.921 479.421 74.2024 450.373 45.6064 402.635C26.9091 371.817 19.6997 335.384 25.2624 299.771C34.9968 334.631 55.8984 365.333 84.7624 387.172C113.622 409.011 148.85 420.781 185.049 420.672H186.669C189.763 420.672 192.731 419.443 194.919 417.255C197.106 415.068 198.335 412.099 198.335 409.005V374.927L285.319 444.531L198.335 522.812L198.332 490.671ZM548.332 700.671H174.999L257.343 656.759C289.545 639.947 325.332 631.165 361.66 631.165C397.988 631.165 433.775 639.947 465.977 656.759L548.332 700.671ZM615.359 241.817C619.739 270.197 619.275 299.115 613.994 327.344H495.833C486.166 327.344 478.333 319.511 478.333 309.844C478.333 300.177 486.166 292.344 495.833 292.344C540.051 292.474 582.483 274.896 613.666 243.541L615.359 241.817ZM609.676 214.484L597.109 227.01C570.317 253.974 533.849 269.098 495.833 269.01C481.245 269.01 467.765 276.791 460.469 289.426C453.177 302.061 453.177 317.623 460.469 330.259C467.766 342.895 481.245 350.675 495.833 350.675H608.557C593.797 402.457 563.155 448.295 520.953 481.733C478.75 515.17 427.114 534.514 373.339 537.039V467.342H431.673C453.323 467.321 474.085 458.712 489.397 443.399C504.709 428.087 513.318 407.326 513.339 385.675C513.339 382.582 512.11 379.613 509.923 377.425C507.735 375.238 504.766 374.009 501.673 374.009H431.673C409.703 374.003 388.667 382.878 373.339 398.613V362.342C373.313 334.503 362.24 307.811 342.553 288.129C322.87 268.441 296.178 257.369 268.339 257.342C261.897 257.342 256.673 262.566 256.673 269.009V315.675C256.657 341.503 266.173 366.425 283.397 385.675C300.615 404.921 324.334 417.134 350.006 419.978V536.957C314.209 535.379 279.142 526.321 247.058 510.369L311.141 452.675H311.146C313.687 450.384 315.099 447.092 315 443.67C314.901 440.243 313.302 437.04 310.63 434.899L193.964 341.566C190.464 338.759 185.661 338.212 181.62 340.155C177.573 342.097 175.005 346.191 175.005 350.675V397.003C158.489 395.831 142.303 391.79 127.172 385.071C115.735 359.399 108.636 332.003 106.172 304.008H201.839C213.292 303.972 224.26 299.404 232.355 291.3C240.443 283.191 244.995 272.212 245.006 260.759C244.974 251.373 247.573 242.165 252.506 234.185C257.443 226.201 264.516 219.759 272.922 215.587C292.119 205.993 306.38 188.748 312.187 168.087C317.994 147.431 314.817 125.28 303.432 107.087L263.672 43.4935C291.109 32.1132 320.328 25.6188 350.005 24.3001V129.008C350.005 141.383 354.922 153.253 363.672 162.008C372.427 170.758 384.297 175.675 396.672 175.675C402.859 175.675 408.797 178.133 413.172 182.508C417.547 186.883 420.005 192.821 420.005 199.008C420.005 208.289 423.693 217.196 430.255 223.757C436.818 230.319 445.725 234.007 455.005 234.007H461.025C466.244 234.013 471.416 233.018 476.26 231.08L521.083 213.148L529.39 219.789V219.784C532.895 222.581 537.687 223.128 541.729 221.185C545.765 219.242 548.338 215.159 548.338 210.675V164.347C564.854 165.513 581.041 169.55 596.171 176.268C601.682 188.623 606.197 201.394 609.682 214.466L609.676 214.484ZM374.503 444.004C377.206 430.837 384.368 419.004 394.784 410.499C405.201 401.999 418.227 397.348 431.67 397.337H488.836C486.128 410.504 478.967 422.337 468.555 430.837C458.138 439.337 445.112 443.988 431.67 444.004L374.503 444.004ZM350.003 362.337V396.52C330.56 393.713 312.784 383.999 299.93 369.145C287.07 354.296 279.998 335.312 280.003 315.672V281.489C299.43 284.323 317.191 294.047 330.044 308.891C342.893 323.735 349.976 342.703 350.003 362.339V362.337ZM698.07 261.561C688.33 226.701 667.43 195.999 638.564 174.165C609.7 152.327 574.466 140.561 538.272 140.671H536.663C530.22 140.671 524.996 145.895 524.996 152.337V186.416L438.012 116.812L524.996 38.52V70.6707C524.996 73.7644 526.226 76.7332 528.413 78.9207C530.601 81.1081 533.569 82.3373 536.663 82.3373H541.762C597.402 81.9207 649.117 110.963 677.709 158.697C696.406 189.509 703.61 225.937 698.053 261.552L698.07 261.561Z"
                fill="black"
              />
            </svg>
            Carta ecologica
          </li>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 683 747"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M677.64 506.6C682.322 502.027 683.973 495.324 681.947 489.1C679.921 482.876 674.64 478.433 668.177 477.501L585.807 465.532C574.948 463.959 565.562 457.136 560.709 447.282L538.979 403.271C539.833 401.651 540.297 400.531 540.427 400.203C540.599 399.755 540.74 399.297 540.844 398.833C564.412 294.651 474.792 244.58 419.188 223.98C419.115 223.954 419.037 223.928 418.964 223.897C415.188 222.511 411.36 221.178 407.573 219.928C402.464 218.246 397.787 216.834 393.641 215.657C410.657 197.751 426.693 167.449 432.548 116.157C436.376 82.6105 429.584 55.2039 412.365 34.7039C386.182 3.53188 345.474 0.234542 342.376 0.0265424C341.886 -0.00991624 341.381 -0.00991625 340.897 0.0317508C337.376 0.271338 296.995 3.71402 270.965 34.7038C253.746 55.2038 246.954 82.6104 250.782 116.157C256.631 167.402 272.646 197.693 289.642 215.605C257.131 224.735 191.866 248.564 158.721 299.069C139.581 328.236 134.122 361.798 142.502 398.829C142.606 399.298 142.747 399.756 142.919 400.204C143.049 400.532 143.507 401.647 144.356 403.256L122.616 447.283C117.762 457.132 108.371 463.955 97.4907 465.534L15.1734 477.492C8.7046 478.424 3.4234 482.867 1.3974 489.091C-0.628605 495.315 1.0224 502.023 5.70994 506.596L65.3033 564.7C73.1522 572.351 76.7407 583.394 74.9022 594.227L60.8195 676.248C59.7206 682.701 62.3299 689.097 67.6269 692.941C70.6165 695.108 74.1113 696.212 77.6269 696.212C80.3405 696.212 83.0643 695.556 85.5799 694.233L159.257 655.514C168.976 650.405 180.58 650.4 190.304 655.514L220.216 671.238L210.94 725.321C209.758 732.217 212.539 739.056 218.2 743.17C221.393 745.488 225.138 746.67 228.903 746.67C231.804 746.67 234.721 745.973 237.414 744.556L322.924 699.603C334.669 693.431 348.69 693.431 360.43 699.603L445.935 744.551C452.128 747.811 459.492 747.275 465.154 743.165C470.815 739.051 473.596 732.212 472.414 725.316L463.138 671.233L493.056 655.509C502.774 650.4 514.378 650.395 524.102 655.509L597.758 694.228C600.279 695.551 603.008 696.202 605.722 696.202C609.258 696.202 612.774 695.087 615.769 692.905C621.05 689.051 623.633 682.65 622.514 676.233L608.456 594.222C606.597 583.399 610.191 572.362 618.06 564.696L677.64 506.6ZM342.4 272.44C311.447 265.362 298.097 246.164 292.853 235.091C299.749 233.08 305.218 231.731 308.619 230.955C325.515 241.08 339.832 241.518 341.592 241.528C341.618 241.528 341.67 241.549 341.665 241.528H341.67H341.743C343.503 241.518 357.826 241.08 374.727 230.945C378.31 231.757 384.237 233.216 391.763 235.44C386.383 246.528 372.956 265.45 342.399 272.44L342.4 272.44ZM274.873 242.643C280.108 253.986 291.337 271.34 313.941 282.872C299.983 289.45 283.525 299.465 272.977 313.367C266.201 297.621 259.868 271.132 274.873 242.643H274.873ZM368.368 211.793C367.576 212.184 366.857 212.668 366.206 213.246C353.436 221.476 342.878 221.981 341.696 222.012C340.368 221.976 329.779 221.423 317.024 213.173C316.42 212.653 315.758 212.205 315.045 211.845C297.722 199.741 277.181 173.209 270.315 115.116C297.441 108.199 312.195 90.2307 319.17 74.0694C354.889 111.465 393.373 121.309 411.847 123.897C404.045 175.851 384.765 200.299 368.369 211.793L368.368 211.793ZM409.931 242.643C424.941 271.137 418.602 297.627 411.826 313.372C401.279 299.465 384.821 289.451 370.862 282.872C393.472 271.346 404.701 253.992 409.93 242.643H409.931ZM285.795 47.4027C305.415 23.9187 336.961 20.0227 341.659 19.564C346.424 20.0276 377.929 23.9389 397.533 47.4027C409.512 61.7413 415.003 80.9133 413.913 104.46C396.487 101.871 356.497 91.2673 322.22 47.8507C319.736 44.7048 315.59 43.3976 311.751 44.5537C307.918 45.7048 305.173 49.0849 304.84 53.0797C304.72 54.4964 301.767 84.8344 269.334 95.1731C269.933 75.8344 275.428 59.8091 285.793 47.4024L285.795 47.4027ZM175.003 309.843C193.091 282.244 223.071 263.28 250.429 250.791C235.517 298.64 264.023 337.911 265.429 339.807C267.289 342.307 270.205 343.739 273.257 343.739C273.856 343.739 274.461 343.682 275.06 343.572C278.726 342.88 281.679 340.166 282.664 336.567C289.028 313.406 325.778 297.718 342.409 292.614C359.045 297.692 395.753 313.322 402.138 336.567C403.128 340.166 406.076 342.88 409.742 343.572C410.341 343.682 410.946 343.739 411.545 343.739C414.592 343.739 417.513 342.307 419.373 339.807C420.774 337.921 449.013 299 434.57 251.452C483.201 273.832 529.267 311.755 524.767 374.504L523.856 372.66C520.95 366.796 515.09 363.16 508.549 363.16H508.513C501.971 363.176 496.117 366.827 493.247 372.676L473.633 412.4C473.565 412.389 473.503 412.384 473.435 412.374L469.935 385.895C469.227 380.551 464.326 376.786 458.982 377.499C453.638 378.202 449.883 383.109 450.586 388.452L454.383 417.182C447.815 422.765 429.19 435.766 392.232 442.655L358.014 373.327C354.92 367.051 348.649 363.155 341.654 363.155C334.659 363.155 328.388 367.051 325.29 373.327L291.071 442.66C254.186 435.78 235.514 422.764 228.92 417.182L232.712 388.452C233.42 383.114 229.66 378.208 224.316 377.499C218.972 376.796 214.071 380.551 213.363 385.895L209.863 412.379C209.795 412.39 209.733 412.395 209.665 412.405L190.045 372.665C187.144 366.806 181.279 363.165 174.742 363.165C168.205 363.165 162.341 366.806 159.436 372.681L158.535 374.499C156.904 350.78 162.384 329.097 175.004 309.843L175.003 309.843ZM406.989 469.083C404.739 466.588 402.791 463.796 401.208 460.755C432.369 454.192 451.593 443.525 462.031 435.937L456.421 447.302C451.567 457.151 442.176 463.974 431.296 465.552L406.989 469.083ZM276.344 469.083L252.016 465.546C241.157 463.973 231.771 457.15 226.917 447.296L221.318 435.952C231.761 443.54 250.98 454.197 282.13 460.759C280.537 463.795 278.589 466.587 276.344 469.081V469.083ZM199.375 638.256C183.968 630.152 165.572 630.157 150.167 638.256L80.8852 674.668L94.13 597.532C97.0467 580.36 91.354 562.865 78.9114 550.745L22.8754 496.109L100.302 484.859C117.542 482.359 132.433 471.542 140.125 455.933L174.765 385.761L195.125 426.995C195.13 427.001 195.13 427.006 195.135 427.011L209.411 455.928C216.083 469.464 228.16 479.392 242.479 483.418L156.604 495.892C149.683 496.897 144.037 501.657 141.875 508.308C139.714 514.965 141.484 522.131 146.495 527.011L215.672 594.443C225.172 603.703 229.506 617.042 227.266 630.115L223.683 651.022L199.375 638.256ZM369.495 682.344C360.781 677.761 351.219 675.469 341.656 675.469C332.099 675.469 322.536 677.761 313.823 682.344L230.588 726.104L246.484 633.421C249.812 614.015 243.38 594.224 229.281 580.479L161.943 514.839L255 501.317C274.489 498.489 291.323 486.255 300.036 468.599L341.656 384.271L383.276 468.599C391.989 486.255 408.828 498.489 428.312 501.317L521.369 514.839L454.031 580.479C439.932 594.224 433.5 614.015 436.828 633.421L452.724 726.104L369.495 682.344ZM604.415 550.74C591.941 562.891 586.253 580.391 589.196 597.543L602.415 674.663L533.16 638.256C517.753 630.152 499.357 630.157 483.952 638.256L459.649 651.027L456.066 630.12C453.821 617.042 458.155 603.708 467.655 594.448L536.832 527.016C541.842 522.131 543.613 514.969 541.452 508.314C539.29 501.662 533.644 496.902 526.722 495.897L440.842 483.418C455.17 479.386 467.249 469.464 473.916 455.934L488.124 427.158C488.176 427.059 488.228 426.96 488.275 426.856L508.561 385.762L543.201 455.929C550.899 471.544 565.775 482.361 582.999 484.861L660.452 496.116L604.415 550.74Z"
                fill="black"
              />
            </svg>
            Mejor atencion con menos esfuerzo
          </li>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 707 683"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M621.8 201.88H618.962V15.2133C618.962 9.55705 615.764 4.38518 610.706 1.85331C605.644 -0.672687 599.592 -0.125885 595.066 3.26478L380.626 164.545H177.986C156.846 164.571 136.205 171.008 118.798 183.003C101.386 195.003 88.0223 211.998 80.4756 231.743H55.7569C35.9076 232.462 17.8662 243.473 8.14224 260.79C-1.58176 278.113 -1.58176 299.243 8.14224 316.566C17.8662 333.889 35.9076 344.894 55.7569 345.613H78.1582C83.4552 363.331 93.3556 379.337 106.852 391.977C120.352 404.623 136.961 413.461 154.992 417.591V612.538C155.799 637.663 169.674 660.538 191.576 672.877C213.482 685.21 240.237 685.21 262.138 672.877C284.045 660.538 297.914 637.663 298.726 612.538V420.271H380.862L595.009 581.245C599.535 584.641 605.587 585.187 610.649 582.656C615.706 580.125 618.899 574.953 618.899 569.296V375.163H621.737V375.168C652.144 374.278 679.868 357.537 694.816 331.048C709.769 304.559 709.769 272.179 694.816 245.684C679.868 219.195 652.144 202.46 621.737 201.569L621.8 201.88ZM55.7466 315.744C46.4185 315.254 37.9973 309.994 33.4653 301.817C28.9341 293.645 28.9341 283.713 33.4653 275.541C37.9965 267.364 46.4184 262.104 55.7466 261.615H73.892C73.892 264.078 73.517 266.542 73.517 269.083V315.75L55.7466 315.744ZM103.383 315.744L103.388 269.077C103.388 249.275 111.252 230.285 125.257 216.28C139.257 202.28 158.252 194.411 178.055 194.411H370.695V390.411H177.975C158.172 390.411 139.183 382.546 125.177 368.541C111.177 354.541 103.308 335.552 103.308 315.744H103.383ZM268.556 612.544C267.941 627.128 259.806 640.351 247.061 647.471C234.317 654.59 218.796 654.59 206.051 647.471C193.305 640.351 185.171 627.127 184.556 612.544V420.277H268.556V612.544ZM589.103 539.669L400.569 397.803V186.949L483.6 124.455V288.721C483.6 296.966 490.282 303.653 498.532 303.653C506.777 303.653 513.464 296.966 513.464 288.721V103.401V102.058L589.177 45.0882L589.103 539.669ZM621.805 345.536H618.967L618.972 231.744H621.811C641.66 232.463 659.701 243.473 669.425 260.791C679.149 278.113 679.149 299.244 669.425 316.567C659.701 333.889 641.66 344.895 621.811 345.613L621.805 345.536Z"
                fill="black"
              />
            </svg>
            Espacio para publicidad y/o imagenes personalziadas
          </li>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 548 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M500.987 41.16C446.388 -13.428 357.587 -13.428 302.987 41.16L273.659 70.504L244.315 41.16C189.716 -13.428 100.915 -13.428 46.3147 41.16L41.148 46.3267C-13.44 100.915 -13.44 189.727 41.148 244.327L65.508 268.687C64.3518 281.437 68.4351 294.588 78.1903 304.327C86.8934 313.03 98.3356 317.384 109.774 317.384C110.519 317.384 111.254 317.207 112.004 317.176C111.399 329.358 115.571 341.722 124.858 350.998C133.561 359.701 145.003 364.056 156.442 364.056C157.186 364.056 157.921 363.879 158.671 363.847C158.067 376.03 162.239 388.394 171.525 397.67C180.228 406.373 191.67 410.727 203.109 410.727C203.854 410.727 204.588 410.55 205.338 410.519C204.734 422.701 208.906 435.066 218.192 444.342C226.895 453.045 238.338 457.399 249.776 457.399C251.141 457.399 252.495 457.128 253.849 457.014C262.542 465.649 273.928 469.988 285.328 469.988C296.76 469.988 308.208 465.633 316.912 456.93C326.198 447.654 330.376 435.29 329.766 423.108C330.511 423.144 331.245 423.316 331.995 423.316C343.428 423.316 354.875 418.962 363.579 410.259C372.866 400.983 377.043 388.619 376.433 376.436C377.178 376.472 377.913 376.644 378.663 376.644C390.095 376.644 401.543 372.29 410.247 363.587C419.533 354.311 423.711 341.947 423.101 329.764C423.846 329.801 424.58 329.973 425.33 329.973C436.762 329.973 448.21 325.618 456.914 316.915C466.747 307.092 470.821 293.79 469.56 280.937L506.169 244.327C560.757 189.739 560.757 100.927 506.169 46.3273L500.987 41.16ZM94.6934 287.84C86.3756 279.522 86.3756 265.985 94.6934 257.668L109.803 242.548C109.813 242.538 109.813 242.538 109.824 242.538L133.157 219.204C141.475 210.887 155.012 210.887 163.329 219.204C171.646 227.522 171.647 241.059 163.329 249.376L124.865 287.84C116.547 296.158 103.016 296.158 94.6929 287.84L94.6934 287.84ZM141.36 334.507C133.042 326.189 133.042 312.652 141.36 304.335L179.824 265.871C188.142 257.553 201.679 257.553 209.996 265.871C218.313 274.188 218.314 287.725 209.996 296.043L171.532 334.507C163.214 342.824 149.683 342.824 141.36 334.507V334.507ZM188.027 381.173C179.709 372.856 179.709 359.319 188.027 351.001L226.491 312.537C234.808 304.22 248.345 304.22 256.663 312.537C264.98 320.855 264.98 334.392 256.663 342.709L218.199 381.173C209.881 389.491 196.349 389.491 188.027 381.173ZM234.693 427.84C226.376 419.522 226.376 405.985 234.693 397.668L273.157 359.204C281.475 350.886 295.012 350.886 303.329 359.204C311.647 367.522 311.647 381.059 303.329 389.376L264.865 427.84C256.548 436.158 243.016 436.158 234.693 427.84ZM300.412 440.413C294.777 446.048 286.772 447.762 279.6 445.767C280.173 445.251 280.814 444.882 281.36 444.33L305.85 419.84C307.73 426.965 305.98 434.851 300.412 440.414L300.412 440.413ZM440.412 300.413C432.094 308.731 418.557 308.731 410.24 300.413L386.907 277.08C382.344 272.517 374.969 272.517 370.412 277.08C365.85 281.642 365.85 289.017 370.412 293.574L393.745 316.908C402.063 325.225 402.063 338.762 393.745 347.08C385.428 355.397 371.891 355.397 363.573 347.08L340.24 323.746C335.678 319.184 328.303 319.184 323.745 323.746C319.183 328.309 319.183 335.684 323.745 340.241L347.079 363.574C355.396 371.892 355.396 385.429 347.079 393.746C341.256 399.569 332.891 401.225 325.532 398.892C336.975 381.569 335.074 357.944 319.829 342.704C310.553 333.428 298.189 329.251 286.017 329.86C286.621 317.678 282.449 305.314 273.163 296.038C263.887 286.762 251.523 282.584 239.351 283.194C239.955 271.012 235.783 258.647 226.497 249.371C217.221 240.095 204.857 235.918 192.685 236.528C193.289 224.345 189.117 211.981 179.831 202.705C162.424 185.289 134.076 185.289 116.669 202.705L78.2159 241.158C76.9815 242.393 76.0337 243.783 74.9867 245.127L57.684 227.824C12.1947 182.335 12.1947 108.308 57.684 62.8244L62.8507 57.6577C108.329 12.1791 182.367 12.1791 227.851 57.6577L257.168 86.9964L195.419 148.746C190.856 153.308 190.856 160.683 195.419 165.24L218.752 188.574C220.929 190.772 223.893 191.996 226.997 191.996H262.732C265.893 191.996 268.914 190.714 271.106 188.449L290.278 168.662H320.33C323.435 168.662 326.398 167.438 328.58 165.245L331.997 161.823L440.413 270.239C448.731 278.562 448.731 292.094 440.413 300.411L440.412 300.413ZM489.672 227.825L459.989 257.508C458.974 256.247 458.088 254.919 456.922 253.737L348.49 145.33L363.572 130.247C368.135 125.685 368.135 118.31 363.572 113.753C359.01 109.19 351.635 109.19 347.078 113.753L315.499 145.331H285.327C282.166 145.331 279.145 146.613 276.952 148.878L257.78 168.665H231.821L220.155 156.998L319.493 57.6597C364.972 12.1811 439.009 12.1811 484.493 57.6597L489.66 62.8264C535.155 108.326 535.155 182.337 489.67 227.826L489.672 227.825Z"
                fill="black"
              />
            </svg>
            Mayor transparencia con el cliente
          </li>
          <li className="benefits">
            <svg
              height="30"
              viewBox="0 0 725 725"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M673.32 99.3027L722.08 40.8134C724.908 37.4175 725.476 32.7822 723.663 28.8238C721.742 24.7508 717.783 22.2612 713.372 22.2612H560.305V11.6258C560.305 5.40176 555.216 0.313232 548.992 0.313232C542.768 0.313232 537.68 5.40176 537.68 11.6258V263.346H472.289C466.065 263.346 460.977 268.434 460.977 274.658V351.022H318.763C312.539 351.022 307.451 356.111 307.451 362.335V438.699H165.358C159.134 438.699 154.045 443.787 154.045 450.011V526.375H11.9517C5.72769 526.375 0.63916 531.464 0.63916 537.688V713.048C0.63916 719.272 5.72769 724.36 11.9517 724.36H625.685C631.909 724.36 636.998 719.272 636.998 713.048V274.661C636.998 268.437 631.909 263.349 625.685 263.349H560.294V176.349H713.361C717.772 176.349 721.731 173.859 723.658 169.786C725.58 165.828 724.903 161.073 722.075 157.797L673.32 99.3027ZM23.2668 548.996H154.048V701.729H23.2668V548.996ZM176.667 461.319H307.448V701.719H176.667V461.319ZM330.067 373.641H460.848V701.721H330.067V373.641ZM614.373 701.721H483.592V285.961H614.373V701.721ZM560.295 153.708V44.8747H689.264L649.895 92.052C646.39 96.2395 646.39 102.349 649.895 106.531L689.264 153.708H560.295Z"
                fill="black"
              />
            </svg>
            Mayor rentabilidad de tu negocio
          </li>
        </ul> */}
      </div>
    </div>
  );
};
