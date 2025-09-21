window.onload = () => {

    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);



    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const poemText = "En el jardin de la vida,\n" +
        "tu amistad es mi flor mas querida.\n" +
        "Risa y apoyo en cada estacion,\n" +
        "un lazo sincero, de corazon.\n\n" +
        "Gracias por estar, por ser tan real,\n" +
        "contigo los dias son especiales.\n" +
        "hoy quiero celebrar por nuestro dia,\n" +
        "FELIZ DIA LA AMISTAD!!! I LOVE YOU <3 <3 <3 \n" +
        "De parte de tu amiga que te quiere mucho ROSS";

    const poemElement = document.getElementById("poem-text");
    const root = document.documentElement;
    let charIndex = 0;
    const typingSpeed = 80;

    const stemHeights = {
        'flower--1': 70,
        'flower--2': 60,
        'flower--3': 55
    };

    function typeWriter() {
        if (charIndex < poemText.length) {

            poemElement.innerHTML += poemText.charAt(charIndex);
            charIndex++;

            const totalProgress = charIndex / poemText.length;
            const stemProgress = totalProgress;
            const leafProgress = Math.max(0, (totalProgress - 0.2) / 0.8);
            const flowerProgress = Math.max(0, (totalProgress - 0.5) / 0.5);

            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                const currentHeight = baseHeight * stemProgress;
                flower.querySelector('.flower__line').style.height = `${currentHeight}vmin`;
            });

            root.style.setProperty('--leaf-growth', leafProgress.toFixed(2));
            root.style.setProperty('--flower-growth', flowerProgress.toFixed(2));

            setTimeout(typeWriter, typingSpeed);
        } else {
            poemElement.classList.add("typing-done");

            root.style.setProperty('--leaf-growth', 1);
            root.style.setProperty('--flower-growth', 1);
            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                flower.querySelector('.flower__line').style.height = `${baseHeight}vmin`;
            });
        }
    }

    typeWriter();
    function createStars() {
        const night = document.querySelector('.night');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            night.appendChild(star);
        }
    }
    createStars();
};