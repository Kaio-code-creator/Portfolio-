const sectionsCards = document.getElementById('additionsCards');

export function getALLDlcList(response){
    for(let i = 0; i< response.results.length; i++) {

        //Criação dos Cartão

        const dlcCard = document.createElement('div');
        dlcCard.classList.add('dlcCard');
        sectionsCards.append(dlcCard);

        //Imagem
        const dlcImg = document.createElement('img');
        dlcImg.classList.add('dlcImg');
        dlcImg.src = response.results[i].background_image;
        dlcCard.append(dlcImg);

        //Exibir o Titulo

        const dlcTitle = document.createElement('h2');
        dlcCard.append(dlcTitle);
        dlcTitle.textContent = response.results[i].name;
    };
}