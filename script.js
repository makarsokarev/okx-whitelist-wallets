(function() {
  const wallets = [
    ""];

  const walletSelectors = [];
  const nameSelectors = [];

  for (let i = 2; i <= 21; i++ ) {
    walletSelectors.push(
      `#root > div > div > div.balance-bottom > div > form > div.addressListWrap > div > div > div > div.balance_okui-table-content > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > div.balance_okui.AddressInput_addressInputWrap__dzvve.balance_okui-form-item-md.balance_okui-form-item.balance_okui-form-item-no-label > div > div > div > div > div > input.balance_okui-input-input`
    );
  }

  for (let i = 2; i <= 21; i++ ) {
    nameSelectors.push(
      `#root > div > div > div.balance-bottom > div > form > div.addressListWrap > div > div > div > div.balance_okui-table-content > table > tbody > tr:nth-child(${i}) > td:nth-child(3) > div > div > div > div > div > div > input.balance_okui-input-input`
    );
  }

  const addButtonSelector =
    "#root > div > div > div.balance-bottom > div > form > button";

  function fillInput(input, value) {
    input.setAttribute('value', value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  async function addWallets() {
    for (let i = 0; i < wallets.length; i++) {
      console.log(`Добавление кошелька ${i + 1} из ${wallets.length}`);

      const addressInput = document.querySelector(walletSelectors[i]);
      const nameInput = document.querySelector(nameSelectors[i]);

      fillInput(addressInput, wallets[i]);
      await new Promise((resolve) => setTimeout(resolve, 300));

      let name = 36 + i
      fillInput(nameInput, name);
      await new Promise((resolve) => setTimeout(resolve, 400));


      if (i < wallets.length - 1) {
        const button = document.querySelector(addButtonSelector);
        button.click();
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }

    console.log('Завершено');
  }

  addWallets();
})();
