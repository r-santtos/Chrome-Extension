const interval = setInterval(() => {
    const header = document.querySelector("._3auIg");
    // Veficiação se o Header foi criado
    if (header) {
        clearInterval(interval)

        // Criando o TBN
        const button = document.createElement("button");
        button.innerHTML = "1.5x";
        button.classList.add("twoTimesButton");
        header.appendChild(button);

        // Função para acelerar o audio
        button.addEventListener("click", () => {
            // Verificando se class exite
            const classRealTow = document.querySelector(".twoTimesButton");
            const classRealNormal = document.querySelector(".normal");

            // Verificando se class twoTimesButton exite
            if (classRealTow) {
                const audios = document.querySelectorAll("audio");
                audios.forEach((audio) => {
                    audio.playbackRate = 1.5;
                });
                colorClassTwo();
            }

            // Verificando se class normal exite
            if (classRealNormal) {
                const audios = document.querySelectorAll("audio");
                audios.forEach((audio) => {
                    audio.playbackRate = 1;
                });
                colorClassNormal();
            }
        });

        // Função para mudar a cor e nome da class do btn twoTimesButton
        function colorClassTwo() {
            const btnColorClass = document.querySelector(".twoTimesButton");
            btnColorClass.style.color = "#c6c6c6";

            const changeClass = document.querySelector(".twoTimesButton");
            changeClass.classList.remove("twoTimesButton");
            changeClass.classList.add("normal");
        }

        // Função para mudar a cor e nome da class do btn normal
        function colorClassNormal() {
            const btnColorClass = document.querySelector(".normal");
            btnColorClass.style.color = "#0dc143";

            const changeClass = document.querySelector(".normal");
            changeClass.classList.remove("normal");
            changeClass.classList.add("twoTimesButton");
        }
    }
}, 1000);