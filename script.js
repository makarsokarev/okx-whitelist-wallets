(function() {
  const wallets = [
    ""];

  const names = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];

  const walletSelectors = [];
  const nameSelectors = [];

  for (let i = 3; i <= 98; i += 5) {
    walletSelectors.push(
    `#scroll-box > div > div > form > div:nth-child(6) > div > div > div > div > div:nth-child(${i}) > div.balance_okui-form-item-control > div > div > div > div > input.balance_okui-input-input`
    );
  }

  for (let i = 5; i <= 100; i += 5) {
    nameSelectors.push(
    `#scroll-box > div > div > form > div:nth-child(6) > div > div > div > div > div:nth-child(${i}) > div.balance_okui-form-item-control > div > div > div > div > input.balance_okui-input-input`
    );
  }

  const addButtonSelector =
    "#scroll-box > div > div > form > div:nth-child(6) > div > div > div > div > div.add-address-form-btn";

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

      if (names.length > 0) {
        fillInput(nameInput, names[i]);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }

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
