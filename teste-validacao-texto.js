const { chromium } = require('playwright');
const { expect } = require('expect');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.google.com/'); // Acessa a página
    await page.fill('#APjFqb', "Playwright"); // Clica na barra de pesquisa e pesquisa pelo site do Playwright
    await page.click('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img'); // Clica na imagem para fechar a modal de pesquisa
    await page.click('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b') // Clica no botão de pesquisar pelo item escrito
    await page.click('div#search a') // Clica no primeiro link da pesquisa executada

    await page.waitForSelector('h1'); // Espera que o seletor H1 seja encontrado na página
    const pageTitle = await page.$eval('h1', element => element.textContent); // Extrai o texto do seletor H1

    expect(pageTitle).toEqual('Playwright enables reliable end-to-end testing for modern web apps.'); // Função da biblioteca Expect para verificar se o texto é o mesmo da variavel solicitada

    //  Estrutura de controle, mostra se o texto for verdadeiro mostra uma mensagem no terminal afirmando que está correto senão mostra que não é o mesmo texto
    if (pageTitle.includes('Playwright enables reliable end-to-end testing for modern web apps.')) {
        console.log("Teste passou! O título contém o texto esperado.");
    } else {
        console.error("Teste falhou! O título não contém o texto esperado.");
    }

    await browser.close(); // Fecha o browser após o teste
})();
