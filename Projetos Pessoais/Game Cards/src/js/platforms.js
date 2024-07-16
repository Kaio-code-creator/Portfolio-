const sectionCards = document.getElementById('platformsCards');

export function getPlatformList(response) {
    for(let i = 0; i <response.results.length; i ++) {

        //Criação dos Cartões
        const platformCard = document.createElement('div');
        platformCard.classList.add('platformCard');
        sectionCards.append(platformCard);

        //Exibir Descrição
        const platformName = document.createElement('h2');
        platformName.classList.add('platformName');
        platformCard.append(platformName);
        platformName.textContent = response.results[i].name;

        //Data de lançamento
        const dlcNote = document.createElement('p');
        dlcNote.classList.add('dlcNote');
        dlcNote.innerHTML = response.results[i].ratings[0].title.toUpperCase();
        dlcCard.append(dlcNote);
    };
}