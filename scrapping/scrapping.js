import { launch } from 'puppeteer';

(async ()=> {
    const browser = await launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://wikipedia.org/wiki/Node.js');
   
    await page.mouse.wheel({deltaY: 369});

    const titulo = await page.evaluate(()=>{
     let h1 = document.querySelector('h1');
    return h1.innerText;
    });
    
    console.log(titulo);

    setTimeout( ()=> browser.close() , 13000)
})()